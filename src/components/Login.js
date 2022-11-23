import React, {useState} from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

import decoration from '../assets/Decoration.svg';


export function Login(){
    //staty inputów i errorów
    const [inputValue, setInputValue] = useState({
        email: '',
        password: ''
    })

    const INITIAL_ERRORS = {
        errorEmail: '',
        errorPassword: ''
    }
    const [errors, setErrors] = useState(INITIAL_ERRORS);

    const [loginSuccess,setLoginSuccess] = useState(false);

    function handleChange(e){
        e.preventDefault();
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        })

        setErrors(INITIAL_ERRORS)
    }

    function validation(){
        const tab = [0,0]
        if(inputValue.email.includes('@')){
            tab[0] = true;
        }
        if(inputValue.password.length>6){
            tab[1] = true;
        }
        if(tab.includes(0)){
            setErrors(
            {
                errorEmail: tab[0] ? '' : 'Niepoprawny email!',
                errorPassword: tab[1] ? '' : 'Niepoprawne hasło!',
            }) 
            return false;
        }else{
            return true;
        }
    }

    function handleLogin(e){
        e.preventDefault();

        if(validation()){
            setLoginSuccess(true)
        }
    }

    return(
        <>
        <Navbar addClass="navbar--logging"/>
        <div className="logging-section">
            <h2 className="section-title">
                Zaloguj się
            </h2>
            { loginSuccess && <p className="logging__success">Udało ci się zalogować!</p>}
            <figure>
                <img src={decoration} alt="text decoration"/>
            </figure>
            
            <form className="logging__form" onSubmit={handleLogin} method="post">
                <div className="logging__labels">
                    <label htmlFor="email" className="logging__label">
                        Email
                        <input type="text" className="logging__input" name="email" value={inputValue.email} onChange={handleChange}/>
                        {errors.errorEmail && <p className="logging__error">{errors.errorEmail}</p>}
                    </label>

                    <label htmlFor="password" className="logging__label">
                        Hasło
                        <input type="password" className="logging__input" name="password" value={inputValue.password} onChange={handleChange}/>
                        {errors.errorPassword && <p className="logging__error">{errors.errorPassword}</p>}
                    </label>
                </div>

                <div className="logging__buttons">
                    <Link to="/register" className="button button--small">Załóż konto</Link>
                    <input type="submit" className="button button--small" value="Zaloguj się"/>
                </div>
            </form>
        </div>
        <Footer/>
        </>
       
    )
}