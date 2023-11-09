
import {createSlice} from "@reduxjs/toolkit"

export interface CounterState {
    value:number;
    title:string;
}
const initialState:CounterState={
    value:0,
    title:'redux toolkit pre'
}
export const counter=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state,payload)=>{
            state.value += 1;
        },
        decrement:(state,payload)=>{
            state.value -= 1;
        }
    }
})

export const {increment,decrement}=counter.actions
export default counter.reducer