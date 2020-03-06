import Vue from 'vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store/store'
import axios from 'axios'

import App from './App.vue'

Vue.prototype.$http = axios;

Vue.prototype.$load_script = async (url) => {
    let script = document.createElement('script');
    script.src = url;
    script.defer = true;
    await document.head.appendChild(script);
};

Vue.prototype.$delete_script = async (url) => {
    let el = document.querySelector("script[src='" + url + "']");
    
    if(el){
        await el.remove();
    }
};

export default new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
});
