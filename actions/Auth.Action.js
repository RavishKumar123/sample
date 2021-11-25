import { LOGIN_ADMIN , PASSWORD_RECOVER_EMAIL , PASSWORD_RECOVER_CODE , ADMIN_CURRENT_USER } from './Types';
import Axios from '../config/BaseUrl';
import { toast } from 'react-toastify';

export const login = (payload , history) => async dispatch => {
    try {
        const res = await Axios.post("/auth/login" , payload);
        dispatch({
            type: LOGIN_ADMIN,
            payload: { token: res.data.token , success: res.data.success }
        });
        localStorage.setItem("token", res.data.token);
        dispatch(getCurrentUser());
        history.push("/admin/dashboard");
        window.location.reload();

        // toast.success("Successfully logged in");
    } catch (error) {
        console.log(error.response);
        toast.error(error.response ? error.response.data.message : "Something went wrong!");
    }
}

export const forgetPassword = (email) => async dispatch => {
    try {
        const res = await Axios.post('/auth/forget', { email: email , is_admin: true });
        dispatch({
            type: PASSWORD_RECOVER_EMAIL,
            payload: res
        });
        window.$('#pwdrecovery1').modal('hide');
        window.$('#pwdrecovery2').modal('show');
        toast.success(res.data.message);
    } catch (error) {
        toast.error(error.response ? error.response.data.message : "Something went wrong.");
    }
}

export const verifyCode = (code) => async dispatch => {
    try {
        const res = await Axios.post('/auth/verify', { code: code });
        dispatch({
            type: PASSWORD_RECOVER_CODE,
            payload: code
        });
        window.$('#pwdrecovery2').modal('hide');
        window.$('#pwdrecovery3').modal('show');
        toast.success(res.data.message);
    } catch (error) {
        toast.error("Something went wrong.");
    }
}

export const setPassword = (password, code) => async dispatch => {
    try {
        const res = await Axios.post(`/auth/reset/${code}`, { newPassword: password });
        // dispatch({
        //     type: SET_NEW_PASSWORD,
        //     payload: res.data.message
        // });
        window.$('#pwdrecovery3').modal('hide');
        toast.success(res.data.message);
    } catch (error) {
        toast.error(error.response ? error.response.data.message : "Something went wrong.");
    }
}

export const getCurrentUser = () => async dispatch => {
    try {
        const res = await Axios.get("/auth/me");
        dispatch({
            type: ADMIN_CURRENT_USER,
            payload: res.data.data
        });
    } catch (error) {
        toast.success(error.response ? error.response.data.message : "something went wrong");
    }
}

export const changePassword = (newPassword) => async dispatch => {
    try {
        const res = await Axios.post("/auth/change" , { newPassword });
        toast.success(res.data.message);
    } catch (error) {
        toast.error(error.response ? error.response.data.message : "Something went wrong.");
    }
}