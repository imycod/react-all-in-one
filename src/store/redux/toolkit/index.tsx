
import {configureStore} from "@reduxjs/toolkit"
import counter from "./features/counter.tsx";

const store=configureStore({
    // 合并多个slice
    reducer:{
        counter,
    }
})

export default store;