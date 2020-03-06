import * as API from "./api.js";

export default {
    update(userId, payload) {
        return API.apiClient.post('/users/' + userId, payload, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    delete(userId, payload) {
        return API.apiClient.post('/users/' + userId, payload);
    }
};
