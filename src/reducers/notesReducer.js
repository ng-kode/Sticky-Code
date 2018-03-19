const INITIAL_STATE = {
    
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'HELLO':
            return { ...state }
        default:
            return state
    }
}