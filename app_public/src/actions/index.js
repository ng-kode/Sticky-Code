import {
    GET_STICKIES
} from './types';

const API_BASE_URL = `http://localhost:3000/api`;

export const getStickies = (cb) => {
    return (dispatch, getState) => {
        fetch(`${API_BASE_URL}/stickies`)
        .then(response => response.json())
        .then(json => { 
            dispatch({
                type: GET_STICKIES,
                payload: json.data
            });
            if (cb) {
                cb()
            }
        });
    }
}
