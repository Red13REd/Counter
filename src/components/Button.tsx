import React from 'react';
import './button.css'
type ButtonType = {
    title:string
    callBack:()=>void
    disabled:boolean
}


export const Button:React.FC<ButtonType> = ({title,callBack,disabled}) => {

    return (
        <button className={"button"} disabled={disabled} onClick={callBack} >{title}</button>
    );
};
