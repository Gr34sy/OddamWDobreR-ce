import React from "react";
import { Hero } from "./Hero";
import {ThreeColumns} from "./ThreeColumns";
import { SimpleSteps } from "./SimpleSteps";
import { AboutUs } from "./AboutUs";
import { Help } from "./Help";
import { Contact } from "./Contact";

export function Home(){
    return(
        <>
        <Hero/>
        <ThreeColumns/>
        <SimpleSteps/>
        <AboutUs/>
        <Help/>
        <Contact/>
        </>
    )
}