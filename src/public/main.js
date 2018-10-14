;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['main'],
  {
    /***/ './src/$$_lazy_route_resource lazy recursive':
      /*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function() {
            var e = new Error('Cannot find module "' + req + '".')
            e.code = 'MODULE_NOT_FOUND'
            throw e
          })
        }
        webpackEmptyAsyncContext.keys = function() {
          return []
        }
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext
        module.exports = webpackEmptyAsyncContext
        webpackEmptyAsyncContext.id =
          './src/$$_lazy_route_resource lazy recursive'

        /***/
      },

    /***/ './src/app/add-user/add-user.component.css':
      /*!*************************************************!*\
  !*** ./src/app/add-user/add-user.component.css ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = ''

        /***/
      },

    /***/ './src/app/add-user/add-user.component.html':
      /*!**************************************************!*\
  !*** ./src/app/add-user/add-user.component.html ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="col-md-6">\n  <h2 class="text-center">Add User</h2>\n  <form [formGroup]="addForm" (ngSubmit)="onSubmit()">\n    <div class="form-group">\n      <label for="email">Email address:</label>\n      <input type="email"\n             formControlName="email" placeholder="Email" name="email"\n             class="form-control" id="email">\n    </div>\n\n    <button class="btn btn-success">Create</button>\n  </form>\n</div>\n'

        /***/
      },

    /***/ './src/app/add-user/add-user.component.ts':
      /*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
      /*! exports provided: AddUserComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AddUserComponent',
          function() {
            return AddUserComponent
          },
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js',
        )
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js',
        )
        /* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../service/user.service */ './src/app/service/user.service.ts',
        )
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js',
        )
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc)
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r
            return c > 3 && r && Object.defineProperty(target, key, r), r
          }
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v)
          }
        var __awaiter =
          (undefined && undefined.__awaiter) ||
          function(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))(function(resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value))
                } catch (e) {
                  reject(e)
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value))
                } catch (e) {
                  reject(e)
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : new P(function(resolve) {
                      resolve(result.value)
                    }).then(fulfilled, rejected)
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next(),
              )
            })
          }
        var __generator =
          (undefined && undefined.__generator) ||
          function(thisArg, body) {
            var _ = {
                label: 0,
                sent: function() {
                  if (t[0] & 1) throw t[1]
                  return t[1]
                },
                trys: [],
                ops: [],
              },
              f,
              y,
              t,
              g
            return (
              (g = { next: verb(0), throw: verb(1), return: verb(2) }),
              typeof Symbol === 'function' &&
                (g[Symbol.iterator] = function() {
                  return this
                }),
              g
            )
            function verb(n) {
              return function(v) {
                return step([n, v])
              }
            }
            function step(op) {
              if (f) throw new TypeError('Generator is already executing.')
              while (_)
                try {
                  if (
                    ((f = 1),
                    y &&
                      (t =
                        y[op[0] & 2 ? 'return' : op[0] ? 'throw' : 'next']) &&
                      !(t = t.call(y, op[1])).done)
                  )
                    return t
                  if (((y = 0), t)) op = [0, t.value]
                  switch (op[0]) {
                    case 0:
                    case 1:
                      t = op
                      break
                    case 4:
                      _.label++
                      return { value: op[1], done: false }
                    case 5:
                      _.label++
                      y = op[1]
                      op = [0]
                      continue
                    case 7:
                      op = _.ops.pop()
                      _.trys.pop()
                      continue
                    default:
                      if (
                        !((t = _.trys),
                        (t = t.length > 0 && t[t.length - 1])) &&
                        (op[0] === 6 || op[0] === 2)
                      ) {
                        _ = 0
                        continue
                      }
                      if (
                        op[0] === 3 &&
                        (!t || (op[1] > t[0] && op[1] < t[3]))
                      ) {
                        _.label = op[1]
                        break
                      }
                      if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1]
                        t = op
                        break
                      }
                      if (t && _.label < t[2]) {
                        _.label = t[2]
                        _.ops.push(op)
                        break
                      }
                      if (t[2]) _.ops.pop()
                      _.trys.pop()
                      continue
                  }
                  op = body.call(thisArg, _)
                } catch (e) {
                  op = [6, e]
                  y = 0
                } finally {
                  f = t = 0
                }
              if (op[0] & 5) throw op[1]
              return { value: op[0] ? op[1] : void 0, done: true }
            }
          }

        var AddUserComponent = /** @class */ (function() {
          function AddUserComponent(formBuilder, router, userService) {
            this.formBuilder = formBuilder
            this.router = router
            this.userService = userService
          }
          AddUserComponent.prototype.ngOnInit = function() {
            this.addForm = this.formBuilder.group({
              id: [],
              email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators']
                  .required,
              ],
            })
          }
          AddUserComponent.prototype.onSubmit = function() {
            return __awaiter(this, void 0, void 0, function() {
              var user, e_1
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    _a.trys.push([0, 2, , 3])
                    return [
                      4 /*yield*/,
                      this.userService.createUser(this.addForm.value),
                    ]
                  case 1:
                    user = _a.sent()
                    this.router.navigate(['list-user'])
                    return [3 /*break*/, 3]
                  case 2:
                    e_1 = _a.sent()
                    window.alert(e_1.error.error)
                    return [3 /*break*/, 3]
                  case 3:
                    return [2 /*return*/]
                }
              })
            })
          }
          AddUserComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-add-user',
                template: __webpack_require__(
                  /*! ./add-user.component.html */ './src/app/add-user/add-user.component.html',
                ),
                styles: [
                  __webpack_require__(
                    /*! ./add-user.component.css */ './src/app/add-user/add-user.component.css',
                  ),
                ],
              }),
              __metadata('design:paramtypes', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder'],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__['Router'],
                _service_user_service__WEBPACK_IMPORTED_MODULE_2__[
                  'UserService'
                ],
              ]),
            ],
            AddUserComponent,
          )
          return AddUserComponent
        })()

        /***/
      },

    /***/ './src/app/app.component.css':
      /*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = ''

        /***/
      },

    /***/ './src/app/app.component.html':
      /*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = '<router-outlet></router-outlet>\n'

        /***/
      },

    /***/ './src/app/app.component.ts':
      /*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
      /*! exports provided: AppComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AppComponent',
          function() {
            return AppComponent
          },
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js',
        )
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc)
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r
            return c > 3 && r && Object.defineProperty(target, key, r), r
          }

        var AppComponent = /** @class */ (function() {
          function AppComponent() {
            this.title = 'app'
          }
          AppComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-root',
                template: __webpack_require__(
                  /*! ./app.component.html */ './src/app/app.component.html',
                ),
                styles: [
                  __webpack_require__(
                    /*! ./app.component.css */ './src/app/app.component.css',
                  ),
                ],
              }),
            ],
            AppComponent,
          )
          return AppComponent
        })()

        /***/
      },

    /***/ './src/app/app.module.ts':
      /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
      /*! exports provided: AppModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AppModule',
          function() {
            return AppModule
          },
        )
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/platform-browser */ './node_modules/@angular/platform-browser/fesm5/platform-browser.js',
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js',
        )
        /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app.component */ './src/app/app.component.ts',
        )
        /* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./app.routing */ './src/app/app.routing.ts',
        )
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js',
        )
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js',
        )
        /* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./add-user/add-user.component */ './src/app/add-user/add-user.component.ts',
        )
        /* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./edit-user/edit-user.component */ './src/app/edit-user/edit-user.component.ts',
        )
        /* harmony import */ var _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./list-user/list-user.component */ './src/app/list-user/list-user.component.ts',
        )
        /* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./service/user.service */ './src/app/service/user.service.ts',
        )
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc)
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r
            return c > 3 && r && Object.defineProperty(target, key, r), r
          }

        var AppModule = /** @class */ (function() {
          function AppModule() {}
          AppModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'])({
                declarations: [
                  _app_component__WEBPACK_IMPORTED_MODULE_2__['AppComponent'],
                  _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_8__[
                    'ListUserComponent'
                  ],
                  _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__[
                    'AddUserComponent'
                  ],
                  _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_7__[
                    'EditUserComponent'
                  ],
                ],
                imports: [
                  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                    'BrowserModule'
                  ],
                  _app_routing__WEBPACK_IMPORTED_MODULE_3__['routing'],
                  _angular_forms__WEBPACK_IMPORTED_MODULE_4__[
                    'ReactiveFormsModule'
                  ],
                  _angular_common_http__WEBPACK_IMPORTED_MODULE_5__[
                    'HttpClientModule'
                  ],
                ],
                providers: [
                  _service_user_service__WEBPACK_IMPORTED_MODULE_9__[
                    'UserService'
                  ],
                ],
                bootstrap: [
                  _app_component__WEBPACK_IMPORTED_MODULE_2__['AppComponent'],
                ],
              }),
            ],
            AppModule,
          )
          return AppModule
        })()

        /***/
      },

    /***/ './src/app/app.routing.ts':
      /*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
      /*! exports provided: routing */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'routing',
          function() {
            return routing
          },
        )
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js',
        )
        /* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./add-user/add-user.component */ './src/app/add-user/add-user.component.ts',
        )
        /* harmony import */ var _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./list-user/list-user.component */ './src/app/list-user/list-user.component.ts',
        )
        /* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./edit-user/edit-user.component */ './src/app/edit-user/edit-user.component.ts',
        )

        var routes = [
          {
            path: 'add-user',
            component:
              _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_1__[
                'AddUserComponent'
              ],
          },
          {
            path: 'list-user',
            component:
              _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_2__[
                'ListUserComponent'
              ],
          },
          {
            path: 'edit-user',
            component:
              _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_3__[
                'EditUserComponent'
              ],
          },
          {
            path: '',
            component:
              _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_2__[
                'ListUserComponent'
              ],
          },
        ]
        var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__[
          'RouterModule'
        ].forRoot(routes)

        /***/
      },

    /***/ './src/app/edit-user/edit-user.component.css':
      /*!***************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.css ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = ''

        /***/
      },

    /***/ './src/app/edit-user/edit-user.component.html':
      /*!****************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.html ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="col-md-6">\n  <h2 class="text-center">Edit User</h2>\n  <form [formGroup]="editForm" (ngSubmit)="onSubmit()">\n    <div class="form-group">\n      <label for="email">Email address:</label>\n      <input type="email" formControlName="email" placeholder="Email" name="email" class="form-control" id="email">\n    </div>\n    <button class="btn btn-success">Update</button>\n  </form>\n</div>\n'

        /***/
      },

    /***/ './src/app/edit-user/edit-user.component.ts':
      /*!**************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.ts ***!
  \**************************************************/
      /*! exports provided: EditUserComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'EditUserComponent',
          function() {
            return EditUserComponent
          },
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js',
        )
        /* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../service/user.service */ './src/app/service/user.service.ts',
        )
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js',
        )
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js',
        )
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc)
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r
            return c > 3 && r && Object.defineProperty(target, key, r), r
          }
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v)
          }
        var __awaiter =
          (undefined && undefined.__awaiter) ||
          function(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))(function(resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value))
                } catch (e) {
                  reject(e)
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value))
                } catch (e) {
                  reject(e)
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : new P(function(resolve) {
                      resolve(result.value)
                    }).then(fulfilled, rejected)
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next(),
              )
            })
          }
        var __generator =
          (undefined && undefined.__generator) ||
          function(thisArg, body) {
            var _ = {
                label: 0,
                sent: function() {
                  if (t[0] & 1) throw t[1]
                  return t[1]
                },
                trys: [],
                ops: [],
              },
              f,
              y,
              t,
              g
            return (
              (g = { next: verb(0), throw: verb(1), return: verb(2) }),
              typeof Symbol === 'function' &&
                (g[Symbol.iterator] = function() {
                  return this
                }),
              g
            )
            function verb(n) {
              return function(v) {
                return step([n, v])
              }
            }
            function step(op) {
              if (f) throw new TypeError('Generator is already executing.')
              while (_)
                try {
                  if (
                    ((f = 1),
                    y &&
                      (t =
                        y[op[0] & 2 ? 'return' : op[0] ? 'throw' : 'next']) &&
                      !(t = t.call(y, op[1])).done)
                  )
                    return t
                  if (((y = 0), t)) op = [0, t.value]
                  switch (op[0]) {
                    case 0:
                    case 1:
                      t = op
                      break
                    case 4:
                      _.label++
                      return { value: op[1], done: false }
                    case 5:
                      _.label++
                      y = op[1]
                      op = [0]
                      continue
                    case 7:
                      op = _.ops.pop()
                      _.trys.pop()
                      continue
                    default:
                      if (
                        !((t = _.trys),
                        (t = t.length > 0 && t[t.length - 1])) &&
                        (op[0] === 6 || op[0] === 2)
                      ) {
                        _ = 0
                        continue
                      }
                      if (
                        op[0] === 3 &&
                        (!t || (op[1] > t[0] && op[1] < t[3]))
                      ) {
                        _.label = op[1]
                        break
                      }
                      if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1]
                        t = op
                        break
                      }
                      if (t && _.label < t[2]) {
                        _.label = t[2]
                        _.ops.push(op)
                        break
                      }
                      if (t[2]) _.ops.pop()
                      _.trys.pop()
                      continue
                  }
                  op = body.call(thisArg, _)
                } catch (e) {
                  op = [6, e]
                  y = 0
                } finally {
                  f = t = 0
                }
              if (op[0] & 5) throw op[1]
              return { value: op[0] ? op[1] : void 0, done: true }
            }
          }

        var EditUserComponent = /** @class */ (function() {
          function EditUserComponent(formBuilder, router, userService) {
            this.formBuilder = formBuilder
            this.router = router
            this.userService = userService
          }
          EditUserComponent.prototype.ngOnInit = function() {
            return __awaiter(this, void 0, void 0, function() {
              var userId, user
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    userId = localStorage.getItem('editUserId')
                    if (!userId) {
                      alert('Invalid action.')
                      this.router.navigate(['list-user'])
                      return [2 /*return*/]
                    }
                    this.editForm = this.formBuilder.group({
                      id: [],
                      email: [
                        '',
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__[
                          'Validators'
                        ].required,
                      ],
                    })
                    return [4 /*yield*/, this.userService.getUserById(userId)]
                  case 1:
                    user = _a.sent()
                    this.editForm.setValue(user)
                    return [2 /*return*/]
                }
              })
            })
          }
          EditUserComponent.prototype.onSubmit = function() {
            return __awaiter(this, void 0, void 0, function() {
              var updatedUser, e_1
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    _a.trys.push([0, 2, , 3])
                    return [
                      4 /*yield*/,
                      this.userService.updateUser(this.editForm.value),
                    ]
                  case 1:
                    updatedUser = _a.sent()
                    this.router.navigate(['list-user'])
                    return [3 /*break*/, 3]
                  case 2:
                    e_1 = _a.sent()
                    window.alert(e_1.error.error)
                    return [3 /*break*/, 3]
                  case 3:
                    return [2 /*return*/]
                }
              })
            })
          }
          EditUserComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-edit-user',
                template: __webpack_require__(
                  /*! ./edit-user.component.html */ './src/app/edit-user/edit-user.component.html',
                ),
                styles: [
                  __webpack_require__(
                    /*! ./edit-user.component.css */ './src/app/edit-user/edit-user.component.css',
                  ),
                ],
              }),
              __metadata('design:paramtypes', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormBuilder'],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router'],
                _service_user_service__WEBPACK_IMPORTED_MODULE_1__[
                  'UserService'
                ],
              ]),
            ],
            EditUserComponent,
          )
          return EditUserComponent
        })()

        /***/
      },

    /***/ './src/app/list-user/list-user.component.css':
      /*!***************************************************!*\
  !*** ./src/app/list-user/list-user.component.css ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = ''

        /***/
      },

    /***/ './src/app/list-user/list-user.component.html':
      /*!****************************************************!*\
  !*** ./src/app/list-user/list-user.component.html ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="col-md-6">\n  <h2> User Details</h2>\n  <button class="btn btn-danger" (click)="addUser()"> Add User</button>\n  <table class="table table-striped">\n    <thead>\n    <tr>\n      <th class="hidden">Id</th>\n      <th>Email</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor="let user of users">\n      <td class="hidden">{{user.id}}</td>\n      <td>{{user.email}}</td>\n      <td><button class="btn btn-danger" (click)="deleteUser(user)"> Delete</button>\n        <button class="btn btn-danger" (click)="editUser(user)" style="margin-left: 20px;"> Edit</button></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n'

        /***/
      },

    /***/ './src/app/list-user/list-user.component.ts':
      /*!**************************************************!*\
  !*** ./src/app/list-user/list-user.component.ts ***!
  \**************************************************/
      /*! exports provided: ListUserComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ListUserComponent',
          function() {
            return ListUserComponent
          },
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js',
        )
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js',
        )
        /* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../service/user.service */ './src/app/service/user.service.ts',
        )
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc)
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r
            return c > 3 && r && Object.defineProperty(target, key, r), r
          }
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v)
          }
        var __awaiter =
          (undefined && undefined.__awaiter) ||
          function(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))(function(resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value))
                } catch (e) {
                  reject(e)
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value))
                } catch (e) {
                  reject(e)
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : new P(function(resolve) {
                      resolve(result.value)
                    }).then(fulfilled, rejected)
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next(),
              )
            })
          }
        var __generator =
          (undefined && undefined.__generator) ||
          function(thisArg, body) {
            var _ = {
                label: 0,
                sent: function() {
                  if (t[0] & 1) throw t[1]
                  return t[1]
                },
                trys: [],
                ops: [],
              },
              f,
              y,
              t,
              g
            return (
              (g = { next: verb(0), throw: verb(1), return: verb(2) }),
              typeof Symbol === 'function' &&
                (g[Symbol.iterator] = function() {
                  return this
                }),
              g
            )
            function verb(n) {
              return function(v) {
                return step([n, v])
              }
            }
            function step(op) {
              if (f) throw new TypeError('Generator is already executing.')
              while (_)
                try {
                  if (
                    ((f = 1),
                    y &&
                      (t =
                        y[op[0] & 2 ? 'return' : op[0] ? 'throw' : 'next']) &&
                      !(t = t.call(y, op[1])).done)
                  )
                    return t
                  if (((y = 0), t)) op = [0, t.value]
                  switch (op[0]) {
                    case 0:
                    case 1:
                      t = op
                      break
                    case 4:
                      _.label++
                      return { value: op[1], done: false }
                    case 5:
                      _.label++
                      y = op[1]
                      op = [0]
                      continue
                    case 7:
                      op = _.ops.pop()
                      _.trys.pop()
                      continue
                    default:
                      if (
                        !((t = _.trys),
                        (t = t.length > 0 && t[t.length - 1])) &&
                        (op[0] === 6 || op[0] === 2)
                      ) {
                        _ = 0
                        continue
                      }
                      if (
                        op[0] === 3 &&
                        (!t || (op[1] > t[0] && op[1] < t[3]))
                      ) {
                        _.label = op[1]
                        break
                      }
                      if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1]
                        t = op
                        break
                      }
                      if (t && _.label < t[2]) {
                        _.label = t[2]
                        _.ops.push(op)
                        break
                      }
                      if (t[2]) _.ops.pop()
                      _.trys.pop()
                      continue
                  }
                  op = body.call(thisArg, _)
                } catch (e) {
                  op = [6, e]
                  y = 0
                } finally {
                  f = t = 0
                }
              if (op[0] & 5) throw op[1]
              return { value: op[0] ? op[1] : void 0, done: true }
            }
          }

        var ListUserComponent = /** @class */ (function() {
          function ListUserComponent(router, userService) {
            this.router = router
            this.userService = userService
          }
          ListUserComponent.prototype.ngOnInit = function() {
            return __awaiter(this, void 0, void 0, function() {
              var users
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return [4 /*yield*/, this.userService.getUsers()]
                  case 1:
                    users = _a.sent()
                    this.users = users
                    return [2 /*return*/]
                }
              })
            })
          }
          ListUserComponent.prototype.deleteUser = function(user) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return [4 /*yield*/, this.userService.deleteUser(user.id)]
                  case 1:
                    _a.sent()
                    this.users = this.users.filter(function(u) {
                      return u.id !== user.id
                    })
                    return [2 /*return*/]
                }
              })
            })
          }
          ListUserComponent.prototype.editUser = function(user) {
            localStorage.removeItem('editUserId')
            localStorage.setItem('editUserId', user.id.toString())
            this.router.navigate(['edit-user'])
          }
          ListUserComponent.prototype.addUser = function() {
            this.router.navigate(['add-user'])
          }
          ListUserComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-list-user',
                template: __webpack_require__(
                  /*! ./list-user.component.html */ './src/app/list-user/list-user.component.html',
                ),
                styles: [
                  __webpack_require__(
                    /*! ./list-user.component.css */ './src/app/list-user/list-user.component.css',
                  ),
                ],
              }),
              __metadata('design:paramtypes', [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__['Router'],
                _service_user_service__WEBPACK_IMPORTED_MODULE_2__[
                  'UserService'
                ],
              ]),
            ],
            ListUserComponent,
          )
          return ListUserComponent
        })()

        /***/
      },

    /***/ './src/app/service/user.service.ts':
      /*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
      /*! exports provided: UserService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'UserService',
          function() {
            return UserService
          },
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js',
        )
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js',
        )
        /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../environments/environment */ './src/environments/environment.ts',
        )
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc)
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r
            return c > 3 && r && Object.defineProperty(target, key, r), r
          }
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v)
          }
        var __awaiter =
          (undefined && undefined.__awaiter) ||
          function(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))(function(resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value))
                } catch (e) {
                  reject(e)
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value))
                } catch (e) {
                  reject(e)
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : new P(function(resolve) {
                      resolve(result.value)
                    }).then(fulfilled, rejected)
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next(),
              )
            })
          }
        var __generator =
          (undefined && undefined.__generator) ||
          function(thisArg, body) {
            var _ = {
                label: 0,
                sent: function() {
                  if (t[0] & 1) throw t[1]
                  return t[1]
                },
                trys: [],
                ops: [],
              },
              f,
              y,
              t,
              g
            return (
              (g = { next: verb(0), throw: verb(1), return: verb(2) }),
              typeof Symbol === 'function' &&
                (g[Symbol.iterator] = function() {
                  return this
                }),
              g
            )
            function verb(n) {
              return function(v) {
                return step([n, v])
              }
            }
            function step(op) {
              if (f) throw new TypeError('Generator is already executing.')
              while (_)
                try {
                  if (
                    ((f = 1),
                    y &&
                      (t =
                        y[op[0] & 2 ? 'return' : op[0] ? 'throw' : 'next']) &&
                      !(t = t.call(y, op[1])).done)
                  )
                    return t
                  if (((y = 0), t)) op = [0, t.value]
                  switch (op[0]) {
                    case 0:
                    case 1:
                      t = op
                      break
                    case 4:
                      _.label++
                      return { value: op[1], done: false }
                    case 5:
                      _.label++
                      y = op[1]
                      op = [0]
                      continue
                    case 7:
                      op = _.ops.pop()
                      _.trys.pop()
                      continue
                    default:
                      if (
                        !((t = _.trys),
                        (t = t.length > 0 && t[t.length - 1])) &&
                        (op[0] === 6 || op[0] === 2)
                      ) {
                        _ = 0
                        continue
                      }
                      if (
                        op[0] === 3 &&
                        (!t || (op[1] > t[0] && op[1] < t[3]))
                      ) {
                        _.label = op[1]
                        break
                      }
                      if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1]
                        t = op
                        break
                      }
                      if (t && _.label < t[2]) {
                        _.label = t[2]
                        _.ops.push(op)
                        break
                      }
                      if (t[2]) _.ops.pop()
                      _.trys.pop()
                      continue
                  }
                  op = body.call(thisArg, _)
                } catch (e) {
                  op = [6, e]
                  y = 0
                } finally {
                  f = t = 0
                }
              if (op[0] & 5) throw op[1]
              return { value: op[0] ? op[1] : void 0, done: true }
            }
          }

        var UserService = /** @class */ (function() {
          function UserService(http) {
            this.http = http
            this.baseUrl =
              _environments_environment__WEBPACK_IMPORTED_MODULE_2__[
                'environment'
              ].BaseUrl + '/users'
          }
          UserService.prototype.getUsers = function() {
            return __awaiter(this, void 0, void 0, function() {
              var users
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return [
                      4 /*yield*/,
                      this.http.get(this.baseUrl).toPromise(),
                    ]
                  case 1:
                    users = _a.sent().data
                    return [2 /*return*/, users]
                }
              })
            })
          }
          UserService.prototype.getUserById = function(id) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return [
                      4 /*yield*/,
                      this.http.get(this.baseUrl + '/' + id).toPromise(),
                    ]
                  case 1:
                    return [2 /*return*/, _a.sent().data]
                }
              })
            })
          }
          UserService.prototype.createUser = function(user) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return [
                      4 /*yield*/,
                      this.http.post(this.baseUrl, user).toPromise(),
                    ]
                  case 1:
                    return [2 /*return*/, _a.sent().data]
                }
              })
            })
          }
          UserService.prototype.updateUser = function(user) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return [
                      4 /*yield*/,
                      this.http
                        .put(this.baseUrl + '/' + user.id, user)
                        .toPromise(),
                    ]
                  case 1:
                    return [2 /*return*/, _a.sent().data]
                }
              })
            })
          }
          UserService.prototype.deleteUser = function(id) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return [
                      4 /*yield*/,
                      this.http.delete(this.baseUrl + '/' + id).toPromise(),
                    ]
                  case 1:
                    return [2 /*return*/, _a.sent()]
                }
              })
            })
          }
          UserService = __decorate(
            [
              Object(
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
              )(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpClient'],
              ]),
            ],
            UserService,
          )
          return UserService
        })()

        /***/
      },

    /***/ './src/environments/environment.ts':
      /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
      /*! exports provided: environment */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'environment',
          function() {
            return environment
          },
        )
        // This file can be replaced during build by using the `fileReplacements` array.
        // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
        // The list of file replacements can be found in `angular.json`.
        var environment = {
          production: false,
          BaseUrl: 'http://localhost:3000',
        }
        /*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
        // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

        /***/
      },

    /***/ './src/main.ts':
      /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js',
        )
        /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/platform-browser-dynamic */ './node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js',
        )
        /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app/app.module */ './src/app/app.module.ts',
        )
        /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./environments/environment */ './src/environments/environment.ts',
        )

        if (
          _environments_environment__WEBPACK_IMPORTED_MODULE_3__['environment']
            .production
        ) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['enableProdMode'])()
        }
        Object(
          _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__[
            'platformBrowserDynamic'
          ],
        )()
          .bootstrapModule(
            _app_app_module__WEBPACK_IMPORTED_MODULE_2__['AppModule'],
          )
          .catch(function(err) {
            return console.log(err)
          })

        /***/
      },

    /***/ 0:
      /*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /Users/mariano/work/naturalcycles/client/src/main.ts */ './src/main.ts',
        )

        /***/
      },
  },
  [[0, 'runtime', 'vendor']],
])
//# sourceMappingURL=main.js.map
