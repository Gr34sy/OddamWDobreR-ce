import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { AuthContext } from "./Auth";

import decoration from "../assets/Decoration.svg";

export function Hero(){
    const {currentUser} = useContext(AuthContext);

    return(
        <>
        <main className="hero__main">
            <div className="main__left">
            </div>

            <div className="main__right">
                <Navbar/>

                <div className="hero__description">
                    <h1 className="hero__title">Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <figure>
                        <img src={decoration} alt="text decoration" className="text-decoration"/>
                    </figure>
                    <div className="hero__button-box">
                        <Link to={currentUser!=='' ? "/give" : "/login"}  className="button button--big">Oddaj  <br/> Rzeczy</Link>
                        <Link to={currentUser!=='' ? "/give" : "/login"}  className="button button--big">Zorganizuj  <br/> zbiórkę</Link>
                    </div>
                </div>

                <div className="hero__description--mobile">
                    <h1 className="hero__title--mobile">
                        Zacznij pomagać!<br/>
                        Oddaj niechciane rzeczy w zaufane ręce
                    </h1>

                    <div className="hero__stats--mobile">
                        <div className="hero__stat">
                            <div>
                                0
                            </div>
                            <p>
                                wspartych organizacji
                            </p>
                        </div>

                        <div className="hero__stat">
                            <div>
                                0
                            </div>
                            <p>
                                oddanych worków
                            </p>
                        </div>

                        <div className="hero__stat">
                            <div>
                                0
                            </div>
                            <p>
                                zorganizowanych zbiórek
                            </p>
                        </div>
                    </div>
                    
                    <div className="hero__button-box--mobile">
                        <a href="#" className="button--mobile">oddaj rzeczy</a>
                        <a href="#" className="button--mobile">zorganizuj zbiórkę</a>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}