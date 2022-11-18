import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

import decoration from '../assets/Decoration.svg';

export function Register(){
    return(
        <>
        <Navbar addClass="navbar--logging"/>
        <div className="logging-section">
            <h2 className="section-title">
                Załóż konto
            </h2>
            <figure>
                <img src={decoration} alt="text decoration"/>
            </figure>

            <form className="logging__form">
                <label htmlFor="email" className="logging__label">
                    Email
                    <input type="text" className="logging__input" name="email"/>
                </label>

                <label htmlFor="password" className="logging__label">
                    Hasło
                    <input type="password" className="logging__input" name="password"/>
                </label>

                <label htmlFor="repeat-password" className="logging__label">
                    Powtórz Hasło
                    <input type="password" className="logging__input" name="repeat-password"/>
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