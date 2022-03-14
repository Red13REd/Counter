export type stateType = {
    value: number
    start: number
    error: number
    numberStart: number
    numberMax: number
    onFocus: string
    disabled:boolean
}


const initialState: stateType = {
    value: 0,
    start: 0,
    error: 0,
    numberStart: 0,
    numberMax: 0,
    onFocus: "",
    disabled: true,
}


type ActionsType = setNumberMaxType | setNumberStartType
    | incInitialValueType | resetStartValueType
    | setOnFocusType | setValueType | setErrorType
    | setStartType | setDisabledType

export const ReducerCounter = (state: stateType = initialState, action: ActionsType): stateType => {
    switch (action.type) {
        case "SET-NUMBER-MAX":
            return {...state, numberMax: action.numberMax}
        case "SET-NUMBER-START":
            return {...state, numberStart: action.numberStart}
        case "INC-INITIAL-VALUE":
            return {...state, value: state.value + 1}
        case "RESET-START-VALUE":
            return {...state, value: action.resetStart}
        case "SET-ON-FOCUS":
            return {...state, onFocus: action.onFocus ? "enter values and press 'set'" : ""}
        case "SET-VALUE":
            return {...state, value: action.value}
        case "SET-ERROR":
            return {...state, error: action.error}
        case "SET-START":
            return {...state, start: action.start}
        case "SET-DISABLED":
            return {...state,disabled: action.disabled}
        default:
            return state
    }
};

export type setNumberMaxType = ReturnType<typeof setNumberMaxAC>
export type setNumberStartType = ReturnType<typeof setNumberStartAC>
export type incInitialValueType = ReturnType<typeof incInitialValueAC>
export type resetStartValueType = ReturnType<typeof resetStartValueAC>
export type setOnFocusType = ReturnType<typeof setOnFocusAC>
export type setValueType = ReturnType<typeof setValueAC>
export type setErrorType = ReturnType<typeof setErrorAC>
export type setStartType = ReturnType<typeof setStartAC>
export type setDisabledType = ReturnType<typeof setDisabledAC>

export const setNumberMaxAC = (number: number) => {
    return {type: "SET-NUMBER-MAX", numberMax: number} as const
}

export const setNumberStartAC = (number: number) => {
    return {type: "SET-NUMBER-START", numberStart: number} as const
}

export const incInitialValueAC = () => {
    return {type: "INC-INITIAL-VALUE"} as const
}

export const resetStartValueAC = (number: number) => {
    return {type: "RESET-START-VALUE", resetStart: number} as const
}

export const setOnFocusAC = (onFocus: boolean) => {
    return {type: "SET-ON-FOCUS", onFocus} as const
}

export const setValueAC = (number: number) => {
    return {type: "SET-VALUE", value: number} as const
}

export const setErrorAC = (number: number) => {
    return {type: "SET-ERROR", error: number} as const
}

export const setStartAC = (number: number) => {
    return {type: "SET-START", start: number} as const
}

export const setDisabledAC = (disabled: boolean) => {
    return {type: "SET-DISABLED", disabled} as const
}




