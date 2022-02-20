import React, {Dispatch, SetStateAction, useState} from 'react';
import {Input} from "./Input";
import {Button} from "./Button";
import './set.css'


type SetType = {
    onClickHandlerSetButton: () => void
    setNumberMax:Dispatch<SetStateAction<number>>
    setNumberStart:Dispatch<SetStateAction<number>>
    disabledButton:boolean
    numberMax:number
    numberStart:number
    onFocusHandler:()=>void
}


export const Set: React.FC<SetType> = ({onFocusHandler,numberMax,numberStart,onClickHandlerSetButton,setNumberMax,setNumberStart,disabledButton}) => {


    const onClickHandlerInputMax = (number: number) => {
            setNumberMax(number)
    }

    const onClickHandlerInputStart = (number: number) => {
            setNumberStart(number)
    }


const cllassNameHandlerMax = numberMax >= 0
const cllassNameHandlerStart = numberStart >= 0

    return (
        <div className={"set-wrapper"}>
            <div className={"input-wrapper"}>
                <Input onFocusHandler={onFocusHandler} className={cllassNameHandlerMax} title={"max value"} callBack={onClickHandlerInputMax}/>
                <Input onFocusHandler={onFocusHandler} className={cllassNameHandlerStart} title={"start value"} callBack={onClickHandlerInputStart}/>
            </div>
            <div className={'button-wrapper'}>
                <Button title={"set"} callBack={onClickHandlerSetButton} disabled={disabledButton}/>
            </div>
        </div>
    );
};
