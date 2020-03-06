import AuthService from '../../services/AuthService';
import UserService from '../../services/UserService';
import axios from 'axios'

export const namespaced = true;

export const state = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    token: localStorage.getItem('token'),
    loading: false,
    error: null,
    reCaptchaKey: null
};

export const mutations = {
    SET_USER(state, user) {
        state.user = user;
        localStorage.setItem('user', JSON.stringify(user));
    },
    CLEAR_USER() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        state.token = null;
        state.user = null;
        //location.replace('/');
        //location.reload();
    },
    SET_TOKEN(state, token) {
        state.token = token;
        localStorage.setItem('token', token);
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_MESSAGE(state, message) {
        state.message = message;
    },
    SET_ERROR(state, error) {
        state.error = error;
    },
    SET_RECAPTCHA_KEY(state, key) {
        state.reCaptchaKey = key;
    }
};

export const actions = {
    // Авторизация
    login({ commit }, payload) {
        commit('SET_LOADING', true);
        return AuthService.login(payload)
            .then(response => {
                commit('SET_TOKEN', response.data.token);
                commit('SET_USER', response.data.user);
                commit('SET_LOADING', false);
            })
            .catch(error => {
                commit('SET_LOADING', false);
                commit('SET_ERROR', error.data ? error.data.message : error);
            });
    },

    // Регистрация
    register({ commit }, payload){
        commit('SET_LOADING', true);
        return AuthService.register(payload)
            .then(response => {
                commit('SET_TOKEN', response.data.token);
                commit('SET_USER', response.data.user);
                commit('SET_LOADING', false);
            })
            .catch(error => {
                commit('SET_LOADING', false);
                commit('SET_ERROR', error.data ? error.data.message : error);
            });
    },

    update({ commit }, payload){
        commit('SET_LOADING', true);
        return UserService.update(state.user.id, payload)
            .then(response => {
                commit('SET_USER', response.data);
                commit('SET_LOADING', false);
            })
            .catch(error => {
                commit('SET_LOADING', false);
                commit('SET_ERROR', error.data ? error.data.message : error);
            });
    },

    delete({ commit }, payload){
        commit('SET_LOADING', true);
        return UserService.delete(state.user.id, payload)
            .then(() => {
                commit('CLEAR_USER');
                commit('SET_LOADING', false);
            })
            .catch(error => {
                commit('SET_LOADING', false);
                commit('SET_ERROR', error.data ? error.data.message : error);
            });
    },

    // Получение reCapchaKey с сервера
    recaptcha({ commit }){
        commit('SET_LOADING', true);
        return axios.get('/api/recaptcha')
            .then(response => {
                commit('SET_RECAPTCHA_KEY', response.data.key);
                commit('SET_LOADING', false);
            })
            .catch(error => {
                commit('SET_LOADING', false);
                commit('SET_ERROR', error.data ? error.data.message : error);
            });
    },
    
    // Деавторизация
    logout({ commit }) {
        return AuthService.logout()
            .then(() => {
                commit('CLEAR_USER');
            })
            .catch(() => {
                commit('CLEAR_USER');
            });
    },
    
    // Костыль для очистки Ошибок
    clearError({ commit }){
        commit('SET_ERROR', null);
    }
};

export const getters = {
    authUser: state => {
        return state.user;
    },
    authToken: state => {
        return state.token;
    },
    captchaKey: state => {
        return state.reCaptchaKey;
    },
    error: state => {
        return state.error;
    },
    loading: state => {
        return state.loading;
    },
    loggedIn: state => {
        return !!state.user;
    }
};
