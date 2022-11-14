import React from "react";
import { Hero } from "./Hero";
import {ThreeColumns} from "./ThreeColumns";
import { SimpleSteps } from "./SimpleSteps";

export function Home(){
    return(
        <>
        <Hero/>
        <ThreeColumns/>
        <SimpleSteps/>
        </>
    )
}