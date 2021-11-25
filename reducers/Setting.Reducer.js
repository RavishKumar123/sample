import { GET_SETTING } from "../actions/Types";

const INITIAL_STATE = {
    setting: {},
}

export default (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case GET_SETTING:
            return { ...state , setting: action.payload }
        default:
            return state;
    }
}