"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_multi-file-upload_multi-file-upload_module_ts"],{

/***/ 5190:
/*!***********************************************************************!*\
  !*** ./src/app/multi-file-upload/multi-file-upload-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiFileUploadPageRoutingModule": () => (/* binding */ MultiFileUploadPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _multi_file_upload_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multi-file-upload.page */ 5941);




const routes = [
    {
        path: '',
        component: _multi_file_upload_page__WEBPACK_IMPORTED_MODULE_0__.MultiFileUploadPage
    }
];
let MultiFileUploadPageRoutingModule = class MultiFileUploadPageRoutingModule {
};
MultiFileUploadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MultiFileUploadPageRoutingModule);



/***/ }),

/***/ 7411:
/*!***************************************************************!*\
  !*** ./src/app/multi-file-upload/multi-file-upload.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiFileUploadPageModule": () => (/* binding */ MultiFileUploadPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _multi_file_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multi-file-upload-routing.module */ 5190);
/* harmony import */ var _multi_file_upload_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multi-file-upload.page */ 5941);







let MultiFileUploadPageModule = class MultiFileUploadPageModule {
};
MultiFileUploadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _multi_file_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__.MultiFileUploadPageRoutingModule
        ],
        declarations: [_multi_file_upload_page__WEBPACK_IMPORTED_MODULE_1__.MultiFileUploadPage]
    })
], MultiFileUploadPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_multi-file-upload_multi-file-upload_module_ts.js.map