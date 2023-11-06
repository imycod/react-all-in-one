

export default function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                value: state.value += action.value
            }
        case 'decrement':
            return {
                ...state,
                value: state.value -= action.value
            }
        default:
            return state
    }
}