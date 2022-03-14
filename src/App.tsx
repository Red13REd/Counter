import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Set} from "./components/Set";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Redux/ReactRedux";
import {
    setDisabledAC,
    setErrorAC,
    setNumberMaxAC,
    setNumberStartAC,
    setOnFocusAC,
    setStartAC,
    setValueAC,
    stateType
} from "./Redux/ReducerCounter";

function App() {

    const state = useSelector<AppRootStateType, stateType>(state => state.Counter)
    const dispatch = useDispatch()


    useEffect(() => {
        let initialValueAsString = localStorage.getItem("initialValue")
        let numberStartAsString = localStorage.getItem("numberStart")
        let numberMaxAsString = localStorage.getItem("numberMax")
        let startAsString = localStorage.getItem("start")


        if (startAsString && numberMaxAsString && numberStartAsString && initialValueAsString) {
            let newInitialValue = JSON.parse(numberStartAsString)
            let newNumberStart = JSON.parse(numberStartAsString)
            let newNumberMax = JSON.parse(numberMaxAsString)
            let newStartAsString = JSON.parse(startAsString)
            dispatch(setValueAC(newInitialValue))
            dispatch(setNumberStartAC(newNumberStart))
            dispatch(setNumberMaxAC(newNumberMax))
            dispatch(setStartAC(newStartAsString))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("initialValue", JSON.stringify(state.value))
        localStorage.setItem("numberStart", JSON.stringify(state.numberStart))
        localStorage.setItem("numberMax", JSON.stringify(state.numberMax))
        localStorage.setItem("start", JSON.stringify(state.start))
    }, [state.value, state.numberStart, state.numberMax, state.start])


    const disabledButton =  state.numberStart < 0 || state.numberMax < 0 || state.numberStart >= state.numberMax


    const onClickHandlerSetButton = () => {
        dispatch(setValueAC(state.numberStart))
        dispatch(setErrorAC(state.numberMax))
        dispatch(setStartAC(state.numberStart))
        dispatch(setOnFocusAC(false))
        dispatch(setDisabledAC(false))
    }

    const onFocusHandler = () => {
        dispatch(setOnFocusAC(true))
    }

    return (
        <div className={"App-header"}>
            <div>
                <Counter showError={disabledButton}
                />
            </div>
            <div className={"set"}>
                <Set disabledButton={ disabledButton}
                     onClickHandlerSetButton={onClickHandlerSetButton}
                     onFocusHandler={onFocusHandler}
                />
            </div>


        </div>

    );
}

export default App;
