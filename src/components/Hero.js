import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { AuthContext } from "./Auth";
import app from "../base";
import { getAuth,  signOut } from "firebase/auth";

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
                    {currentUser!=='' && <h1 className="hero__title--mobile">
                        Zacznij pomagać!<br/>
                        Oddaj niechciane rzeczy w zaufane ręce
                    </h1>}

                    {currentUser==='' && <h1 className="hero__title--mobile">
                        Masz w domu rzeczy, <br/>
                        z którymi nie wiesz co zrobić?<br/>
                        ODDAJ JE POTRZEBUJĄCYM
                    </h1>}

                    {currentUser!=='' &&<div className="hero__stats--mobile">
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
                    </div>}
                    
                    <div className="hero__button-box--mobile">
                        {currentUser!=='' &&<Link to="/give" className="button--mobile">oddaj rzeczy</Link>}
                        {currentUser!=='' &&<Link to="/give" className="button--mobile">zorganizuj zbiórkę</Link>}
                        {currentUser==='' &&<Link to="/login" className="button--mobile">zaloguj się</Link>}
                        {currentUser==='' &&<Link to="/register" className="button--mobile">załóż konto</Link>}
                    </div>
                    {currentUser!=='' &&<button className="button--mobile logout-btn--mobile"
                    onClick={(e)=>{
                        e.preventDefault();
                        const auth = getAuth(app);
                        signOut(auth)
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.error(errorCode, errorMessage);
                        });
                    }}
                    >wyloguj </button>}
                </div>
            </div>
        </main>
        </>
    )
}