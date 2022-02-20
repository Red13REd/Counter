import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Set} from "./components/Set";

function App() {

    const [value, setValue] = useState<number>(0)
    const [start, setStart] = useState<number>(0)
    const [error, setError] = useState<number>(0)

    const [numberStart, setNumberStart] = useState<number>(0)
    const [numberMax, setNumberMax] = useState<number>(0)

    const [onFocus, setonFocus] = useState<string>("")

    useEffect(() => {
        let initialValueAsString = localStorage.getItem("initialValue")
        let numberStartAsString = localStorage.getItem("numberStart")
        let numberMaxAsString = localStorage.getItem("numberMax")
        let startAsString = localStorage.getItem("start")


        if (startAsString && numberMaxAsString && numberStartAsString && initialValueAsString ) {
            let newInitialValue = JSON.parse(numberStartAsString)
            let newNumberStart = JSON.parse(numberStartAsString)
            let newNumberMax = JSON.parse(numberMaxAsString)
            let newStartAsString = JSON.parse(startAsString)
            setValue(newInitialValue)
            setNumberStart(newNumberStart)
            setNumberMax(newNumberMax)
            setStart(newStartAsString)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("initialValue", JSON.stringify(value))
        localStorage.setItem("numberStart", JSON.stringify(numberStart))
        localStorage.setItem("numberMax", JSON.stringify(numberMax))
        localStorage.setItem("start", JSON.stringify(start))
    }, [value, numberStart, numberMax, start])



    const disabledButton = numberStart < 0 || numberMax < 0 || numberStart >= numberMax


    const onClickHandlerSetButton = () => {
        setValue(numberStart)
        setError(numberMax)
        setStart(numberStart)
        setonFocus("")
    }

    const onFocusHandler = () => {
        setonFocus("enter values and press 'set'")
    }

    return (
        <div className={"App-header"}>
            <div>
                <Counter showError={disabledButton}
                         start={start}
                         error={error}
                         initialValue={value}
                         setValue={setValue}
                         onFocus={onFocus}
                />
            </div>
            <div className={"set"}>
                <Set disabledButton={disabledButton}
                     setNumberMax={setNumberMax}
                     setNumberStart={setNumberStart}
                     onClickHandlerSetButton={onClickHandlerSetButton}
                     numberStart={numberStart}
                     numberMax={numberMax}
                     onFocusHandler={onFocusHandler}
                />
            </div>


        </div>

    );
}

export default App;
