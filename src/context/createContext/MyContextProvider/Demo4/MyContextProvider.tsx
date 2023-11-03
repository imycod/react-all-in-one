import React, {Reducer,useState} from 'react';
import {createContainer} from "react-tracked";
import {ImmerReducer, useImmerReducer} from "use-immer";

const initialValue = {age: 18, saving: 3000};
type TAction = {
    type: 'addAge' | 'addSaving',
};

const reducer: ImmerReducer<typeof initialValue, TAction> = (state, action) => {
    switch (action.type) {
        case "addAge":
            return {
                ...state,
                age: state.age + 1,
            }
        case "addSaving":
            return {
                ...state,
                saving: state.saving + 1000,
            };
        default:
            return state;
    }
};
function useValue() {
    return useImmerReducer(reducer,initialValue)
}

export const MyContainer=createContainer(useValue)
