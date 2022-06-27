import React, {Dispatch, SetStateAction} from 'react';
import "./components/counter.css";
import {Counter} from "./components/Counter";
import {Set} from "./components/Set";

type CounterV2 = {
    disabledButton: boolean
    onClickHandlerSetButton: () => void
    setSetPress: Dispatch<SetStateAction<boolean>>
    setPress: boolean
}

export const CounterV2: React.FC<CounterV2> = (props) => {

    const {
        disabledButton,
        onClickHandlerSetButton,
        setSetPress,
        setPress,
    } = props


    return (
        <>
            {setPress
                ? <div>
                    <Counter
                        counterV1={false}
                        setSetPress={setSetPress}
                        setPress={setPress}
                    />
                </div>
                : <div className={"set"}>
                    <Set
                        onFocusHandler={() => {
                        }}
                        disabledButton={disabledButton}
                        onClickHandlerSetButton={onClickHandlerSetButton}
                    />
                </div>}
        </>
    );
};
