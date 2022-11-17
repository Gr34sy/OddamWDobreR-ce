import React from "react";
import { useState } from "react";

export function OrganizationPagination(){

    const [page,setPage] = useState('1');

    function handlePageChange(e){
        e.preventDefault();
        setPage(e.target.getAttribute('data-page'));
    }

    return(
        <>
        <div className={page  === '1' ? "page page--active" : "page"}>
            <div className="content__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </div>

            <div className="content__details">
            <div className="details__line">
                <div className="details__left">
                     <h3 className="line__title">Organizacja “Lorem Ipsum 1”</h3>
                    <p className="line__description">Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                </div>

                <div className="details__right">
                    <p className="line__items">Egestas, sed, tempus</p>
                </div>
            </div>

            <div className="details__line">
                <div className="details__left">
                    <h3 className="line__title">Organizacja “Lorem Ipsum 2”</h3>
                     <p className="line__description">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                </div>

                <div className="details__right">
                    <p className="line__items">Mi, quis, hendrerit, dolor</p>
                </div>
            </div>

            <div className="details__line">
                    <div className="details__left">
                      <h3 className="line__title">Organizacja “Lorem Ipsum 3”</h3>
                      <p className="line__description">Scelerisque in dictum non consectetur a erat nam.</p>
                    </div>

                <div className="details__right">
                     <p className="line__items">Ut, aliquam, purus, sit, amet </p>
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
                        <p className="line__items">Egestas, sed, tempus</p>
                    </div>
                </div>

                <div className="details__line">
                    <div className="details__left">
                        <h3 className="line__title">Lorem Ipsum 2</h3>
                        <p className="line__description">Machomonteiro</p>
                    </div>

                    <div className="details__right">
                        <p className="line__items">Muchomayo</p>
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

        {/* Pagination buttons */}
        <div className="pagination-box">
            <div data-page="1" className={page  === '1' ? "page-number page-number--active" : "page-number"} onClick={handlePageChange}>
                1
            </div>

            <div  data-page="2" className={page  === '2' ? "page-number page-number--active" : "page-number"} onClick={handlePageChange}>
                2
            </div>
        </div>
        </>
    )
}