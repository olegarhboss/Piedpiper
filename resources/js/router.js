import Vue from 'vue';
import store from './store/store';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'main',
    component: () => import(/* webpackChunkName: "index" */'./views/index')
},{
    path: '/posts',
    name: 'posts',
    component: () => import( /* webpackChunkName: "posts" */ './views/posts/index')
},{
    path: '/posts/:postId',
    name: 'post',
    props: true,
    component: () => import( /* webpackChunkName: "post" */ './views/posts/show')
},{
    path: '/about',
    name: 'about',
    component: () => import( /* webpackChunkName: "about" */ './views/about')
},{
    path: '/help',
    name: 'help',
    component: () => import( /* webpackChunkName: "help" */ './views/help')
},{
    path: '/settings',
    name: 'settings',
    component: () => import( /* webpackChunkName: "settings" */ './views/settings')
},{
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ './views/auth/login'),
    beforeEnter(to, from, next) {
        if (store.state.auth.token) {
            next(false);
        } else {
            next();
        }
    }
},{
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ './views/auth/register'),
    beforeEnter(to, from, next) {
        if (store.state.auth.token) {
            next(false);
        } else {
            next();
        }
    }
},{
    path: '/profile',
    name: 'profile',
    meta: {
        requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "profile" */ './views/profile')
}];

const router = new VueRouter({
    mode: 'history',
    routes
});

// Неавторизированным пользователям будем предлогать авторизироваться
router.beforeEach((to, from, next) => {
    const token = store.state.auth.token;
    
    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
        next({
            path: '/login',
            query: {
                redirect: to.fullPath
            }
        });
    } else {
        next();
    }
});

export default router;
