(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compania-create-compania-create-compania-module"],{

/***/ "APnX":
/*!******************************************************************!*\
  !*** ./src/app/compania/create-compania/create-compania.page.ts ***!
  \******************************************************************/
/*! exports provided: CreateCompaniaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompaniaPage", function() { return CreateCompaniaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_compania_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-compania.page.html */ "MkwP");
/* harmony import */ var _create_compania_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-compania.page.scss */ "t3Yr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CreateCompaniaPage = class CreateCompaniaPage {
    constructor() { }
    ngOnInit() {
    }
};
CreateCompaniaPage.ctorParameters = () => [];
CreateCompaniaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-compania',
        template: _raw_loader_create_compania_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_compania_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreateCompaniaPage);



/***/ }),

/***/ "MkwP":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compania/create-compania/create-compania.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Agregar Compañia de bomberos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item>\n    <ion-label position=\"floating\">Id Compañia:</ion-label>\n    <ion-input name=\"idcomp\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Nombre:</ion-label>\n    <ion-input name=\"namecomp\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Direccion:</ion-label>\n    <ion-input name=\"direccioncomp\"  autocomplete=\"address-line1\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Telefono:</ion-label>\n    <ion-input name=\"telefonocomp\" autocomplete=\"tel-local\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Latitud:</ion-label>\n    <ion-input name=\"latitudcomp\" ></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Longitud:</ion-label>\n    <ion-input name=\"longitudcomp\"></ion-input>\n  </ion-item>\n\n  <ion-button expand=\"block\" (click)=\"createCompania()\">Crear Compañia</ion-button>\n  <ion-button expand=\"block\" href=\"/home\">Atras</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "Q4yq":
/*!****************************************************************************!*\
  !*** ./src/app/compania/create-compania/create-compania-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: CreateCompaniaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompaniaPageRoutingModule", function() { return CreateCompaniaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_compania_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-compania.page */ "APnX");




const routes = [
    {
        path: '',
        component: _create_compania_page__WEBPACK_IMPORTED_MODULE_3__["CreateCompaniaPage"]
    }
];
let CreateCompaniaPageRoutingModule = class CreateCompaniaPageRoutingModule {
};
CreateCompaniaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateCompaniaPageRoutingModule);



/***/ }),

/***/ "YOVv":
/*!********************************************************************!*\
  !*** ./src/app/compania/create-compania/create-compania.module.ts ***!
  \********************************************************************/
/*! exports provided: CreateCompaniaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompaniaPageModule", function() { return CreateCompaniaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _create_compania_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-compania-routing.module */ "Q4yq");
/* harmony import */ var _create_compania_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-compania.page */ "APnX");







let CreateCompaniaPageModule = class CreateCompaniaPageModule {
};
CreateCompaniaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_compania_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateCompaniaPageRoutingModule"]
        ],
        declarations: [_create_compania_page__WEBPACK_IMPORTED_MODULE_6__["CreateCompaniaPage"]]
    })
], CreateCompaniaPageModule);



/***/ }),

/***/ "t3Yr":
/*!********************************************************************!*\
  !*** ./src/app/compania/create-compania/create-compania.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtY29tcGFuaWEucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=compania-create-compania-create-compania-module.js.map