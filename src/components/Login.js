import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

import decoration from '../assets/Decoration.svg';


export function Login(){
    return(
        <>
        <Navbar addClass="navbar--logging"/>
        <div className="logging-section">
            <h2 className="section-title">
                Zaloguj się
            </h2>
            <figure>
                <img src={decoration} alt="text decoration"/>
            </figure>
            
            <form className="logging__form">
                <div className="logging__labels">
                    <label htmlFor="email" className="logging__label">
                        Email
                        <input type="text" className="logging__input" name="email"/>
                    </label>

                    <label htmlFor="password" className="logging__label">
                        Hasło
                        <input type="password" className="logging__input" name="password"/>
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