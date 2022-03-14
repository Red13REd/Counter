import { combineReducers, createStore } from "redux";
import {ReducerCounter} from "./ReducerCounter";

const rootReducer = combineReducers({
    Counter: ReducerCounter,
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;