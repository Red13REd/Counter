import React from 'react';
import {Button} from "./components/Button";
import "./counter.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Redux/ReactRedux";
import {incInitialValueAC, resetStartValueAC, stateType} from "./Redux/ReducerCounter";

export type CounterType = {
    showError: boolean
}

export const Counter: React.FC<CounterType> = ({ showError,}) => {

    const state = useSelector<AppRootStateType,stateType>(state => state.Counter)
    const dispatch = useDispatch()

    const onClickHandlerInc = () => {
        dispatch(incInitialValueAC())
    }

    const onClickHandlerReset = () => {
        dispatch(resetStartValueAC(state.start))
    }

    const onHandlerText = () => {
        if (showError) {
            return "incorrect-value"
        } else if (state.onFocus) {
            return state.onFocus
        } else {
            return state.value
        }
    }

    const onHandlerClassName = () => {
        if (showError) {
            return "incorrect-value"
        } else if (state.onFocus) {
            return "onFocus"
        } else if (state.value == state.error) {
            return "value-end"
        } else {
            return "value"
        }
    }

    return (
        <div className={"Counter-wrapper"}>
            <div className={onHandlerClassName()}>
                {onHandlerText()}
            </div>
            <div className={"buttons-wrapper"}>
                <div>
                    <Button title={"inc"} disabled={state.error === state.value || state.disabled} callBack={onClickHandlerInc}/>
                </div>
                <div>
                    <Button title={"reset"} disabled={state.value <= 0 || state.disabled} callBack={onClickHandlerReset}/>
                </div>

            </div>
        </div>
    );
};
