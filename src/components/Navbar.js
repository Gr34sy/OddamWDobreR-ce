import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import navMobileIcon from "../assets/navMobileIcon.png";
import { AuthContext } from "./Auth";
import app from "../base";
import { getAuth,  signOut } from "firebase/auth";

export function Navbar({addClass}){
    const {currentUser} = useContext(AuthContext);

    const navbarClasses = `navbar ${addClass}`

    return(
        <nav className={navbarClasses}>
            {/* mobile */}
            <figure className="mobileIcon__figure">
                <img src={navMobileIcon} alt="shirt icon" className="navMobileIcon"/>
            </figure>
            

            <div className="logging-buttons">
                {currentUser==='' && <NavLink to="/login" className="log__button">Zaloguj</NavLink>}
                {currentUser==='' && <NavLink to="/register" className="log__button">Załóż konto</NavLink>}

                {currentUser && 
                <div className="logged-in__div">
                    <p><span>Cześć</span>{currentUser}<span>!</span></p>
                    <NavLink to="/give" className="log__button" >Oddaj rzeczy</NavLink>
                    <NavLink to="/logout" className="log__button" 
                    onClick={(e)=>{
                    e.preventDefault();
                    const auth = getAuth(app);
                    signOut(auth)
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.error(errorCode, errorMessage);
                    });
                }}
                >Wyloguj</NavLink>
                </div>
                }
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