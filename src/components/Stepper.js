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
            <div>
                <p>{currentStep}/4</p>
                <form>
                    {currentStep===1 && 
                    <div className="step step--1">
                        <input type="text"/>
                    </div>
                    }

                    {currentStep===2 && 
                    <div className="step step--2">
                        <input type="textarea"/>
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
                <input type="button"  className="button button--big" value="Wstecz" onClick={stepBackward}/>
                <input type="button" className="button button--big"  value="Dalej" onClick={stepForward}/>
            </div>
        </section>
    )
}