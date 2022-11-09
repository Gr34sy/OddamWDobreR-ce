import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Hero(){
    return(
        <>
        <main className="hero__main">
            <figure className="main__left">
                
            </figure>

            <div className="main__right">
                <Navbar/>
            </div>
        </main>
        <Footer/>
        </>
    )
}