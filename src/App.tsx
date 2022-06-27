import React, {useEffect, useState} from 'react';
import './App.css';
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
import {Link, Navigate, Route, Routes} from 'react-router-dom';
import {CounterV2} from "./CounterV2";
import {CounterV1} from "./CounterV1";

function App() {

    const state = useSelector<AppRootStateType, stateType>(state => state.Counter)
    const dispatch = useDispatch()

    const [changeVersion, setChangeVersion] = useState<boolean>(false)
    const [setPress, setSetPress] = useState<boolean>(false)
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


    const disabledButton = state.numberStart < 0 || state.numberMax < 0 || state.numberStart >= state.numberMax


    const onClickHandlerSetButton = () => {
        dispatch(setValueAC(state.numberStart))
        dispatch(setErrorAC(state.numberMax))
        dispatch(setStartAC(state.numberStart))
        dispatch(setOnFocusAC(false))
        dispatch(setDisabledAC(false))
        setSetPress(!setPress)
    }

    const onFocusHandler = () => {
        dispatch(setOnFocusAC(true))
    }

    return (
        <div className={"App-header"}>
            {changeVersion
                ? <Link
                    onClick={() => setChangeVersion(!changeVersion)}
                    to="/"
                    className={"button-change"}>
                    Go to counter version 1</Link>
                : <Link
                    onClick={() => setChangeVersion(!changeVersion)}
                    to="/CounterV2"
                    className={"button-change"}>
                    Go to counter version 2</Link>
            }
            <Routes>
                <Route path="/"
                       element={<CounterV1
                           onClickHandlerSetButton={onClickHandlerSetButton}
                           disabledButton={disabledButton}
                           onFocusHandler={onFocusHandler}/>}/>
                <Route path="/CounterV2"
                       element={<CounterV2
                           setPress={setPress}
                           setSetPress={setSetPress}
                           onClickHandlerSetButton={onClickHandlerSetButton}
                           disabledButton={disabledButton}
                       />}/>
                <Route path="/404" element={<div>
                    <h1>404: PAGE NOT FOUND</h1>
                    <button className={"button-change"} onClick={() => <Navigate to="/"/>
                    }>Back home
                    </button>
                </div>}/>
                <Route path="*" element={<Navigate to="/404"/>}/>
            </Routes>
        </div>

    );
}

export default App;
