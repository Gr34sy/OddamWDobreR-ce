import React from "react";
import decoration from "../assets/Decoration.svg";
import RecycleIcon from "../assets/RecycleIcon.png";
import LensIcon from "../assets/LensIcon.png";
import BagIcon from "../assets/BagIcon.png";
import ShirtIcon from "../assets/ShirtIcon.png";

export function SimpleSteps(){
    return(
        <section className="simple-steps">
            <h2 className="steps__title">
                Wystarczą 4 proste kroki
            </h2>
            <figure>
                <img src={decoration} alt="text decoration"/>
            </figure>

            <div className="steps__box">
                <div className="step">
                    <figure>
                        <img src={ShirtIcon} alt="shirt icon"/>
                    </figure>

                    <h3 className="step__title">Wybierz rzeczy</h3>

                    <p className="step__description">
                        ubrania, zabawki, sprzęt i inne
                    </p>
                </div>

                <div className="step">
                    <figure>
                        <img src={BagIcon} alt="bag icon"/>
                    </figure>

                    <h3 className="step__title">Spakuj je</h3>

                    <p className="step__description">
                        skorzystaj z worków na śmieci
                    </p>
                </div>

                <div className="step">
                    <figure>
                        <img src={LensIcon} alt="lens icon"/>
                    </figure>

                    <h3 className="step__title">Zdecyduj komu chcesz pomóc</h3>

                    <p className="step__description">
                        wybierz zaufane miejsce
                    </p>
                </div>

                <div className="step">
                    <figure>
                        <img src={RecycleIcon} alt="recycling icon"/>
                    </figure>

                    <h3 className="step__title">Zamów kuriera</h3>

                    <p className="step__description">
                        kurier przyjedzie w dogodnym terminie
                    </p>
                </div>
            </div>

            <a href="#" className="button button--big">Oddaj  <br/> Rzeczy</a>
        </section>
    )
}