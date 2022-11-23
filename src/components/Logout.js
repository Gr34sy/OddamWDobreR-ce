import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import decoration from "../assets/Decoration.svg";

export function Logout(){
    return(
        <>
        <Navbar addClass="navbar--logging"/>
        <section className="logout">
            <h2 className="section-title">
                Wylogowanie nastąpiło<br/>
                pomyślnie!
            </h2>
            <figure>
                <img src={decoration} alt="text decoration"/>
            </figure>
            <Link to="/home" className="button button--small button--logout">Strona główna</Link>
        </section>
        <Footer/>
        </>
    )
}