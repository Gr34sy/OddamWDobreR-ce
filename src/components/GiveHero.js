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

                <div className="hero__description">
                    <h1 className="hero__title">Oddaj rzeczy, których już nie chcesz<br/>
                        POTRZEBUJĄCYM
                    </h1>
                    
                    <figure>
                        <img src={decoration} alt="text decoration" className="text-decoration"/>
                    </figure>
                </div>

                <div className="hero__description--mobile">
                    <h1 className="hero__title--mobile">
                        Oddaj rzeczy, których już nie chcesz<br/>
                        POTRZEBUJĄCYM
                    </h1>

                    <div className="hero__stats--mobile">
                        <div className="hero__stat">
                            <div>
                                0
                            </div>
                            <p>
                                wspartych organizacji
                            </p>
                        </div>

                        <div className="hero__stat">
                            <div>
                                0
                            </div>
                            <p>
                                oddanych worków
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}