import { GET_JOBS , GET_JOB } from '../actions/Types';

const INITIAL_STATE = {
    jobs: null,
    job: {}
}

export default (state = INITIAL_STATE , action) => {
    switch(action.type){
        case GET_JOBS:
            return { ...state , jobs: action.payload }
        case GET_JOB:
            return {...state , job: action.payload }
        default:
            return state
    }
}