import {  createStore,combineReducers } from "redux";

import counterReducer from "./counter/reducer"
// combineReducers({ reducer1,reducer2 })
const store = createStore(counterReducer)

export default store