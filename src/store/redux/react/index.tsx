import {  createStore,combineReducers } from "redux";

import counterReducer from "./counter/reducer"
import personReducer from "./person/reducer.tsx"

const reducers=combineReducers({
    counterReducer,
    personReducer
})
// combineReducers({ reducer1,reducer2 })
const store = createStore(reducers)

export default store