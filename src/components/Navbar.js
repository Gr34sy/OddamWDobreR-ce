import React from "react";
import { NavLink } from "react-router-dom";
import navMobileIcon from "../assets/navMobileIcon.png";

export function Navbar(){
    return(
        <nav className="navbar">
            {/* mobile */}
            <figure className="mobileIcon__figure">
                <img src={navMobileIcon} alt="shirt icon" className="navMobileIcon"/>
            </figure>
            

            <div className="logging-buttons">
                <NavLink to="/" className="log__button">Zaloguj</NavLink>
                <NavLink to="/" className="log__button">Załóż konto</NavLink>
            </div>
            <ul className="navlist">
                <li><a href="#">Start</a></li>
                <li><a href="#">O co chodzi?</a></li>
                <li><a href="#">O nas</a></li>
                <li><a href="#">Fundacja i organizacje</a></li>
                <li><a href="#">Kontakt</a></li>
            </ul>
        </nav>
    )
}