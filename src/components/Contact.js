import React from "react";
import {ContactForm } from "./ContactForm";
import decoration from "../assets/Decoration.svg";
import { Footer } from "./Footer";

export function Contact(){
    return(
        <section className="contact" id="contact">
            <div className="contact__container">
                <h2 className="section-title contact__title">Skontaktuj się z nami</h2>

                <figure>
                    <img src={decoration} alt="text decoration"/>
                </figure>

                <ContactForm/>
            </div>
            <Footer/>
        </section>
    )
}