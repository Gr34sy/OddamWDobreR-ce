import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import navMobileIcon from "../assets/navMobileIcon.png";
import { AuthContext } from "./Auth";
import app from "../base";
import { getAuth,  signOut } from "firebase/auth";
import { Link, animateScroll as scroll } from "react-scroll";

export function Navbar({addClass}){
    const {currentUser} = useContext(AuthContext);

    const navbarClasses = `navbar ${addClass}`

    return(
        <nav className={navbarClasses}>
            {/* mobile */}
            <figure className="mobileIcon__figure">
                <NavLink to="/home"><img src={navMobileIcon} alt="shirt icon" className="navMobileIcon"/></NavLink>
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
                <NavLink to="/home" className="li-first"><li>Start</li></NavLink>
                <Link to="home/three-columns" smooth={true} duration={1000} offset={-50}><li className="li">O co chodzi?</li></Link>
                <Link to="about-us" smooth={true} duration={1000} offset={-50}><li className="li">O nas</li></Link>
                <Link to="help" smooth={true} duration={1000} offset={-50}><li className="li">Fundacja i organizacje</li></Link>
                <Link to="contact" smooth={true} duration={1000} offset={-50}><li className="li">Kontakt</li></Link>
            </ul>
        </nav>
    )
}