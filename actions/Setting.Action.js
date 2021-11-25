import { toast } from "react-toastify";
import { GET_SETTING } from "./Types";
import Axios from '../config/BaseUrl';

export const getSetting = (id) => async dispatch => {
    try {
        const res = await Axios.get("/setting" , { params: {
            id
        }});
        dispatch({
            type: GET_SETTING,
            payload: res.data.data
        });
    } catch (error) {
        toast.error(error.response ? error.response.data.message : "Something went wrong!");
    }
}

export const AddSetting = (payload) => async dispatch => {
    try {
        const res = await Axios.post("/setting" , payload);
        toast.success("Setting updated");
        // dispatch({
        //     type: GET_SETTING,
        //     payload: res.data.data
        // });
    } catch (error) {
        toast.error(error.response ? error.response.data.message : "Something went wrong!");
    }
}