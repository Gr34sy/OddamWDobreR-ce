import React from "react";

export function ThreeColumns(){
    return(
        <section className="three-columns">
            <div className="col-box">
                <div className="col">
                    <span className="col__number">10</span>

                    <h3 className="col__title">ODDANYCH WORKÓW</h3>

                    <p className="col__description">
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                    </p>
                </div>

                <div className="col">
                    <span className="col__number">5</span>

                    <h3 className="col__title">WSPARTYCH ORGANIZACJI</h3>

                    <p className="col__description">
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                    </p>
                </div>

                <div className="col">
                    <span className="col__number">7</span>

                    <h3 className="col__title">ZORGANIZOWANYCH ZBIÓREK</h3>

                    <p className="col__description">
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                    </p>
                </div>
            </div>
        </section>
    )
}