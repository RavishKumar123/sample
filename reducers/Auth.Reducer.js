import { LOGIN_ADMIN , PASSWORD_RECOVER_EMAIL , PASSWORD_RECOVER_CODE , ADMIN_CURRENT_USER } from '../actions/Types';

const INITIAL_STATE = {
    isAuthenticated: false,
    token: localStorage.getItem("token"),
    email: "",
    code: "",
    current_user: {}
}

export default (state = INITIAL_STATE , action) => {
    switch(action.type){
        case LOGIN_ADMIN:
            return { ...state , isAuthenticated: action.payload.success }
        case PASSWORD_RECOVER_EMAIL:
            return {...state , email: action.payload }
        case PASSWORD_RECOVER_CODE:
            return {...state , code: action.payload }
        case ADMIN_CURRENT_USER:
            return { ...state , current_user: action.payload }
        default:
            return state
    }
}