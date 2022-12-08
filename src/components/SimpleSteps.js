import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";

import decoration from "../assets/Decoration.svg";
import recycleIcon from "../assets/RecycleIcon.png";
import lensIcon from "../assets/LensIcon.png";
import bagIcon from "../assets/BagIcon.png";
import shirtIcon from "../assets/ShirtIcon.png";

import handIcon from "../assets/HandIcon.png";
import boxIcon from "../assets/BoxIcon.png";
import clickIcon from "../assets/ClickIcon.png";
import calendarIcon from "../assets/CalendarIcon.png";

export function SimpleSteps(){
    const {currentUser} = useContext(AuthContext);

    return(
        <>
        <section className="simple-steps">
            <h2 className="section-title steps__title">
                Wystarczą 4 proste kroki
            </h2>
            <figure>
                <img src={decoration} alt="text decoration"/>
            </figure>

            <div className="steps__box">
                <div className="step">
                    <figure>
                        <img src={shirtIcon} alt="shirt icon"/>
                    </figure>

                    <h3 className="step__title">Wybierz rzeczy</h3>

                    <p className="step__description">
                        ubrania, zabawki, sprzęt i inne
                    </p>
                </div>

                <div className="step">
                    <figure>
                        <img src={bagIcon} alt="bag icon"/>
                    </figure>

                    <h3 className="step__title">Spakuj je</h3>

                    <p className="step__description">
                        skorzystaj z worków na śmieci
                    </p>
                </div>

                <div className="step">
                    <figure>
                        <img src={lensIcon} alt="lens icon"/>
                    </figure>

                    <h3 className="step__title">Zdecyduj komu chcesz pomóc</h3>

                    <p className="step__description">
                        wybierz zaufane miejsce
                    </p>
                </div>

                <div className="step">
                    <figure>
                        <img src={recycleIcon} alt="recycling icon"/>
                    </figure>

                    <h3 className="step__title">Zamów kuriera</h3>

                    <p className="step__description">
                        kurier przyjedzie w dogodnym terminie
                    </p>
                </div>
            </div>

            <Link to={currentUser!=='' ? "/give" : "/login"} className="button button--big">Oddaj<br/>Rzeczy</Link>
        </section>
         
        {/* mobile view */}
        <section className="simple-steps--mobile">
            <h2 className="steps__title--mobile">Wystarczą 4 proste kroki</h2>

            <div className="steps__box--mobile">
                <div className="step--mobile">
                    <figure>
                        <img src={handIcon} alt="hand icon" />
                    </figure>

                    <p className="step__description--mobile">
                        Wybierz rzeczy do oddania
                    </p>
                </div>

                <div className="step--mobile">
                    <figure>
                        <img src={boxIcon} alt="box icon" />
                    </figure>

                    <p className="step__description--mobile">
                        Spakuje je
                    </p>
                </div>

                <div className="step--mobile">
                    <figure>
                        <img src={clickIcon} alt="click icon" />
                    </figure>

                    <p className="step__description--mobile">
                        Zdecyduj komu chcesz pomóc
                    </p>
                </div>

                <div className="step--mobile">
                    <figure>
                        <img src={calendarIcon} alt="calendar icon" />
                    </figure>

                    <p className="step__description--mobile">
                        Zamów kuriera w dogodnym terminie
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}