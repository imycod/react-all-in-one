import {createStore} from "redux";

import reducers from "./reducer"

// 注意整个应用只有一个store
export default createStore(reducers)