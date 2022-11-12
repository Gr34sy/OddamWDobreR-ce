import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import decoration from "../assets/Decoration.svg";

export function Hero(){
    return(
        <>
        <main className="hero__main">
            <div className="main__left">
            </div>

            <div className="main__right">
                <Navbar/>

                <div className="hero__description">
                    <h1 className="hero__title">Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <figure>
                        <img src={decoration} alt="text decoration" className="text-decoration"/>
                    </figure>
                    <div className="hero__button-box">
                        <a href="#" className="button button--big">Oddaj  <br/> Rzeczy</a>
                        <a href="#" className="button button--big">Zorganizuj  <br/> zbiórkę</a>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    )
}