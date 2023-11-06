import {combineReducers} from "redux";

function counter(state={value:0},action) {
    switch (action.type){
        case 'INCREMENT':
            return {value: state.value += 1}
        case 'DECREMENT':
            return {value: state.value -= 1}
        default:
            return state
    }
}


function userinfo(state={name:'',avatar_url:''},action) {
    switch (action.type){
        case 'ADD_USER':
            return action.payload;
        default:
            return state
    }
}

export {
    counter,
    userinfo
}
export default combineReducers({
    counter,
    userinfo
});