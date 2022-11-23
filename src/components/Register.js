import React, { useState } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

import decoration from '../assets/Decoration.svg';

export function Register(){
    // stany inputów errorów i sukcesu
    const [inputValue, setInputValue] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    });

    const INITIAL_ERRORS = {
        email: '',
        password: '',
        repeatPassword: ''
    }
    const [errors, setErrors] = useState(INITIAL_ERRORS)

    const [registerSuccess, setRegisterSuccess] = useState(false)

    //obsługa inputów
    function handleChange(e){
        e.preventDefault();
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
        setErrors(INITIAL_ERRORS)
    }

    //walidacja
    function validation(){
        const tab = [0,0,0];
        if(inputValue.email.includes('@')){
            tab[0] = true;
        }
        if(inputValue.password>=6){
            tab[1] = true;
        }
        if(inputValue.password===inputValue.repeatPassword){
            tab[2] = true;
        }
        if (tab.includes(0)) {
            setErrors({
                email: tab[0] ? '' : "Niepoprawny email",
                password: tab[1] ? '' : "Niepoprawne hasło",
                repeatPassword: tab[2] ? '' : "Hasłą nie są identyczne"
            })
            return false;
        } 
        else {
            return true;
        }
    }

    //obsługa formularza
    function handleRegister(e){
        e.preventDefault();

        if(validation()){
            setRegisterSuccess(true);
        }
    }

    return(
        <>
        <Navbar addClass="navbar--logging"/>
        <div className="logging-section">
            <h2 className="section-title">
                Załóż konto
            </h2>
            { registerSuccess && <p className="logging__success">Udało się stworzyć konto!</p>}
            <figure>
                <img src={decoration} alt="text decoration"/>
            </figure>

            <form className="logging__form" onSubmit={handleRegister} method="post">
                <label htmlFor="email" className="logging__label">
                    Email
                    <input type="text" className="logging__input" name="email" value={inputValue.email} onChange={handleChange}/>
                    {errors.email && <p className="logging__error">{errors.email}</p>}
                </label>

                <label htmlFor="password" className="logging__label">
                    Hasło
                    <input type="password" className="logging__input" name="password" value={inputValue.password} onChange={handleChange}/>
                    {errors.password && <p className="logging__error">{errors.password}</p>}
                </label>

                <label htmlFor="repeatPassword" className="logging__label">
                    Powtórz Hasło
                    <input type="password" className="logging__input" name="repeatPassword" value={inputValue.repeatPassword} onChange={handleChange}/>
                    {errors.repeatPassword && <p className="logging__error">{errors.repeatPassword}</p>}
                </label>

                <div className="logging__buttons">
                    <Link to="/login" className="button button--small">Zaloguj się</Link>
                    <input type="submit" className="button button--small" value="Załóż konto"/>
                </div>
            </form>
        </div>
        <Footer/>
        </>
       
    )
}