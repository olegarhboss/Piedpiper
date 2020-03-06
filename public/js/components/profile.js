(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/UserService */ "./resources/js/services/UserService.js");
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
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      valid: true,
      token_modal: false,
      edit_modal: false,
      delete_modal: false,
      email: '',
      name: '',
      birthday: '',
      photo: [],
      // Тут простые правила валидации формы, проверка подтверждения вынесена отдельно
      rules: {
        name: function name(value) {
          return value.length <= 42 || 'Превышена допустимая длинна';
        },
        birthday: function birthday(value) {
          return value.length <= 20 || 'Превышена допустимая длинна';
        },
        photo: function photo(value) {
          return value == '' || value.size < 2000000 || 'Фото не должно превышать размер в 2 мегабайта!';
        },
        email: function email(value) {
          var pattern = /.+@.+\..+/;
          return value == '' || pattern.test(value) || 'Должен быть действительным';
        }
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', ['authUser', 'authToken', 'error', 'loading'])),
  methods: {
    // Скопировать API token в буфер обмена и закрыть модальное окно
    copyToken: function copyToken() {
      var _this = this;

      navigator.clipboard.writeText(this.authToken).then(function () {
        _this.token_modal = false;
      });
    },
    userEditor: function userEditor() {
      this.edit_modal = true, this.email = this.authUser.email;
      this.name = this.authUser.name;
      this.birthday = this.authUser.b_date;
    },
    updateProfile: function updateProfile() {
      var _this2 = this;

      var formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('email', this.email);
      formData.append('name', this.name);
      formData.append('birthday', this.birthday);
      formData.append('photo', this.photo);
      this.$store.dispatch('auth/update', formData).then(function () {
        _this2.edit_modal = false;
      });
    },
    deleteProfile: function deleteProfile() {
      var formData = new FormData();
      formData.append('_method', 'DELETE');
      this.$store.dispatch('auth/delete', formData);
      this.$router.push({
        name: 'main'
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile.vue?vue&type=template&id=7b610d0c&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile.vue?vue&type=template&id=7b610d0c& ***!
  \*****************************************************************************************************************************************************************************************************/
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
    { staticClass: "mx-auto", attrs: { "max-width": "640", outlined: "" } },
    [
      _c(
        "v-list-item",
        { attrs: { "three-line": "" } },
        [
          _c(
            "v-list-item-content",
            [
              _c("div", { staticClass: "overline mb-4" }, [
                _vm._v("Профиль пользователя")
              ]),
              _vm._v(" "),
              _c("v-list-item-title", { staticClass: "headline mb-1" }, [
                _vm._v(_vm._s(_vm.authUser.name))
              ]),
              _vm._v(" "),
              _c("v-list-item-subtitle", [
                _vm._v("E-mail: "),
                _c("b", [_vm._v(_vm._s(_vm.authUser.email))])
              ]),
              _vm._v(" "),
              _c("v-list-item-subtitle", [
                _vm._v("День рождения: "),
                _c("b", [_vm._v(_vm._s(_vm.authUser.birthday) + " г.")])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item-avatar",
            { attrs: { tile: "", size: "164", color: "grey" } },
            [
              _c("img", {
                attrs: {
                  src: _vm.authUser.photos.simple_min,
                  srcset:
                    _vm.authUser.photos.simple_full +
                    " 1x," +
                    _vm.authUser.photos.retina_full +
                    " 2x"
                }
              })
            ]
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
              attrs: { text: "" },
              on: {
                click: function($event) {
                  _vm.token_modal = true
                }
              }
            },
            [
              _c("v-icon", { attrs: { left: "" } }, [_vm._v("mdi-api")]),
              _vm._v(" token")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { text: "" }, on: { click: _vm.userEditor } },
            [
              _c("v-icon", { attrs: { left: "" } }, [
                _vm._v("mdi-account-edit")
              ]),
              _vm._v(" Редактировать")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { text: "" },
              on: {
                click: function($event) {
                  _vm.delete_modal = true
                }
              }
            },
            [
              _c("v-icon", { attrs: { left: "" } }, [
                _vm._v("mdi-account-cancel")
              ]),
              _vm._v(" Удалить профиль")
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.token_modal,
            callback: function($$v) {
              _vm.token_modal = $$v
            },
            expression: "token_modal"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v("API Token")]),
              _vm._v(" "),
              _c("v-card-text", [_c("b", [_vm._v(_vm._s(_vm.authToken))])]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    { attrs: { text: "" }, on: { click: _vm.copyToken } },
                    [
                      _c("v-icon", { attrs: { left: "" } }, [
                        _vm._v("mdi-content-copy")
                      ]),
                      _vm._v(" Скопировать")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "" },
                      on: {
                        click: function($event) {
                          _vm.token_modal = false
                        }
                      }
                    },
                    [
                      _c("v-icon", { attrs: { left: "" } }, [
                        _vm._v("mdi-close")
                      ]),
                      _vm._v(" Закрыть")
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.edit_modal,
            callback: function($$v) {
              _vm.edit_modal = $$v
            },
            expression: "edit_modal"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-form",
                {
                  ref: "form",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.updateProfile($event)
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
                  _c("v-card-title", [_vm._v("Редактор профиля")]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("v-text-field", {
                        attrs: {
                          counter: 42,
                          rules: [_vm.rules.name],
                          "prepend-icon": "mdi-account-badge-outline",
                          label: "Фамилия Имя Отчество"
                        },
                        model: {
                          value: _vm.name,
                          callback: function($$v) {
                            _vm.name = $$v
                          },
                          expression: "name"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          type: "date",
                          rules: [_vm.rules.birthday],
                          "prepend-icon": "mdi-calendar-outline",
                          label: "Дата рождения"
                        },
                        model: {
                          value: _vm.birthday,
                          callback: function($$v) {
                            _vm.birthday = $$v
                          },
                          expression: "birthday"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          rules: [_vm.rules.email],
                          "prepend-icon": "mdi-email-outline",
                          label: "E-mail"
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
                      _c("v-file-input", {
                        attrs: {
                          "show-size": "",
                          rules: [_vm.rules.photo],
                          accept: "image/png, image/jpeg",
                          placeholder: "Загрузите свою фотографию",
                          "prepend-icon": "mdi-face-recognition",
                          label: "Фото"
                        },
                        model: {
                          value: _vm.photo,
                          callback: function($$v) {
                            _vm.photo = $$v
                          },
                          expression: "photo"
                        }
                      }),
                      _vm._v(" "),
                      _vm.error
                        ? _c("v-alert", { attrs: { type: "error" } }, [
                            _vm._v(_vm._s(_vm.error))
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-center" },
                        [
                          _c(
                            "v-btn",
                            {
                              on: {
                                click: function($event) {
                                  _vm.edit_modal = false
                                }
                              }
                            },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-close")
                              ]),
                              _vm._v(" Закрыть")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                disabled: !_vm.valid || _vm.loading,
                                loading: _vm.loading,
                                color: "success",
                                type: "submit"
                              }
                            },
                            [_vm._v("Сохранить")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.delete_modal,
            callback: function($$v) {
              _vm.delete_modal = $$v
            },
            expression: "delete_modal"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v("Подтвердите удаление")]),
              _vm._v(" "),
              _c("v-card-text", [
                _c("b", [
                  _vm._v(
                    "Вы действительно хотите удалить учётную запись " +
                      _vm._s(_vm.authUser.name)
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    { attrs: { text: "" }, on: { click: _vm.deleteProfile } },
                    [
                      _c("v-icon", { attrs: { left: "" } }, [
                        _vm._v("mdi-delete-forever")
                      ]),
                      _vm._v(" Удалить")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "" },
                      on: {
                        click: function($event) {
                          _vm.delete_modal = false
                        }
                      }
                    },
                    [
                      _c("v-icon", { attrs: { left: "" } }, [
                        _vm._v("mdi-close")
                      ]),
                      _vm._v(" Закрыть")
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
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

/***/ "./resources/js/views/profile.vue":
/*!****************************************!*\
  !*** ./resources/js/views/profile.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_vue_vue_type_template_id_7b610d0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.vue?vue&type=template&id=7b610d0c& */ "./resources/js/views/profile.vue?vue&type=template&id=7b610d0c&");
/* harmony import */ var _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.vue?vue&type=script&lang=js& */ "./resources/js/views/profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profile_vue_vue_type_template_id_7b610d0c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _profile_vue_vue_type_template_id_7b610d0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/profile.vue?vue&type=template&id=7b610d0c&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/profile.vue?vue&type=template&id=7b610d0c& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_7b610d0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=template&id=7b610d0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile.vue?vue&type=template&id=7b610d0c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_7b610d0c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_7b610d0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);