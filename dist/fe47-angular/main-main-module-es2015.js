(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./src/app/main/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/footer/footer.component.ts ***!
  \*************************************************/
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
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 16, vars: 0, consts: [[1, "navbar", "navbar-expand-sm", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsibleNavId", "aria-controls", "collapsibleNavId", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "d-lg-none"], [1, "navbar-toggler-icon"], ["id", "collapsibleNavId", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/movie", 1, "nav-link"], ["routerLink", "/news", 1, "nav-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cyber Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/home/he-thong-rap/he-thong-rap.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/home/he-thong-rap/he-thong-rap.component.ts ***!
  \******************************************************************/
/*! exports provided: HeThongRapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeThongRapComponent", function() { return HeThongRapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeThongRapComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeThongRapComponent.ɵfac = function HeThongRapComponent_Factory(t) { return new (t || HeThongRapComponent)(); };
HeThongRapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeThongRapComponent, selectors: [["app-he-thong-rap"]], decls: 2, vars: 0, template: function HeThongRapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "he-thong-rap works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaG9tZS9oZS10aG9uZy1yYXAvaGUtdGhvbmctcmFwLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeThongRapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-he-thong-rap',
                templateUrl: './he-thong-rap.component.html',
                styleUrls: ['./he-thong-rap.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/movies.service */ "./src/app/core/services/movies.service.ts");
/* harmony import */ var _phim_phim_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phim/phim.component */ "./src/app/main/home/phim/phim.component.ts");
/* harmony import */ var _he_thong_rap_he_thong_rap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./he-thong-rap/he-thong-rap.component */ "./src/app/main/home/he-thong-rap/he-thong-rap.component.ts");





class HomeComponent {
    constructor(moviesService) {
        this.moviesService = moviesService;
        this.movieList = null;
    }
    // Tương đương componentDidMount bên react
    ngOnInit() {
        this.moviesService.getMovieList().subscribe({
            next: (result) => {
                this.movieList = result;
            },
            error: (error) => {
                console.log(error);
            },
            complete: () => console.log("Get movie list success"),
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 1, consts: [[3, "dsPhim"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-phim", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-he-thong-rap");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dsPhim", ctx.movieList);
    } }, directives: [_phim_phim_component__WEBPACK_IMPORTED_MODULE_2__["PhimComponent"], _he_thong_rap_he_thong_rap_component__WEBPACK_IMPORTED_MODULE_3__["HeThongRapComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-home",
                templateUrl: "./home.component.html",
                styleUrls: ["./home.component.scss"],
            }]
    }], function () { return [{ type: src_app_core_services_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/home/modal/modal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/main/home/modal/modal.component.ts ***!
  \****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ModalComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], decls: 2, vars: 0, template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "modal works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaG9tZS9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/home/modal/trailer-modal/trailer-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/home/modal/trailer-modal/trailer-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: TrailerModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailerModalComponent", function() { return TrailerModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TrailerModalComponent {
    constructor() { }
    ngOnInit() { }
}
TrailerModalComponent.ɵfac = function TrailerModalComponent_Factory(t) { return new (t || TrailerModalComponent)(); };
TrailerModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrailerModalComponent, selectors: [["app-trailer-modal"]], inputs: { trailer: "trailer" }, decls: 2, vars: 0, template: function TrailerModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "trailer-modal works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaG9tZS9tb2RhbC90cmFpbGVyLW1vZGFsL3RyYWlsZXItbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrailerModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-trailer-modal",
                templateUrl: "./trailer-modal.component.html",
                styleUrls: ["./trailer-modal.component.scss"],
            }]
    }], function () { return []; }, { trailer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/main/home/phim/phim-dang-chieu/phim-dang-chieu.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/home/phim/phim-dang-chieu/phim-dang-chieu.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PhimDangChieuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhimDangChieuComponent", function() { return PhimDangChieuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _phim_item_phim_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../phim-item/phim-item.component */ "./src/app/main/home/phim/phim-item/phim-item.component.ts");
/* harmony import */ var _modal_trailer_modal_trailer_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal/trailer-modal/trailer-modal.component */ "./src/app/main/home/modal/trailer-modal/trailer-modal.component.ts");






function PhimDangChieuComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-phim-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transTrailer", function PhimDangChieuComponent_div_3_Template_app_phim_item_transTrailer_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.showTrailer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const phimItem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("phim", phimItem_r3);
} }
function PhimDangChieuComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-trailer-modal", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhimDangChieuComponent_div_4_Template_app_trailer_modal_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("trailer", ctx_r2.trailer);
} }
class PhimDangChieuComponent {
    constructor() {
        this.slideConfig = {
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1921,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 421,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 376,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
    }
    showTrailer(value) {
        this.trailer = value;
    }
    closeModal() {
        this.trailer = "";
    }
    ngOnInit() { }
}
PhimDangChieuComponent.ɵfac = function PhimDangChieuComponent_Factory(t) { return new (t || PhimDangChieuComponent)(); };
PhimDangChieuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhimDangChieuComponent, selectors: [["app-phim-dang-chieu"]], inputs: { phimDC: "phimDC" }, decls: 5, vars: 3, consts: [[1, "mx-auto"], [1, "carousel", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide mx-2 px-2", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["ngxSlickItem", "", 1, "slide", "mx-2", "px-2"], [3, "phim", "transTrailer"], [3, "trailer", "click"]], template: function PhimDangChieuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-slick-carousel", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PhimDangChieuComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PhimDangChieuComponent_div_4_Template, 2, 1, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.phimDC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trailer);
    } }, directives: [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickItemDirective"], _phim_item_phim_item_component__WEBPACK_IMPORTED_MODULE_3__["PhimItemComponent"], _modal_trailer_modal_trailer_modal_component__WEBPACK_IMPORTED_MODULE_4__["TrailerModalComponent"]], styles: [".slick-prev:before,   .slick-next:before {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ob21lL3BoaW0vcGhpbS1kYW5nLWNoaWV1L3BoaW0tZGFuZy1jaGlldS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21haW4vaG9tZS9waGltL3BoaW0tZGFuZy1jaGlldS9waGltLWRhbmctY2hpZXUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLnNsaWNrLXByZXY6YmVmb3JlLCA6Om5nLWRlZXAgLnNsaWNrLW5leHQ6YmVmb3JlIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhimDangChieuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-phim-dang-chieu",
                templateUrl: "./phim-dang-chieu.component.html",
                styleUrls: ["./phim-dang-chieu.component.scss"],
            }]
    }], function () { return []; }, { phimDC: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/main/home/phim/phim-item/danh-gia/danh-gia.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/home/phim/phim-item/danh-gia/danh-gia.component.ts ***!
  \*************************************************************************/
/*! exports provided: DanhGiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhGiaComponent", function() { return DanhGiaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DanhGiaComponent {
    constructor() { }
    ngOnInit() {
    }
}
DanhGiaComponent.ɵfac = function DanhGiaComponent_Factory(t) { return new (t || DanhGiaComponent)(); };
DanhGiaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DanhGiaComponent, selectors: [["app-danh-gia"]], decls: 2, vars: 0, template: function DanhGiaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "danh-gia works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaG9tZS9waGltL3BoaW0taXRlbS9kYW5oLWdpYS9kYW5oLWdpYS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DanhGiaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-danh-gia',
                templateUrl: './danh-gia.component.html',
                styleUrls: ['./danh-gia.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/home/phim/phim-item/phim-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/home/phim/phim-item/phim-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: PhimItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhimItemComponent", function() { return PhimItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _danh_gia_danh_gia_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./danh-gia/danh-gia.component */ "./src/app/main/home/phim/phim-item/danh-gia/danh-gia.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a0) { return { "bom-tan": a0 }; };
function PhimItemComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.phim.danhGia >= 9));
} }
class PhimItemComponent {
    constructor() { }
    getTrailer(trailer) { }
    ngOnInit() { }
}
PhimItemComponent.ɵfac = function PhimItemComponent_Factory(t) { return new (t || PhimItemComponent)(); };
PhimItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhimItemComponent, selectors: [["app-phim-item"]], inputs: { phim: "phim" }, decls: 26, vars: 5, consts: [[1, "item-phim", "mx-auto", "p-3"], [1, "item-phim-wrap"], [1, "item-phim__content"], [1, "item-phim__img"], [1, "item-phim__thumbnail", 3, "src"], ["class", "item-phim__bom-tan", 3, "ngClass", 4, "ngIf"], [1, "item-phim__rate"], [1, "item-danhGia"], [1, "item-phim__info", "py-2"], [1, "item-phim__title"], [1, "item-phim__maPhim"], [1, ""], [1, "item-phim__hover"], [1, "hover__bg"], ["src", "assets/img/icon-play.png", "alt", "", 3, "click"], [1, "hover__button"], [1, "btn", "w-100", "my-2", 3, "routerLink"], [1, "item-phim__bom-tan", 3, "ngClass"], ["src", "assets/img/item-phim-bomtan.png", "alt", ""]], template: function PhimItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PhimItemComponent_div_5_Template, 2, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-danh-gia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cyber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "120 Ph\u00FAt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhimItemComponent_Template_img_click_21_listener() { return ctx.getTrailer(ctx.phim.trailer); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Mua V\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.phim.hinhAnh, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phim.danhGia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.phim.danhGia / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.phim.tenPhim);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/chitiet/", ctx.phim.maPhim, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _danh_gia_danh_gia_component__WEBPACK_IMPORTED_MODULE_2__["DanhGiaComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__content[_ngcontent-%COMP%]   .item-phim__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 100%;\n  height: 100%;\n}\n.item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__content[_ngcontent-%COMP%]   .item-phim__bom-tan[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -25px;\n  left: -10%;\n  width: 70%;\n  z-index: 100;\n  display: none;\n}\n.item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__content[_ngcontent-%COMP%]   .item-phim__bom-tan.bom-tan[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n}\n.item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__content[_ngcontent-%COMP%]   .item-phim__rate[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3%;\n  right: 5%;\n  font-family: \"SF Medium\";\n  font-size: 18px;\n  background-color: rgba(12, 27, 54, 0.8);\n  border: 1px solid #1f2e46;\n  border-radius: 4px;\n  padding: 2px;\n  text-align: center;\n  line-height: 1.1;\n  z-index: 100;\n}\n.item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__content[_ngcontent-%COMP%]   .item-phim__rate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  color: white;\n}\n.item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__content[_ngcontent-%COMP%]   .item-phim__rate[_ngcontent-%COMP%]   .item-danhGia[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: rgba(0, 0, 0, 0.8);\n  margin-top: 5px;\n}\n.item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__info[_ngcontent-%COMP%]   .item-phim__title[_ngcontent-%COMP%] {\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  display: -webkit-box;\n  text-overflow: ellipsis;\n  font-weight: bold;\n  height: 45px;\n  max-height: 45px;\n  font-family: \"SF Medium\";\n  font-size: 18px;\n  line-height: 22px;\n  margin-bottom: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media (max-width: 1500px) {\n  .item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__info[_ngcontent-%COMP%]   .item-phim__title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media (max-width: 1199px) {\n  .item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__info[_ngcontent-%COMP%]   .item-phim__title[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n@media (max-width: 991px) {\n  .item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__info[_ngcontent-%COMP%]   .item-phim__title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media (max-width: 420px) {\n  .item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__info[_ngcontent-%COMP%]   .item-phim__title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__info[_ngcontent-%COMP%]   .item-phim__title[_ngcontent-%COMP%]   .item-phim__maPhim[_ngcontent-%COMP%] {\n  font-size: 15px;\n  background-color: #fb4226;\n  border-radius: 4px;\n  padding: 1px 8px;\n  color: #fff;\n  min-width: 33px;\n  text-align: center;\n  display: inline-block;\n  margin-right: 8px;\n}\n@media (max-width: 1199px) {\n  .item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__info[_ngcontent-%COMP%]   .item-phim__title[_ngcontent-%COMP%]   .item-phim__maPhim[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n@media (max-width: 991px) {\n  .item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__info[_ngcontent-%COMP%]   .item-phim__title[_ngcontent-%COMP%]   .item-phim__maPhim[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__hover[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: all 0.5s;\n}\n.item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__hover[_ngcontent-%COMP%]   .hover__bg[_ngcontent-%COMP%] {\n  background: radial-gradient(#ffffff00, #000000);\n  width: 100%;\n  height: 82%;\n  position: absolute;\n  border-radius: 5px;\n  top: 0;\n  left: 0;\n  opacity: 1;\n  transition: all 0.5s;\n  cursor: pointer;\n}\n@media (max-width: 1920px) {\n  .item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__hover[_ngcontent-%COMP%]   .hover__bg[_ngcontent-%COMP%] {\n    height: 380px;\n  }\n}\n@media (max-width: 1199px) {\n  .item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__hover[_ngcontent-%COMP%]   .hover__bg[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n}\n@media (max-width: 991px) {\n  .item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__hover[_ngcontent-%COMP%]   .hover__bg[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n@media (max-width: 767px) {\n  .item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__hover[_ngcontent-%COMP%]   .hover__bg[_ngcontent-%COMP%] {\n    height: 340px;\n  }\n}\n@media (max-width: 575px) {\n  .item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__hover[_ngcontent-%COMP%]   .hover__bg[_ngcontent-%COMP%] {\n    height: 260px;\n  }\n}\n@media (max-width: 420px) {\n  .item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__hover[_ngcontent-%COMP%]   .hover__bg[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}\n.item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__hover[_ngcontent-%COMP%]   .hover__bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0.5;\n  transition: all 0.5s;\n}\n.item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__hover[_ngcontent-%COMP%]   .hover__bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__hover[_ngcontent-%COMP%]   .hover__button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: all 0.5s;\n}\n.item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__hover[_ngcontent-%COMP%]   .hover__button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 3%;\n  width: 100%;\n  background-color: #fb4226;\n  padding: 5px 0;\n  font-size: 22px;\n}\n.item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__hover[_ngcontent-%COMP%]   .hover__button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n}\n.item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__hover[_ngcontent-%COMP%]   .hover__button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  padding-right: 33px;\n}\n.item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]:hover   .item-phim__hover[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.item-phim[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]:hover   .item-phim__info[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.item-phim-dark[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__info[_ngcontent-%COMP%]   .item-phim__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #fff;\n}\n.item-phim-dark[_ngcontent-%COMP%]   .item-phim-wrap[_ngcontent-%COMP%]   .item-phim__info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffffcc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ob21lL3BoaW0vcGhpbS1pdGVtL3BoaW0taXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9IZWxwZXJzL192YXJpYWJsZS5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL0hlbHBlcnMvX21peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JFO0VBQ0Usa0JBQUE7QUFmSjtBQW1CUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFqQlY7QUF1Q1E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBckNWO0FBdUNRO0VBQ0UsY0FBQTtBQXJDVjtBQXdDTTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUF0Q1I7QUF5RFE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBdkRWO0FBeURRO0VBQ0UsV0FBQTtBQXZEVjtBQTRETTtFQUNFLGVDNUVLO0VENkVMLHlCQ2pFUztFRGtFVCxlQzFGRztBRGdDWDtBQTRETTtFRXZFSixxQkZ3RTZCO0VFdkU3Qiw0QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFRnFFTSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBdkRSO0FFaUNJO0VGV0U7SUFhSSxlQUFBO0VBckRSO0FBQ0Y7QUU0Qkk7RUZXRTtJQWdCSSxlQUFBO0VBbkRSO0FBQ0Y7QUV1Qkk7RUZXRTtJQW1CSSxlQUFBO0VBakRSO0FBQ0Y7QUVrQkk7RUZXRTtJQXlCSSxlQUFBO0VBbERSO0FBQ0Y7QUFvRFE7RUFDRSxlQUFBO0VBQ0EseUJDN0ZLO0VEOEZMLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQWxEVjtBRUVJO0VGdUNJO0lBV0ksZUFBQTtFQWhEVjtBQUNGO0FFSEk7RUZ1Q0k7SUFjSSxlQUFBO0VBOUNWO0FBQ0Y7QUFrREk7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7QUFoRE47QUFpRE07RUFDRSwrQ0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQS9DUjtBRXhCSTtFRjZERTtJQVlJLGFBcktFO0VBd0hWO0FBQ0Y7QUU3Qkk7RUY2REU7SUFlSSxhQXZLRTtFQTRIVjtBQUNGO0FFbENJO0VGNkRFO0lBa0JJLGFBektFO0VBZ0lWO0FBQ0Y7QUV2Q0k7RUY2REU7SUFxQkksYUEzS0U7RUFvSVY7QUFDRjtBRTVDSTtFRjZERTtJQXdCSSxhQTdLRTtFQXdJVjtBQUNGO0FFakRJO0VGNkRFO0lBMkJJLGFBL0tRO0VBNEloQjtBQUNGO0FBb0NRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFsQ1Y7QUFtQ1U7RUFDRSxVQUFBO0FBakNaO0FBc0NRO0VBQ0Usb0JBQUE7QUFwQ1Y7QUFzQ1E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJDcEtLO0VEcUtMLGNBQUE7RUFJQSxlQUFBO0FBdkNWO0FBb0NVO0VBQ0UsWUFBQTtBQWxDWjtBQXNDUTtFQUNFLG1CQUFBO0FBcENWO0FBd0NJO0VBQ0UsVUFBQTtBQXRDTjtBQXdDSTtFQUNFLFVBQUE7QUF0Q047QUFtRFE7RUFDRSxXQzNNSTtBRDJKZDtBQW1ETTtFQUNFLGdCQzlNUztBRDZKakIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2hvbWUvcGhpbS9waGltLWl0ZW0vcGhpbS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm1haW5cIjtcclxuLy8gSGVpZ2h0IGltZyByZXNwb25zaXZlXHJcbiRoZWlnaHQteGw6IDM4MHB4O1xyXG4kaGVpZ2h0LWxnOiAyNTBweDtcclxuJGhlaWdodC1tZDogMzAwcHg7XHJcbiRoZWlnaHQtc206IDM0MHB4O1xyXG4kaGVpZ2h0LXhzOiAyNjBweDtcclxuJGhlaWdodC1waG9uZS1zbTogMzUwcHg7XHJcblxyXG4vLyBoZWlnaHQtd2lkdGggcmF0ZSByZXNwb25zaXZlXHJcbiRoZWlnaHQtMTogNTVweDtcclxuJGhlaWdodC0yOiA1MHB4O1xyXG4kd2lkdGgtMTogNjBweDtcclxuJHdpZHRoLTI6IDU1cHg7XHJcblxyXG4uaXRlbS1waGltIHtcclxuICAuaXRlbS1waGltLXdyYXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLml0ZW0tcGhpbV9fY29udGVudCB7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLml0ZW0tcGhpbV9faW1nIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLy8gICBAaW5jbHVkZSBmb3Itc2l6ZSh4bCkge1xyXG4gICAgICAgIC8vICAgICBoZWlnaHQ6ICRoZWlnaHQteGw7XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gICBAaW5jbHVkZSBmb3Itc2l6ZShsZykge1xyXG4gICAgICAgIC8vICAgICBoZWlnaHQ6ICRoZWlnaHQtbGc7XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gICBAaW5jbHVkZSBmb3Itc2l6ZShtZCkge1xyXG4gICAgICAgIC8vICAgICBoZWlnaHQ6ICRoZWlnaHQtbWQ7XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gICBAaW5jbHVkZSBmb3Itc2l6ZShzbSkge1xyXG4gICAgICAgIC8vICAgICBoZWlnaHQ6ICRoZWlnaHQtc207XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gICBAaW5jbHVkZSBmb3Itc2l6ZSh4cykge1xyXG4gICAgICAgIC8vICAgICBoZWlnaHQ6ICRoZWlnaHQteHM7XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gICBAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1zbSkge1xyXG4gICAgICAgIC8vICAgICBoZWlnaHQ6ICRoZWlnaHQtcGhvbmUtc207XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5pdGVtLXBoaW1fX2JvbS10YW4ge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IC0yNXB4O1xyXG4gICAgICAgICAgbGVmdDogLTEwJTtcclxuICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmJvbS10YW4gaW1nIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuaXRlbS1waGltX19yYXRlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzJTtcclxuICAgICAgICByaWdodDogNSU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgTWVkaXVtXCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIsIDI3LCA1NCwgMC44KTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWYyZTQ2O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIC8vIHdpZHRoOiAkd2lkdGgtMTtcclxuICAgICAgICAvLyBoZWlnaHQ6ICRoZWlnaHQtMTtcclxuICAgICAgICAvLyBAaW5jbHVkZSBmb3Itc2l6ZShsbCkge1xyXG4gICAgICAgIC8vICAgd2lkdGg6ICR3aWR0aC0yO1xyXG4gICAgICAgIC8vICAgaGVpZ2h0OiAkaGVpZ2h0LTI7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIEBpbmNsdWRlIGZvci1zaXplKHNtKSB7XHJcbiAgICAgICAgLy8gICB3aWR0aDogJHdpZHRoLTE7XHJcbiAgICAgICAgLy8gICBoZWlnaHQ6ICRoZWlnaHQtMTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gQGluY2x1ZGUgZm9yLXNpemUoeHMpIHtcclxuICAgICAgICAvLyAgIHdpZHRoOiAkd2lkdGgtMjtcclxuICAgICAgICAvLyAgIGhlaWdodDogJGhlaWdodC0yO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1zbSkge1xyXG4gICAgICAgIC8vICAgd2lkdGg6ICR3aWR0aC0xO1xyXG4gICAgICAgIC8vICAgaGVpZ2h0OiAkaGVpZ2h0LTE7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaXRlbS1kYW5oR2lhIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLml0ZW0tcGhpbV9faW5mbyB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTI7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1mb250TC1vODtcclxuICAgICAgICBtYXJnaW4tdG9wOiAkcGFkLW1hcjE7XHJcbiAgICAgIH1cclxuICAgICAgLml0ZW0tcGhpbV9fdGl0bGUge1xyXG4gICAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3coMik7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgTWVkaXVtXCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIC8vIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICBAaW5jbHVkZSBmb3Itc2l6ZShsbCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBmb3Itc2l6ZShsZykge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBmb3Itc2l6ZShtZCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBmb3Itc2l6ZShzbSkge1xyXG4gICAgICAgICAgLy8gZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1zbSkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLml0ZW0tcGhpbV9fbWFQaGltIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1idXQtbG87XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcHggOHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDMzcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgIEBpbmNsdWRlIGZvci1zaXplKGxnKSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBpbmNsdWRlIGZvci1zaXplKG1kKSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pdGVtLXBoaW1fX2hvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgIC5ob3Zlcl9fYmcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjZmZmZmZmMDAsICMwMDAwMDApO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogODIlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgQGluY2x1ZGUgZm9yLXNpemUoeGwpIHtcclxuICAgICAgICAgIGhlaWdodDogJGhlaWdodC14bDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgZm9yLXNpemUobGcpIHtcclxuICAgICAgICAgIGhlaWdodDogJGhlaWdodC1sZztcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgZm9yLXNpemUobWQpIHtcclxuICAgICAgICAgIGhlaWdodDogJGhlaWdodC1tZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgZm9yLXNpemUoc20pIHtcclxuICAgICAgICAgIGhlaWdodDogJGhlaWdodC1zbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgZm9yLXNpemUoeHMpIHtcclxuICAgICAgICAgIGhlaWdodDogJGhlaWdodC14cztcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgZm9yLXNpemUocGhvbmUtc20pIHtcclxuICAgICAgICAgIGhlaWdodDogJGhlaWdodC1waG9uZS1zbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5ob3Zlcl9fYnV0dG9uIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAzJTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJ1dC1sbztcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciBzcGFuIHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIC5pdGVtLXBoaW1fX2hvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgICY6aG92ZXIgLml0ZW0tcGhpbV9faW5mbyB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBIw6xuaCDhuqJuaCBJdGVtXHJcblxyXG4vLyBIw6xuaCDhuqJuaCBDT25maWdcclxuXHJcbi5pdGVtLXBoaW0tZGFyayB7XHJcbiAgLml0ZW0tcGhpbS13cmFwIHtcclxuICAgIC5pdGVtLXBoaW1fX2luZm8ge1xyXG4gICAgICAuaXRlbS1waGltX190aXRsZSB7XHJcbiAgICAgICAgc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3ItZm9udEQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZm9udEQtbzg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIC5pdGVtLWRhbmhHaWF7XHJcbi8vICAgd2lkdGg6IDIwJTtcclxuLy8gICBtYXJnaW46IDVweCAxMHB4O1xyXG4vLyB9XHJcbiIsIi8vIE1heCBXaWR0aFxyXG4kd2lkdGgteGw6IDE0NjBweDtcclxuJHdpZHRoLWxsOiAxMTYwcHg7XHJcbiR3aWR0aC1sZzogOTYwcHg7XHJcbiR3aWR0aC1tZDogNzYwcHg7XHJcbiR3aWR0aC1zbTogNTYwcHg7XHJcbiR3aWR0aC14czogNDYwcHg7ICAgICAgICAgICBcclxuJHdpZHRoLXBob25lOiAzNDBweDtcclxuXHJcbi8vSGVpZ2h0XHJcbiRoZWlnaHQtaGVhZGVyOjc2cHg7XHJcblxyXG4vLyBQYWRkaW5nIC0gTWFyZ2luXHJcbiRwYWQtbWFyMTogNXB4O1xyXG4kcGFkLW1hcjI6IDEwcHg7XHJcbiRwYWQtbWFyMzogMTVweDtcclxuJHBhZC1tYXI0OiAyMHB4O1xyXG4kcGFkLW1hcjU6IDI1cHg7XHJcbiRwYWQtbWFyNjogMzBweDtcclxuJHBhZC1tYXI3OiA0MHB4O1xyXG4kcGFkLW1hcjg6IDUwcHg7XHJcbiRwYWQtbWFySGVhZGluZzoxMDBweDtcclxuXHJcbi8vRm9udC1zaXplXHJcbiRmb250LXNpemUxOiAxMnB4O1xyXG4kZm9udC1zaXplMjogMTVweDtcclxuJGZvbnQtc2l6ZTM6IDE4cHg7XHJcbiRmb250LXNpemU0OiAyMHB4O1xyXG4kZm9udC1zaXplNTogMjVweDtcclxuJGZvbnQtc2l6ZTY6IDMwcHg7XHJcbiRmb250LXNpemU3OiA0MHB4O1xyXG5cclxuLy9Db2xvciBMaWdodFxyXG4kY29sb3ItZm9udEQ6ICNmZmY7IC8vTWFpbiBGb250IENvbG9yIERhcmsgVGhlbWVcclxuJGNvbG9yLWZvbnRELW84OiAjZmZmZmZmY2M7IC8vIEZvbnQgQ29sb3IgRGFyayBUaGVtZSB3aXRoIG9wYWNpdHkgMC44XHJcbiRjb2xvci1mb250RC1vNjogaHNsYSgwLCAwJSwgMTAwJSwgMC42KTsgLy8wLjZcclxuJGNvbG9yLWZvbnRMOiAjMDAwOyAvL01haW4gRm9udCBDb2xvciBMaWdodCBUaGVtZVxyXG4kY29sb3ItZm9udEwtbzg6IHJnYigwLCAwLCAwLCAwLjgpOyAvLyBGb250IENvbG9yIExpZ2h0IFRoZW1lIHdpdGggb3BhY2l0eSAwLjhcclxuJGNvbG9yLWZvbnRMLW82OiByZ2IoMCwgMCwgMCwgMC42KTsgLy8wLjZcclxuJGNvbG9yLWhlYWRpbmdBOiAjZmI0MjI2OyAvLyBGb250IENvbG9yIEhlYWRpbmcgQWN0aXZlXHJcbiRjb2xvci1oZWFkaW5nRDogcmdiKDI1NSwgMjU1LCAyNTUsIDAuNik7IC8vIEZvbnQgQ29sb3IgSGVhZGluZyBEaXNibGUgRGFya1xyXG4kY29sb3ItaGVhZGluZ0w6IHJnYmEoMCwgMCwgMCwgMC42KTsgLy8gRm9udCBDb2xvciBIZWFkaW5nIERpc2JsZSBMaWdodFxyXG4kY29sb3ItYnV0LWxvOiAjZmI0MjI2OyAvLyBCYWNrZ3JvdW5kIENvbG9yIEJ1dHRvbiBhbmQgTG9nbyhjeWJlcilcclxuJGNvbG9yLWZvbnQtYnV0LWxvOiAjZmZmOyAvLyBGb250IENvbG9yIEJ1dHRvbiBhbmQgTG9nbyhjeWJlcilcclxuJGNvbG9yLXRpbWVEOiAjMTZkYjVlOyAvLyBGb250IENvbG9yIFRpbWUgRGFya1xyXG4kY29sb3ItdGltZUw6ICMxMDhmM2U7IC8vIEZvbnQgQ29sb3IgVGltZSBMaWdodFxyXG4kY29sb3ItdmUtYmx1ZTojNWNkNGU0O1xyXG4kY29sb3Itc2hhZG93LXZlOiNhNGRiZDY4YTtcclxuJGNvbG9yLWFkbWluLWxvZ2luOiMzZjUxYjU7XHJcbiRjb2xvci1hZG1pbi1sb2dpbi1ob3ZlcjojMWMyYjdlO1xyXG4kY29sb3ItY2xvc2U6cmdiYSgyMTcsIDM4LCAzOCwgMC44KTtcclxuJGNvbG9yLWNsb3NlLWhvdmVyOnJnYmEoMjE3LCAzOCwgMzgpO1xyXG4kY29sb3ItZGlzYWJsZWQ6I2FmYWZhZjsiLCJAaW1wb3J0IFwidmFyaWFibGVcIjtcclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgaXBob25lLTU6MzUwcHgsXHJcbiAgaXBob25lOiAzNzVweCxcclxuICBwaG9uZS1zbTogNDIwcHgsXHJcbiAgeHM6IDU3NXB4LFxyXG4gIHNtOiA3NjdweCxcclxuICBtZDogOTkxcHgsXHJcbiAgbGc6IDExOTlweCxcclxuICBsbDogMTUwMHB4LFxyXG4gIHhsOiAxOTIwcHgsXHJcbik7XHJcblxyXG4vLyBFeHRlbmQgUGxhY2VIb2xkZXIgRm9udCBDb2xvciBibHVlIGxpZ2h0IHRyYW5nIMSR4bq3dCB2w6lcclxuJWZvbnRDb2xvci1ibHVlIHtcclxuICBjb2xvcjogJGNvbG9yLXZlLWJsdWU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICRjb2xvci1zaGFkb3ctdmU7XHJcbn1cclxuXHJcbkBtaXhpbiB3aC1jaXJjbGUoJHNpemUpIHtcclxuICB3aWR0aDogJHNpemU7XHJcbiAgaGVpZ2h0OiAkc2l6ZTtcclxufVxyXG5cclxuLy8gY29sLWJzNFxyXG5AbWl4aW4gY29sLWJzNCgkc2l6ZSkge1xyXG4gIG1heC13aWR0aDogJHNpemU7XHJcbiAgZmxleDogMCAwICRzaXplO1xyXG59XHJcblxyXG4vL0hp4buDbiB0aOG7iyBz4buRIGTDsm5nIGPhuqduIGhp4buDbiB0aOG7iyArIHRow6ptIGThuqV1IC4uIOG7nyBjdeG7kWkgZMOybmdcclxuXHJcbkBtaXhpbiB0ZXh0LW92ZXJmbG93KCRsaW5lKSB7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZTtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXNcclxufVxyXG5cclxuLy9IaeG7h24gdGjhu4sgc+G7kSBkw7JuZy5cclxuQG1peGluIGxpbmUtY2xhbXAoJG51bWJlci1saW5lKXtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogJG51bWJlci1saW5lO1xyXG5cdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXNcclxufVxyXG5cclxuLy8gQ8SDbiBHaeG7r2Ega2hpIHBvc2l0aW9uIEFic29sdXRlXHJcbkBtaXhpbiBjZW50ZXJBYnNvbHV0ZSgkcG9zKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIEBpZiAkcG9zID09IFwiYm90aFwiIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfSBAZWxzZSBpZiAkcG9zID09IFwibGVmdFwiIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB9IEBlbHNlIGlmICRwb3MgPT0gXCJ0b3BcIiB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vUG9zaXRpb24gRml4ZWRcclxuQG1peGluIHBvc2l0aW9uRml4ZWQoJFksICRYLCAkcG9zaXRpb25ZICwgJHBvc2l0aW9uWCApIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgQGlmICgkWSA9PSAndG9wJyl7XHJcbiAgICB0b3A6JHBvc2l0aW9uWTtcclxuICAgIEBpZiAoJFggPT0gJ2xlZnQnKXtcclxuICAgICAgbGVmdDokcG9zaXRpb25YO1xyXG4gICAgfUBlbHNle1xyXG4gICAgICByaWdodDogJHBvc2l0aW9uWDtcclxuICAgIH1cclxuICB9IEBlbHNle1xyXG4gICAgYm90dG9tOiAkcG9zaXRpb25ZO1xyXG4gICAgQGlmICgkWCA9PSAnbGVmdCcpe1xyXG4gICAgICBsZWZ0OiRwb3NpdGlvblg7XHJcbiAgICB9QGVsc2V7XHJcbiAgICAgIHJpZ2h0OiAkcG9zaXRpb25YO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvci1zaXplKCRicmVha3BvaW50KSB7XHJcbiAgLy9LaeG7g20gdHJhIGJyZWFrcG9pbnQgdHJ1eeG7gW4gdsOgbyBjw7MgdOG7k24gdOG6oWlcclxuICAvL25oxrAgYuG6oW4gxJHDoyDEkeG7i25oIG5naMSpYSBoYXkga2jDtG5nLlxyXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XHJcbiAgICAvLyBM4bqleSBnacOhIHRy4buLIHBpeGVsIGJyZWFrcG9pbnQgxJHDs1xyXG4gICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XHJcblxyXG4gICAgLy9CdWlsZCBtZWRpYSBxdWVyeVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXZhbHVlKSB7XHJcbiAgICAgIC8vTmjhu69uZyBnw6wgYuG6oW4gbW9uZyBtdeG7kW4gc+G6vSDEkcaw4bujYyBs4buTbmcgdsOgbyBAY29udGVudFxyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhimItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-phim-item",
                templateUrl: "./phim-item.component.html",
                styleUrls: ["./phim-item.component.scss"],
            }]
    }], function () { return []; }, { phim: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/main/home/phim/phim-sap-chieu/phim-sap-chieu.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/home/phim/phim-sap-chieu/phim-sap-chieu.component.ts ***!
  \***************************************************************************/
/*! exports provided: PhimSapChieuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhimSapChieuComponent", function() { return PhimSapChieuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PhimSapChieuComponent {
    constructor() { }
    ngOnInit() { }
}
PhimSapChieuComponent.ɵfac = function PhimSapChieuComponent_Factory(t) { return new (t || PhimSapChieuComponent)(); };
PhimSapChieuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhimSapChieuComponent, selectors: [["app-phim-sap-chieu"]], inputs: { phimSC: "phimSC" }, decls: 2, vars: 0, template: function PhimSapChieuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "phim-sap-chieu works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaG9tZS9waGltL3BoaW0tc2FwLWNoaWV1L3BoaW0tc2FwLWNoaWV1LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhimSapChieuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-phim-sap-chieu",
                templateUrl: "./phim-sap-chieu.component.html",
                styleUrls: ["./phim-sap-chieu.component.scss"],
            }]
    }], function () { return []; }, { phimSC: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/main/home/phim/phim.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main/home/phim/phim.component.ts ***!
  \**************************************************/
/*! exports provided: PhimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhimComponent", function() { return PhimComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _phim_dang_chieu_phim_dang_chieu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phim-dang-chieu/phim-dang-chieu.component */ "./src/app/main/home/phim/phim-dang-chieu/phim-dang-chieu.component.ts");
/* harmony import */ var _phim_sap_chieu_phim_sap_chieu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phim-sap-chieu/phim-sap-chieu.component */ "./src/app/main/home/phim/phim-sap-chieu/phim-sap-chieu.component.ts");





function PhimComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-phim-dang-chieu", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("phimDC", ctx_r0.dsPhim);
} }
function PhimComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-phim-sap-chieu", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("phimSC", ctx_r2.dsPhim.reverse());
} }
const _c0 = function (a0) { return { active: a0 }; };
class PhimComponent {
    constructor() {
        this.isActive = true; // hiện phim đang chiếu
    }
    doiPhim(value) {
        this.isActive = value;
    }
    ngOnInit() { }
}
PhimComponent.ɵfac = function PhimComponent_Factory(t) { return new (t || PhimComponent)(); };
PhimComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhimComponent, selectors: [["app-phim"]], inputs: { dsPhim: "dsPhim" }, decls: 10, vars: 8, consts: [[1, "dsPhim"], [1, "dsPhim__title", "text-center"], [1, "d-inline", "mr-4", "px-1", 3, "ngClass", "click"], [1, "dsPhim__content"], ["class", "content_DC pt-3", 4, "ngIf", "ngIfElse"], ["phimSC", ""], [1, "content_DC", "pt-3"], [3, "phimDC"], [1, "content_SC"], [3, "phimSC"]], template: function PhimComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhimComponent_Template_h3_click_2_listener() { return ctx.doiPhim(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0110ANG CHI\u1EBEU ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhimComponent_Template_h3_click_4_listener() { return ctx.doiPhim(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " S\u1EAEP CHI\u1EBEU ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PhimComponent_div_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PhimComponent_ng_template_8_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.isActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, !ctx.isActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActive)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _phim_dang_chieu_phim_dang_chieu_component__WEBPACK_IMPORTED_MODULE_2__["PhimDangChieuComponent"], _phim_sap_chieu_phim_sap_chieu_component__WEBPACK_IMPORTED_MODULE_3__["PhimSapChieuComponent"]], styles: [".dsPhim[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n.dsPhim[_ngcontent-%COMP%]   .dsPhim__title[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.dsPhim[_ngcontent-%COMP%]   .dsPhim__title[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #fb422691;\n  font-weight: bold;\n  font-size: 25px;\n}\n.dsPhim[_ngcontent-%COMP%]   .dsPhim__title[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.dsPhim[_ngcontent-%COMP%]   .dsPhim__content[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 1160px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ob21lL3BoaW0vcGhpbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7QUFBSTtFQUNFLG1CQUFBO0FBRU47QUFETTtFQUNFLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBR1I7QUFETTtFQUNJLGVBQUE7QUFHVjtBQUNJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNSIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9ob21lL3BoaW0vcGhpbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kc1BoaW0ge1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIC5kc1BoaW1fX3RpdGxlIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmYjQyMjY5MTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5kc1BoaW1fX2NvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMTYwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgLy8gQGluY2x1ZGUgZm9yLXNpemUobGcpIHtcclxuICAgICAgICAvLyBtYXgtd2lkdGg6IDc2MHB4O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBAaW5jbHVkZSBmb3Itc2l6ZShzbSkge1xyXG4gICAgICAgIC8vIG1heC13aWR0aDogNTYwcHg7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIEBpbmNsdWRlIGZvci1zaXplKHhzKSB7XHJcbiAgICAgICAgLy8gbWF4LXdpZHRoOiA4NSU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIEBpbmNsdWRlIGZvci1zaXplKHBob25lLXNtKSB7XHJcbiAgICAgICAgLy8gbWF4LXdpZHRoOiAyNTBweDtcclxuICAgICAgICAvLyB9XHJcbiAgIFxyXG5cclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhimComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-phim",
                templateUrl: "./phim.component.html",
                styleUrls: ["./phim.component.scss"],
            }]
    }], function () { return []; }, { dsPhim: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/main/layout/layout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/layout/layout.component.ts ***!
  \*************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/main/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/main/footer/footer.component.ts");





class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 3, vars: 0, template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/main/home/home.component.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/main/movie-detail/movie-detail.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/main/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/main/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/main/footer/footer.component.ts");
/* harmony import */ var _home_phim_phim_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/phim/phim.component */ "./src/app/main/home/phim/phim.component.ts");
/* harmony import */ var _home_he_thong_rap_he_thong_rap_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/he-thong-rap/he-thong-rap.component */ "./src/app/main/home/he-thong-rap/he-thong-rap.component.ts");
/* harmony import */ var _home_phim_phim_dang_chieu_phim_dang_chieu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/phim/phim-dang-chieu/phim-dang-chieu.component */ "./src/app/main/home/phim/phim-dang-chieu/phim-dang-chieu.component.ts");
/* harmony import */ var _home_phim_phim_sap_chieu_phim_sap_chieu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/phim/phim-sap-chieu/phim-sap-chieu.component */ "./src/app/main/home/phim/phim-sap-chieu/phim-sap-chieu.component.ts");
/* harmony import */ var _home_phim_phim_item_phim_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/phim/phim-item/phim-item.component */ "./src/app/main/home/phim/phim-item/phim-item.component.ts");
/* harmony import */ var _home_modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/modal/modal.component */ "./src/app/main/home/modal/modal.component.ts");
/* harmony import */ var _home_modal_trailer_modal_trailer_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/modal/trailer-modal/trailer-modal.component */ "./src/app/main/home/modal/trailer-modal/trailer-modal.component.ts");
/* harmony import */ var _home_phim_phim_item_danh_gia_danh_gia_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/phim/phim-item/danh-gia/danh-gia.component */ "./src/app/main/home/phim/phim-item/danh-gia/danh-gia.component.ts");



















const routes = [
    {
        path: "",
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
        // Khi xài children, thì file html phải có router-outlet
        children: [
            { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: "movie/:id", component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailComponent"] },
        ],
    },
];
class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _home_phim_phim_component__WEBPACK_IMPORTED_MODULE_9__["PhimComponent"],
        _home_he_thong_rap_he_thong_rap_component__WEBPACK_IMPORTED_MODULE_10__["HeThongRapComponent"],
        _home_phim_phim_dang_chieu_phim_dang_chieu_component__WEBPACK_IMPORTED_MODULE_11__["PhimDangChieuComponent"],
        _home_phim_phim_sap_chieu_phim_sap_chieu_component__WEBPACK_IMPORTED_MODULE_12__["PhimSapChieuComponent"],
        _home_phim_phim_item_phim_item_component__WEBPACK_IMPORTED_MODULE_13__["PhimItemComponent"],
        _home_modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["ModalComponent"],
        _home_modal_trailer_modal_trailer_modal_component__WEBPACK_IMPORTED_MODULE_15__["TrailerModalComponent"],
        _home_phim_phim_item_danh_gia_danh_gia_component__WEBPACK_IMPORTED_MODULE_16__["DanhGiaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                    _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailComponent"],
                    _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _home_phim_phim_component__WEBPACK_IMPORTED_MODULE_9__["PhimComponent"],
                    _home_he_thong_rap_he_thong_rap_component__WEBPACK_IMPORTED_MODULE_10__["HeThongRapComponent"],
                    _home_phim_phim_dang_chieu_phim_dang_chieu_component__WEBPACK_IMPORTED_MODULE_11__["PhimDangChieuComponent"],
                    _home_phim_phim_sap_chieu_phim_sap_chieu_component__WEBPACK_IMPORTED_MODULE_12__["PhimSapChieuComponent"],
                    _home_phim_phim_item_phim_item_component__WEBPACK_IMPORTED_MODULE_13__["PhimItemComponent"],
                    _home_modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["ModalComponent"],
                    _home_modal_trailer_modal_trailer_modal_component__WEBPACK_IMPORTED_MODULE_15__["TrailerModalComponent"],
                    _home_phim_phim_item_danh_gia_danh_gia_component__WEBPACK_IMPORTED_MODULE_16__["DanhGiaComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/movie-detail/movie-detail.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/movie-detail/movie-detail.component.ts ***!
  \*************************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/movies.service */ "./src/app/core/services/movies.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MovieDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovieDetailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.error || "Some error occurred.", " ");
} }
function MovieDetailComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.movieDetail.hinhAnh, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.movieDetail.tenPhim);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.movieDetail.moTa);
} }
class MovieDetailComponent {
    constructor(activatedRoute, movieService) {
        this.activatedRoute = activatedRoute;
        this.movieService = movieService;
        this.movieDetail = null;
        this.loading = false;
        this.error = '';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe({
            next: (params) => {
                console.log(params);
                this.loading = true;
                this.movieService.getMovieDetail(params.id).subscribe({
                    next: result => {
                        this.movieDetail = result;
                        this.loading = false;
                        console.log(this.movieDetail);
                    },
                    error: error => {
                        this.loading = false;
                        this.error = error.error;
                    }
                });
            },
        });
    }
}
MovieDetailComponent.ɵfac = function MovieDetailComponent_Factory(t) { return new (t || MovieDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"])); };
MovieDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieDetailComponent, selectors: [["app-movie-detail"]], decls: 4, vars: 3, consts: [[1, "container"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-sm-12", "text-center"], [1, "col-sm-6"], [3, "src"]], template: function MovieDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieDetailComponent_div_2_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MovieDetailComponent_div_3_Template, 8, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieDetail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-detail',
                templateUrl: './movie-detail.component.html',
                styleUrls: ['./movie-detail.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_core_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=main-main-module-es2015.js.map