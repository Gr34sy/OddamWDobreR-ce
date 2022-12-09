import React from "react";
import { Navbar } from "./Navbar";
import decoration from "../assets/Decoration.svg"

export function GiveHero(){
    return(
        <main className="hero__main hero--give">
            <div className="main__left  left--give">

            </div>

            <div className="main__right">
                <Navbar addClass="navbar--give" />

                <div className="hero__description give-hero__title">
                    <h1 className="hero__title">Oddaj rzeczy, których już nie chcesz<br/>
                        POTRZEBUJĄCYM
                    </h1>
                    
                    <figure>
                        <img src={decoration} alt="text decoration" className="text-decoration"/>
                    </figure>
                </div>

                <p className="give-hero__description">
                    Wystarczą 4 proste kroki:
                </p>

                <div className="give-hero__boxes">
                    <div className="give-hero__box">
                        <p>1</p>
                        <p>Wybierz</p>
                        <p>rzeczy</p>
                    </div>

                    <div className="give-hero__box">
                        <p>2</p>
                        <p>Spakuj je</p>
                        <p>w worki</p>
                    </div>

                    <div className="give-hero__box">
                        <p>3</p>
                        <p>Wybierz</p>
                        <p>fundację</p>
                    </div>

                    <div className="give-hero__box">
                        <p>4</p>
                        <p>Zamów</p>
                        <p>kuriera</p>
                    </div>
                </div>

            </div>
        </main>
    )
}