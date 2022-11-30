import React from "react";
import { Contact } from "./Contact";
import { Stepper } from "./Stepper";
import {GiveHero} from "./GiveHero";

export function Give(){
    return(
        <>
        <GiveHero/>
        <Stepper/>
        <Contact/>
        </>
    )
}