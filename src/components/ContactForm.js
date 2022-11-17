import React from "react";

export function ContactForm(){
    return(
        <form className="contact-form">
            <div className="form__small-inputs">
                <label for="name">
                    Wpisz swoje imię
                    <input type="text" name="name" placeholder="Krzysztof" className="form__input"/>
                </label>

                <label for="email">
                    Wpisz swój email
                    <input type="text" name="email" placeholder="abc@xyz.pl" className="form__input"/>
                </label>
            </div>

            <input type="text" />

            <input type="submit" className="button button--middle" value="Wyślij"/>
        </form>
    )
}