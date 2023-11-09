function createAddCountAction() {
    return {
        type:'increment',
        value:1
    }
}
function createMinusCount(value) {
    return {
        type:'decrement',
        value
    }
}

export {
    createAddCountAction,
    createMinusCount
}