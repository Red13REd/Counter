import React from 'react';
import "./components/counter.css";
import {Counter} from "./components/Counter";
import {Set} from "./components/Set";

export type CounterV1Type = {
    disabledButton: boolean
    onClickHandlerSetButton: () => void
    onFocusHandler: () => void

}

export const CounterV1: React.FC<CounterV1Type> = ({disabledButton, onClickHandlerSetButton, onFocusHandler,}) => {

    return (
        <>
            <div>
                <Counter
                    counterV1={true}
                    showError={disabledButton}
                />
            </div>
            <div className={"set"}>
                <Set
                     disabledButton={disabledButton}
                     onClickHandlerSetButton={onClickHandlerSetButton}
                     onFocusHandler={onFocusHandler}
                />
            </div>
        </>
    );
};
