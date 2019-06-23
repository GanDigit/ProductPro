(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_product_home_product_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product-home/product-home.component */ "./src/app/product/product-home/product-home.component.ts");
/* harmony import */ var _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/product-list/product-list.component */ "./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var _product_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product-add/product-add.component */ "./src/app/product/product-add/product-add.component.ts");
/* harmony import */ var _product_product_update_product_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product-update/product-update.component */ "./src/app/product/product-update/product-update.component.ts");
/* harmony import */ var _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product-detail/product-detail.component */ "./src/app/product/product-detail/product-detail.component.ts");








var routes = [
    { path: '',
        redirectTo: '/product-home',
        pathMatch: 'full'
    },
    {
        path: 'product-home',
        component: _product_product_home_product_home_component__WEBPACK_IMPORTED_MODULE_3__["ProductHomeComponent"],
        data: { title: 'Product Home' }
    },
    {
        path: 'product',
        component: _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"],
        data: { title: 'Product List' }
    },
    {
        path: 'product-details/:id',
        component: _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"],
        data: { title: 'Product Details' }
    },
    {
        path: 'product-add',
        component: _product_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_5__["ProductAddComponent"],
        data: { title: 'Product Add' }
    },
    {
        path: 'product-update/:id',
        component: _product_product_update_product_update_component__WEBPACK_IMPORTED_MODULE_6__["ProductUpdateComponent"],
        data: { title: 'Product Update' }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divCell1 {\n  float: left;\n  width: 33.33%;\n}\n.divCell2 {\n  float: left;\n  width: 100px;\n}\n.divCell3 {\n  float: left;\n  width: 200px;\n}\n.divCell4 {\n  float: left;\n  width: 33.33%;\n}\n.divRow::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n.button {\n  background-color: #4CAF50; /* Green */\n  border: none;\n  color: white;\n  padding: 5px 20px ;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 12px;\n  margin: 1px 1px;\n  cursor: pointer;\n}\n.buttonBlue {background-color: #008CBA;}\n/* Blue */\n.buttonGray {background-color: #808080;}\n/* Blue */\n#tableType1, #tableType2 {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  box-align:center;\n  width:100%;\n  text-align:center;\n}\n#tableType1 td, #tableType1 th, #tableType2 td, #tableType2 th{\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n#tableType1 tr:nth-child(even){background-color: #f2f2f2;}\n#tableType1 tr:hover {background-color: #ddd;}\n#tableType1 th {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  text-align: left;\n  background-color: #778899;\n  color: white;\n}\n.baseCss {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 65em;\n  }\n.baseCss li {\n    position: relative;\n    cursor: pointer;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n.baseCss li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n.baseCss a {\n    color: #888;\n    text-decoration: none;\n    position: relative;\n    display: block;\n    width: 550px;\n  }\n.baseCss a:hover {\n    color:#607D8B;\n  }\n.baseCss .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    min-width: 16px;\n    text-align: right;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\nbutton {\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n    font-family: Arial;\n  }\nbutton:hover {\n    background-color: #cfd8dc;\n  }\nbutton.delete {\n    position: relative;\n    left: 800px;\n    top: -32px;\n    background-color: gray !important;\n    color: white;\n  }\n/* You can add global styles to this file, and also import other style files */\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHlCQUF5QixFQUFFLFVBQVU7RUFDckMsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUEsYUFBYSx5QkFBeUIsQ0FBQztBQUFFLFNBQVM7QUFDbEQsYUFBYSx5QkFBeUIsQ0FBQztBQUFFLFNBQVM7QUFFbEQ7RUFDRSx5Q0FBeUM7RUFDekMseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBRUEsK0JBQStCLHlCQUF5QixDQUFDO0FBRXpELHNCQUFzQixzQkFBc0IsQ0FBQztBQUU3QztFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjtBQUVBO0lBQ0UsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7RUFDZDtBQUVBO0lBQ0UsYUFBYTtFQUNmO0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMEJBQTBCO0VBQzVCO0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUNBQWlDO0lBQ2pDLFlBQVk7RUFDZDtBQUVBLDhFQUE4RSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdkNlbGwxIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzMy4zMyU7XG59XG4uZGl2Q2VsbDIge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLmRpdkNlbGwzIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5kaXZDZWxsNCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMzMuMzMlO1xufVxuLmRpdlJvdzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyAvKiBHcmVlbiAqL1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDIwcHggO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMXB4IDFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9uQmx1ZSB7YmFja2dyb3VuZC1jb2xvcjogIzAwOENCQTt9IC8qIEJsdWUgKi9cbi5idXR0b25HcmF5IHtiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO30gLyogQmx1ZSAqL1xuXG4jdGFibGVUeXBlMSwgI3RhYmxlVHlwZTIge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm94LWFsaWduOmNlbnRlcjtcbiAgd2lkdGg6MTAwJTtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbiN0YWJsZVR5cGUxIHRkLCAjdGFibGVUeXBlMSB0aCwgI3RhYmxlVHlwZTIgdGQsICN0YWJsZVR5cGUyIHRoe1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbiN0YWJsZVR5cGUxIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cblxuI3RhYmxlVHlwZTEgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxuXG4jdGFibGVUeXBlMSB0aCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzg4OTk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5iYXNlQ3NzIHtcbiAgICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogNjVlbTtcbiAgfVxuICAuYmFzZUNzcyBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICAgIG1hcmdpbjogLjVlbTtcbiAgICBwYWRkaW5nOiAuM2VtIDA7XG4gICAgaGVpZ2h0OiAxLjZlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgXG4gIC5iYXNlQ3NzIGxpOmhvdmVyIHtcbiAgICBjb2xvcjogIzYwN0Q4QjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICAgIGxlZnQ6IC4xZW07XG4gIH1cbiAgXG4gIC5iYXNlQ3NzIGEge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDU1MHB4O1xuICB9XG4gIFxuICAuYmFzZUNzcyBhOmhvdmVyIHtcbiAgICBjb2xvcjojNjA3RDhCO1xuICB9XG4gIFxuICAuYmFzZUNzcyAuYmFkZ2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTFweDtcbiAgICB0b3A6IC00cHg7XG4gICAgaGVpZ2h0OiAxLjhlbTtcbiAgICBtaW4td2lkdGg6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuICB9XG4gIFxuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY3Vyc29yOiBoYW5kO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgfVxuICBcbiAgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xuICB9XG4gIFxuICBidXR0b24uZGVsZXRlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogODAwcHg7XG4gICAgdG9wOiAtMzJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'product-ui';
    }
    AppComponent.prototype.products = function () {
        console.log("Hi this is product click 1");
        this.router.navigate(['/product']);
        console.log("Hi this is products click 2");
    };
    AppComponent.prototype.orders = function () {
        this.router.navigate(['/orders']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product.service */ "./src/app/product.service.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _product_product_module__WEBPACK_IMPORTED_MODULE_7__["ProductModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        //To access PRODUCT APIs. The value will be initialized during ngOnInit
        this.apiServiceURL = "1111";
        //To access the current webserver url.
        //webSericeURL = environment.webSericeURL;
        this.webSericeURL = "";
    }
    ProductService.prototype.loadEndPointURL = function () {
        var _this = this;
        console.log("ProductService  loadEndPointURL 1: ");
        return this.getAPIServiceURL().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (apiResponse) {
            console.log("ProductService  loadEndPointURL 2: ");
            _this.apiServiceURL = apiResponse.url;
            return _this.http.get(_this.apiServiceURL + '/api/product', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(_this.extractData));
        }));
    };
    ProductService.prototype.ngOnInit = function () {
        console.log("ProductService  ngOnInit 1.1: ");
        this.mySimpleMethod();
        console.log("ProductService  ngOnInit 1.2: ");
        this.getAPIServiceURL();
        console.log("ProductService  ngOnInit 2.2: ");
    };
    ProductService.prototype.extractDataString = function (res) {
        var body = res;
        var result = body || {};
        //this.endpointPort = result + "";
        return result;
    };
    ProductService.prototype.mySimpleMethod = function () {
        console.log("mySimpleMethod URL : " + this.webSericeURL);
    };
    ProductService.prototype.getAPIServiceURL = function () {
        console.log("webSericeURL URL : " + this.webSericeURL);
        return this.http.get(this.webSericeURL + '/api/apiServiceURL');
    };
    ProductService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ProductService.prototype.getProducts = function () {
        var _this = this;
        console.log("getProducts ----> apiServiceURL URL : " + this.apiServiceURL);
        return this.getAPIServiceURL().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (apiResponse) {
            //Store this end point for future reference..
            _this.apiServiceURL = apiResponse.url;
            return _this.http.get(_this.apiServiceURL + '/api/product', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(_this.extractData));
        }));
    };
    ProductService.prototype.getProduct = function (id) {
        return this.http.get(this.apiServiceURL + '/api/product/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    ProductService.prototype.addProduct = function (product) {
        console.log("Add product ---> " + JSON.stringify(product));
        return this.http.post(this.apiServiceURL + '/api/product', JSON.stringify(product), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (product) { return console.log("added product w/ id=" + product.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addProduct')));
    };
    ProductService.prototype.updateProduct = function (id, product) {
        return this.http.put(this.apiServiceURL + '/api/product', JSON.stringify(product), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("updated product id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateProduct')));
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.apiServiceURL + '/api/product/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("deleted product id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteProduct')));
    };
    ProductService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/product/product-add/product-add.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product/product-add/product-add.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1hZGQvcHJvZHVjdC1hZGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product/product-add/product-add.component.html":
/*!****************************************************************!*\
  !*** ./src/app/product/product-add/product-add.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div> \n    <div class=\"container\">\n      <div class=\"row\">\n          <h4>Add New Product</h4>\n      </div> \n      <br> \n      <div class=\"divRow\">\n        <div class=\"divCell1\"><p></p></div>\n        <div class=\"divCell2\"><p>Category</p></div>\n        <div class=\"divCell3\">\n          <input [(ngModel)]=\"productData.category\" placeholder=\"Product Category\"/>\n        </div>\n        <div class=\"divCell4\"><p></p></div>\n      </div>\n       <div class=\"divRow\">\n        <div class=\"divCell1\"><p></p></div>\n        <div class=\"divCell2\"><p>Name</p></div>\n        <div class=\"divCell3\">\n          <input [(ngModel)]=\"productData.name\" placeholder=\"Product Name\"/>\n        </div>\n        <div class=\"divCell4\"><p></p></div>\n      </div>\n      <div class=\"divRow\">\n        <div class=\"divCell1\"><p></p></div>\n        <div class=\"divCell2\"><p>Price</p></div>\n        <div class=\"divCell3\">\n          <input [(ngModel)]=\"productData.price\" placeholder=\"Product Price\"/>\n        </div>\n        <div class=\"divCell4\"><p></p></div>\n      </div>\n      <br>\n      <div class=\"row\">\n          <div >\n            <button (click)=\"addProduct()\" class=\"button buttonBlue\">Save</button>\n            <button (click)=\"products()\" class=\"button buttonBlue\">Cancel</button>\n          </div>\n      </div>\n      <br>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product/product-add/product-add.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product/product-add/product-add.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.productData = { category: '', name: '', description: '', price: 0 };
    }
    ProductAddComponent.prototype.ngOnInit = function () {
    };
    ProductAddComponent.prototype.addProduct = function () {
        var _this = this;
        this.productService.addProduct(this.productData).subscribe(function (result) {
            _this.router.navigate(['/product']);
        }, function (err) {
            console.log(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductAddComponent.prototype, "productData", void 0);
    ProductAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-add',
            template: __webpack_require__(/*! ./product-add.component.html */ "./src/app/product/product-add/product-add.component.html"),
            styles: [__webpack_require__(/*! ./product-add.component.css */ "./src/app/product/product-add/product-add.component.css"), __webpack_require__(/*! ./../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "./src/app/product/product-detail/product-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/product/product-detail/product-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product/product-detail/product-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/product/product-detail/product-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div style=\"text-align:center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <h4>Product Details</h4>\n        <div *ngIf=\"product\" class=\"baseCss\">\n          <table class=\"table\">\n            <tbody>\n                <tr>\n                  <td>Id</td>\n                  <td>{{product.id}}</td>\n                </tr>\n                <tr>\n                  <td>Category</td>\n                  <td>{{product.category}}</td>\n                </tr>\n                <tr>\n                  <td>Name</td>\n                  <td>{{product.name}}</td>\n                </tr>\n                <tr>\n                  <td>Price</td>\n                  <td>{{product.price}}</td>\n                </tr>\n            </tbody>\n          </table>\n        </div>\n        <p><button (click)=\"products()\" class=\"button buttonBlue\"> Go to Product List </button></p>\n        </div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/product/product-detail/product-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product/product-detail/product-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/product.service */ "./src/app/product.service.ts");




var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProduct(this.route.snapshot.params['id']).subscribe(function (data) {
            console.log(data);
            _this.product = data;
        });
    };
    ProductDetailComponent.prototype.products = function () {
        this.router.navigate(['/product']);
    };
    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product/product-detail/product-detail.component.css"), __webpack_require__(/*! ./../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product/product-home/product-home.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/product-home/product-home.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1ob21lL3Byb2R1Y3QtaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product-home/product-home.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/product-home/product-home.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"text-align:center\">\n    <div class=\"container\">\n      <div class=\"row\">\n          <p><button (click)=\"products()\" class=\"button buttonBlue\"> View Product List </button></p>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product/product-home/product-home.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-home/product-home.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductHomeComponent", function() { return ProductHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProductHomeComponent = /** @class */ (function () {
    function ProductHomeComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ProductHomeComponent.prototype.ngOnInit = function () {
        this.products();
    };
    ProductHomeComponent.prototype.products = function () {
        this.router.navigate(['/product']);
    };
    ProductHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-home',
            template: __webpack_require__(/*! ./product-home.component.html */ "./src/app/product/product-home/product-home.component.html"),
            styles: [__webpack_require__(/*! ./product-home.component.css */ "./src/app/product/product-home/product-home.component.css"), __webpack_require__(/*! ./../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductHomeComponent);
    return ProductHomeComponent;
}());



/***/ }),

/***/ "./src/app/product/product-list/product-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"container\">\n      <div class=\"row\">\n          <h4>Product List</h4>\n      </div>        \n      <div class=\"row\">\n          <div style=\"width:1200px; height:320px; overflow: auto;text-align: center;\"> \n            <table id=\"tableType1\">\n              <thead>\n                <tr>\n                  <th style=\"width:150px;\"> Id</th>\n                  <th>Category</th>\n                  <th>Name</th>\n                  <th>Price</th>\n                  <th style=\"width:10px;\">Edit</th>\n                  <th style=\"width:10px;\">Delete</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let p of products\">\n                  <td>{{p.id}}</td>\n                  <td>{{p.category}}</td>\n                  <td>{{p.name}}</td>\n                  <td>{{p.price}}</td>\n                  <td><button title=\"edit product\" (click)=\"edit(p.id)\" class=\"button buttonGray\">Edit</button></td>\n                  <td><button title=\"delete product\" (click)=\"delete(p.id)\" class=\"button buttonGray\">Delete</button></td>\n                </tr> \n              </tbody>\n            </table>\n          </div>\n      </div>\n      <br>\n      <div class=\"row\">\n          <div >\n          <button (click)=\"refresh()\" class=\"button buttonBlue\">Refresh</button>\n          &nbsp;&nbsp;&nbsp;\n          <button (click)=\"add()\" class=\"button buttonBlue\">Add product</button>\n          <div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.products = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductListComponent.prototype.getProducts = function () {
        var _this = this;
        this.products = [];
        this.productService.getProducts().subscribe(function (data) {
            _this.products = data;
        });
    };
    ProductListComponent.prototype.add = function () {
        this.router.navigate(['/product-add']);
    };
    ProductListComponent.prototype.edit = function (id) {
        var myURL = '/product-update/' + id;
        console.log("ProductListComponent edit id :" + myURL + ":");
        this.router.navigate([myURL]);
    };
    ProductListComponent.prototype.delete = function (id) {
        var _this = this;
        this.productService.deleteProduct(id)
            .subscribe(function (res) {
            _this.getProducts();
        }, function (err) {
            console.log(err);
        });
    };
    ProductListComponent.prototype.refresh = function () {
        this.router.navigate(['/product']);
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product/product-list/product-list.component.css"), __webpack_require__(/*! ./../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/product/product-update/product-update.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/product/product-update/product-update.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC11cGRhdGUvcHJvZHVjdC11cGRhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product/product-update/product-update.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/product/product-update/product-update.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div> \n    <div class=\"container\">\n      <div class=\"row\">\n          <h4>Product Modification</h4>\n      </div> \n      <br> \n      <div class=\"divRow\">\n        <div class=\"divCell1\"><p></p></div>\n        <div class=\"divCell2\"><p>Category</p></div>\n        <div class=\"divCell3\">\n          <input [(ngModel)]=\"productData.category\" placeholder=\"Product Category\"/>\n        </div>\n        <div class=\"divCell4\"><p></p></div>\n      </div>\n       <div class=\"divRow\">\n        <div class=\"divCell1\"><p></p></div>\n        <div class=\"divCell2\"><p>Name</p></div>\n        <div class=\"divCell3\">\n          <input [(ngModel)]=\"productData.name\" placeholder=\"Product Name\"/>\n        </div>\n        <div class=\"divCell4\"><p></p></div>\n      </div>\n      <div class=\"divRow\">\n        <div class=\"divCell1\"><p></p></div>\n        <div class=\"divCell2\"><p>Price</p></div>\n        <div class=\"divCell3\">\n          <input [(ngModel)]=\"productData.price\" placeholder=\"Product Price\"/>\n        </div>\n        <div class=\"divCell4\"><p></p></div>\n      </div>\n      <br>\n      <input type=hidden [(ngModel)]=\"productData.id\"/>\n      <div class=\"row\">\n          <div >\n            <button (click)=\"updateProduct()\" class=\"button buttonBlue\">Save</button>\n            <button (click)=\"products()\" class=\"button buttonBlue\">Cancel</button>\n          </div>\n      </div>\n      <br>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product/product-update/product-update.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product/product-update/product-update.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductUpdateComponent", function() { return ProductUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductUpdateComponent = /** @class */ (function () {
    function ProductUpdateComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.productData = { id: 0, category: '', name: '', description: '', price: 0 };
    }
    ProductUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        console.log("ProductUpdateComponent ngOnInit id: " + id);
        this.productService.getProduct(id).subscribe(function (data) {
            console.log("ProductUpdateComponent ngOnInit getProduct: " + data);
            _this.productData = data;
        });
    };
    ProductUpdateComponent.prototype.updateProduct = function () {
        var _this = this;
        this.productService.updateProduct(this.route.snapshot.params['id'], this.productData).subscribe(function (result) {
            _this.router.navigate(['/product']);
        }, function (err) {
            console.log(err);
        });
    };
    ProductUpdateComponent.prototype.products = function () {
        this.router.navigate(['/product']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductUpdateComponent.prototype, "productData", void 0);
    ProductUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-update',
            template: __webpack_require__(/*! ./product-update.component.html */ "./src/app/product/product-update/product-update.component.html"),
            styles: [__webpack_require__(/*! ./product-update.component.css */ "./src/app/product/product-update/product-update.component.css"), __webpack_require__(/*! ./../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductUpdateComponent);
    return ProductUpdateComponent;
}());



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-add/product-add.component */ "./src/app/product/product-add/product-add.component.ts");
/* harmony import */ var _product_update_product_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-update/product-update.component */ "./src/app/product/product-update/product-update.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product/product-detail/product-detail.component.ts");
/* harmony import */ var _product_home_product_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-home/product-home.component */ "./src/app/product/product-home/product-home.component.ts");










var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"], _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_6__["ProductAddComponent"], _product_update_product_update_component__WEBPACK_IMPORTED_MODULE_7__["ProductUpdateComponent"], _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailComponent"], _product_home_product_home_component__WEBPACK_IMPORTED_MODULE_9__["ProductHomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ]
        })
    ], ProductModule);
    return ProductModule;
}());



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
var environment = {
    production: false,
    webSericeURL: "http://localhost:9080/"
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jeyagandhi/Gandhi/Projects/Apps/ProductPro/product-web/angularUI/product-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map