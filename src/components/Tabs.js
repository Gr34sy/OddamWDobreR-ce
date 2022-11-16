import React from "react";
import { useState } from "react";
import { Pagination} from "./Pagination";

export function Tabs(){
    const [toggleTabs, setToggleTabs] = useState('1');

    function handleTabsChange(e){
        e.preventDefault();
        setToggleTabs(e.target.getAttribute("data-id"))
    }

    return(
        <div className="tabs-container">
            <div className="tabs__menu">
                <div className={ toggleTabs === '1' ? "tabs tabs--active" : "tabs"} onClick={handleTabsChange} data-id="1">
                    Fundacjom
                </div>

                <div className={ toggleTabs === '2' ? "tabs tabs--active" : "tabs"} onClick={handleTabsChange} data-id="2">
                    Organizacjom pozarządowym
                </div>

                <div className={ toggleTabs === '3' ? "tabs tabs--active" : "tabs"} onClick={handleTabsChange} data-id="3">
                    Lokalnym zbiórkom
                </div>
            </div>

            <div className="tabs__contents">
                <div className={ toggleTabs === '1' ? "content content--active" : "content"}>
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

                    <Pagination/>
                </div>

                <div className={ toggleTabs === '2' ? "content content--active" : "content"}>
                    <div className="content__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </div>

                    <div className="content__details">

                        <div className="details__line">
                            <div className="details__leftt">
                                <h3 className="line__title">Organizacja “Lorem Ipsum 1”</h3>
                                <p className="line__description">Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                            </div>

                            <div className="details__right">
                                <p className="line__items">Egestas, sed, tempus</p>
                            </div>
                        </div>

                        <div className="details__line">
                            <div className="details__leftt">
                                <h3 className="line__title">Organizacja “Lorem Ipsum 2”</h3>
                                <p className="line__description">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                            </div>

                            <div className="details__right">
                                <p className="line__items">Mi, quis, hendrerit, dolor</p>
                            </div>
                        </div>

                        <div className="details__line">
                            <div className="details__leftt">
                                <h3 className="line__title">Organizacja “Lorem Ipsum 3”</h3>
                                <p className="line__description">Scelerisque in dictum non consectetur a erat nam.</p>
                            </div>

                            <div className="details__right">
                                <p className="line__items">Ut, aliquam, purus, sit, amet </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={ toggleTabs === '3' ? "content content--active" : "content"}>
                    <div className="content__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </div>

                    <div className="content__details">

                        <div className="details__line">
                            <div className="details__leftt">
                                <h3 className="line__title">Organizacja “Lorem Ipsum 1”</h3>
                                <p className="line__description">Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                            </div>

                            <div className="details__right">
                                <p className="line__items">Egestas, sed, tempus</p>
                            </div>
                        </div>

                        <div className="details__line">
                            <div className="details__leftt">
                                <h3 className="line__title">Organizacja “Lorem Ipsum 2”</h3>
                                <p className="line__description">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                            </div>

                            <div className="details__right">
                                <p className="line__items">Mi, quis, hendrerit, dolor</p>
                            </div>
                        </div>

                        <div className="details__line">
                            <div className="details__leftt">
                                <h3 className="line__title">Organizacja “Lorem Ipsum 3”</h3>
                                <p className="line__description">Scelerisque in dictum non consectetur a erat nam.</p>
                            </div>

                            <div className="details__right">
                                <p className="line__items">Ut, aliquam, purus, sit, amet </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}