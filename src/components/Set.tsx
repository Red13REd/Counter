import React from 'react';
import {Input} from "./Input";
import {Button} from "./Button";
import './set.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/ReactRedux";
import {setDisabledAC, setNumberMaxAC, setNumberStartAC, stateType} from "../Redux/ReducerCounter";


type SetType = {
    onClickHandlerSetButton: () => void
    disabledButton: boolean
    onFocusHandler: () => void
}


export const Set: React.FC<SetType> = ({onFocusHandler, onClickHandlerSetButton, disabledButton}) => {

    const state = useSelector<AppRootStateType, stateType>(state => state.Counter)
    const dispatch = useDispatch()

    const onClickHandlerInputMax = (number: number) => {
        dispatch(setNumberMaxAC(number))
        dispatch(setDisabledAC(true))
    }

    const onClickHandlerInputStart = (number: number) => {
        dispatch(setNumberStartAC(number))
        dispatch(setDisabledAC(true))
    }

    const classNameHandler = state.numberMax !== state.numberStart
    const classNameHandlerMax = state.numberMax >= 0
    const classNameHandlerStart = state.numberStart >= 0

    return (
        <div className={"set-wrapper"}>
            <div className={"input-wrapper"}>
                <Input value={state.numberMax} onFocusHandler={onFocusHandler} className={classNameHandlerMax }
                       title={"max value"} callBack={onClickHandlerInputMax}/>
                <Input value={state.numberStart} onFocusHandler={onFocusHandler} className={classNameHandlerStart}
                       title={"start value"} callBack={onClickHandlerInputStart}/>
            </div>
            <div className={'button-wrapper'}>
                <Button title={"set"} callBack={onClickHandlerSetButton} disabled={disabledButton}/>
            </div>
        </div>
    );
};
