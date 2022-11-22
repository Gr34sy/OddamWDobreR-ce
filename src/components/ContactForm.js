import React, { useEffect, useState } from "react";

export function ContactForm(){
    const [inputValue, setInputValue] = useState(
    { 
        name:'',
        email: '',
        message: ''
    });

    const [data, setData] = useState({status: null});

    //statusy errorów i sukcesu
    const INITIAL_ERRORS = {
        showError: false,
        errorName: '',
        errorEmail: '',
        errorMessage: ''
    }

    const [errors, setErrors] = useState(INITIAL_ERRORS);
    const [success, setSuccess] = useState(false);

    //zmiana statusu wartości poszczególnych inputów
    function handleChange(e){
        e.preventDefault();
        setInputValue({
            ...inputValue, 
            [e.target.name]: e.target.value
        });

        setSuccess(false);
        setErrors(INITIAL_ERRORS);
    }

    // przesłanie formularza
    function handleSubmit(e){
        e.preventDefault();
        const data = inputValue;
       
        
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        .then((response)=>  response.json())
        .then((data) => {
            setData(data);

            console.log('Data:', data);
        }) 
    }

    //zmiana statusu poszczególnych errorów
    useEffect(()=>{
        if(data.status==='success'){
            setSuccess('Wiadomość została wysłana! Wkrótce się skontaktujemy.')
        }

        if(data.status==='error'){
            const dataErrors = [];
            setErrors({
                ...errors, showError: true
            });

            data.errors.forEach(element => {
                dataErrors.push(element.param)
            });


            if(dataErrors.includes('name')){
                setErrors({
                    ...errors, errorName: 'Podane imię jest nieprawidłowe!'
                })
            }
            if(dataErrors.includes('email')){
                setErrors({
                    ...errors, errorEmail: 'Podany email jest nieprawidłowy!'
                })
            }
            if(dataErrors.includes('message')){
                setErrors({
                    ...errors, errorMessage: 'Wiadomość musi mieć conajmniej 120 znaków!'
                })
            }
        }
       

    },[data]);

    return(
        <>
        { success && <p className="form__success">{success}</p>}

        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form__small-inputs">
                <label htmlFor="name" className="form__label">
                    Wpisz swoje imię
                    <input type="text" name="name" placeholder="Krzysztof" className="form__input" value={inputValue.name} onChange={handleChange}/>
                    {errors.showError && errors.errorName && <p className="form__error">{errors.errorName}</p>}
                </label>

                <label htmlFor="email" className="form__label">
                    Wpisz swój email
                    <input type="text" name="email" placeholder="abc@xyz.pl" className="form__input" value={inputValue.email} onChange={handleChange}/>
                    {errors.showError && errors.errorEmail && <p className="form__error">{errors.errorEmail}</p>}
                </label>
            </div>

            <label htmlFor="message" className="label--message">
                Wpisz swoją wiadomość
                <textarea rows="5" name="message" 
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                className="form__input input--message"
                value={inputValue.message}
                onChange={handleChange}/>
                {errors.showError && errors.errorMessage && <p className="form__error">{errors.errorMessage}</p>}
            </label>

            <input type="submit" className="button button--middle button--form" value="Wyślij"/>
        </form>
        </>
    )
}