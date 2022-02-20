import React, {useState} from 'react';
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
