import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import heroImg from "../assets/HeroImage.png"

export function Hero(){
    return(
        <>
        <main className="hero__main">
            <figure className="main__left">
                <img src={heroImg} alt="box with things" className="hero-pic"/>
            </figure>

            <div className="main__right">
                <Navbar/>
            </div>
        </main>
        <Footer/>
        </>
    )
}