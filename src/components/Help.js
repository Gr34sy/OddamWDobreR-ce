import React from "react";
import { Tabs } from "./Tabs";
import decoration from "../assets/Decoration.svg";

export function Help(){
    return(
        <section className="help">
            <h2 className="section-title help__title">Komu pomagamy?</h2>
            <figure className="help__figure">
                <img src={decoration} alt="text decoration" />
            </figure>
            <Tabs/>
        </section>
    )
}