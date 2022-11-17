import React from "react";
import facebookIcon from '../assets/FacebookIcon.png';
import instagramIcon from '../assets/InstagramIcon.png';
import phoneIcon from '../assets/PhoneIcon.png';
import envelopeIcon from '../assets/EnvelopeIcon.png';

export function Footer(){
    return(
        <>
        <footer className="footer">
            <div className="footer__description">
                Copyright by Coders Lab &copy;
            </div>

            <div className="footer__socials">
                <a href="#">
                    <img src={facebookIcon} alt="facebook icon"/>
                </a>

                <a href="#">
                    <img src={instagramIcon} alt="instagram icon"/>
                </a>
            </div>
        </footer>

        <footer className="footer--mobile">
            <p>
                Skontaktuj się z nami <a href="tel:555-555-5555"><img src={phoneIcon} alt="phone icon"/></a> <a href="mailto:coderslab@lms.pl"><img src={envelopeIcon} alt="phone icon"/></a>
            </p>

            <div className="mobile-footer__description">
                <p>Regulamin</p>
                <p>Polityka Prywatności</p>
                <p>Instrukcja jak spakować rzeczy do oddania</p>
            </div>
        </footer>
        </>
    )
}