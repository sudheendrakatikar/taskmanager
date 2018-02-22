webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <flash-message></flash-message>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_flash_message__ = __webpack_require__("../../../../angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_flash_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_messages_messages_component__ = __webpack_require__("../../../../../src/app/components/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashboard_task_task_component__ = __webpack_require__("../../../../../src/app/components/dashboard/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dashboard_assignment_assignment_component__ = __webpack_require__("../../../../../src/app/components/dashboard/assignment/assignment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_dashboard_report_report_component__ = __webpack_require__("../../../../../src/app/components/dashboard/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_dashboard_create_create_component__ = __webpack_require__("../../../../../src/app/components/dashboard/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_authorize_service__ = __webpack_require__("../../../../../src/app/services/authorize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            {
                path: 'tasks',
                component: __WEBPACK_IMPORTED_MODULE_16__components_dashboard_task_task_component__["a" /* TaskComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'assignments',
                component: __WEBPACK_IMPORTED_MODULE_17__components_dashboard_assignment_assignment_component__["a" /* AssignmentComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'report',
                component: __WEBPACK_IMPORTED_MODULE_18__components_dashboard_report_report_component__["a" /* ReportComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'create',
                component: __WEBPACK_IMPORTED_MODULE_19__components_dashboard_create_create_component__["a" /* CreateComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]]
            }
        ]
    },
    {
        path: 'messages',
        component: __WEBPACK_IMPORTED_MODULE_11__components_messages_messages_component__["a" /* MessagesComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'search/:keyword',
        component: __WEBPACK_IMPORTED_MODULE_12__components_search_search_component__["a" /* SearchComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'profile/:emp_id',
        component: __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__["a" /* RegisterComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_dashboard_task_task_component__["a" /* TaskComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_dashboard_assignment_assignment_component__["a" /* AssignmentComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_dashboard_report_report_component__["a" /* ReportComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_dashboard_create_create_component__["a" /* CreateComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__["a" /* RegisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_6_angular_flash_message__["FlashMessageModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_20__services_authorize_service__["a" /* AuthorizeService */],
                __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_22__services_task_service__["a" /* TaskService */],
                __WEBPACK_IMPORTED_MODULE_24__services_message_service__["a" /* MessageService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/assignment/assignment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/assignment/assignment.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">My Assignments</h2>\n<hr>\n<table class=\"table table-bordered table-striped\">\n  <tr>\n    <th>Assigned By</th>\n    <th>Client</th>\n    <th>Category</th>\n    <th>Title</th>\n    <th>Deadline</th>\n    <th>Status</th>\n    <th></th>\n  </tr>\n  <tr *ngFor=\"let assignment of assignments\" [ngClass]=\"{'table-success': assignment.status=='Completed'}\">\n    <td><a routerLink=\"\" (click)=\"viewProfile(assignment.manager[0]._id)\">{{ assignment.manager[0].name }}</a></td>\n    <td>{{ assignment.client }}</td>\n    <td>{{ assignment.category }}</td>\n    <td>{{ assignment.title }}</td>\n    <td>{{ assignment.end }}</td>\n    <td>\n      <select [(ngModel)]=\"assignment.status\" id=\"status\" name=\"status\" class=\"form-control\">\n        <option value=\"Initialized\">Initialized</option>\n        <option value=\"In Progress\">In Progress</option>\n        <option value=\"On Hold\">On Hold</option>\n        <option value=\"Cancelled\">Cancelled</option>\n        <option value=\"Completed\">Completed</option>\n      </select>\n    </td>\n    <td>\n      <input type=\"button\" (click)=\"updateTask(assignment)\" class=\"btn btn-primary\" value=\"Update\">\n    </td>\n  </tr>\n</table>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/assignment/assignment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authorize_service__ = __webpack_require__("../../../../../src/app/services/authorize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_flash_message_dist_flash_message__ = __webpack_require__("../../../../angular-flash-message/dist/flash-message.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_flash_message_dist_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_flash_message_dist_flash_message__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AssignmentComponent = /** @class */ (function () {
    function AssignmentComponent(authorize, taskService, router, flashMessage) {
        this.authorize = authorize;
        this.taskService = taskService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    AssignmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +localStorage.getItem('user_id');
        this.taskService.getAssignments(this.id)
            .subscribe(function (assignments) {
            _this.assignments = assignments;
        });
    };
    AssignmentComponent.prototype.updateTask = function (task) {
        var _this = this;
        this.taskService.updateTask(task)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.success(data.msg, { timeout: 3000 });
            }
            else {
                _this.flashMessage.danger(data.msg, { timeout: 3000 });
            }
        });
    };
    AssignmentComponent.prototype.viewProfile = function (id) {
        this.router.navigate(["profile", id]);
    };
    AssignmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-assignment',
            template: __webpack_require__("../../../../../src/app/components/dashboard/assignment/assignment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/assignment/assignment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authorize_service__["a" /* AuthorizeService */],
            __WEBPACK_IMPORTED_MODULE_3__services_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4_angular_flash_message_dist_flash_message__["FlashMessage"]])
    ], AssignmentComponent);
    return AssignmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Create Task</h2>\n<hr>\n<form class=\"well\" (submit)=\"onCreateSubmit()\">\n<div class=\"form-group\">\n<div class=\"row\">\n  <div class=\"col-md-5\">\n\n    <label for=\"client\">Client</label>\n    <input type=\"text\" [(ngModel)]=\"client\" id=\"client\" name=\"client\" class=\"form-control\" required>\n    <br>\n\n    <label for=\"category\">Category</label>\n    <select [(ngModel)]=\"category\" id=\"category\" name=\"category\" class=\"form-control\" required>\n      <option value=\"Communication\">Communication</option>\n      <option value=\"Planning\">Planning</option>\n      <option value=\"Modelling\">Modelling</option>\n      <option value=\"Construction\">Construction</option>\n      <option value=\"Deployment\">Deployment</option>\n    </select>\n    <br>\n\n    <label for=\"title\">Title</label>\n    <input type=\"text\" [(ngModel)]=\"title\" id=\"title\" name=\"title\" class=\"form-control\" required>\n    <br>\n\n    <input type=\"radio\" id=\"me\" name=\"who\" checked>\n    <label class=\"radio-inline\" for=\"me\">My Task</label>\n    <input type=\"radio\" id=\"them\" name=\"who\">\n    <label class=\"radio-inline\" for=\"them\">Assign To</label>\n    <br>\n\n    <label for=\"assign\">Assign To</label>\n    <select [(ngModel)]=\"emp_id\" id=\"assign\" name=\"assign\" class=\"form-control\" disabled>\n        <option *ngFor=\"let member of team\" value=\"{{ member._id }}\">{{ member.name }}</option>\n    </select>    \n\n  </div>\n\n  <div class=\"col-md-2\"></div>\n\n  <div class=\"col-md-5\">\n\n    <label for=\"startDate\">Start Date</label>\n    <input type=\"date\" [(ngModel)]=\"start\" id=\"start\" name=\"start\" class=\"form-control\" required>\n    <br>\n\n    <label for=\"endDate\">End Date</label>\n    <input type=\"date\" [(ngModel)]=\"end\" id=\"end\" name=\"end\" class=\"form-control\" required>\n    <br>\n\n    <input type=\"submit\" class=\"form-control btn btn-primary\" value=\"Create\" style=\"width:100px;\">\n\n  </div>\n</div>\n</div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authorize_service__ = __webpack_require__("../../../../../src/app/services/authorize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_flash_message_dist_flash_message__ = __webpack_require__("../../../../angular-flash-message/dist/flash-message.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_flash_message_dist_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_flash_message_dist_flash_message__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateComponent = /** @class */ (function () {
    function CreateComponent(authorize, validate, taskService, flashMessage, router) {
        this.authorize = authorize;
        this.validate = validate;
        this.taskService = taskService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('#me').click(function () {
            $('#assign').val('');
            $('#assign').attr('disabled', 'disabled');
        });
        $('#them').click(function () {
            $('#assign').removeAttr('disabled');
        });
        this.taskService.getTeam(localStorage.getItem('user_id'))
            .subscribe(function (data) {
            _this.team = data;
        }, function (err) {
            console.log(err);
        });
    };
    CreateComponent.prototype.clicker = function () {
        alert(this.emp_id);
    };
    CreateComponent.prototype.onCreateSubmit = function () {
        var _this = this;
        if (this.emp_id) {
            this.emp_temp = this.emp_id;
            this.mgr_temp = +localStorage.getItem('user_id');
        }
        else {
            this.emp_temp = +localStorage.getItem('user_id');
        }
        var task = {
            emp_id: this.emp_temp,
            mgr_id: this.mgr_temp,
            client: this.client,
            category: this.category,
            title: this.title,
            start: this.start,
            end: this.end,
            status: "Initialized"
        };
        if (!this.validate.validateTask(task)) {
            this.flashMessage.danger('Please fill in all the fields', { timeout: 3000 });
        }
        else {
            this.taskService.createTask(task)
                .subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.success(data.msg, { timeout: 3000 });
                    if (_this.mgr_temp) {
                        _this.router.navigate(['dashboard/report']);
                    }
                    else {
                        _this.router.navigate(['dashboard/tasks']);
                    }
                }
                else {
                    _this.flashMessage.danger(data.msg, { timeout: 3000 });
                    _this.router.navigate(['create']);
                }
            });
        }
    };
    CreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create',
            template: __webpack_require__("../../../../../src/app/components/dashboard/create/create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authorize_service__["a" /* AuthorizeService */],
            __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4__services_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_5_angular_flash_message_dist_flash_message__["FlashMessage"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \t<h2 class=\"page-header\">Dashboard</h2>\n\t<hr>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-2\">\n\t\t\t<div class=\"btn-group-vertical\">\n\t\t\t\t<a type=\"button\" class=\"btn btn-primary\" routerLink=\"tasks\">Tasks</a>\n\t\t\t\t<a type=\"button\" class=\"btn btn-primary\" routerLink=\"assignments\">Assignments</a>\n\t\t\t\t<a type=\"button\" class=\"btn btn-primary\" routerLink=\"report\">Reports</a>\n\t\t\t\t<a type=\"button\" class=\"btn btn-primary\" routerLink=\"create\">Create</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-10\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/report/report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">My Reports</h2>\n<hr>\n<table class=\"table table-bordered table-striped\">\n  <tr>\n    <th>Assigned To</th>\n    <th>Client</th>\n    <th>Category</th>\n    <th>Title</th>\n    <th>Deadline</th>\n    <th>Status</th>\n    <th>Delete</th>\n  </tr>\n  <tr *ngFor=\"let report of reports\" [ngClass]=\"{'table-success': report.status=='Completed', 'table-danger': report.status=='Cancelled'}\">\n    <td><a routerLink=\"\" (click)=\"viewProfile(report.reporter[0]._id)\">{{ report.reporter[0].name }}</a></td>\n    <td>{{ report.client }}</td>\n    <td>{{ report.category }}</td>\n    <td>{{ report.title }}</td>\n    <td>{{ report.end }}</td>\n    <td>{{ report.status }}</td>\n    <td><input type=\"button\" (click)=\"deleteReport(report._id)\" class=\"btn btn-primary\" value=\"Delete\"></td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authorize_service__ = __webpack_require__("../../../../../src/app/services/authorize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_flash_message_dist_flash_message__ = __webpack_require__("../../../../angular-flash-message/dist/flash-message.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_flash_message_dist_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_flash_message_dist_flash_message__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportComponent = /** @class */ (function () {
    function ReportComponent(authorize, taskService, router, flashMessage) {
        this.authorize = authorize;
        this.taskService = taskService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +localStorage.getItem('user_id');
        this.authorize.getProfile()
            .subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.taskService.getReport(this.id)
            .subscribe(function (reports) {
            _this.reports = reports;
        });
    };
    ReportComponent.prototype.deleteReport = function (report_id) {
        var reports = this.reports;
        this.taskService.deleteTask(report_id)
            .subscribe(function (data) {
            for (var i = 0; i < reports.length; i++) {
                if (reports[i]._id == report_id) {
                    reports.splice(i, 1);
                }
            }
        });
        this.flashMessage.success('Report deleted.', { timeout: 3000 });
    };
    ReportComponent.prototype.viewProfile = function (name) {
        this.router.navigate(["profile", name]);
    };
    ReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report',
            template: __webpack_require__("../../../../../src/app/components/dashboard/report/report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authorize_service__["a" /* AuthorizeService */],
            __WEBPACK_IMPORTED_MODULE_3__services_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4_angular_flash_message_dist_flash_message__["FlashMessage"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/task/task.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/task/task.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">My Tasks</h2>\n<hr>\n<table class=\"table table-bordered table-striped\">\n  <tr>\n    <th>Client</th>\n    <th>Category</th>\n    <th>Title</th>\n    <th>Deadline</th>\n    <th>Status</th>\n    <th>Update</th>\n    <th>Delete</th>\n  </tr>\n  <tr *ngFor=\"let task of tasks\" [ngClass]=\"{'table-success': task.status=='Completed'}\">\n    <td>{{ task.client }}</td>\n    <td>{{ task.category }}</td>\n    <td>{{ task.title }}</td>\n    <td>{{ task.end }}</td>\n    <td>\n      <select [(ngModel)]=\"task.status\" id=\"status\" name=\"status\" class=\"form-control\">\n        <option value=\"Initialized\">Initialized</option>\n        <option value=\"In Progress\">In Progress</option>\n        <option value=\"On Hold\">On Hold</option>\n        <option value=\"Cancelled\">Cancelled</option>\n        <option value=\"Completed\">Completed</option>\n      </select>\n    </td>\n    <td>\n      <input type=\"button\" (click)=\"updateTask(task)\" class=\"btn btn-primary\" value=\"Update\">\n    </td>\n    <td>\n      <input type=\"button\" (click)=\"deleteTask(task._id)\" class=\"btn btn-primary\" value=\"Delete\">\n    </td>\n  </tr>\n</table>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/task/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authorize_service__ = __webpack_require__("../../../../../src/app/services/authorize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_flash_message_dist_flash_message__ = __webpack_require__("../../../../angular-flash-message/dist/flash-message.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_flash_message_dist_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_flash_message_dist_flash_message__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskComponent = /** @class */ (function () {
    function TaskComponent(authorize, taskService, router, flashMessage) {
        this.authorize = authorize;
        this.taskService = taskService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +localStorage.getItem('user_id');
        this.taskService.getTasks(this.id)
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    };
    TaskComponent.prototype.deleteTask = function (task_id) {
        var tasks = this.tasks;
        this.taskService.deleteTask(task_id)
            .subscribe(function (data) {
            for (var i = 0; i < tasks.length; i++) {
                if (tasks[i]._id == task_id) {
                    tasks.splice(i, 1);
                }
            }
        });
        this.flashMessage.success('Task deleted.', { timeout: 3000 });
    };
    TaskComponent.prototype.updateTask = function (task) {
        var _this = this;
        this.taskService.updateTask(task)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.success(data.msg, { timeout: 3000 });
            }
            else {
                _this.flashMessage.danger(data.msg, { timeout: 3000 });
            }
        });
    };
    TaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task',
            template: __webpack_require__("../../../../../src/app/components/dashboard/task/task.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authorize_service__["a" /* AuthorizeService */],
            __WEBPACK_IMPORTED_MODULE_3__services_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4_angular_flash_message_dist_flash_message__["FlashMessage"]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n    <h3>SquareOne, Inc.</h3>\n    <hr>\n    <h1><i class=\"fa fa-tasks\"></i> TaskManager <i class=\"fa fa-check-square-o\"></i></h1>\n  </div>\n  <div class=\"row\">\n  <div class=\"col-md-6\">\n    <h3>Welcome!</h3>\n    <br>\n    <dl>\n      <dt>You can use TaskManager to:</dt>\n      <dd>- Create tasks for yourself.</dd>\n      <dd>- Assign tasks to your team.</dd>\n      <dd>- Search for individuals within your organisation.</dd>\n    </dl>\n  </div>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authorize_service__ = __webpack_require__("../../../../../src/app/services/authorize.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authorize) {
        this.authorize = authorize;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authorize_service__["a" /* AuthorizeService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<h2 class=\"page-header\">Login</h2>\n<hr>\n<form class=\"well\" (submit)=\"onLoginSubmit()\">\n  <label for=\"username\">Username</label>\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" id=\"username\" name=\"username\"  placeholder=\"Your username...\" required style=\"width: 400px\">\n  <br>\n  <label for=\"password\">Password</label>\n  <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" id=\"password\" name=\"password\" placeholder=\"Your password...\" required style=\"width: 400px\">\n  <br>\n  <input type=\"submit\" class=\"form-control btn btn-primary\" value=\"Login\" style=\"width:100px;\">\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__ = __webpack_require__("../../../../angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_flash_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authorize_service__ = __webpack_require__("../../../../../src/app/services/authorize.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(validate, authorize, router, flashMessage) {
        this.validate = validate;
        this.authorize = authorize;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        if (!this.validate.validateLogin(user)) {
            this.flashMessage.danger('Please fill in all the fields', { timeout: 3000 });
        }
        else {
            this.authorize.authenticateUser(user)
                .subscribe(function (data) {
                if (data.success) {
                    _this.authorize.storeUserData(data.token, user, data.user.user_id);
                    _this.flashMessage.success('Welcome, ' + user.username, { timeout: 3000 });
                    _this.router.navigate(['dashboard/tasks']);
                }
                else {
                    _this.flashMessage.danger(data.msg, { timeout: 3000 });
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4__services_authorize_service__["a" /* AuthorizeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__["FlashMessage"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<h2 class=\"page-header\">Messages</h2>\n<hr>\n<table class=\"table table-bordered table-striped\">\n  <tr>\n    <th>From</th>\n    <th>Subject</th>\n    <th>Message</th>\n    <th>Date</th>\n    <th>Clear</th>\n  </tr>\n  <tr *ngFor=\"let message of messages\">\n    <td>\n      <a routerLink=\"\" (click)=\"viewProfile(message.from[0]._id)\">{{ message.from[0].name }}</a>\n    </td>\n    <td>{{ message.subject }}</td>\n    <td>\n      <textarea [(ngModel)]=\"message.message\" class=\"form-control\" style=\"resize: none;\" disabled></textarea>\n    </td>\n    <td>{{ message.date.substring(0,10) }}&nbsp;@&nbsp;{{ message.date.substring(11,16) }}</td>\n    <td>\n      <button class=\"btn btn-primary\" (click)=\"deleteMessage(message._id)\"><i class=\"fa fa-close fa-lg\"></i></button>\n    </td>\n  </tr>\n</table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_flash_message__ = __webpack_require__("../../../../angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_flash_message__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(router, messageService, flashMessage) {
        this.router = router;
        this.messageService = messageService;
        this.flashMessage = flashMessage;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +localStorage.getItem('user_id');
        this.messageService.receiveMessages(this.id)
            .subscribe(function (messages) {
            _this.messages = messages;
        });
    };
    MessagesComponent.prototype.viewProfile = function (id) {
        this.router.navigate(["profile", id]);
    };
    MessagesComponent.prototype.deleteMessage = function (msg_id) {
        var messages = this.messages;
        this.messageService.deleteMessage(msg_id)
            .subscribe(function (data) {
            for (var i = 0; i < messages.length; i++) {
                if (messages[i]._id == msg_id) {
                    messages.splice(i, 1);
                }
            }
        });
        this.flashMessage.danger('Message deleted.', { timeout: 3000 });
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/components/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3_angular_flash_message__["FlashMessage"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark\">\n\t<div class=\"container\">\n\t<ul class=\"nav navbar-nav navbar-left\">\n\t\t<li class=\"nav-item\">\n\t\t\t<a class=\"nav-link\" routerLink=\"\">Home&nbsp;&nbsp;<i class=\"fa fa-home\"></i></a>\n\t\t</li>\n\t\t<li *ngIf=\"authorize.loggedIn()\" class=\"nav-item\">\n\t\t\t<a class=\"nav-link\" routerLink=\"dashboard/tasks\">Dashboard&nbsp;&nbsp;<i class=\"fa fa-dashboard\"></i></a>\n\t\t</li>\n\t\t<li *ngIf=\"authorize.loggedIn()\" class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"messages\">Messages&nbsp;&nbsp;<i class=\"fa fa-envelope\"></i></a>\n\t\t</li>\n\t\t<form *ngIf=\"authorize.loggedIn()\" class=\"form-inline\" (submit)=\"search()\" style=\"padding-left: 100px\">\n\t\t\t<input class=\"form-control mr-sm-2\" type=\"text\" [(ngModel)]=\"keyword\" name=\"keyword\" placeholder=\"Search..\">\n\t\t\t<input type=\"submit\" class=\"form-control btn btn-primary\" value=\"Search\">\n\t\t</form>\n\t</ul>\n\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t<li *ngIf=\"!authorize.loggedIn()\" class=\"nav-item\">\n\t\t\t<a class=\"nav-link\" routerLink=\"login\">Login</a>\n\t\t</li>\n\t\t<li *ngIf=\"!authorize.loggedIn()\" class=\"nav-item\">\n\t\t\t<a class=\"nav-link\" routerLink=\"register\">Register</a>\n\t\t</li>\n\t\t<li *ngIf=\"authorize.loggedIn()\" class=\"nav-item\">\n\t\t\t<a class=\"nav-link\" routerLink=\"\" (click)=\"viewProfile()\">Profile&nbsp;&nbsp;<i class=\"fa fa-user\"></i></a>\n\t\t</li>\n\t\t<li *ngIf=\"authorize.loggedIn()\" class=\"nav-item\">\n\t\t\t<a class=\"nav-link\" href=\"#\" (click)=\"onLogout()\">Logout&nbsp;&nbsp;<i class=\"fa fa-power-off\"></i></a>\n\t\t</li>\n\t</ul>\n\t</div>\n</nav>\n<br>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authorize_service__ = __webpack_require__("../../../../../src/app/services/authorize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_flash_message_dist_flash_message__ = __webpack_require__("../../../../angular-flash-message/dist/flash-message.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_flash_message_dist_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_flash_message_dist_flash_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authorize, messageService, router, flashMessage) {
        this.authorize = authorize;
        this.messageService = messageService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.user = {};
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.viewProfile = function () {
        this.router.navigate(["profile", +localStorage.getItem('user_id')]);
    };
    NavbarComponent.prototype.search = function () {
        this.router.navigate(["search", this.keyword]);
    };
    NavbarComponent.prototype.onLogout = function () {
        var user = localStorage.getItem('user');
        this.flashMessage.success('Bye, ', { timeout: 3000 });
        this.authorize.logout();
        this.router.navigate(['login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authorize_service__["a" /* AuthorizeService */],
            __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3_angular_flash_message_dist_flash_message__["FlashMessage"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"employee\">\r\n    <div align=\"center\">\r\n    <img class=\"rounded-circle\" src=\"../../../assets/profile_picture.png\" height=\"150\">\r\n    <br><br>\r\n    <h2 class=\"page-header\">{{ employee.name }}</h2>\r\n    <h4>{{ employee.designation }}</h4>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-1\">\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n            <dl>\r\n                <dt>\r\n                    Email&nbsp;<i class=\"fa fa-envelope\"></i>\r\n                </dt>\r\n                <dd>\r\n                    <a href=\"mailto: employee.email\">{{ employee.email }}</a>\r\n                </dd>\r\n                <dt>\r\n                    Phone&nbsp;<i class=\"fa fa-phone\"></i>\r\n                </dt>\r\n                <dd>\r\n                    <a href=\"tel: employee.contact\">{{ employee.contact }}</a>\r\n                </dd>\r\n            </dl>\r\n        </div>\r\n        <div class=\"col-md-6\" *ngIf=\"!myProfile()\">\r\n            <h5>Send Message</h5>\r\n            <form class=\"well\" (submit)=\"sendMessage()\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"subject\" id=\"subject\" name=\"subject\" placeholder=\"Subject...\">\r\n            <br>\r\n            <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"message\" id=\"message\" name=\"message\" placeholder=\"Your message...\">\r\n            </textarea>\r\n            <br>\r\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Send\">\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authorize_service__ = __webpack_require__("../../../../../src/app/services/authorize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_flash_message__ = __webpack_require__("../../../../angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_flash_message__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, route, authorize, messageService, flashMessage) {
        this.router = router;
        this.route = route;
        this.authorize = authorize;
        this.messageService = messageService;
        this.flashMessage = flashMessage;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.emp_id = +params.get('emp_id');
            _this.authorize.getEmployeeData(_this.emp_id)
                .subscribe(function (employee) {
                _this.employee = employee;
            });
        });
    };
    ProfileComponent.prototype.myProfile = function () {
        if (this.emp_id == +localStorage.getItem('user_id')) {
            return true;
        }
        else {
            return false;
        }
    };
    ProfileComponent.prototype.sendMessage = function () {
        var _this = this;
        var newMessage = {
            to: this.emp_id,
            from: +localStorage.getItem('user_id'),
            subject: this.subject,
            message: this.message,
            date: new Date(),
            read: false
        };
        this.messageService.sendMessage(newMessage)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.success(data.msg, { timeout: 3000 });
            }
            else {
                _this.flashMessage.danger(data.msg, { timeout: 3000 });
            }
        });
        this.subject = '';
        this.message = '';
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__services_authorize_service__["a" /* AuthorizeService */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4_angular_flash_message__["FlashMessage"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form class=\"well\" (submit)=\"onRegisterSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"name\" placeholder=\"Your name...\" required>\n        <br>\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"username\" placeholder=\"Your username...\" required>\n        <br>\n        <label for=\"email\">Email</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Your email...\" required>\n        <br>\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Your password...\" required>\n        <br>\n        <input type=\"submit\" class=\"form-control btn btn-primary\" value=\"Register\" style=\"width:100px;\">\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authorize_service__ = __webpack_require__("../../../../../src/app/services/authorize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_flash_message_dist_flash_message__ = __webpack_require__("../../../../angular-flash-message/dist/flash-message.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_flash_message_dist_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_flash_message_dist_flash_message__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validate, authorize, flashMessage, router) {
        this.validate = validate;
        this.authorize = authorize;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            _id: 1004,
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        if (!this.validate.validateRegister(user)) {
            this.flashMessage.danger('Please fill in all the fields', { timeout: 3000 });
        }
        else {
            this.authorize.registerUser(user)
                .subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.success('You have registered!', { timeout: 3000 });
                    _this.router.navigate(['login']);
                }
                else {
                    _this.flashMessage.danger('Something went wrong. Please try again.', { timeout: 3000 });
                    _this.router.navigate(['register']);
                }
            });
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3__services_authorize_service__["a" /* AuthorizeService */],
            __WEBPACK_IMPORTED_MODULE_4_angular_flash_message_dist_flash_message__["FlashMessage"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h3 class=\"page-header\">Search Results for \"{{ keyword }}\"</h3>\n\t<hr>\n\t<dl *ngFor=\"let result of results\">\n\t\t<dt><a routerLink=\"\" (click)=\"viewProfile(result._id)\">{{ result.name }}</a></dt>\n\t\t<dd>- {{ result. designation }}</dd>\n\t</dl>\n\t\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authorize_service__ = __webpack_require__("../../../../../src/app/services/authorize.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(router, route, authorize) {
        this.router = router;
        this.route = route;
        this.authorize = authorize;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.keyword = params.get('keyword');
            _this.authorize.search(_this.keyword)
                .subscribe(function (results) {
                _this.results = results;
            });
        });
    };
    SearchComponent.prototype.viewProfile = function (id) {
        this.router.navigate(["profile", id]);
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__services_authorize_service__["a" /* AuthorizeService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authorize_service__ = __webpack_require__("../../../../../src/app/services/authorize.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authorize, router) {
        this.authorize = authorize;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authorize.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authorize_service__["a" /* AuthorizeService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/authorize.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthorizeService = /** @class */ (function () {
    function AuthorizeService(http) {
        this.http = http;
    }
    AuthorizeService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthorizeService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthorizeService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthorizeService.prototype.getEmployeeData = function (emp_id) {
        return this.http.get('http://localhost:3000/employees/profile/' + emp_id)
            .map(function (res) { return res.json(); });
    };
    AuthorizeService.prototype.search = function (keyword) {
        return this.http.get('http://localhost:3000/employees/search/' + keyword)
            .map(function (res) { return res.json(); });
    };
    AuthorizeService.prototype.storeUserData = function (token, user, user_id) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('user_id', user_id);
        this.authToken = token;
        this.user = user;
    };
    AuthorizeService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthorizeService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthorizeService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthorizeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthorizeService);
    return AuthorizeService;
}());



/***/ }),

/***/ "../../../../../src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.sendMessage = function (message) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/messages/send', message, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessageService.prototype.receiveMessages = function (id) {
        return this.http.get('http://localhost:3000/messages/receive/' + id)
            .map(function (res) { return res.json(); });
    };
    MessageService.prototype.deleteMessage = function (id) {
        return this.http.get('http://localhost:3000/messages/delete/' + id)
            .map(function (res) { return res.json(); });
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
    }
    TaskService.prototype.createTask = function (task) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/create', task, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.getTasks = function (emp_id) {
        return this.http.get('http://localhost:3000/api/tasks/' + emp_id)
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.getAssignments = function (emp_id) {
        return this.http.get('http://localhost:3000/api/assignments/' + emp_id)
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.getReport = function (emp_id) {
        return this.http.get('http://localhost:3000/api/report/' + emp_id)
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.deleteTask = function (task_id) {
        return this.http.get('http://localhost:3000/api/delete/' + task_id)
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.updateTask = function (task) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/update', task, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.getTeam = function (mgr_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/employees/team/' + mgr_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateTask = function (task) {
        if (task.client == undefined || task.category == undefined || task.title == undefined ||
            task.start == undefined || task.end == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map