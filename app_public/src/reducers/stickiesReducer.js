import {
    GET_STICKIES
} from '../actions/types'

const INITIAL_STATE = {
    stickies: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_STICKIES:
            return { 
                ...state,
                stickies: action.payload
            }
        default:
            return state
    }
}