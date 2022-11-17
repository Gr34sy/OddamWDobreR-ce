import React from "react";

export function ContactForm(){
    return(
        <form className="contact-form">
            <div className="form__small-inputs">
                <label htmlFor="name" className="form__label">
                    Wpisz swoje imię
                    <input type="text" name="name" placeholder="Krzysztof" className="form__input"/>
                </label>

                <label htmlFor="email" className="form__label">
                    Wpisz swój email
                    <input type="text" name="email" placeholder="abc@xyz.pl" className="form__input"/>
                </label>
            </div>

            <label htmlFor="message" className="label--message">
                Wpisz swoją wiadomość
                <textarea rows="5" name="message" 
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                className="form__input input--message"/>
            </label>

            <input type="submit" className="button button--middle button--form" value="Wyślij"/>
        </form>
    )
}