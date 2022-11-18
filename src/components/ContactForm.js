import React from "react";
import { useState } from "react";

export function ContactForm(){
    const [inputValue, setInputValue] = useState(
    { 
        name:'',
        email: '',
        message: ''
    });

    const [errorState, setErrorState] = useState('');

    
    function handleChange(e){
        e.preventDefault();
        setInputValue({
            ...inputValue, 
            [e.target.name]: e.target.value
        });
        setErrorState('');
    }

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
            console.log('Data:', data);
        }) 
    }

    return(
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form__small-inputs">
                <label htmlFor="name" className="form__label">
                    Wpisz swoje imię
                    <input type="text" name="name" placeholder="Krzysztof" className="form__input" value={inputValue.name} onChange={handleChange}/>
                    <p className="form__error">{errorState.name}</p>
                </label>

                <label htmlFor="email" className="form__label">
                    Wpisz swój email
                    <input type="text" name="email" placeholder="abc@xyz.pl" className="form__input" value={inputValue.email} onChange={handleChange}/>
                    <p className="form__error">{errorState.email}</p>
                </label>
            </div>

            <label htmlFor="message" className="label--message">
                Wpisz swoją wiadomość
                <textarea rows="5" name="message" 
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                className="form__input input--message"
                value={inputValue.message}
                onChange={handleChange}/>
                <p className="form__error">{errorState.message}</p>
            </label>

            <input type="submit" className="button button--middle button--form" value="Wyślij"/>
        </form>
    )
}