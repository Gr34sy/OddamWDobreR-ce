import React from "react";
import facebookIcon from '../assets/FacebookIcon.png';
import instagramIcon from '../assets/InstagramIcon.png';

export function Footer(){
    return(
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
    )
}