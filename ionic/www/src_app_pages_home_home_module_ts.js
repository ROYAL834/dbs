"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/user-route-access.service */ 1284);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _multi_file_upload_multi_file_upload_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../multi-file-upload/multi-file-upload.page */ 5941);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-file-upload */ 8356);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ 2358);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ 4719);













const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage,
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
];
let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__.FileUploadModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes)],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage, _multi_file_upload_multi_file_upload_page__WEBPACK_IMPORTED_MODULE_2__.MultiFileUploadPage],
        providers: [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File, _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__.HTTP]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 2260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_auth_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/account.service */ 150);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login/login.service */ 8762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _services_utils_data_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utils/data-util.service */ 3014);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ 8356);
/* harmony import */ var _multi_file_upload_multi_file_upload_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../multi-file-upload/multi-file-upload.page */ 5941);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ 2358);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ 4719);








//import { FileChooser } from '@ionic-native/file-chooser';





let uuid;
let zip;
const URL = 'http://localhost:3000/task/' + uuid + '/download/all.zip';
// var el= document.getElementById('a'); 
// // el.href += uuid
let HomePage = class HomePage {
    constructor(file, http, navController, dataUtils, httpClient, accountService, loginService) {
        this.file = file;
        this.http = http;
        this.navController = navController;
        this.dataUtils = dataUtils;
        this.httpClient = httpClient;
        this.accountService = accountService;
        this.loginService = loginService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__.FileUploader({});
        this.hasBaseDropZoneOver = false;
    }
    ngOnInit() {
        this.accountService.identity().then(account => {
            if (account === null) {
                this.goBackToHomePage();
            }
            else {
                this.account = account;
            }
        });
    }
    isAuthenticated() {
        return this.accountService.isAuthenticated();
    }
    logout() {
        this.loginService.logout();
        this.goBackToHomePage();
    }
    goBackToHomePage() {
        this.navController.navigateBack('');
    }
    // selectimages() {
    //   // var headers = new Headers();
    //   // headers.append("Accept", 'application/json');
    //   // headers.append('Content-Type', 'application/json' );
    //   // const requestOptions = new RequestOptions({ headers: headers });
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       "Accept": 'application/json',
    //       'Content-Type':  'application/json',
    //       })
    //     };
    //   // let postData = {
    //   //         "title": "axalyn-server",
    //   //         "author": "axalyn"
    //   // }
    //   this.httpClient.post("http://localhost:3000/task/new/init", httpOptions)
    //     .subscribe(data => {
    //       console.log(data);
    //       uuid.push(data);
    //       console.log(uuid);
    //      }, error => {
    //       console.log(error);
    //     });
    // }
    // upload() {
    //   // var headers = new Headers();
    //   // headers.append("Accept", 'application/json');
    //   // headers.append('Content-Type', 'application/json' );
    //   // const requestOptions = new RequestOptions({ headers: headers });
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       "Accept": 'application/json',
    //       'Content-Type':  'application/json',
    //       })
    //     };
    //   // let postData = {
    //   //         "title": "axalyn-server",
    //   //         "author": "axalyn"
    //   // }
    //   this.httpClient.get("http://localhost:3000/task/`${uuid}`/download/all.zip", httpOptions)
    //     .subscribe(data => {
    //       console.log(data);
    //      }, error => {
    //       console.log(error);
    //     });
    // }
    //byteSize(field) {
    //  return this.dataUtils.byteSize(field);
    //}
    //openFile(contentType, field) {
    // return this.dataUtils.openFile(contentType, field);
    //}
    //setFileData(event, field, isImage) {
    // this.dataUtils.loadFileToForm(event, this.form, field, isImage).subscribe();
    //}
    //    fileToUpload: File | null = null;
    //    handleFileInput(files: FileList) {
    //     this.fileToUpload = files.item(0);
    // }
    // postFile(fileToUpload: File): Observable<boolean> {
    //   const endpoint = 'your-destination-url';
    //   const formData: FormData = new FormData();
    //   formData.append('fileKey', fileToUpload, fileToUpload.name);
    //   return this.httpClient
    //     .post(endpoint, formData, { headers: new HttpHeaders({
    //       "Accept": 'application/json',
    //       'Content-Type':  'application/json',
    //       }) })
    //       .map(() => { return true; })
    // }
    // uploadFileToActivity() {
    //   this.postFile(this.fileToUpload).subscribe(data => {
    //     // do something, if upload success
    //     }, error => {
    //       console.log(error);
    //     });
    // }
    // public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
    // public uploader: FileUploader = new FileUploader({
    //     url: URL,
    //     disableMultipart: false,
    //     autoUpload: true,
    //     method: 'post',
    //     itemAlias: 'attachment',
    //     allowedFileType: ['image', 'pdf',],
    //   });
    // public onFileSelected(event: EventEmitter<File[]>) {
    //   const file: File = event[0];
    //   console.log(file);
    // }
    // getFiles(): FileLikeObject[] {
    //   return this.uploader.queue.map((fileItem) => {
    //     return fileItem.file;
    //   });
    // }
    // fileOverBase(ev): void {
    //   this.hasBaseDropZoneOver = ev;
    // }
    // reorderFiles(reorderEvent: CustomEvent): void {
    //   let element = this.uploader.queue.splice(reorderEvent.detail.from, 1)[0];
    //   this.uploader.queue.splice(reorderEvent.detail.to, 0, element);
    // }
    upload2() {
        let files = this.fileField.getFiles();
        console.log(files);
        let formData = new FormData();
        // formData.append('somekey', 'some value'); // Add any other data you want to send
        files.forEach((file) => {
            formData.append('images', file.rawFile);
        });
        console.log(formData);
        // POST formData to Server
        // let postData = {
        //         "images": formData,
        // // }
        // let headers = {
        //   'enctype': 'multipart/form-data;',
        //   'Accept': 'plain/text',
        //   'Access-Control-Allow-Origin': '*',
        //   'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        //   'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
        // };
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     "Accept": 'application/json',
        //     'Content-Type':'application/json'
        //     })
        //   };
        // console.log(formData)
        this.httpClient.post("http://localhost:3000/task/new", formData)
            .subscribe(data => {
            console.log(data);
            // console.log(data[UUID]);
            uuid = data['uuid'];
            console.log(uuid);
        }, error => {
            console.log(error);
        });
    }
    download() {
        // http://localhost:3000/task/63291821-3846-4c1b-adb5-6e0fcf8a6381/download/all.zip
        //   var headers = new Headers();
        //       headers.append("Accept", 'application/json');
        //       headers.append('Content-Type', 'application/json' );
        //       // const requestOptions = new RequestOptions({ headers: headers });
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     "Accept": 'text/html,application/zip,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        //     'Content-Type':  'application/json,application/zip',
        //     'Accept-Language':'en-US,en;q=0.5'
        //     })
        //   };
        this.httpClient.get("http://localhost:3000/task/1a216b35-b573-4fa8-9870-e076155a8444/download/all.zip");
        // .subscribe((data: any) => {
        //   console.log(data);  
        //   // let dataType = data.type; 
        //   //     let binaryData = [];
        //   //     binaryData.push(data);
        //   //     let downloadLink = document.createElement('a');
        //   //     downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
        //   //     let filename = 'all';
        //   //     if (filename)
        //   //         downloadLink.setAttribute('download', filename);
        //   //     document.body.appendChild(downloadLink);
        //   //     downloadLink.click();                                                                                                                                                                                                                                                                                                                                                                                                    
        //  }, error => {
        //   console.log(error);
        // });
    }
    downloadFile() {
        var url = 'http://localhost:3000/task/' + uuid + '/download/all.zip';
        this.http.sendRequest(url, { method: "get", responseType: "arraybuffer" }).then(httpResponse => {
            console.log("File dowloaded successfully");
            this.downloadedFile = new Blob([httpResponse.data], { type: 'application/zip' });
        }).catch(err => {
            console.error(err);
        });
    }
    writeFile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (this.downloadedFile == null)
                return;
            var filename = 'myDownloadedPdfFile3.zip';
            yield this.createFile(filename);
            yield this.writeToFile(filename);
        });
    }
    createFile(filename) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            return this.file.createFile(this.file.externalRootDirectory, filename, false).catch(err => {
                console.error(err);
            });
        });
    }
    writeToFile(filename) {
        return this.file.writeFile(this.file.externalRootDirectory, filename, this.downloadedFile, { replace: true, append: false }).then(createdFile => {
            console.log('File written successfully.');
            console.log(createdFile);
        }).catch(err => {
            console.error(err);
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__.File },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__.HTTP },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: _services_utils_data_util_service__WEBPACK_IMPORTED_MODULE_4__.JhiDataUtils },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient },
    { type: _services_auth_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: _services_login_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService }
];
HomePage.propDecorators = {
    fileField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: [_multi_file_upload_multi_file_upload_page__WEBPACK_IMPORTED_MODULE_5__.MultiFileUploadPage,] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 3014:
/*!*****************************************************!*\
  !*** ./src/app/services/utils/data-util.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JhiDataUtils": () => (/* binding */ JhiDataUtils)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2378);

/*
 Copyright 2016-Present the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://www.jhipster.tech/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


/**
 * An utility service for data.
 */
let JhiDataUtils = class JhiDataUtils {
    constructor() { }
    /**
     * Method to abbreviate the text given
     */
    abbreviate(text, append = '...') {
        if (text.length < 30) {
            return text;
        }
        return text ? text.substring(0, 15) + append + text.slice(-10) : '';
    }
    /**
     * Method to find the byte size of the string provides
     */
    byteSize(base64String) {
        return this.formatAsBytes(this.size(base64String));
    }
    /**
     * Method to open file
     */
    openFile(contentType, data) {
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            // To support IE and Edge
            const byteCharacters = atob(data);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], {
                type: contentType,
            });
            window.navigator.msSaveOrOpenBlob(blob);
        }
        else {
            // Other browsers
            const fileURL = `data:${contentType};base64,${data}`;
            const win = window.open();
            win.document.write('<iframe src="' +
                fileURL +
                '" frameborder="0" style="border:0; top:0; left:0; bottom:0; right:0; width:100%; height:100%;" allowfullscreen></iframe>');
        }
    }
    /**
     * Method to convert the file to base64
     */
    toBase64(file, cb) {
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
            const base64Data = e.target.result.substr(e.target.result.indexOf('base64,') + 'base64,'.length);
            cb(base64Data);
        };
        fileReader.readAsDataURL(file);
    }
    /**
     * Method to clear the input
     */
    clearInputImage(entity, elementRef, field, fieldContentType, idInput) {
        if (entity && field && fieldContentType) {
            if (Object.prototype.hasOwnProperty.call(entity, field)) {
                entity[field] = null;
            }
            if (Object.prototype.hasOwnProperty.call(entity, fieldContentType)) {
                entity[fieldContentType] = null;
            }
            if (elementRef && idInput && elementRef.nativeElement.querySelector('#' + idInput)) {
                elementRef.nativeElement.querySelector('#' + idInput).value = null;
            }
        }
    }
    /**
     * Sets the base 64 data & file type of the 1st file on the event (event.target.files[0]) in the passed entity object
     * and returns a promise.
     *
     * @param event the object containing the file (at event.target.files[0])
     * @param entity the object to set the file's 'base 64 data' and 'file type' on
     * @param field the field name to set the file's 'base 64 data' on
     * @param isImage boolean representing if the file represented by the event is an image
     * @returns a promise that resolves to the modified entity if operation is successful, otherwise rejects with an error message
     */
    setFileData(event, entity, field, isImage) {
        return new Promise((resolve, reject) => {
            if (event && event.target && event.target.files && event.target.files[0]) {
                const file = event.target.files[0];
                if (isImage && !file.type.startsWith('image/')) {
                    reject(`File was expected to be an image but was found to be ${file.type}`);
                }
                else {
                    this.toBase64(file, base64Data => {
                        entity[field] = base64Data;
                        entity[`${field}ContentType`] = file.type;
                        resolve(entity);
                    });
                }
            }
            else {
                reject(`Base64 data was not set as file could not be extracted from passed parameter: ${event}`);
            }
        });
    }
    /**
     * Sets the base 64 data & file type of the 1st file on the event (event.target.files[0]) in the passed entity object
     * and returns an observable.
     *
     * @param event the object containing the file (at event.target.files[0])
     * @param editForm the form group where the input field is located
     * @param field the field name to set the file's 'base 64 data' on
     * @param isImage boolean representing if the file represented by the event is an image
     * @returns an observable that loads file to form field and completes if sussessful
     *          or returns error as JhiFileLoadError on failure
     */
    loadFileToForm(event, editForm, field, isImage) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((observer) => {
            const eventTarget = event.target;
            if (eventTarget.files && eventTarget.files[0]) {
                const file = eventTarget.files[0];
                if (isImage && !file.type.startsWith('image/')) {
                    const error = {
                        message: `File was expected to be an image but was found to be '${file.type}'`,
                        key: 'not.image',
                        params: { fileType: file.type },
                    };
                    observer.error(error);
                }
                else {
                    const fieldContentType = field + 'ContentType';
                    this.toBase64(file, (base64Data) => {
                        editForm.patchValue({
                            [field]: base64Data,
                            [fieldContentType]: file.type,
                        });
                        observer.next();
                        observer.complete();
                    });
                }
            }
            else {
                const error = {
                    message: 'Could not extract file',
                    key: 'could.not.extract',
                    params: { event },
                };
                observer.error(error);
            }
        });
    }
    /**
     * Method to download file
     */
    downloadFile(contentType, data, fileName) {
        const byteCharacters = atob(data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], {
            type: contentType,
        });
        const tempLink = document.createElement('a');
        tempLink.href = window.URL.createObjectURL(blob);
        tempLink.download = fileName;
        tempLink.target = '_blank';
        tempLink.click();
    }
    endsWith(suffix, str) {
        return str.includes(suffix, str.length - suffix.length);
    }
    paddingSize(value) {
        if (this.endsWith('==', value)) {
            return 2;
        }
        if (this.endsWith('=', value)) {
            return 1;
        }
        return 0;
    }
    size(value) {
        return (value.length / 4) * 3 - this.paddingSize(value);
    }
    formatAsBytes(size) {
        return size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' bytes';
    }
};
JhiDataUtils.ctorParameters = () => [];
JhiDataUtils = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], JhiDataUtils);



/***/ }),

/***/ 2358:
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "File": () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 8751);




var File = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(File, _super);
    function File() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cordovaFileError = {
            1: 'NOT_FOUND_ERR',
            2: 'SECURITY_ERR',
            3: 'ABORT_ERR',
            4: 'NOT_READABLE_ERR',
            5: 'ENCODING_ERR',
            6: 'NO_MODIFICATION_ALLOWED_ERR',
            7: 'INVALID_STATE_ERR',
            8: 'SYNTAX_ERR',
            9: 'INVALID_MODIFICATION_ERR',
            10: 'QUOTA_EXCEEDED_ERR',
            11: 'TYPE_MISMATCH_ERR',
            12: 'PATH_EXISTS_ERR',
            13: 'WRONG_ENTRY_TYPE',
            14: 'DIR_READ_ERR',
        };
        return _this;
    }
    File.prototype.getFreeDiskSpace = function () {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
                    cordova.exec(resolve, reject, 'File', 'getFreeDiskSpace', []);
                });
            }
        })();
    };
    File.prototype.checkDir = function (path, dir) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dir)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var fullPath = path + dir;
                return _this.resolveDirectoryUrl(fullPath).then(function () {
                    return true;
                });
            }
        })();
    };
    File.prototype.createDir = function (path, dirName, replace) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true,
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getDirectory(fse, dirName, options);
                });
            }
        })();
    };
    File.prototype.removeDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.remove(de);
                });
            }
        })();
    };
    File.prototype.moveDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                newDirName = newDirName || dirName;
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (destenation) {
                        return _this.move(srcde, destenation, newDirName);
                    });
                });
            }
        })();
    };
    File.prototype.copyDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcde, deste, newDirName);
                    });
                });
            }
        })();
    };
    File.prototype.listDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, {
                        create: false,
                        exclusive: false,
                    });
                })
                    .then(function (de) {
                    var reader = de.createReader();
                    return _this.readEntries(reader);
                });
            }
        })();
    };
    File.prototype.removeRecursively = function (path, dirName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.rimraf(de);
                });
            }
        })();
    };
    File.prototype.checkFile = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(file)) {
                    var err = new FileError(5);
                    err.message = 'file cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveLocalFilesystemUrl(path + file).then(function (fse) {
                    if (fse.isFile) {
                        return true;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a file';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    File.prototype.createFile = function (path, fileName, replace) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true,
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getFile(fse, fileName, options);
                });
            }
        })();
    };
    File.prototype.removeFile = function (path, fileName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (fe) {
                    return _this.remove(fe);
                });
            }
        })();
    };
    File.prototype.writeFile = function (path, fileName, text, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var getFileOpts = {
                    create: !options.append,
                    exclusive: !options.replace,
                };
                return _this.resolveDirectoryUrl(path)
                    .then(function (directoryEntry) {
                    return _this.getFile(directoryEntry, fileName, getFileOpts);
                })
                    .then(function (fileEntry) {
                    return _this.writeFileEntry(fileEntry, text, options);
                });
            }
        })();
    };
    /**
     * Write content to FileEntry.
     * @hidden
     * Write to an existing file.
     * @param {FileEntry} fe file entry object
     * @param {string | Blob | ArrayBuffer} text text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<FileEntry>}  Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    File.prototype.writeFileEntry = function (fe, text, options) {
        var _this = this;
        return this.createWriter(fe)
            .then(function (writer) {
            if (options.append) {
                writer.seek(writer.length);
            }
            if (options.truncate) {
                writer.truncate(options.truncate);
            }
            return _this.write(writer, text);
        })
            .then(function () { return fe; });
    };
    File.prototype.writeExistingFile = function (path, fileName, text) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.writeFile(path, fileName, text, { replace: true });
            }
        })();
    };
    File.prototype.readAsText = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.readFile(path, file, 'Text');
            }
        })();
    };
    File.prototype.readAsDataURL = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.readFile(path, file, 'DataURL');
            }
        })();
    };
    File.prototype.readAsBinaryString = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.readFile(path, file, 'BinaryString');
            }
        })();
    };
    File.prototype.readAsArrayBuffer = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.readFile(path, file, 'ArrayBuffer');
            }
        })();
    };
    File.prototype.moveFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.move(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    File.prototype.copyFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    /**
     * @hidden
     */
    File.prototype.fillErrorMessage = function (err) {
        try {
            err.message = this.cordovaFileError[err.code];
        }
        catch (e) { }
    };
    File.prototype.resolveLocalFilesystemUrl = function (fileUrl) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
                    try {
                        window.resolveLocalFileSystemURL(fileUrl, function (entry) {
                            resolve(entry);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.resolveDirectoryUrl = function (directoryUrl) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.resolveLocalFilesystemUrl(directoryUrl).then(function (de) {
                    if (de.isDirectory) {
                        return de;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a directory';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    File.prototype.getDirectory = function (directoryEntry, directoryName, flags) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getDirectory(directoryName, flags, function (de) {
                            resolve(de);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.getFile = function (directoryEntry, fileName, flags) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getFile(fileName, flags, resolve, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.readFile = function (path, file, readAs) {
        var _this = this;
        if (/^\//.test(file)) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, file, { create: false });
        })
            .then(function (fileEntry) {
            var reader = new FileReader();
            return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fileEntry.file(function (file) {
                    reader["readAs" + readAs].call(reader, file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.remove = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.remove(function () {
                resolve({ success: true, fileRemoved: fe });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.move = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.moveTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.copy = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.copyTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.readEntries = function (dr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            dr.readEntries(function (entries) {
                resolve(entries);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.rimraf = function (de) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            de.removeRecursively(function () {
                resolve({ success: true, fileRemoved: de });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.createWriter = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.createWriter(function (writer) {
                resolve(writer);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.write = function (writer, gu) {
        if (gu instanceof Blob) {
            return this.writeFileInChunks(writer, gu);
        }
        return new Promise(function (resolve, reject) {
            writer.onwriteend = function (evt) {
                if (writer.error) {
                    reject(writer.error);
                }
                else {
                    resolve(evt);
                }
            };
            writer.write(gu);
        });
    };
    /**
     * @hidden
     */
    File.prototype.writeFileInChunks = function (writer, file) {
        var BLOCK_SIZE = 1024 * 1024;
        var writtenSize = 0;
        function writeNextChunk() {
            var size = Math.min(BLOCK_SIZE, file.size - writtenSize);
            var chunk = file.slice(writtenSize, writtenSize + size);
            writtenSize += size;
            writer.write(chunk);
        }
        return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
            writer.onerror = reject;
            writer.onwrite = function () {
                if (writtenSize < file.size) {
                    writeNextChunk();
                }
                else {
                    resolve();
                }
            };
            writeNextChunk();
        });
    };
    Object.defineProperty(File.prototype, "applicationDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "applicationDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "applicationDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "applicationStorageDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "applicationStorageDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "applicationStorageDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "dataDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "dataDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "dataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "cacheDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "cacheDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "cacheDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalApplicationStorageDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "externalApplicationStorageDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "externalApplicationStorageDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalDataDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "externalDataDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "externalDataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalCacheDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "externalCacheDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "externalCacheDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalRootDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "externalRootDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "externalRootDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "tempDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "tempDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "tempDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "syncedDataDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "syncedDataDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "syncedDataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "documentsDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "documentsDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "documentsDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "sharedDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "sharedDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "sharedDirectory", value); },
        enumerable: false,
        configurable: true
    });
    File.pluginName = "File";
    File.plugin = "cordova-plugin-file";
    File.pluginRef = "cordova.file";
    File.repo = "https://github.com/apache/cordova-plugin-file";
    File.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
File.ɵfac = /*@__PURE__*/ function () { var ɵFile_BaseFactory; return function File_Factory(t) { return (ɵFile_BaseFactory || (ɵFile_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](File)))(t || File); }; }();
File.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: File, factory: function (t) { return File.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](File, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return File;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));




/***/ }),

/***/ 4719:
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTTP": () => (/* binding */ HTTP)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 8751);




var HTTP = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(HTTP, _super);
    function HTTP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTTP.prototype.getBasicAuthHeader = function (username, password) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getBasicAuthHeader", { "sync": true }, arguments); };
    HTTP.prototype.useBasicAuth = function (username, password) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "useBasicAuth", { "sync": true }, arguments); };
    HTTP.prototype.getHeaders = function (host) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getHeaders", { "sync": true }, arguments); };
    HTTP.prototype.setHeader = function (host, header, value) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setHeader", { "sync": true }, arguments); };
    HTTP.prototype.getDataSerializer = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getDataSerializer", { "sync": true }, arguments); };
    HTTP.prototype.setDataSerializer = function (serializer) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setDataSerializer", { "sync": true }, arguments); };
    HTTP.prototype.setCookie = function (url, cookie) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setCookie", { "sync": true }, arguments); };
    HTTP.prototype.clearCookies = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "clearCookies", { "sync": true }, arguments); };
    HTTP.prototype.removeCookies = function (url, cb) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "removeCookies", { "sync": true }, arguments); };
    HTTP.prototype.getCookieString = function (url) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getCookieString", { "sync": true }, arguments); };
    HTTP.prototype.getRequestTimeout = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getRequestTimeout", { "sync": true }, arguments); };
    HTTP.prototype.setRequestTimeout = function (timeout) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setRequestTimeout", { "sync": true }, arguments); };
    HTTP.prototype.getFollowRedirect = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getFollowRedirect", { "sync": true }, arguments); };
    HTTP.prototype.setFollowRedirect = function (follow) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setFollowRedirect", { "sync": true }, arguments); };
    HTTP.prototype.setServerTrustMode = function (mode) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setServerTrustMode", {}, arguments); };
    HTTP.prototype.post = function (url, body, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "post", {}, arguments); };
    HTTP.prototype.postSync = function (url, body, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "post", { "methodName": "post", "sync": true }, arguments); };
    HTTP.prototype.get = function (url, parameters, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "get", {}, arguments); };
    HTTP.prototype.getSync = function (url, parameters, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "get", { "methodName": "get", "sync": true }, arguments); };
    HTTP.prototype.put = function (url, body, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "put", {}, arguments); };
    HTTP.prototype.putSync = function (url, body, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "put", { "methodName": "put", "sync": true }, arguments); };
    HTTP.prototype.patch = function (url, body, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "patch", {}, arguments); };
    HTTP.prototype.patchSync = function (url, body, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "patch", { "methodName": "patch", "sync": true }, arguments); };
    HTTP.prototype.delete = function (url, parameters, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "delete", {}, arguments); };
    HTTP.prototype.deleteSync = function (url, parameters, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "delete", { "methodName": "delete", "sync": true }, arguments); };
    HTTP.prototype.head = function (url, parameters, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "head", {}, arguments); };
    HTTP.prototype.headSync = function (url, parameters, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "head", { "methodName": "head", "sync": true }, arguments); };
    HTTP.prototype.options = function (url, parameters, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "options", {}, arguments); };
    HTTP.prototype.optionsSync = function (url, parameters, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "options", { "methodName": "options", "sync": true }, arguments); };
    HTTP.prototype.uploadFile = function (url, body, headers, filePath, name) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "uploadFile", {}, arguments); };
    HTTP.prototype.uploadFileSync = function (url, body, headers, filePath, name, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "uploadFile", { "methodName": "uploadFile", "sync": true }, arguments); };
    HTTP.prototype.downloadFile = function (url, body, headers, filePath) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "downloadFile", {}, arguments); };
    HTTP.prototype.downloadFileSync = function (url, body, headers, filePath, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "downloadFile", { "methodName": "downloadFile", "sync": true }, arguments); };
    HTTP.prototype.sendRequest = function (url, options) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "sendRequest", {}, arguments); };
    HTTP.prototype.sendRequestSync = function (url, options, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "sendRequest", { "methodName": "sendRequest", "sync": true }, arguments); };
    HTTP.prototype.abort = function (requestId) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "abort", {}, arguments); };
    Object.defineProperty(HTTP.prototype, "ErrorCode", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "ErrorCode"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "ErrorCode", value); },
        enumerable: false,
        configurable: true
    });
    HTTP.pluginName = "HTTP";
    HTTP.plugin = "cordova-plugin-advanced-http";
    HTTP.pluginRef = "cordova.plugin.http";
    HTTP.repo = "https://github.com/silkimen/cordova-plugin-advanced-http";
    HTTP.platforms = ["Android", "iOS"];
HTTP.ɵfac = /*@__PURE__*/ function () { var ɵHTTP_BaseFactory; return function HTTP_Factory(t) { return (ɵHTTP_BaseFactory || (ɵHTTP_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](HTTP)))(t || HTTP); }; }();
HTTP.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HTTP, factory: function (t) { return HTTP.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HTTP, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return HTTP;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));




/***/ }),

/***/ 2260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/* wait autoprefixer update to allow simple generation of high pixel density media query */\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2), only screen and (-webkit-min-device-pixel-ratio: 0.8333333333333334), only screen and (min-resolution: 80dpi), only screen and (-webkit-min-device-pixel-ratio: 5), only screen and (min-resolution: 5dppx) {\n  .hipster {\n    background: url(\"https://www.pngplay.com/wp-content/uploads/1/Drone-PNG-Pic-Background.png\") no-repeat;\n    background-size: cover;\n  }\n}\n.drop-zone {\n  background-color: #f6f6f6;\n  border: dotted 3px #dedddd;\n  height: 10vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 5px 0;\n}\n.file-input-container {\n  text-align: right;\n}\n.file-input-container input[type=file] {\n  display: none;\n}\n.file-input-container label {\n  border: 1px solid #ccc;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n.nv-file-over {\n  border: dotted 3px red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBLDBGQUFBO0FBQ0E7RUFNRTtJQUNFLHNHQUFBO0lBQ0Esc0JBQUE7RUFkRjtBQUNGO0FBbUJBO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFqQkY7QUFvQkE7RUFDRSxpQkFBQTtBQWpCRjtBQW1CRTtFQUNFLGFBQUE7QUFqQko7QUFvQkU7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQWxCSjtBQXNCQTtFQUNFLHNCQUFBO0FBbkJGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmhpcHN0ZXIge1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly93d3cucG5ncGxheS5jb20vd3AtY29udGVudC91cGxvYWRzLzEvRHJvbmUtUE5HLVBpYy1CYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdCA7XG4vLyAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuLy8gfVxuXG4vKiB3YWl0IGF1dG9wcmVmaXhlciB1cGRhdGUgdG8gYWxsb3cgc2ltcGxlIGdlbmVyYXRpb24gb2YgaGlnaCBwaXhlbCBkZW5zaXR5IG1lZGlhIHF1ZXJ5ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcbiAgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogODBkcGkpLFxuICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiA1ZHBweCkge1xuICAuaGlwc3RlciB7XG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3d3dy5wbmdwbGF5LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMS9Ecm9uZS1QTkctUGljLUJhY2tncm91bmQucG5nJykgbm8tcmVwZWF0IDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG59XG4vLyBpb24tY29udGVudCB7XG4vLyAgIC0tYmFja2dyb3VuZDp1cmwoaHR0cHM6Ly93d3cucG5ncGxheS5jb20vd3AtY29udGVudC91cGxvYWRzLzEvRHJvbmUtUE5HLVBpYy1CYWNrZ3JvdW5kLnBuZykgO1xuLy8gfVxuLmRyb3Atem9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGJvcmRlcjogZG90dGVkIDNweCAjZGVkZGRkO1xuICBoZWlnaHQ6IDEwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4uZmlsZS1pbnB1dC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcblxuICBpbnB1dFt0eXBlPSdmaWxlJ10ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBsYWJlbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLm52LWZpbGUtb3ZlciB7XG4gIGJvcmRlcjogZG90dGVkIDNweCByZWQ7XG59Il19 */";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"medium\"></ion-menu-button>\n    </ion-buttons>\n    <ion-item>\n      <ion-icon name=\"logo-codepen\"></ion-icon>&nbsp;\n    DRONE \n  </ion-item>\n    <ion-buttons slot=\"end\"> \n      <ion-button color=\"dark\" (click) =\"logout()\" id=\"logout\">\n        {{ 'LOGOUT_TITLE' | translate }}\n        <ion-icon slot=\"end\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content padding class=\"background\"></ion-content> -->\n<!-- <ion-content class=\"class-name\"></ion-content> -->\n<ion-content class=\"ion-padding\" >\n  <!-- <span class=\"hipster\"></span> -->\n  \n  <!-- <ion-item>\n    <div>\n      <div *ngIf=\"plant.attachments\">\n        <p>{{plant.attachmentsContentType}}, {{byteSize(plant.attachments)}}</p>\n        <ion-button\n          color=\"danger\"\n          (click)=\"plant.attachments=null;plant.attachmentsContentType=null;form.patchValue({'attachments': ''});form.patchValue({'attachmentsContentType': ''})\"\n        >\n          <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </div>\n      <input type=\"file\" data-cy=\"attachments\" #fileInput (change)=\"setFileData($event, 'attachments', false)\" />\n    </div>\n  </ion-item> -->\n\n  <!-- <ion-button style=\"color:black;\" (click)=\"upload()\" > upload\n  </ion-button>\n     -->\n  <!-- <ion-button style=\"color:black;\"(click)=\"downloadassets()\" >downloadassets\n  </ion-button> --> \n  <!-- <div class=\"form-group\">\n    <label for=\"file\">Choose File</label>\n    <input type=\"file\"\n           id=\"file\"\n           (change)=\"handleFileInput($event.target.files)\">\n</div> -->\n<!-- <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" /> -->\n<!-- <div style=\"background-image: url('https://www.pngplay.com/wp-content/uploads/1/Drone-PNG-Pic-Background.png') ;background-repeat: no-repeat;background-attachment: fixed;\"> -->\n<!-- <div\n  ng2FileDrop\n  [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n  (fileOver)=\"fileOverBase($event)\"\n  [uploader]=\"uploader\"\n  class=\"drop-zone\"\n  style=\"width: 55%;\"\n>\nImages and GCP File (optional)\n</div> -->\n\n<!-- <div class=\"file-input-container\">\n  <label>\n  <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple />\n    Upload\n  </label>\n</div>\n\n<h2>Files: {{ uploader?.queue?.length }}</h2>\n\n<ion-list>\n  <ion-reorder-group (ionItemReorder)=\"reorderFiles($event)\" disabled=\"false\">\n    <ion-item *ngFor=\"let item of uploader.queue\">\n      <ion-label> {{ item?.file?.name }} </ion-label>\n      <ion-reorder></ion-reorder>\n    </ion-item>\n  </ion-reorder-group>\n</ion-list>\n  \n<ion-button style=\"color:black;\" (click)=\"Starttask()\" > Starttask\n</ion-button> -->\n\n<!-- <ion-content padding>\n  <app-multi-file-upload></app-multi-file-upload>\n</ion-content> -->\n<!-- </div> -->\n<app-multi-file-upload></app-multi-file-upload>\n<ion-button style=\"color:black;\" (click)=\"upload2()\" > Starttask\n</ion-button> \n\n<ion-button style=\"color:black;\" (click)=\"downloadFile()\" > Download\n</ion-button> \n<ion-button (click)=\"writeFile()\">Write a file</ion-button>\n<!-- <ion-button id = 'a' style=\"color:black;\" download=\"{{ URL }}\" > Download\n</ion-button>  -->\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map