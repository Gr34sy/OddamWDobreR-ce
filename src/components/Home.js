import React from "react";
import { Hero } from "./Hero";
import {ThreeColumns} from "./ThreeColumns";
import { SimpleSteps } from "./SimpleSteps";
import { AboutUs } from "./AboutUs";

export function Home(){
    return(
        <>
        <Hero/>
        <ThreeColumns/>
        <SimpleSteps/>
        <AboutUs/>
        </>
    )
}