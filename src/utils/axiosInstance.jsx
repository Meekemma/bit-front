import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";

const baseURL = "http://127.0.0.1:8000/";

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(async req => {
    let token = localStorage.getItem('access_token') ? JSON.parse(localStorage.getItem('access_token')) : null;
    const refresh_token = localStorage.getItem('refresh_token') ? JSON.parse(localStorage.getItem('refresh_token')) : null;

    if (token) {
        const user = jwtDecode(token);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

        if (!isExpired) {
            req.headers.Authorization = `Bearer ${token}`;
            return req;
        }

        try {
            const response = await axios.post(`${baseURL}token/refresh/`, { refresh: refresh_token });
            if (response.status === 200) {
                const newAccessToken = response.data.access;
                localStorage.setItem('access_token', JSON.stringify(newAccessToken));
                req.headers.Authorization = `Bearer ${newAccessToken}`;
                console.log('New token set in headers');
                return req;
            } else {
                console.error('Failed to refresh token:', response.statusText);
                logoutUser();
            }
        } catch (error) {
            console.error('Error refreshing token:', error);
            logoutUser();
        }
    } else {
        console.error('No token found');
    }
    return req;
}, error => {
    return Promise.reject(error);
});

const logoutUser = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('is_verified');
    window.location.href = '/login'; // Redirect to login page
};

export default axiosInstance;
