import axios from "axios";

const APP_URL = 'http://localhost:5005';

const service = axios.create({
    baseURL: `${APP_URL}/api`,
});

service.interceptors.request.use(
    request => {
        const storedToken = localStorage.getItem('authToken')

        if (storedToken) {
            request.headers.Authorization = `Bearer ${storedToken}`
        }

        return request
    }
);

export default service;