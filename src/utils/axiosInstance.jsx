import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";


const token = localStorage.getItem('access_token') ? JSON.parse(localStorage.getItem('access_token')) : null;
const refresh_token = localStorage.getItem('refresh_token') ? JSON.parse(localStorage.getItem('refresh_token')) : null;

const baseURL = "http://127.0.0.1:8000/";

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : null,
    },
});

axiosInstance.interceptors.request.use(async req => {
    console.log('Request:', req);
    let token = localStorage.getItem('access_token') ? JSON.parse(localStorage.getItem('access_token')) : null;
    
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
        const user = jwtDecode(token);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

        console.log(isExpired);
        if (!isExpired) {
            return req;
        } else {
            try {
                const res = await axios.post(`${baseURL}token/refresh/`, { refresh_token: refresh_token });
                if (res.status === 200) {
                    localStorage.setItem('access_token', JSON.stringify(res.data.access_token));
                    token = res.data.access_token; // Update token
                    req.headers.Authorization = `Bearer ${token}`;
                    return req;
                } else {
                    logoutUser();
                }
            } catch (error) {
                logoutUser();
            }
        }
    }
    
    return req;
}, error => {
    console.error('Response error:', error);
    return Promise.reject(error);
});

const logoutUser = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('is_verified');
    
};

export default axiosInstance;
