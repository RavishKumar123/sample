import { GET_ALL_USERS , GET_SINGLE_USER , GET_REGISTERED_VEHICLE , GET_VEHICLE , GET_FEEDBACKS , GET_FEEDBACK } from '../actions/Types';

const INITIAL_STATE = {
    users: null,
    user: {},
    vehicles: null,
    vehicle: {},
    feedbacks: null,
    feedback: {}
}

export default (state = INITIAL_STATE , action) => {
    switch(action.type){
        case GET_ALL_USERS:
            return { ...state , users: action.payload }
        case GET_SINGLE_USER:
            return {...state , user: action.payload }
        case GET_REGISTERED_VEHICLE:
            return { ...state , vehicles: action.payload }
        case GET_VEHICLE:
            return { ...state , vehicle: action.payload }
        case GET_FEEDBACKS:
            return { ...state , feedbacks: action.payload }
        case GET_FEEDBACK:
            return { ...state , feedback: action.payload }
        default:
            return state
    }
}