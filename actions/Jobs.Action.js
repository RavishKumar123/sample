import { GET_JOBS , GET_JOB } from './Types';
import Axios from '../config/BaseUrl';
import { toast } from 'react-toastify';

export const getJobs = (title , page , pageCount) => async dispatch => {
    try {
        const res = await Axios.get("/jobs" , { params: {
            title , page , pageCount
        }});
        dispatch({
            type: GET_JOBS,
            payload: res.data
        });
    } catch (error) {
        toast.success(error.response ? error.response.data.message : "something went wrong");
    }
}

export const getJob = (id) => async dispatch => {
    try {
        const res = await Axios.get(`/jobs/${id}`);
        dispatch({
            type: GET_JOB,
            payload: res.data.data
        });
    } catch (error) {
        toast.success(error.response ? error.response.data.message : "something went wrong");
    }
}
