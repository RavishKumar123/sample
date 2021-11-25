import { GET_ALL_USERS , GET_SINGLE_USER , GET_REGISTERED_VEHICLE, GET_VEHICLE , GET_FEEDBACKS , GET_FEEDBACK  } from './Types';
import Axios from '../config/BaseUrl';
import { toast } from 'react-toastify';

export const getUsers = (name , page, pageCount , status) => async dispatch => {
    try {
        // const res = await Axios.get(`/session?title=${title}&from=${from}&to=${to}`);
        const res = await Axios.get(`/auth/users`, {
            params: {
                name,
                page,
                pageCount,
                status
            }
        });
        dispatch({
            type: GET_ALL_USERS,
            payload: res.data
        });
    } catch (error) {
        console.log("Error: ",error);
        toast.error("Something went wrong.");
    }
}

export const getUser = (id) => async dispatch => {
    try {
        // const res = await Axios.get(`/session?title=${title}&from=${from}&to=${to}`);
        const res = await Axios.get(`/auth/user/${id}`);
        dispatch({
            type: GET_SINGLE_USER,
            payload: res.data.data
        });
    } catch (error) {
        console.log("Error: ",error);
        toast.error("Something went wrong.");
    }
}

export const blockUser = (payload) => async dispatch => {
    try {
        // const res = await Axios.get(`/session?title=${title}&from=${from}&to=${to}`);
        const res = await Axios.put(`/auth/user/block` , {
            id: payload.id,
            status: payload.status
        });
        toast.success(res.data.message);
    } catch (error) {
        console.log("Error: ",error);
        toast.error("Something went wrong.");
    }
}

export const registerVehicle = (payload) => async dispatch => {
    try {
        const res = await Axios.post(`/vehicle` , payload);
        toast.success(res.data.message);
    } catch (error) {
        console.log("Error: ",error);
        toast.error("Something went wrong.");
    }
}

export const getRegisteredVehicles = (name , page , pageCount , userId) => async dispatch => {
    try {
        const res = await Axios.get(`/vehicle` , { params: {
            name , page , pageCount , userId
        }});
        dispatch({
            type: GET_REGISTERED_VEHICLE,
            payload: res.data
        })
    } catch (error) {
        console.log("Error: ",error);
        toast.error("Something went wrong.");
    }
}

export const getVehicle = (id) => async dispatch => {
    try {
        const res = await Axios.get(`/vehicle/${id}`);
        dispatch({
            type: GET_VEHICLE,
            payload: res.data.data
        })
    } catch (error) {
        console.log("Error: ",error);
        toast.error("Something went wrong.");
    }
}

export const getFeedbacks = (name , page, pageCount) => async dispatch => {
    try {
        const res = await Axios.get(`/feedback`, {
            params: {
                name,
                page,
                pageCount,
            }
        });
        dispatch({
            type: GET_FEEDBACKS,
            payload: res.data
        });
    } catch (error) {
        console.log("Error: ",error);
        toast.error("Something went wrong.");
    }
}

export const getFeedback = (id) => async dispatch => {
    try {
        const res = await Axios.get(`/feedback/${id}`);
        dispatch({
            type: GET_FEEDBACKS,
            payload: res.data.data
        });
    } catch (error) {
        console.log("Error: ",error);
        toast.error("Something went wrong.");
    }
}

export const deleteFeedback = (id) => async dispatch => {
    try {
        const res = await Axios.delete(`/feedback/${id}`);
        // dispatch(getFeedbacks());
        toast.success(res.data.message);
    } catch (error) {
        console.log("Error: ",error);
        toast.error("Something went wrong.");
    }
}