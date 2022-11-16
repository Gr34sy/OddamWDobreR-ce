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

            <div className="help__container">
                <div className="help__col">
                    <div className="col__circle">
                        Fundacjom
                    </div>

                    <p className="col__description">
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </p>
                </div>

                <div className="help__col">
                    <div className="col__circle">
                        ORGANIZACJOM POZARZĄDOWYM
                    </div>

                    <p className="col__description">
                        Pomagamy również wszelkim organizacjom pozarządowym i charytatywnym, które nie są Fundacjami. Są to nasi Partnerzy, który zrobią dobry pożytek z rzeczy, które do nich trafią.
                    </p>
                </div>

                <div className="help__col">
                    <div className="col__circle">
                        Lokalnym zbiórkom
                    </div>

                    <p className="col__description">
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </p>
                </div>
            </div>
        </section>
    )
}