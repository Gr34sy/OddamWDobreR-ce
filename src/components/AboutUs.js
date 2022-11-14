import React from "react";
import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.png";

export function AboutUs(){
    return(
        <section className="about-us">
            <div className="about-us__left">
                <h2 className="section-title about-us__title">
                    O nas
                </h2>

                <figure>
                    <img src={decoration} alt="text decoration" />
                </figure>

                <p className="about-us__description">
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>

                <figure>
                    <img src={signature} alt="signature" className="signature-img"/>
                </figure>
            </div>

            <div className="about-us__right"></div>
        </section>
    )
}