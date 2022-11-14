import React from "react";

export function Tabs(){
    return(
        <div className="tabs-container">
            <div className="tabs__menu">
                <div className="tabs tabs--active">
                    Fundacjom
                </div>

                <div className="tabs">
                    Organizacjom pozarządowym
                </div>

                <div className="tabs">
                    Lokalnym zbiórkom
                </div>
            </div>

            <div className="tabs__contents">
                <div className="content content--active">
                    <div className="content__description">
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </div>

                    <div className="content__details">
                        <div className="details__line">
                            <div className="details__leftt">
                                <h3 className="line__title">Fundacja “Dbam o Zdrowie”</h3>
                                <p className="line__description">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                            </div>

                            <div className="details__right">
                                <p className="line__items">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                            </div>
                        </div>

                        <div className="details__line">
                            <div className="details__leftt">
                                <h3 className="line__title">Fundacja “Dla dzieci”</h3>
                                <p className="line__description">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                            </div>

                            <div className="details__right">
                                <p className="line__items">ubrania, meble, zabawki</p>
                            </div>
                        </div>

                        <div className="details__line">
                            <div className="details__leftt">
                                <h3 className="line__title">Fundacja “Bez domu”</h3>
                                <p className="line__description">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                            </div>

                            <div className="details__right">
                                <p className="line__items">ubrania, jedzenie, ciepłe koce</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}