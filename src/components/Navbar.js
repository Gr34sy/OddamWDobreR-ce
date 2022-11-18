import React from "react";
import { NavLink } from "react-router-dom";
import navMobileIcon from "../assets/navMobileIcon.png";

export function Navbar({addClass}){
    const navbarClasses = `navbar ${addClass}`
    return(
        <nav className={navbarClasses}>
            {/* mobile */}
            <figure className="mobileIcon__figure">
                <img src={navMobileIcon} alt="shirt icon" className="navMobileIcon"/>
            </figure>
            

            <div className="logging-buttons">
                <NavLink to="/login" className="log__button">Zaloguj</NavLink>
                <NavLink to="/register" className="log__button">Załóż konto</NavLink>
            </div>
            <ul className="navlist">
                <li> <NavLink to="/home">Start</NavLink></li>
                <li><a href="#">O co chodzi?</a></li>
                <li><a href="#">O nas</a></li>
                <li><a href="#">Fundacja i organizacje</a></li>
                <li><a href="#">Kontakt</a></li>
            </ul>
        </nav>
    )
}