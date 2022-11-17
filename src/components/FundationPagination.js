import React from "react";
import { useState } from "react";

export function FundationPagination(){

    const [page,setPage] = useState('1');

    function handlePageChange(e){
        e.preventDefault();
        setPage(e.target.getAttribute('data-page'));
    }

    return(
        <>
        <div className={page  === '1' ? "page page--active" : "page"}>
            <div className="content__description">
                 W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </div>

            <div className="content__details">
                <div className="details__line">
                    <div className="details__left">
                        <h3 className="line__title">Fundacja “Dbam o Zdrowie”</h3>
                        <p className="line__description">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    </div>

                    <div className="details__right">
                         <p className="line__items">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </div>
                </div>

                <div className="details__line">
                    <div className="details__left">
                        <h3 className="line__title">Fundacja “Dla dzieci”</h3>
                        <p className="line__description">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    </div>

                    <div className="details__right">
                        <p className="line__items">ubrania, meble, zabawki</p>
                    </div>
                </div>

                <div className="details__line">
                    <div className="details__left">
                        <h3 className="line__title">Fundacja “Bez domu”</h3>
                        <p className="line__description">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                    </div>

                    <div className="details__right">
                        <p className="line__items">ubrania, jedzenie, ciepłe koce</p>
                    </div>
                </div>
            </div>
        </div>

        <div className={page  === '2' ? "page page--active" : "page"}>
            <div className="content__description">
            nturies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
            </div>

            <div className="content__details">
                <div className="details__line">
                    <div className="details__left">
                        <h3 className="line__title">Lorem Ipsum 1</h3>
                        <p className="line__description">Cel i misja: nasza tradycja.</p>
                    </div>

                    <div className="details__right">
                        <p className="line__items">amet amet amet</p>
                    </div>
                </div>

                <div className="details__line">
                    <div className="details__left">
                        <h3 className="line__title">Lorem Ipsum 2</h3>
                        <p className="line__description">pulvinar bakalak</p>
                    </div>

                    <div className="details__right">
                        <p className="line__items">amet amet amet</p>
                    </div>
                </div>

                <div className="details__line">
                    <div className="details__left">
                        <h3 className="line__title">Lorem Ipsum 3</h3>
                        <p className="line__description">pulvinar bakalak</p>
                    </div>

                    <div className="details__right">
                        <p className="line__items">amet amet amet</p>
                    </div>
                </div>
            </div>
        </div>

        <div className={page  === '3' ? "page page--active" : "page"}>
            <div className="content__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum tortor erat, et facilisis elit rutrum ac. Etiam sit amet metus ornare, feugiat sapien non, posuere dui. Nullam pulvinar porta quam. Etiam sit amet dapibus lacus, in vulputate 
            </div>

            <div className="content__details">
                <div className="details__line">
                    <div className="details__left">
                        <h3 className="line__title">Lorem Ipsum 4</h3>
                        <p className="line__description">Cel i misja: nasza tradycja.</p>
                    </div>

                    <div className="details__right">
                        <p className="line__items">amet amet amet</p>
                    </div>
                </div>

                <div className="details__line">
                    <div className="details__left">
                        <h3 className="line__title">Lorem Ipsum 5</h3>
                        <p className="line__description">pulvinar bakalak</p>
                    </div>

                    <div className="details__right">
                        <p className="line__items">amet amet amet</p>
                    </div>
                </div>

                <div className="details__line">
                    <div className="details__left">
                        <h3 className="line__title">Lorem Ipsum 6</h3>
                        <p className="line__description">pulvinar bakalak</p>
                    </div>

                    <div className="details__right">
                        <p className="line__items">amet amet amet</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Pagination buttons */}
        <div className="pagination-box">
            <div data-page="1" className={page  === '1' ? "page-number page-number--active" : "page-number"} onClick={handlePageChange}>
                1
            </div>

            <div  data-page="2" className={page  === '2' ? "page-number page-number--active" : "page-number"} onClick={handlePageChange}>
                2
            </div>

            <div  data-page="3" className={page  === '3' ? "page-number page-number--active" : "page-number"} onClick={handlePageChange}>
                3
            </div>
        </div>
        </>
    )
}