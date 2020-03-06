import * as API from "./api.js";

export default {
    login(payload) {
        return API.apiClient.post('/auth/login', payload);
    },
    
    logout() {
        return API.apiClient.get('/auth/logout');
    },

    register(payload) {
        return API.apiClient.post('/auth/register', payload, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    getCaptchaKey(){
        return API.apiClient.get('/recaptcha');
    }
};