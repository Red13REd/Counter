import React, {ChangeEvent} from 'react';
import './input.css'

type InputType = {
    title: string
    callBack: (number: number) => void
    className: boolean
    onFocusHandler:()=>void
}

export const Input: React.FC<InputType> = ({onFocusHandler,title, callBack, className}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let number = parseInt(e.currentTarget.value, 10)
        callBack(number)
    }

    const onChangeHandlerBlur = () => {
        onFocusHandler()
    }


    return (
        <div>{title} <input onFocus={onChangeHandlerBlur} className={className ? "input" : "input-error"} type="number"
                            onChange={onChangeHandler}/></div>
    );
};
