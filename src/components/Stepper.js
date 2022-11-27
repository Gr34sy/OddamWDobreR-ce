import React, {useState} from 'react';

export function Stepper(){
    const [currentStep, setCurrentStep] = useState(1)

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

    return(
        <section className="stepper">
            { currentStep<=4 &&
                <h3 className="stepper__header">
                    Ważne!<br/>
                    {currentStep===1 && "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."}
                    {currentStep===2 && "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."}
                    {currentStep===3 && "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."}
                    {currentStep===4 && "Podaj adres oraz termin odbioru rzeczy."}
                </h3>
            }

            <div className="stepper__container">

                <p className="stepper__current-step">{currentStep}/4</p>
                <form className="stepper__form">
                    {currentStep===1 && 
                    <div className="step step--1">
                        <input type="text"/>
                    </div>
                    }

                    {currentStep===2 && 
                    <div className="step step--2">
                        <textarea/>
                    </div>
                    }

                    {currentStep===3 && 
                    <div className="step step--3">
                        <input type="radio"/>
                    </div>
                    }
                    
                    {currentStep===4 && 
                    <div className="step step--4">
                        <input type="checkbox"/>
                    </div>
                    }
                </form>

                <div className="stepper__buttons">
                    { currentStep >1 && <input type="button"  className="button button--big" value="Wstecz" onClick={stepBackward}/>}
                    {  currentStep <4 && <input type="button" className="button button--big"  value="Dalej" onClick={stepForward}/>}
                </div>
            </div>
        </section>
    )
}