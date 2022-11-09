import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Hero(){
    return(
        <>
        <main className="hero__main">
            <div className="main__left">
                <figure>
                    <img src="../assets/HeroImage.png" alt="box with things"/>
                </figure>
            </div>

            <div className="main__right">
                <Navbar/>
            </div>
        </main>
        <Footer/>
        </>
    )
}