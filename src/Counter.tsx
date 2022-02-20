import React, {Dispatch, SetStateAction, useState} from 'react';
import {Button} from "./components/Button";
import "./counter.css";

export type CounterType = {
    initialValue: number
    error: number
    setValue: Dispatch<SetStateAction<number>>
    start: number
    showError: boolean
    onFocus: string
}

export const Counter: React.FC<CounterType> = ({onFocus, initialValue, error, setValue, start, showError}) => {


    const onClickHandlerInc = () => {
        setValue(initialValue + 1)
    }

    const onClickHandlerReset = () => {
        setValue(start)
    }

    const onHandlerText = () => {
        if (showError) {
            return "incorrect-value"
        } else if (onFocus) {
            return onFocus
        } else {
            return initialValue
        }
    }

    const onHandlerClassName = () => {
        if (showError) {
            return "incorrect-value"
        } else if (onFocus) {
            return "onFocus"
        } else if (initialValue == error) {
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
                    <Button title={"inc"} disabled={error === initialValue} callBack={onClickHandlerInc}/>
                </div>
                <div>
                    <Button title={"reset"} disabled={initialValue <= 0} callBack={onClickHandlerReset}/>
                </div>

            </div>
        </div>
    );
};
