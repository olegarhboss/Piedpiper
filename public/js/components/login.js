(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_recaptcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-recaptcha */ "./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Компонент реализующий часть логики работы с гуглокапчей


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: '',
      password: '',
      valid: true,
      value: true,
      rules: {
        required: function required(value) {
          return !!value || 'Необходимо заполнить.';
        },
        email: function email(value) {
          var pattern = /.+@.+\..+/;
          return pattern.test(value) || 'Должен быть действительным';
        },
        password: function password(value) {
          var pattern = /^(?=.{8,})/;
          return pattern.test(value) || 'Минимум 8 символов';
        }
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('auth', ['error', 'loading', 'captchaKey'])),
  methods: {
    onCaptchaExpired: function onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    },
    login: function login(recaptchaToken) {
      var _this = this;

      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password,
        device_name: 'spa',
        recaptchaToken: recaptchaToken
      }).then(function () {
        _this.$router.push(_this.$route.query.redirect || '/profile');
      });
    },
    validate: function validate() {
      // При успешной валидации данных вызываем проверку гуглокапчи
      // если снизайдёт, то она вызовет заданный метод и передас туда гуглотокен
      if (this.$refs.form.validate()) {
        this.$refs.recaptcha.execute();
      }
    }
  },
  components: {
    VueRecaptcha: vue_recaptcha__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    // Очистка ошибок авторизации
    this.$store.dispatch('auth/clearError'); // Для Airlock CSRF Защита 

    this.$http.get('/airlock/csrf-cookie'); // Подключение гугло скрипта рекапчи

    this.$load_script('https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit');
  },
  destroyed: function destroyed() {
    // Отключение скрипта гугло рекапчи
    this.$delete_script('https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/login.vue?vue&type=template&id=6517b581& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "mx-auto my-12", attrs: { "max-width": "400" } },
    [
      _c(
        "v-card-text",
        [
          _c("div", [_vm._v("Авторизация")]),
          _vm._v(" "),
          _c(
            "v-form",
            {
              ref: "form",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.validate($event)
                }
              },
              model: {
                value: _vm.valid,
                callback: function($$v) {
                  _vm.valid = $$v
                },
                expression: "valid"
              }
            },
            [
              _c("v-text-field", {
                attrs: {
                  rules: [_vm.rules.email],
                  "prepend-icon": "mdi-email-outline",
                  label: "E-mail",
                  required: ""
                },
                model: {
                  value: _vm.email,
                  callback: function($$v) {
                    _vm.email = $$v
                  },
                  expression: "email"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  autocomplete: "current-password",
                  "prepend-icon": "mdi-key-variant",
                  label: "Пароль",
                  "append-icon": _vm.value ? "mdi-eye" : "mdi-eye-off",
                  type: _vm.value ? "password" : "text",
                  rules: [_vm.rules.password]
                },
                on: {
                  "click:append": function() {
                    return (_vm.value = !_vm.value)
                  }
                },
                model: {
                  value: _vm.password,
                  callback: function($$v) {
                    _vm.password = $$v
                  },
                  expression: "password"
                }
              }),
              _vm._v(" "),
              _vm.error
                ? _c("v-alert", { attrs: { type: "error" } }, [
                    _vm._v(_vm._s(_vm.error))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("vue-recaptcha", {
                ref: "recaptcha",
                attrs: { size: "invisible", sitekey: _vm.captchaKey },
                on: { verify: _vm.login, expired: _vm.onCaptchaExpired }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "mt-4",
                  attrs: {
                    disabled: !_vm.valid || _vm.loading,
                    loading: _vm.loading,
                    block: "",
                    color: "success",
                    type: "submit"
                  }
                },
                [_vm._v("Войти")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c(
            "v-btn",
            {
              attrs: {
                block: "",
                color: "primary",
                text: "",
                to: { name: "register" }
              }
            },
            [_vm._v("Регистрация")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var defer = function defer() {
  var state = false; // Resolved or not

  var callbacks = [];

  var resolve = function resolve(val) {
    if (state) {
      return;
    }

    state = true;

    for (var i = 0, len = callbacks.length; i < len; i++) {
      callbacks[i](val);
    }
  };

  var then = function then(cb) {
    if (!state) {
      callbacks.push(cb);
      return;
    }

    cb();
  };

  var deferred = {
    resolved: function resolved() {
      return state;
    },
    resolve: resolve,
    promise: {
      then: then
    }
  };
  return deferred;
};

var ownProp = Object.prototype.hasOwnProperty;
function createRecaptcha() {
  var deferred = defer();
  return {
    notify: function notify() {
      deferred.resolve();
    },
    wait: function wait() {
      return deferred.promise;
    },
    render: function render(ele, options, cb) {
      this.wait().then(function () {
        cb(window.grecaptcha.render(ele, options));
      });
    },
    reset: function reset(widgetId) {
      if (typeof widgetId === 'undefined') {
        return;
      }

      this.assertLoaded();
      this.wait().then(function () {
        return window.grecaptcha.reset(widgetId);
      });
    },
    execute: function execute(widgetId) {
      if (typeof widgetId === 'undefined') {
        return;
      }

      this.assertLoaded();
      this.wait().then(function () {
        return window.grecaptcha.execute(widgetId);
      });
    },
    checkRecaptchaLoad: function checkRecaptchaLoad() {
      if (ownProp.call(window, 'grecaptcha') && ownProp.call(window.grecaptcha, 'render')) {
        this.notify();
      }
    },
    assertLoaded: function assertLoaded() {
      if (!deferred.resolved()) {
        throw new Error('ReCAPTCHA has not been loaded');
      }
    }
  };
}
var recaptcha = createRecaptcha();

if (typeof window !== 'undefined') {
  window.vueRecaptchaApiLoaded = recaptcha.notify;
}

var VueRecaptcha = {
  name: 'VueRecaptcha',
  props: {
    sitekey: {
      type: String,
      required: true
    },
    theme: {
      type: String
    },
    badge: {
      type: String
    },
    type: {
      type: String
    },
    size: {
      type: String
    },
    tabindex: {
      type: String
    },
    loadRecaptchaScript: {
      type: Boolean,
      "default": false
    },
    recaptchaScriptId: {
      type: String,
      "default": '__RECAPTCHA_SCRIPT'
    },
    recaptchaHost: {
      type: String,
      "default": 'www.google.com'
    },
    language: {
      type: String,
      "default": ''
    }
  },
  beforeMount: function beforeMount() {
    if (this.loadRecaptchaScript) {
      if (!document.getElementById(this.recaptchaScriptId)) {
        // Note: vueRecaptchaApiLoaded load callback name is per the latest documentation
        var script = document.createElement('script');
        script.id = this.recaptchaScriptId;
        script.src = "https://" + this.recaptchaHost + "/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl=" + this.language;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    recaptcha.checkRecaptchaLoad();

    var opts = _extends({}, this.$props, {
      callback: this.emitVerify,
      'expired-callback': this.emitExpired,
      'error-callback': this.emitError
    });

    var container = this.$slots["default"] ? this.$el.children[0] : this.$el;
    recaptcha.render(container, opts, function (id) {
      _this.$widgetId = id;

      _this.$emit('render', id);
    });
  },
  methods: {
    reset: function reset() {
      recaptcha.reset(this.$widgetId);
    },
    execute: function execute() {
      recaptcha.execute(this.$widgetId);
    },
    emitVerify: function emitVerify(response) {
      this.$emit('verify', response);
    },
    emitExpired: function emitExpired() {
      this.$emit('expired');
    },
    emitError: function emitError() {
      this.$emit('error');
    }
  },
  render: function render(h) {
    return h('div', {}, this.$slots["default"]);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (VueRecaptcha);


/***/ }),

/***/ "./resources/js/views/auth/login.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/auth/login.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_6517b581___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=6517b581& */ "./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_6517b581___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_6517b581___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/auth/login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/auth/login.vue?vue&type=template&id=6517b581& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6517b581___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=6517b581& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6517b581___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6517b581___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);