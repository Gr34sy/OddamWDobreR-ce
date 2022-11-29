import React, {useState} from 'react';
import arrowDown from '../assets/ArrowDown.png';
import arrowUp from '../assets/ArrowUp.png';

export function Stepper(){
    //step state
    const [currentStep, setCurrentStep] = useState(1)

    //bags state
    const [showBags, setShowBags] = useState(false)

    function stepForward(e){
        e.preventDefault();
        setCurrentStep(
            prevStep=>{
                if(prevStep<4){
                    return prevStep + 1;
                }else{
                    return prevStep;
                }
            }
        )
    }

    function stepBackward(e){
        e.preventDefault();
        setCurrentStep(
            prevStep=>{
                if(prevStep>1){
                    return prevStep - 1;
                }else{
                    return prevStep;
                }
            }
        )
    }

    function toggleBags(e){
        e.preventDefault();

        if(showBags===true){
            setShowBags(false)
        }else{
            setShowBags(true)
        }
    }

    return(
        <section className="stepper">
            { currentStep<=4 &&
                <h2 className="stepper__header">
                    Ważne!<br/>
                    {currentStep===1 && "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."}
                    {currentStep===2 && "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."}
                    {currentStep===3 && "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."}
                    {currentStep===4 && "Podaj adres oraz termin odbioru rzeczy."}
                </h2>
            }

            <div className="stepper__container">
                <p className="stepper__current-step">Krok {currentStep}/4</p>

                <form className="stepper__form">
                    {currentStep===1 && 
                    <div className="stepper__step step--1">
                        <h3 className="stepper-form__title">
                            Zaznacz co chcesz oddać:
                        </h3>

                        <label htmlFor="reusable-clothes" className="label--checkbox">
                            <input type="checkbox" name="reusable-clothes" className="custom-checkbox" value="reusableClothes"/>
                            ubrania, które nadają się do ponownego użycia
                        </label>

                        <label htmlFor="rubbish-clothes" className="label--checkbox">
                            <input type="checkbox" name="rubbish-clothes" className="custom-checkbox" value="rubbishClothes"/>
                            ubrania, do wyrzucenia
                        </label>

                        <label htmlFor="toys" className="label--checkbox">
                            <input type="checkbox" name="toys" className="custom-checkbox" value="toys"/>
                            zabawki
                        </label>

                        <label htmlFor="books" className="label--checkbox">
                            <input type="checkbox" name="books" className="custom-checkbox" value="books"/>
                            książki
                        </label>

                        <label htmlFor="others" className="label--checkbox">
                            <input type="checkbox" name="others" className="custom-checkbox" value="others" />
                            inne
                        </label>
                    </div>
                    }

                    {currentStep===2 && 
                    <div className="stepper__step step--2">
                        <h3 className="stepper-form__title">
                            Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
                        </h3>

                        <div className="custom-select__box">
                            <div className="custom-select" onClick={toggleBags}>
                            Liczba 60l worków:
                                <div>
                                    <p>wybierz</p>
                                    <img src={ showBags===true ? arrowUp : arrowDown} alt="arrow down"/>
                                </div>
                            </div>

                            { showBags &&<div className='bags'>
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                                <p>4</p>
                                <p>5</p>
                                <p>6</p>
                            </div>}

                        </div>
                    </div>
                    }

                    {currentStep===3 && 
                    <div className="stepper__step step--3">
                        <input type="radio"/>
                    </div>
                    }
                    
                    {currentStep===4 && 
                    <div className="stepper__step step--4">
                        <input type="checkbox"/>
                    </div>
                    }
                </form>

                <div className="stepper__buttons">
                    { currentStep >1 && <input type="button"  className="button button--middle button--stepper" value="Wstecz" onClick={stepBackward}/>}
                    {  currentStep <4 && <input type="button" className="button button--middle button--stepper"  value="Dalej" onClick={stepForward}/>}
                </div>
            </div>
        </section>
    )
}