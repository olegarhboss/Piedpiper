(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"7xKR":function(t,e,r){"use strict";r.r(e);var a=r("L2JU");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var n={data:function(){return{email:"",password:"",device_name:"spa_web"}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(a.b)("auth",["error","loading"])),methods:{login:function(){var t=this;this.$store.dispatch("auth/login",this.$data).then((function(){t.$router.push(t.$route.query.redirect||"/dashboard")}))}},mounted:function(){this.$http.get("/airlock/csrf-cookie")}},o=r("KHd+"),c=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-4"},[r("form",{staticClass:"card bg-light shadow-lg",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[t._m(0),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"input-group"},[t._m(1),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email",required:"",autofocus:"",id:"exampleInputEmail","aria-describedby":"emailHelp"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"input-group mt-3"},[t._m(2),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Пароль",required:"",id:"exampleInputPassword"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),t.error?r("p",{staticClass:"alert alert-danger mt-4",attrs:{role:"alert"}},[t._v(t._s(t.error))]):t._e(),t._v(" "),t.loading&&!t.error?r("div",{staticClass:"spinner-grow text-primary",attrs:{role:"status"}},[r("span",{staticClass:"sr-only"},[t._v("Загрузка...")])]):t._e()]),t._v(" "),t._m(3)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("i",{staticClass:"fas fa-user-circle"}),this._v(" Авторизация")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text"},[e("i",{staticClass:"fas fa-envelope"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text"},[e("i",{staticClass:"fas fa-key"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-footer"},[e("button",{staticClass:"btn btn-outline-primary btn-block",attrs:{type:"submit"}},[this._v("Войти")]),this._v(" "),e("a",{staticClass:"btn btn-primary btn-block",attrs:{href:"/login/facebook"}},[e("i",{staticClass:"fab fa-facebook-f"}),this._v(" Использовать Facebook")])])}],!1,null,null,null);e.default=c.exports}}]);