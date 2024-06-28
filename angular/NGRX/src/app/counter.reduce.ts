import { createReducer, on } from "@ngrx/store";
import  { increment, decrement, reset } from './counter.actions'


//export const i1:number = 0 ,i2:number = 0,i3:number = 0

export const initialState = 0
export const counterReducer = createReducer(

    initialState,
    on(increment, (state) => state +1),

    on(decrement, (state) => state -1),

    on(reset, (state) => state = 0),

);