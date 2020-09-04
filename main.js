(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");





const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _common_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/utility.service */ "./src/app/common/utility.service.ts");
/* harmony import */ var _common_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/component/nav/nav.component */ "./src/app/common/component/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _common_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/component/footer/footer.component */ "./src/app/common/component/footer/footer.component.ts");








class AppComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
        this.title = 'ui';
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init({ duration: 2400 });
        this.utilityService
            .getSettings()
            .pipe()
            .subscribe((url) => {
            this.utilityService.defaultUrl = url.defaultUrl;
            console.log(this.utilityService.defaultUrl);
        }, (error) => { });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_common_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _common_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: [".main-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _common_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _common_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/utility.service */ "./src/app/common/utility.service.ts");
/* harmony import */ var _common_intercepter_httpinterceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/intercepter/httpinterceptor */ "./src/app/common/intercepter/httpinterceptor.ts");
/* harmony import */ var _common_intercepter_errorInterceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/intercepter/errorInterceptor */ "./src/app/common/intercepter/errorInterceptor.ts");
/* harmony import */ var _common_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/component/nav/nav.component */ "./src/app/common/component/nav/nav.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _common_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/component/footer/footer.component */ "./src/app/common/component/footer/footer.component.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13__);
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _common_intercepter_httpinterceptor__WEBPACK_IMPORTED_MODULE_7__["AuthTokenInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _common_intercepter_errorInterceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"], multi: true },
        _common_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13__["OwlModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _common_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _common_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13__["OwlModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _common_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                    _common_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13__["OwlModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _common_intercepter_httpinterceptor__WEBPACK_IMPORTED_MODULE_7__["AuthTokenInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _common_intercepter_errorInterceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"], multi: true },
                    _common_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/common/component/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/component/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[1, "footer"], [1, "container"], [1, "row"], [1, "copyright", "mb-0"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A9 Copyrights reserved Vrushabha 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  padding: 1em 0;\n  background-color: #EA6625;\n  color: #FFF;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vY29tcG9uZW50L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgcGFkZGluZzogMWVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUE2NjI1O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbn1cclxuLmNvcHlyaWdodHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5mb290ZXIgcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/common/component/nav/nav.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/component/nav/nav.component.ts ***!
  \*******************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "active": a0 }; };
class NavComponent {
    constructor() {
        this.selection = 1;
    }
    ngOnInit() {
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 28, vars: 18, consts: [["id", "ftco-navbar", 1, "navbar", "navbar-expand-lg", "navbar-dark", "ftco_navbar", "ftco-navbar-light"], [1, "row"], [1, "col-12", "org-baground"], [1, "col-12", "container-fluid", 2, "height", "9rem"], ["href", "index.html", 1, "navbar-brand", "img", "logo", 2, "background-image", "url(assets/images/vrushubha/logo.svg)"], ["type", "button", "data-toggle", "collapse", "data-target", "#ftco-nav", "aria-controls", "ftco-nav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "fa", "fa-bars"], ["id", "ftco-nav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], [1, "nav-link", 3, "ngClass", "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_11_listener() { return ctx.selection = 1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_14_listener() { return ctx.selection = 2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ABOUT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_17_listener() { return ctx.selection = 3; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ATTRACTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_20_listener() { return ctx.selection = 4; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "FACILITIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_23_listener() { return ctx.selection = 5; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "GALLERY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_26_listener() { return ctx.selection = 6; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "CONTACT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.selection == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.selection == 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.selection == 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.selection == 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.selection == 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.selection == 6));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ɵm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%], .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #02020269 !important;\n  z-index: 100;\n}\n\n.org-baground[_ngcontent-%COMP%] {\n  height: 11px;\n  width: 100vw !important;\n  position: relative;\n  background: #EA6625;\n  margin-top: -8px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 279px;\n  height: 100px;\n  margin-left: 8%;\n}\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.show[_ngcontent-%COMP%], .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #000 !important;\n  font-weight: 900 !important;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%] {\n  background: #fff !important;\n  z-index: 3;\n  padding: 0;\n  box-shadow: 0 5px 20px -17px rgba(0, 0, 0, 0.34);\n}\n\n@media (max-width: 991.98px) {\n  .ftco-navbar-light[_ngcontent-%COMP%] {\n    background: #fff;\n    position: relative;\n    top: 0;\n    padding: 10px 15px;\n  }\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: #000000;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 1;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #EA6625;\n  position: relative;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover, .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus {\n  color: #000000;\n}\n\n@media (max-width: 991.98px) {\n  .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  font-size: 17px;\n  padding: 1rem 2vw;\n  font-weight: 900;\n  color: #9a9898;\n  position: relative;\n  opacity: 1 !important;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 7px;\n  bottom: 0;\n  left: 0;\n  background-color: #EA6625;\n  visibility: hidden;\n  transform: scaleX(0);\n  transition: all 0.5s ease-in-out 0s;\n  z-index: -1;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:hover {\n  font-weight: 900;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:hover:before, .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]    > .nav-link.active[_ngcontent-%COMP%]::before {\n  visibility: visible;\n  background-color: #EA6625;\n  transform: scaleX(0.8);\n}\n\n@media (max-width: 991.98px) {\n  .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n    padding: 0.7rem 0;\n    color: rgba(0, 0, 0, 0.7);\n  }\n\n  .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:hover {\n    color: #fff;\n  }\n\n  .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:hover:before {\n    display: none;\n  }\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border: none;\n  background: #fff;\n  box-shadow: 0 10px 34px -20px rgba(0, 0, 0, 0.41);\n  border-radius: 4px;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #000000;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus {\n  background: #EA6625;\n  color: #fff;\n}\n\n@media (max-width: 991.98px) {\n  .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    display: block !important;\n    background: #fff;\n    box-shadow: none;\n  }\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item.cta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #EA6625;\n  border-radius: 0;\n}\n\n@media (max-width: 767.98px) {\n  .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item.cta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item.cta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: #fff;\n    background: #EA6625;\n    border-radius: 4px;\n  }\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #EA6625;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:before {\n  visibility: visible;\n  background-color: #EA6625;\n  transform: scaleX(1);\n}\n\n@media (max-width: 991.98px) {\n  .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: #000000;\n  }\n\n  .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:before {\n    display: none;\n  }\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  border: none;\n  color: rgba(0, 0, 0, 0.5) !important;\n  cursor: pointer;\n  padding-right: 0;\n  text-transform: uppercase;\n  font-size: 16px;\n  letter-spacing: 0.1em;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKOztBQUFBO0VBQ0ksc0NBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhBOzs7O0VBSUksc0JBQUE7RUFDQSwyQkFBQTtBQU1KOztBQUZBO0VBQ0ksMkJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUdBLGdEQUFBO0FBS0o7O0FBSEE7RUFDSTtJQUNJLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxNQUFBO0lBQ0Esa0JBQUE7RUFNTjtBQUNGOztBQUpBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFNSjs7QUFKQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUxBOztFQUVJLGNBQUE7QUFRSjs7QUFOQTtFQUNJO0lBQ0ksb0JBQUE7RUFTTjtBQUNGOztBQVBBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFHQSxvQkFBQTtFQUdBLG1DQUFBO0VBQ0EsV0FBQTtBQVVKOztBQVJBO0VBQ0ksZ0JBQUE7QUFXSjs7QUFUQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSxzQkFBQTtBQVlKOztBQVZBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLHlCQUFBO0VBYU47O0VBWEU7SUFDSSxXQUFBO0VBY047O0VBWkU7SUFDSSxhQUFBO0VBZU47QUFDRjs7QUFiQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUdBLGlEQUFBO0VBQ0Esa0JBQUE7QUFlSjs7QUFiQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBZ0JKOztBQWRBOztFQUVJLG1CQUFBO0VBQ0EsV0FBQTtBQWlCSjs7QUFmQTtFQUNJO0lBQ0kseUJBQUE7SUFDQSxnQkFBQTtJQUVBLGdCQUFBO0VBa0JOO0FBQ0Y7O0FBaEJBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFrQko7O0FBaEJBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0VBbUJOO0FBQ0Y7O0FBakJBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQW1CTjtBQUNGOztBQWpCQTtFQUNJLGNBQUE7QUFtQko7O0FBakJBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUdBLG9CQUFBO0FBb0JKOztBQWxCQTtFQUNJO0lBQ0ksY0FBQTtFQXFCTjs7RUFuQkU7SUFDSSxhQUFBO0VBc0JOO0FBQ0Y7O0FBcEJBO0VBQ0ksWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFzQko7O0FBcEJBO0VBQ0ksd0JBQUE7QUF1QkoiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vY29tcG9uZW50L25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWxpZ2h0IC5uYXZiYXItYnJhbmQsXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLmFjdGl2ZSA+IC5uYXYtbGluayxcclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLmFjdGl2ZSA+IC5uYXYtbGluayB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYmctbGlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDIwMjY5ICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuLm9yZy1iYWdyb3VuZCB7XHJcbiAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNFQTY2MjU7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG59XHJcbi5sb2dvIHtcclxuICAgIHdpZHRoOiAyNzlweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOCU7XHJcbn1cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5zaG93ID4gLm5hdi1saW5rLFxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLmFjdGl2ZSA+IC5uYXYtbGluayxcclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluay5zaG93LFxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmZ0Y28tbmF2YmFyLWxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAyMHB4IC0xN3B4IHJnYmEoMCwgMCwgMCwgMC4zNCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgNXB4IDIwcHggLTE3cHggcmdiYSgwLCAwLCAwLCAwLjM0KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggLTE3cHggcmdiYSgwLCAwLCAwLCAwLjM0KTtcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gICAgLmZ0Y28tbmF2YmFyLWxpZ2h0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgfVxyXG59XHJcbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLWJyYW5kIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLWJyYW5kIHNwYW4ge1xyXG4gICAgY29sb3I6ICNFQTY2MjU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmZ0Y28tbmF2YmFyLWxpZ2h0IC5uYXZiYXItYnJhbmQ6aG92ZXIsXHJcbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLWJyYW5kOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgICAuZnRjby1uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSA+IC5uYXYtbGluayB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJ2dztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogIzlhOTg5ODtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxufVxyXG4uZnRjby1uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgPiAubmF2LWl0ZW0gPiAubmF2LWxpbms6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogN3B4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQTY2MjU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0IDBzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQgMHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dCAwcztcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSA+IC5uYXYtbGluazpob3ZlciB7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSA+IC5uYXYtbGluazpob3ZlcjpiZWZvcmUsIC5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSA+IC5uYXYtbGluay5hY3RpdmU6OmJlZm9yZSB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VBNjYyNTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLjgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVYKC44KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC44KTtcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gICAgLmZ0Y28tbmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2ID4gLm5hdi1pdGVtID4gLm5hdi1saW5rIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMDtcclxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgfVxyXG4gICAgLmZ0Y28tbmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2ID4gLm5hdi1pdGVtID4gLm5hdi1saW5rOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSA+IC5uYXYtbGluazpob3ZlcjpiZWZvcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuLmZ0Y28tbmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2ID4gLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzNHB4IC0yMHB4IHJnYmEoMCwgMCwgMCwgMC40MSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCAzNHB4IC0yMHB4IHJnYmEoMCwgMCwgMCwgMC40MSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzRweCAtMjBweCByZ2JhKDAsIDAsIDAsIDAuNDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4uZnRjby1uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgPiAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06aG92ZXIsXHJcbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUE2NjI1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxuICAgIC5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG59XHJcbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbS5jdGEgPiBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogI0VBNjYyNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIC5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbS5jdGEgPiBhIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gICAgLmZ0Y28tbmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2ID4gLm5hdi1pdGVtLmN0YSA+IGEge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNFQTY2MjU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG59XHJcbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbS5hY3RpdmUgPiBhIHtcclxuICAgIGNvbG9yOiAjRUE2NjI1O1xyXG59XHJcbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbS5hY3RpdmUgPiBhOmJlZm9yZSB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VBNjYyNTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gICAgLmZ0Y28tbmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2ID4gLm5hdi1pdGVtLmFjdGl2ZSA+IGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG4gICAgLmZ0Y28tbmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2ID4gLm5hdi1pdGVtLmFjdGl2ZSA+IGE6YmVmb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbn1cclxuLmZ0Y28tbmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/common/intercepter/errorInterceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/common/intercepter/errorInterceptor.ts ***!
  \********************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




// import { AuthenticationService } from '../services/authentication.service';
class ErrorInterceptor {
    constructor() { }
    intercept(request, newRequest) {
        return newRequest.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 401) {
                let sessionId = localStorage.getItem('SessionID');
                // this.authenticationService.logout(sessionId);
                if (err.error && err.error.Code == 409)
                    err.message = 'There are currently multiple sessions logged in with this username. Please login again.';
                else
                    err.message = 'Session timed out. Please login again';
            }
            else if (err.status === 417) {
                err.message = err.statusText;
            }
            else {
                // const error = err.error.message || err.statusText;
                err.message = 'Server failed to respond.';
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(err);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/common/intercepter/httpinterceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/intercepter/httpinterceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTokenInterceptor", function() { return AuthTokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility.service */ "./src/app/common/utility.service.ts");

// import { LoaderService } from '../common/loader.service';



class AuthTokenInterceptor {
    constructor(utilityService) {
        this.utilityService = utilityService;
        this.totalRequests = 0;
    }
    intercept(request, newRequest) {
        let tokenInfo = JSON.parse(localStorage.getItem('TokenInfo'));
        var headers = null;
        if (request.url.includes('/Import/Upload') || request.url.includes('/Import/Import')) {
            headers = {
                Authorization: `Bearer ${tokenInfo}`
            };
        }
        else {
            headers = {
                Authorization: `Bearer ${tokenInfo}`,
                'Content-Type': 'application/json;charset=utf-8'
            };
        }
        if (tokenInfo) {
            request = request.clone({
                setHeaders: headers
            });
        }
        this.totalRequests++;
        // this.loaderService.showSpinner();
        this.updateToken();
        return newRequest.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => { this.decreaseRequests(); }));
    }
    decreaseRequests() {
        this.totalRequests--;
        if (this.totalRequests === 0) {
            // this.loaderService.hideSpinner();
        }
    }
    updateToken() {
        var sessionTime = this.utilityService.try_parse_int(localStorage.getItem("sessionTimeInMin"));
        if (sessionTime > 0) {
            sessionTime = (sessionTime - 1) * 60;
            var currentTime = this.utilityService.try_parse_int(localStorage.getItem("activeFrom"));
            if (currentTime < 0) {
                return;
            }
            let secLeft = sessionTime - currentTime;
            // if (secLeft > 180 && secLeft < 600)
            //     // this.utilityService.updateToken = true;
        }
    }
}
AuthTokenInterceptor.ɵfac = function AuthTokenInterceptor_Factory(t) { return new (t || AuthTokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"])); };
AuthTokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthTokenInterceptor, factory: AuthTokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthTokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/utility.service.ts":
/*!*******************************************!*\
  !*** ./src/app/common/utility.service.ts ***!
  \*******************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class UtilityService {
    constructor(http) {
        this.http = http;
    }
    setUserName(userName) {
        this.user_name = userName;
    }
    setUserRole(role) {
        this.role = role;
    }
    getSettings() {
        return this.http.get('assets/appsetting.json', {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => {
            this.defaultUrl = result.defaultUrl;
            return result;
        }));
    }
    //getMLValue(defaultValue: string, jsonMLString: string): string {
    //  return (typeof jsonMLString != 'undefined' && jsonMLString != "" && typeof this.langCode != 'undefined' && this.langCode != "") ?
    //    JSON.parse(jsonMLString)[this.langCode] == null ? defaultValue : JSON.parse(jsonMLString)[this.langCode] : defaultValue;
    //
    //showNotificationPopup(type: any, title: string = null, html: string = null, text: string = null) {
    //  const myService = AppInjector.get(ToasterService);
    //  myService.show(type," ",title,Config.PopupTimer);
    //}
    try_parse_int(val) {
        try {
            if (val != null && val != undefined) {
                if (!isNaN(val))
                    return parseInt(val);
            }
            return -1;
        }
        catch (err) {
            return -1;
        }
    }
    checkJsonFormattor(stringML, labelName) {
        try {
            if (stringML) {
                if (!this.JsonValidator(stringML)) {
                    //   this.showNotificationPopup('warning', 'JSON is not proper for '+ labelName);
                    return false;
                }
            }
        }
        catch (ex) {
            return false;
        }
        return true;
    }
    JsonValidator(value) {
        try {
            return JSON.parse(value) ? true : false;
        }
        catch (ex) {
            return false;
        }
    }
}
UtilityService.ɵfac = function UtilityService_Factory(t) { return new (t || UtilityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UtilityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilityService, factory: UtilityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function HomeComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hebbe Falls");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " is about 65 km away from the Vrushabha Homestay. This waterfalls is inside a coffee estate. Hebbe Falls gushes down from a height of 551 ft. in two stages to form Dodda Hebbe (Big Falls) and Chikka Hebbe (Small Falls.) The option of trekking is available, but the place is filled with leeches especially in the rainy season.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mullayanagiri Peak - 22 Kms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["owl-theme", "row", "sliding"]; };
class HomeComponent {
    constructor() {
        this.carouselOptions = {
            margin: 25,
            nav: true,
            navText: ["<div class='nav-btn prev-slide fa fa-chevron-circle-left'></div>", "<div class='nav-btn next-slide fa fa-chevron-circle-right'></div>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 2,
                    nav: true,
                    loop: false
                },
                1500: {
                    items: 3,
                    nav: true,
                    loop: false
                }
            }
        };
        this.images = [
            {
                text: "Everfresh Flowers",
                image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg"
            },
            {
                text: "Festive Deer",
                image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg"
            },
            {
                text: "Morning Greens",
                image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg"
            },
            {
                text: "Bunch of Love",
                image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg"
            },
            {
                text: "Blue Clear",
                image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg"
            },
            {
                text: "Evening Clouds",
                image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg"
            },
            {
                text: "Fontains in Shadows",
                image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg"
            },
            {
                text: "Kites in the Sky",
                image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg"
            },
            {
                text: "Sun Streak",
                image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg"
            }
        ];
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 115, vars: 10, consts: [["data-stellar-background-ratio", "0.5", 1, "hero-wrap", "js-fullheight", 2, "background-image", "url(assets/images/vrushubha/img_4_2x.png)"], [1, "overlay"], [1, "container-fluid"], ["data-scrollax-parent", "true", 1, "row", "no-gutters", "slider-text", "js-fullheight", "align-items-center", "justify-content-start"], ["data-aos", "fade-in", 1, "col-md-12"], [1, "ml-5", "w-hed", 2, "padding-top", "3em"], [1, "ml-5", "w-hed"], [1, "ml-5", "subheading"], [1, "ml-5"], [1, "btn", "btn-white", 3, "routerLink"], [1, "ftco-section", "bg-light"], [1, "container"], [1, "row", "justify-content-center", "pb-5", "mb-3"], ["data-aos", "fade-down", 1, "col-md-12", "heading-section", "text-center"], [1, "samarkan", "v"], [1, "row", "no-gutters"], ["data-aos", "fade-down", 1, "col-md-6", "wrap-about"], [1, "img", "img-2", "mb-4", 2, "background-image", "url(assets/images/vrushubha/img_4_22_2x.png)"], [1, "col-md-6", "wrap-about"], [1, "pl-md-5", "about-body"], [3, "options", "items", "carouselClasses"], ["class", "row d-flex item", 4, "ngFor", "ngForOf"], [1, "ftco-section", "bg-light", "failities"], [1, "col-11", "row", "m-a", "d-flex"], ["data-aos", "fade-down", 1, "col-md-3", "d-flex"], [1, "blog-entry-failities", "align-self-stretch"], [1, "img", 2, "background-image", "url(assets/images/vrushubha/food_icon.svg)"], [1, "text", "p-3", "text-center"], [1, "underscore"], [1, "img", 2, "background-image", "url(assets/images/vrushubha/washing_icon.svg)"], [1, "img", 2, "background-image", "url(assets/images/vrushubha/telephon_icon.svg)"], [1, "img", 2, "background-image", "url(assets/images/vrushubha/plus_icon.svg)"], [1, "ftco-section", "bg-light", "contact"], [1, "row", "justify-content-center", "pb-2", "mb-3"], [1, "row", "justify-content-center"], [1, "col-4", "row", "pl-5"], [1, "col-3"], [1, "contact", "img", 2, "background-image", "url(assets/images/vrushubha/call_icon.svg)"], [1, "col-9", "row"], [1, "col-12"], [1, "col-8", "row"], [1, "address", "img", 2, "background-image", "url(assets/images/vrushubha/location_icon.svg)"], [1, "col-9"], [1, "row", "d-flex", "item"], ["data-aos", "fade-down", 1, "col-md-12", "d-flex"], [1, "blog-entry", "attraction-body", "align-self-stretch"], [1, "newsCard", "news-Slide-up"], [1, "block-20", "rounded", 2, "background-image", "url(assets/images/vrushubha/img_5.png)"], [1, "newsCaption"], [1, "newsCaption-title"], [1, "newsCaption-content"], [1, "heading"], [1, "blog-entry", "gallery-body", "align-self-stretch"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "LOREM IPSUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "DOLOR SIT AMET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "rushabha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Attraction Around ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "rushabha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "owl-carousel", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, HomeComponent_div_42_Template, 13, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "rushabha Facilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Food on Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Laundry Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Doctor on call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Gallery of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "rushabha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "owl-carousel", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, HomeComponent_div_90_Template, 4, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "section", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "rushabha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "+91 974 266 7338");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "+91 973 998 0704");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Vrushabha Home Stay Santhaveri Road, Heddarahalli, Kaimara, Chikkamagaluru - 577101 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.carouselOptions)("items", ctx.images)("carouselClasses", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.carouselOptions)("items", ctx.images)("carouselClasses", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__["OwlCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".js-fullheight[_ngcontent-%COMP%] {\n  height: 80vh;\n}\n\n.subheading[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n  font-weight: lighter;\n  font-family: sans-serif;\n  width: 50vw;\n  padding-top: 0.5em;\n}\n\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #fff;\n  font-family: \"Playfair Display\", serif;\n  line-height: 1.3;\n}\n\n.btn[_ngcontent-%COMP%] {\n  color: #EA6625;\n}\n\n.v[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #EA6625;\n}\n\n.samarkan[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Samarkan Oblique\";\n}\n\n.wrap-about[_ngcontent-%COMP%]   .img-2[_ngcontent-%COMP%] {\n  height: 325px;\n  border-radius: 18px;\n}\n\n.about-body[_ngcontent-%COMP%] {\n  margin-top: 8%;\n}\n\n.attraction-body[_ngcontent-%COMP%], .gallery-body[_ngcontent-%COMP%] {\n  border-bottom: #EA6625 solid 6px;\n}\n\n.ftco-section[_ngcontent-%COMP%] {\n  padding: 2em 0;\n  position: relative;\n}\n\n.gallery-body[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nfailities[_ngcontent-%COMP%]   .blog-entry-failities[_ngcontent-%COMP%] {\n  background: transparent;\n  margin: auto;\n}\n\n.failities[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  display: block;\n  height: 48px;\n  width: 66px;\n  margin: 2em 4em 0.5em;\n}\n\n.failities[_ngcontent-%COMP%]   .underscore[_ngcontent-%COMP%] {\n  content: \"\";\n  position: relative;\n  width: 50%;\n  margin: auto;\n  height: 4px;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  visibility: visible;\n  background-color: #EA6625;\n  transform: scaleX(0.8);\n}\n\n.contact.img[_ngcontent-%COMP%] {\n  display: block;\n  height: 42px;\n  width: 39px;\n  margin-left: 63%;\n}\n\n.address.img[_ngcontent-%COMP%] {\n  display: block;\n  height: 54px;\n  width: 39px;\n  margin-left: 54%;\n}\n\n.newsCard[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.newsCaption[_ngcontent-%COMP%] {\n  visibility: hidden;\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  opacity: 0.6;\n  left: 0;\n  width: 100%;\n  height: 90%;\n  background-color: #000;\n  color: #FFF;\n  padding: 15px;\n  opacity: 0;\n  transform: translateY(80%);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: transform 0.8s, opacity 0.1s 0.3s;\n}\n\n.news-Slide-up[_ngcontent-%COMP%]:hover   .newsCaption[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 0.5;\n  transform: translateY(0px);\n  transition: transform 0.8s, opacity 0.1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0FBS0o7O0FBSEE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7QUFNSjs7QUFKQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQU9KOztBQUxBO0VBQ0ksY0FBQTtBQVFKOztBQU5BOztFQUVJLGdDQUFBO0FBU0o7O0FBUEE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFVSjs7QUFSQTtFQUNJLFdBQUE7QUFXSjs7QUFUQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQVlKOztBQVZBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFhSjs7QUFYQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQWNGOztBQVpBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFlRjs7QUFiQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBZ0JGOztBQWJBO0VBQ0Usa0JBQUE7QUFnQkY7O0FBYkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFFUSwwQkFBQTtFQUNSLG1DQUFBO0VBQ1EsMkJBQUE7RUFHUiw2Q0FBQTtBQWlCRjs7QUFiQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUVRLDBCQUFBO0VBR1Isd0NBQUE7QUFpQkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qcy1mdWxsaGVpZ2h0IHtcclxuICAgIGhlaWdodDogODB2aDtcclxufVxyXG4uc3ViaGVhZGluZyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbn1cclxuLmhlcm8td3JhcCAuc2xpZGVyLXRleHQgaDEge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbn1cclxuLmJ0biB7XHJcbiAgICBjb2xvcjogI0VBNjYyNTtcclxufVxyXG4udiBzcGFuIHtcclxuICAgIGNvbG9yOiAjRUE2NjI1O1xyXG59XHJcbi5zYW1hcmthbiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2FtYXJrYW4gT2JsaXF1ZSc7XHJcbn1cclxuLndyYXAtYWJvdXQgLmltZy0yIHtcclxuICAgIGhlaWdodDogMzI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG59XHJcbi5hYm91dC1ib2R5IHtcclxuICAgIG1hcmdpbi10b3A6IDglO1xyXG59XHJcbi5hdHRyYWN0aW9uLWJvZHksXHJcbi5nYWxsZXJ5LWJvZHkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogI0VBNjYyNSBzb2xpZCA2cHg7XHJcbn1cclxuLmZ0Y28tc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAyZW0gMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZ2FsbGVyeS1ib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmZhaWxpdGllcyAuYmxvZy1lbnRyeS1mYWlsaXRpZXMge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmZhaWxpdGllcyAuaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDY2cHg7XHJcbiAgICBtYXJnaW46IDJlbSA0ZW0gMC41ZW07XHJcbn1cclxuLmZhaWxpdGllcyAudW5kZXJzY29yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUE2NjI1O1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDAuOCk7XHJcbn1cclxuLmNvbnRhY3QuaW1ne1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogNDJweDtcclxuICB3aWR0aDogMzlweDtcclxuICBtYXJnaW4tbGVmdDogNjMlO1xyXG59XHJcbi5hZGRyZXNzLmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiA1NHB4O1xyXG4gIHdpZHRoOiAzOXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1NCU7XHJcbn1cclxuXHJcbi5uZXdzQ2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmV3c0NhcHRpb24ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiBhdXRvO1xyXG4gIGJvdHRvbTogMDtcclxuICBvcGFjaXR5OiAuNjtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDgwJSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoODAlKTtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjRzO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyAwLjRzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjhzO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzLCBvcGFjaXR5IDAuMXMgMC4zcztcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cywgb3BhY2l0eSAwLjFzIDAuM3MsIC13ZWJraXQtdHJhbnNmb3JtIDAuNHM7XHJcbn1cclxuXHJcbi5uZXdzLVNsaWRlLXVwOmhvdmVyIC5uZXdzQ2FwdGlvbiB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAuNTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuNHM7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjhzO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzLCBvcGFjaXR5IDAuMXM7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHMsIG9wYWNpdHkgMC4xcywgLXdlYmtpdC10cmFuc2Zvcm0gMC40cztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\workspace\Vrushabha\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map