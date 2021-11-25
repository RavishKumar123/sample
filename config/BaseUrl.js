import axios from 'axios';

const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
};

if (localStorage.getItem("token")) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
}

const instance = axios.create({
    // baseURL: 'http://dev74.onlinetestingserver.com:3333/api',
    baseURL: 'http://localhost:3334',
    headers
});

instance.interceptors.request.use((config) => {
    document.querySelector('.spinner-container').style.display = 'block';
    return config;
}, (error) => {
    document.querySelector('.spinner-container').style.display = 'none';
    return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
    document.querySelector('.spinner-container').style.display = 'none';
    return response;
}, (error) => {
    document.querySelector('.spinner-container').style.display = 'none';
    return Promise.reject(error);
});

export default instance;