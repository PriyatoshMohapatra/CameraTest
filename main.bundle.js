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
exports.push([module.i, "body {\n  background: #F7F7F7;\n  margin: 0;\n  padding: 0;\n}\n\n#video-container {\n  margin: 2em auto 0;\n  width: 500px;\n  padding: 2em;\n  background: white;\n  -ms-box-shadow: 0 1px 10px #D9D9D9;\n  -o-box-shadow: 0 1px 10px #D9D9D9;\n  box-shadow: 0 1px 10px #D9D9D9;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app-component\">\n  <div class=\"webcam\">\n  <ng2-webcam [options]=\"options\" [onSuccess]=\"onSuccess\" [onError]=\"onError\"></ng2-webcam>\n  </div>\n  <div>\n    <canvas></canvas>\n  </div>\n  <div>\n    <button (click)=\"capture()\">Capture</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("../../../../../src/app/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.options = {
            audio: false,
            video: true,
            width: 320,
            height: 240,
            fallbackQuality: 200,
            fallbackSrc: 'lib/fallback/jscam_canvas_only.swf'
        };
        this.onSuccess = function (stream) {
            if (stream instanceof __WEBPACK_IMPORTED_MODULE_1__index__["a" /* FallbackDispatcher */]) {
                _this.flashPlayer = stream;
                _this.onFallback();
            }
            console.log('capturing video stream');
        };
        this.onError = function (err) {
            console.log(err);
        };
    }
    /**
     * Implement fallback external interface
     */
    AppComponent.prototype.onFallback = function () {
        var self = this;
        var canvas = document.getElementsByTagName('canvas')[0];
        if (canvas) {
            var ctx_1 = canvas.getContext('2d');
            var size = self.flashPlayer.getCameraSize();
            var w_1 = size.width;
            var h_1 = size.height;
            var externData_1 = {
                imgData: ctx_1.getImageData(0, 0, w_1, h_1),
                pos: 0
            };
            canvas.width = w_1;
            canvas.height = h_1;
            ctx_1.clearRect(0, 0, w_1, h_1);
            __WEBPACK_IMPORTED_MODULE_1__index__["a" /* FallbackDispatcher */].implementExternal({
                onSave: function (data) {
                    try {
                        var col = data.split(';');
                        var tmp = null;
                        for (var i = 0; i < w_1; i++) {
                            tmp = parseInt(col[i], 10);
                            externData_1.imgData.data[externData_1.pos + 0] = (tmp >> 16) & 0xff;
                            externData_1.imgData.data[externData_1.pos + 1] = (tmp >> 8) & 0xff;
                            externData_1.imgData.data[externData_1.pos + 2] = tmp & 0xff;
                            externData_1.imgData.data[externData_1.pos + 3] = 0xff;
                            externData_1.pos += 4;
                        }
                        if (externData_1.pos >= 4 * w_1 * h_1) {
                            ctx_1.putImageData(externData_1.imgData, 0, 0);
                            externData_1.pos = 0;
                        }
                    }
                    catch (e) {
                        console.error(e);
                    }
                },
                debug: function (tag, message) {
                    console.log(tag, message);
                },
                onCapture: function () {
                    self.flashPlayer.save();
                },
                onTick: function (time) {
                    // do nothing
                }
            });
        }
    };
    AppComponent.prototype.capture = function () {
        var video = document.getElementsByTagName('video')[0];
        var canvas = document.getElementsByTagName('canvas')[0];
        if (video) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0);
        }
        else {
            this.flashPlayer.capture();
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_webcam_webcam_component__ = __webpack_require__("../../../../../src/app/lib/webcam/webcam.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__lib_webcam_webcam_component__["a" /* WebCamComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_webcam_fallback_ts_fallback_dispatcher__ = __webpack_require__("../../../../../src/app/lib/webcam/fallback/ts/fallback.dispatcher.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__lib_webcam_fallback_ts_fallback_dispatcher__["a"]; });

// import './lib/webcam/fallback/jscam_canvas_only.swf'
// import './lib/webcam/fallback/jscam.swf'
/**
 * @module
 * @description
 * Entry point from which you should import webcam component
 */



/***/ }),

/***/ "../../../../../src/app/lib/webcam/fallback/ts/fallback.dispatcher.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Adobe flash fallback dispatcher
 */
var FallbackDispatcher = (function () {
    function FallbackDispatcher(camera) {
        this.cam = camera;
    }
    FallbackDispatcher.implementExternal = function (callbacks) {
        var win = window;
        win.webcam = {
            debug: callbacks.debug,
            onCapture: callbacks.onCapture,
            onTick: callbacks.onTick,
            onSave: callbacks.onSave
        };
    };
    FallbackDispatcher.prototype.capture = function (x) {
        try {
            return this.cam.capture(x);
        }
        catch (e) {
            console.error(e);
        }
    };
    FallbackDispatcher.prototype.save = function (x) {
        try {
            return this.cam.save(x);
        }
        catch (e) {
            console.error(e);
        }
    };
    FallbackDispatcher.prototype.setCamera = function (x) {
        try {
            return this.cam.setCamera(x);
        }
        catch (e) {
            console.error(e);
        }
    };
    FallbackDispatcher.prototype.getCameraSize = function () {
        try {
            return { width: this.cam.width, height: this.cam.height };
        }
        catch (e) {
            console.error(e);
        }
    };
    FallbackDispatcher.prototype.getCameraList = function () {
        try {
            return this.cam.getCameraList();
        }
        catch (e) {
            console.error(e);
        }
    };
    return FallbackDispatcher;
}());
/* harmony default export */ __webpack_exports__["a"] = (FallbackDispatcher);


/***/ }),

/***/ "../../../../../src/app/lib/webcam/webcam.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"ng2-webcam\">\n\n  <video id=\"video\" *ngIf=\"isSupportWebRTC\" [src]=\"videoSrc\">Video stream not available</video>\n\n  <!-- <object *ngIf=\"isFallback\" id=\"XwebcamXobjectX\" width=\"320\" height=\"240\" data=\"node_modules/ng2-webcam/lib/fallback/jscam_canvas_only.swf\">\n    Video stream not available\n    <param name=\"FlashVars\" value=\"mode=callback&amp;quality=200\">\n    <param name=\"allowScriptAccess\" value=\"always\">\n    <param name=\"movie\" value=\"node_modules/ng2-webcam/lib/fallback/jscam_canvas_only.swf\">\n  </object> -->\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/lib/webcam/webcam.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebCamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fallback_ts_fallback_dispatcher__ = __webpack_require__("../../../../../src/app/lib/webcam/fallback/ts/fallback.dispatcher.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Render WebCam Component
 */
var WebCamComponent = (function () {
    function WebCamComponent(sanitizer, element) {
        this.sanitizer = sanitizer;
        this.element = element;
        this.isFallback = false;
        this.isSupportWebRTC = false;
        this.browser = navigator;
    }
    WebCamComponent.prototype.ngOnInit = function () {
        var _this = this;
        // getUserMedia() feature detection for older browser
        this.browser.getUserMedia_ = (this.browser.getUserMedia
            || this.browser.webkitGetUserMedia
            || this.browser.mozGetUserMedia
            || this.browser.msGetUserMedia);
        // Older browsers might not implement mediaDevices at all, so we set an empty object first
        if ((this.browser.mediaDevices === undefined) && !!this.browser.getUserMedia_) {
            this.browser.mediaDevices = {};
        }
        // Some browsers partially implement mediaDevices. We can't just assign an object
        // with getUserMedia as it would overwrite existing properties.
        // Here, we will just add the getUserMedia property if it's missing.
        if ((this.browser.mediaDevices && this.browser.mediaDevices.getUserMedia === undefined) && !!this.browser.getUserMedia_) {
            this.browser.mediaDevices.getUserMedia = function (constraints) {
                return new Promise(function (resolve, reject) {
                    _this.browser.getUserMedia_.call(_this.browser, constraints, resolve, reject);
                });
            };
        }
        this.isSupportWebRTC = !!(this.browser.mediaDevices && this.browser.mediaDevices.getUserMedia);
        // default options
        this.options.fallbackSrc = this.options.fallbackSrc || 'node_modules/ng2-webcam/lib/fallback/jscam_canvas_only.swf';
        this.options.fallbackMode = this.options.fallbackMode || 'callback';
        this.options.fallbackQuality = this.options.fallbackQuality || 85;
        this.options.width = this.options.width || 320;
        this.options.height = this.options.height || 240;
        this.options.cameraType = this.options.cameraType || 'front';
        // flash fallback detection
        this.isFallback = !this.isSupportWebRTC && !!this.options.fallbackSrc;
    };
    WebCamComponent.prototype.ngAfterViewInit = function () {
        this.startCapturingVideo();
    };
    /**
     * Switch to facing mode and setup web camera
     * @returns {void}
     */
    WebCamComponent.prototype.onWebRTC = function () {
        var _this = this;
        // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
        if (this.browser.mediaDevices.enumerateDevices && this.options.video) {
            var cameraType_1 = this.options.cameraType;
            this.browser.mediaDevices.enumerateDevices().then(function (devices) {
                devices.forEach(function (device) {
                    if (device && device.kind === 'videoinput') {
                        if (device.label.toLowerCase().search(cameraType_1) > -1) {
                            _this.options.video = { deviceId: { exact: device.deviceId }, facingMode: 'environment' };
                        }
                    }
                });
                _this.setWebcam();
            });
        }
        else {
            this.setWebcam();
        }
    };
    /**
     * Setup web camera using native browser API
     * @returns {void}
     */
    WebCamComponent.prototype.setWebcam = function () {
        var _this = this;
        // constructing a getUserMedia config-object and
        // an string (we will try both)
        var optionObject = { audio: false, video: false };
        var optionString = '';
        var container, video, ow, oh;
        if (this.options.video) {
            optionObject.video = this.options.video;
            optionString = 'video';
        }
        if (this.options.audio === true) {
            optionObject.audio = true;
            if (optionString !== '') {
                optionString = optionString + ', ';
            }
            optionString = optionString + 'audio';
        }
        container = this.element.nativeElement.querySelector('#ng2-webcam');
        video = this.element.nativeElement.querySelector('video');
        video.autoplay = true;
        // Fix for ratio
        ow = parseInt(container.offsetWidth, 10);
        oh = parseInt(container.offsetHeight, 10);
        if (this.options.width < ow && this.options.height < oh) {
            this.options.width = ow;
            this.options.height = oh;
        }
        // configure the interim video
        video.width = this.options.width;
        video.height = this.options.height;
        video.autoplay = true;
        // Promisify async callback's for angular2 change detection
        var promisifyGetUserMedia = function () {
            return new Promise(function (resolve, reject) {
                // first we try if getUserMedia supports the config object
                try {
                    // try object
                    _this.browser.mediaDevices.getUserMedia(optionObject)
                        .then(function (stream) { return resolve(stream); })
                        .catch(function (objErr) {
                        // option object fails
                        // try string syntax
                        // if the config object failes, we try a config string
                        _this.browser.mediaDevices.getUserMedia(optionObject)
                            .then(function (stream) { return resolve(stream); })
                            .catch(function (strErr) {
                            console.error(objErr);
                            console.error(strErr);
                            reject(new Error('Both configs failed. Neither object nor string works'));
                        });
                    });
                }
                catch (e) {
                    reject(e);
                }
            });
        };
        promisifyGetUserMedia().then(function (stream) {
            var webcamUrl = URL.createObjectURL(stream);
            _this.videoSrc = _this.sanitizer.bypassSecurityTrustResourceUrl(webcamUrl);
            _this.onSuccess(stream); // TODO stream :MediaStream
        }).catch(function (err) {
            _this.onError(err);
        });
    };
    /**
     * Add <param>'s into fallback object
     * @param cam - Flash web camera instance
     * @returns {void}
     */
    WebCamComponent.prototype.addFallbackParams = function (cam) {
        var paramFlashVars = document.createElement('param');
        paramFlashVars.name = 'FlashVars';
        paramFlashVars.value = 'mode=' + this.options.fallbackMode + '&amp;quality=' + this.options.fallbackQuality;
        cam.appendChild(paramFlashVars);
        var paramAllowScriptAccess = document.createElement('param');
        paramAllowScriptAccess.name = 'allowScriptAccess';
        paramAllowScriptAccess.value = 'always';
        cam.appendChild(paramAllowScriptAccess);
        // if (this.browser.appVersion.indexOf('MSIE') > -1) {
        // if (isIE) {
        cam.classid = 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000';
        var paramMovie = document.createElement('param');
        paramMovie.name = 'movie';
        paramMovie.value = this.options.fallbackSrc;
        cam.appendChild(paramMovie);
        // } else {
        cam.data = this.options.fallbackSrc;
        // }
    };
    /**
     * On web camera using flash fallback
     * .swf file is necessary
     * @returns {void}
     */
    WebCamComponent.prototype.onFallback = function () {
        // Act as a plain getUserMedia shield if no fallback is required
        if (this.options) {
            // Fallback to flash
            var self_1 = this;
            var cam_1 = self_1.element.nativeElement.querySelector('#XwebcamXobjectX');
            cam_1.width = self_1.options.width;
            cam_1.height = self_1.options.height;
            this.addFallbackParams(cam_1);
            (function register(run) {
                if (cam_1.capture !== undefined) {
                    self_1.onSuccess(new __WEBPACK_IMPORTED_MODULE_2__fallback_ts_fallback_dispatcher__["a" /* default */](cam_1));
                }
                else if (run === 0) {
                    self_1.onError(new Error('Flash movie not yet registered!'));
                }
                else {
                    // Flash interface not ready yet
                    window.setTimeout(register, 1000 * (4 - run), run - 1);
                }
            }(3));
        }
        else {
            console.error('WebCam options is require');
        }
    };
    /**
     * Start capturing video stream
     * @returns {void}
     */
    WebCamComponent.prototype.startCapturingVideo = function () {
        if (this.isSupportWebRTC) {
            return this.onWebRTC();
        }
        if (this.isFallback) {
            return this.onFallback();
        }
        console.error('WebCam not supported');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], WebCamComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Function)
    ], WebCamComponent.prototype, "onSuccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Function)
    ], WebCamComponent.prototype, "onError", void 0);
    WebCamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ng2-webcam',
            template: __webpack_require__("../../../../../src/app/lib/webcam/webcam.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], WebCamComponent);
    return WebCamComponent;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).then(function (ref) {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherise, log the boot error
}).catch(function (err) { return console.error(err); });


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`. 


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map