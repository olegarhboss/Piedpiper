import axios from "axios";
import store from "../store/store";

// Параментры для Axios
export const apiClient = axios.create({
    baseURL: '/api',
    withCredentials: true
});

// Перехватчик запростов
apiClient.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('token');
        
        if (token != null) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error.response);
    }
);

// Перехватчик ответов
apiClient.interceptors.response.use(
    response => {
        return response;
    },
    function (error) {
        if (error.response.status === 401) {
            store.dispatch('auth/logout');
        }
        return Promise.reject(error.response);
    }
);
