(self["webpackChunktemp"] = self["webpackChunktemp"] || []).push([["main"],{

/***/ 1397:
/*!**********************************************************************!*\
  !*** ./src/app/account-information/account-information.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountInformationComponent: () => (/* binding */ AccountInformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ 9743);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 3767);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 6515);
/* harmony import */ var _feature_insight_card_feature_insight_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feature-insight-card/feature-insight-card.component */ 9604);







const _c0 = function () {
  return ["/transactions"];
};
class AccountInformationComponent {
  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
    this.isMobileLayout = false;
  }
  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 599px)']).subscribe(result => {
      this.isMobileLayout = result.matches;
      console.log(this.isMobileLayout);
    });
  }
  static #_ = this.ɵfac = function AccountInformationComponent_Factory(t) {
    return new (t || AccountInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AccountInformationComponent,
    selectors: [["app-account-information"]],
    decls: 16,
    vars: 2,
    consts: [[1, "accountoverview"], [1, "header"], [1, "page"], [2, "text-decoration", "none", "color", "black", 3, "routerLink"]],
    template: function AccountInformationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-custom-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "a", 3)(5, "mat-card")(6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Savings Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Account Number: 123456789");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-card-content")(11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "1000\u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "app-feature-insight-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _feature_insight_card_feature_insight_card_component__WEBPACK_IMPORTED_MODULE_2__.FeatureInsightCardComponent],
    styles: ["h1[_ngcontent-%COMP%] {\n  color: black;\n  z-index: 200;\n}\n\n.accountoverview[_ngcontent-%COMP%]{\n  display: flex;\n  flex-flow: column;\n}\n\n.page[_ngcontent-%COMP%]{\n  position: relative;\n}\nmat-card[_ngcontent-%COMP%]{\n  margin: 20px;\n  padding: 20px;\n  background-color: #f5f4f4;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0,0,0,0.2);\n  background-image:\n    url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3e%3cstop stop-color='%23fcc900' stop-opacity='.25' offset='0%25'/%3e%3cstop stop-color='%23fcc900' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z'/%3e%3c/svg%3e\"),\n    url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3e%3cstop stop-color='%23fcc900' stop-opacity='.25' offset='0%25'/%3e%3cstop stop-color='%23fcc900' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z'/%3e%3c/svg%3e\"),\n    url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3e%3cstop stop-color='%23fcc900' stop-opacity='.25' offset='0%25'/%3e%3cstop stop-color='%23fcc900' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z'/%3e%3c/svg%3e\");\n  background-repeat: repeat-x;\n  background-size: 1600px 50%;\n  background-position: 0 130%, -50px 130%, 500px 130%;\n  animation: 20s _ngcontent-%COMP%_waves linear infinite forwards;\n}\n@keyframes _ngcontent-%COMP%_waves {\n  to {\n    background-position: 1600px 130%, 3150px 130%, 5300px 130%;\n  }\n}\nmat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);\n  transform: scale3d(1.01, 1.05, 1);\n}\n\nh1[_ngcontent-%COMP%]{\n  color: black;\n}\n.transfer[_ngcontent-%COMP%]{\n  border-radius: 8px;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);\n  padding: 4px;\n\n}\n.transfer[_ngcontent-%COMP%]:hover{\n  transform: scale3d(1.01, 1.08, 1);\n}\n\n\n\n@media screen and (max-width: 600px) {\n  .transfer[_ngcontent-%COMP%] {\n    flex-flow: column;\n  }\n\n  .transfer[_ngcontent-%COMP%]:hover {\n    transform: scale3d(1.01, 1.05, 1);\n  }\n\n  mat-card[_ngcontent-%COMP%] {\n    margin: 10px;\n    padding: 10px;\n  }\n\n  .accountoverview[_ngcontent-%COMP%] {\n    flex-flow: column;\n  }\n\n  .page[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC1pbmZvcm1hdGlvbi9hY2NvdW50LWluZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQzs7OzRlQUcwZTtFQUMxZSwyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLG1EQUFtRDtFQUNuRCw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFO0lBQ0UsMERBQTBEO0VBQzVEO0FBQ0Y7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsWUFBWTs7QUFFZDtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DOzs7O0FBSUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgY29sb3I6IGJsYWNrO1xuICB6LWluZGV4OiAyMDA7XG59XG5cbi5hY2NvdW50b3ZlcnZpZXd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4ucGFnZXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubWF0LWNhcmR7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjRmNDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNjAwJyBoZWlnaHQ9JzE5OCclM2UlM2NkZWZzJTNlJTNjbGluZWFyR3JhZGllbnQgaWQ9J2EnIHgxPSc1MCUyNScgeDI9JzUwJTI1JyB5MT0nLTEwLjk1OSUyNScgeTI9JzEwMCUyNSclM2UlM2NzdG9wIHN0b3AtY29sb3I9JyUyM2ZjYzkwMCcgc3RvcC1vcGFjaXR5PScuMjUnIG9mZnNldD0nMCUyNScvJTNlJTNjc3RvcCBzdG9wLWNvbG9yPSclMjNmY2M5MDAnIG9mZnNldD0nMTAwJTI1Jy8lM2UlM2MvbGluZWFyR3JhZGllbnQlM2UlM2MvZGVmcyUzZSUzY3BhdGggZmlsbD0ndXJsKCUyM2EpJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00uMDA1IDEyMUMzMTEgMTIxIDQwOS44OTgtLjI1IDgxMSAwYzQwMCAwIDUwMCAxMjEgNzg5IDEyMXY3N0gwcy4wMDUtNDggLjAwNS03N3onLyUzZSUzYy9zdmclM2VcIiksXG4gICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzE2MDAnIGhlaWdodD0nMTk4JyUzZSUzY2RlZnMlM2UlM2NsaW5lYXJHcmFkaWVudCBpZD0nYScgeDE9JzUwJTI1JyB4Mj0nNTAlMjUnIHkxPSctMTAuOTU5JTI1JyB5Mj0nMTAwJTI1JyUzZSUzY3N0b3Agc3RvcC1jb2xvcj0nJTIzZmNjOTAwJyBzdG9wLW9wYWNpdHk9Jy4yNScgb2Zmc2V0PScwJTI1Jy8lM2UlM2NzdG9wIHN0b3AtY29sb3I9JyUyM2ZjYzkwMCcgb2Zmc2V0PScxMDAlMjUnLyUzZSUzYy9saW5lYXJHcmFkaWVudCUzZSUzYy9kZWZzJTNlJTNjcGF0aCBmaWxsPSd1cmwoJTIzYSknIGZpbGwtcnVsZT0nZXZlbm9kZCcgZD0nTS4wMDUgMTIxQzMxMSAxMjEgNDA5Ljg5OC0uMjUgODExIDBjNDAwIDAgNTAwIDEyMSA3ODkgMTIxdjc3SDBzLjAwNS00OCAuMDA1LTc3eicvJTNlJTNjL3N2ZyUzZVwiKSxcbiAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYwMCcgaGVpZ2h0PScxOTgnJTNlJTNjZGVmcyUzZSUzY2xpbmVhckdyYWRpZW50IGlkPSdhJyB4MT0nNTAlMjUnIHgyPSc1MCUyNScgeTE9Jy0xMC45NTklMjUnIHkyPScxMDAlMjUnJTNlJTNjc3RvcCBzdG9wLWNvbG9yPSclMjNmY2M5MDAnIHN0b3Atb3BhY2l0eT0nLjI1JyBvZmZzZXQ9JzAlMjUnLyUzZSUzY3N0b3Agc3RvcC1jb2xvcj0nJTIzZmNjOTAwJyBvZmZzZXQ9JzEwMCUyNScvJTNlJTNjL2xpbmVhckdyYWRpZW50JTNlJTNjL2RlZnMlM2UlM2NwYXRoIGZpbGw9J3VybCglMjNhKScgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNLjAwNSAxMjFDMzExIDEyMSA0MDkuODk4LS4yNSA4MTEgMGM0MDAgMCA1MDAgMTIxIDc4OSAxMjF2NzdIMHMuMDA1LTQ4IC4wMDUtNzd6Jy8lM2UlM2Mvc3ZnJTNlXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTYwMHB4IDUwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMzAlLCAtNTBweCAxMzAlLCA1MDBweCAxMzAlO1xuICBhbmltYXRpb246IDIwcyB3YXZlcyBsaW5lYXIgaW5maW5pdGUgZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIHdhdmVzIHtcbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE2MDBweCAxMzAlLCAzMTUwcHggMTMwJSwgNTMwMHB4IDEzMCU7XG4gIH1cbn1cbm1hdC1jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wMSwgMS4wNSwgMSk7XG59XG5cbmgxe1xuICBjb2xvcjogYmxhY2s7XG59XG4udHJhbnNmZXJ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDdweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDRweDtcblxufVxuLnRyYW5zZmVyOmhvdmVye1xuICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wMSwgMS4wOCwgMSk7XG59XG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudHJhbnNmZXIge1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICB9XG5cbiAgLnRyYW5zZmVyOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wMSwgMS4wNSwgMSk7XG4gIH1cblxuICBtYXQtY2FyZCB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAuYWNjb3VudG92ZXJ2aWV3IHtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgfVxuXG4gIC5wYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);




class AppComponent {
  constructor() {
    this.color = 'primary';
    this.checked = false;
    this.disabled = false;
    this.title = "home";
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 0,
    consts: [["lang", "en"], ["charset", "UTF-8"], [1, "content"], [1, "webpage"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\nmat-toolbar[_ngcontent-%COMP%]{\n  color: white;\n}\n\n.content[_ngcontent-%COMP%]   .webpage[_ngcontent-%COMP%]{\n  min-height: 100vh;\n  width: 100%\n}\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxubWF0LXRvb2xiYXJ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRlbnQgLndlYnBhZ2V7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9604:
/*!************************************************************************!*\
  !*** ./src/app/feature-insight-card/feature-insight-card.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureInsightCardComponent: () => (/* binding */ FeatureInsightCardComponent)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ 7005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_0__.registerables);
class FeatureInsightCardComponent {
  constructor() {}
  ngOnInit() {
    // @ts-ignore
    var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart("myChart", {
      type: 'doughnut',
      data: {
        labels: ['grocery', 'restaurants', 'fixed expenses', 'savings', 'not categorized', 'other'],
        datasets: [{
          label: "Expenses",
          data: [100, 190, 250, 1500, 200, 300],
          backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        elements: {
          arc: {
            hoverOffset: 45
          },
          line: {
            tension: 0
          }
        },
        responsive: true,
        scales: {
          y: {
            display: false,
            beginAtZero: true,
            ticks: {
              display: false
            },
            grid: {
              display: false
            }
          },
          x: {
            display: false,
            beginAtZero: true,
            ticks: {
              display: false
            },
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Expenses'
          }
        }
      }
    });
  }
  static #_ = this.ɵfac = function FeatureInsightCardComponent_Factory(t) {
    return new (t || FeatureInsightCardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FeatureInsightCardComponent,
    selectors: [["app-feature-insight-card"]],
    decls: 5,
    vars: 0,
    consts: [[1, "divChart"], [1, "heading"], [1, "chart-wrapper"], ["id", "myChart", 1, "chart"]],
    template: function FeatureInsightCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Insights ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "canvas", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
    },
    styles: [".divChart[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 40%;\n  margin-left: 20px;\n  margin-top:30px;\n  padding-bottom:45px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0,0,0,0.2);\n  background-color: #f5f4f4;\n\n}\n.divChart[_ngcontent-%COMP%]:hover{\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);\n  transform: scale3d(1.01, 1.05, 1);\n}\n\n.heading[_ngcontent-%COMP%]{\n\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  color: blue;\n  font-family:Monaco, \"Lucida Console\", monospace;\n  text-align: center;\n}\n.chart-wrapper[_ngcontent-%COMP%]{\n  width:50%;\n  height:40%;\n  position: relative;\n}\n.chart[_ngcontent-%COMP%]{\n  width:100%;\n  height:100%;\n}\n@media only screen and (max-width: 600px) {\n  .divChart[_ngcontent-%COMP%]{\n    margin: auto;\n    width:90%;\n  }\n  .chart-wrapper[_ngcontent-%COMP%]{\n    width:100%;\n    height:60%;\n    position: relative;\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS1pbnNpZ2h0LWNhcmQvZmVhdHVyZS1pbnNpZ2h0LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyx5QkFBeUI7O0FBRTNCO0FBQ0E7RUFDRSx1Q0FBdUM7RUFDdkMsaUNBQWlDO0FBQ25DOztBQUVBOztFQUVFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsK0NBQStDO0VBQy9DLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFNBQVM7RUFDWDtFQUNBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7O0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2Q2hhcnR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDozMHB4O1xuICBwYWRkaW5nLWJvdHRvbTo0NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY0ZjQ7XG5cbn1cbi5kaXZDaGFydDpob3ZlcntcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wMSwgMS4wNSwgMSk7XG59XG5cbi5oZWFkaW5ne1xuXG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiBibHVlO1xuICBmb250LWZhbWlseTpNb25hY28sIFwiTHVjaWRhIENvbnNvbGVcIiwgbW9ub3NwYWNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2hhcnQtd3JhcHBlcntcbiAgd2lkdGg6NTAlO1xuICBoZWlnaHQ6NDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2hhcnR7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDoxMDAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZGl2Q2hhcnR7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOjkwJTtcbiAgfVxuICAuY2hhcnQtd3JhcHBlcntcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDo2MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6515:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 9743);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




const _c0 = function () {
  return ["/transactions"];
};
function FooterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "a", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "sfc-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "sfc-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Insight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
  }
}
class FooterComponent {
  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
    this.isMobileLayout = false;
  }
  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 599px)']).subscribe(result => {
      this.isMobileLayout = result.matches;
      console.log(this.isMobileLayout);
    });
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 1,
    vars: 1,
    consts: [["class", "footer", 4, "ngIf"], [1, "footer"], [2, "text-decoration", "none", "color", "black", 3, "routerLink"], [1, "menu-item"], ["name", "beleggen-transfer", "size", "lg"], ["name", "betalen-betaalverzoek", "size", "lg"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_div_0_Template, 10, 2, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileLayout);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: [".footer[_ngcontent-%COMP%]{\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  flex-flow: row;\n  flex-grow: 4;\n  gap: 10px;\n  width: 100%;\n  justify-content: space-evenly;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  padding-top: 5px;\n  z-index: 101;\n  opacity: 100;\n}\n\n.menu-item[_ngcontent-%COMP%]{\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxhQUFhO0VBQ2IsY0FBYztFQUNkLFlBQVk7RUFDWixTQUFTO0VBQ1QsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixzQ0FBc0M7RUFDdEMsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgZmxleC1ncm93OiA0O1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHotaW5kZXg6IDEwMTtcbiAgb3BhY2l0eTogMTAwO1xufVxuXG4ubWVudS1pdGVte1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3767:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 9743);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




const _c0 = function () {
  return ["/transactions"];
};
function HeaderComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "a", 1)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Insight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
  }
}
const _c1 = function () {
  return ["/home"];
};
class HeaderComponent {
  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
    this.isMobileLayout = false;
  }
  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 599px)']).subscribe(result => {
      this.isMobileLayout = result.matches;
      console.log(this.isMobileLayout);
    });
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-custom-header"]],
    decls: 6,
    vars: 3,
    consts: [[1, "header"], [2, "text-decoration", "none", "color", "black", 3, "routerLink"], [1, "heading"], ["class", "menu", 4, "ngIf"], [1, "menu"], ["href", "/transactions", 1, "menu-item"], [1, "menu-item"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "a", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Banking App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_div_5_Template, 6, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileLayout);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: ["container.is-mobile-layout[_ngcontent-%COMP%] {\n  display: none;\n}\n.menu[_ngcontent-%COMP%]{\n    display: flex;\n    flex-flow: row;\n    height: 100%;\n    align-items: baseline;\n    padding-inline: 10px;\n}\n.heading[_ngcontent-%COMP%]{\n    padding-inline:15px;\n    font-size: larger;\n    font-weight: bold;\n    margin:auto;\n}\n.header[_ngcontent-%COMP%] {\n    z-index: 101;\n    flex: 1 0 10%;\n    display: inline-flex;\n    flex-flow: row;\n    width: 100%;\n    align-items: baseline;\n    border-bottom-style: solid;\n    border-bottom-width: thin;\n    border-bottom-color: lightgray;\n    box-shadow: lightgray;\n    background-color: white;\n}\n\n.profile[_ngcontent-%COMP%]{\n  margin-left:auto;\n  margin-right:10px;\n  margin-top: 8px;\n  padding:5px;\n  border-radius:50%;\n  border-style: solid;\n  border-width: thin;\n}\n\n\n.menu-item[_ngcontent-%COMP%]{\n    padding:20px;\n    height: 100%;\n}\n.menu-item[_ngcontent-%COMP%]:hover{\n    border-bottom-style: solid;\n    border-bottom-width: thin;\n    border-bottom-color: grey;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsV0FBVztJQUNYLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIlxuY29udGFpbmVyLmlzLW1vYmlsZS1sYXlvdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1lbnV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIHBhZGRpbmctaW5saW5lOiAxMHB4O1xufVxuLmhlYWRpbmd7XG4gICAgcGFkZGluZy1pbmxpbmU6MTVweDtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46YXV0bztcbn1cbi5oZWFkZXIge1xuICAgIHotaW5kZXg6IDEwMTtcbiAgICBmbGV4OiAxIDAgMTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBib3gtc2hhZG93OiBsaWdodGdyYXk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5wcm9maWxle1xuICBtYXJnaW4tbGVmdDphdXRvO1xuICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBwYWRkaW5nOjVweDtcbiAgYm9yZGVyLXJhZGl1czo1MCU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbn1cblxuXG4ubWVudS1pdGVte1xuICAgIHBhZGRpbmc6MjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4ubWVudS1pdGVtOmhvdmVye1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogZ3JleTtcbn1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2014:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 8098);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);






class LoginComponent {
  constructor() {
    this.username = "";
    this.hide = true;
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 17,
    vars: 5,
    consts: [[1, "main"], [1, "login"], [1, "login-field"], ["type", "text", "matInput", "", 3, "ngModel", "ngModelChange"], ["matInput", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "submit"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) {
          return ctx.username = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 2)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Enter your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_12_listener() {
          return ctx.hide = !ctx.hide;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
      }
    },
    dependencies: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton],
    styles: [".login[_ngcontent-%COMP%] {\n  background-color: lightblue;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  width: 50%;\n  margin-top: 15%;\n  margin-left: 25%;\n  border: 2px solid lightblue;\n  border-radius: 25px;\n  box-shadow: 0 0 10px rgba(0,0,0,0.2);\n}\n\n\nmat-card-header[_ngcontent-%COMP%] {\n  justify-self: center;\n  color: black;\n  width:100%\n}\n.login-field[_ngcontent-%COMP%]{\n  width: 80%;\n  margin-bottom: 16px;\n\n}\n\n.submit[_ngcontent-%COMP%]{\n  width: 20%;\n  margin-right:10px;\n}\n\n.main[_ngcontent-%COMP%]{\n background-color: white;\n  background-image: none;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsb0NBQW9DO0FBQ3RDOzs7QUFHQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1o7QUFDRjtBQUNBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0NBQ0MsdUJBQXVCO0VBQ3RCLHNCQUFzQjtBQUN4QiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRibHVlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMik7XG59XG5cblxubWF0LWNhcmQtaGVhZGVyIHtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6MTAwJVxufVxuLmxvZ2luLWZpZWxke1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG59XG5cbi5zdWJtaXR7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbi1yaWdodDoxMHB4O1xufVxuXG4ubWFpbntcbiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2436:
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transaction_page_transaction_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction-page/transaction-page.component */ 1358);
/* harmony import */ var _account_information_account_information_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-information/account-information.component */ 1397);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 2014);



const routeConfig = [{
  path: 'home',
  component: _account_information_account_information_component__WEBPACK_IMPORTED_MODULE_1__.AccountInformationComponent,
  title: 'Home page'
}, {
  path: 'transactions',
  component: _transaction_page_transaction_page_component__WEBPACK_IMPORTED_MODULE_0__.TransactionPageComponent,
  title: 'transaction details'
}, {
  path: '',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
  title: 'login'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routeConfig);

/***/ }),

/***/ 1358:
/*!****************************************************************!*\
  !*** ./src/app/transaction-page/transaction-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionPageComponent: () => (/* binding */ TransactionPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 3767);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 6515);






function TransactionPageComponent_div_5_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "sfc-output-money", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("amount", transaction_r1.amount);
  }
}
function TransactionPageComponent_div_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "sfc-output-money", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("amount", transaction_r1.amount);
  }
}
function TransactionPageComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "sfc-item", 6)(2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TransactionPageComponent_div_5_span_4_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TransactionPageComponent_div_5_ng_template_5_Template, 2, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "sfc-output-bank-account", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const transaction_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](transaction_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", transaction_r1.debit)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("product", transaction_r1.reference);
  }
}
class TransactionPageComponent {
  constructor() {
    this.transactions = [{
      "name": "Transaction 1",
      "amount": 100,
      reference: "reference",
      debit: true,
      "date": "2020-01-01",
      IBAN: "IBAN",
      currency: "EUR"
    }, {
      "name": "Transaction 2",
      "amount": 200,
      reference: "reference",
      debit: false,
      "date": "2020-01-02",
      IBAN: "IBAN",
      currency: "EUR"
    }, {
      "name": "Transaction 3",
      "amount": 300,
      reference: "reference",
      debit: false,
      "date": "2020-01-03",
      IBAN: "IBAN",
      currency: "EUR"
    }];
  }
  static #_ = this.ɵfac = function TransactionPageComponent_Factory(t) {
    return new (t || TransactionPageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TransactionPageComponent,
    selectors: [["app-transaction-page"]],
    decls: 7,
    vars: 1,
    consts: [[1, "header"], [1, "card"], [1, "card-content"], [1, "transactionList"], ["class", "listitem", 4, "ngFor", "ngForOf"], [1, "listitem"], ["fixed-label-end", "", "icon-start", "rds-icon-basket", "tabindex", "1", "link", "/home", 1, "main"], ["slot", "label"], ["slot", "label-end", "class", "sfc-money-transaction sfc-money-transaction--negative", 4, "ngIf", "ngIfElse"], ["credit", ""], ["slot", "description", 3, "product"], ["slot", "label-end", 1, "sfc-money-transaction", "sfc-money-transaction--negative"], ["currency", "EUR", "decimals", "2", 3, "amount"], ["slot", "label-end", 1, "sfc-money-transaction", "sfc-money-transaction--positive"]],
    template: function TransactionPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-custom-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card", 1)(3, "mat-card-content", 2)(4, "mat-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TransactionPageComponent_div_5_Template, 8, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.transactions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatList, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: [".card[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 80%;\n  margin-top: 30px;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n\n\n.transactionList[_ngcontent-%COMP%]{\n  max-width: 100%;\n  min-width: 0;\n  margin-right:10px;\n\n\n}\n.main[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n    border-style: solid;\n    border-width: thin;\n    border-color: black;\n}\n.listitem[_ngcontent-%COMP%]{\n  width: 100%;\n\n  display: flex;\n  flex-flow: row;\n  padding-inline:8px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n\n\nh1[_ngcontent-%COMP%]{\n  color: black;\n}\nmat-card[_ngcontent-%COMP%]{\n  margin: 20px;\n  padding: 20px;\n  background-color: #f6f2f2;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0,0,0,0.2);\n  background-image:\n    url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3e%3cstop stop-color='%23fcc900' stop-opacity='.25' offset='0%25'/%3e%3cstop stop-color='%23fcc900' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z'/%3e%3c/svg%3e\"),\n    url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3e%3cstop stop-color='%23fcc900' stop-opacity='.25' offset='0%25'/%3e%3cstop stop-color='%23fcc900' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z'/%3e%3c/svg%3e\"),\n    url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3e%3cstop stop-color='%23fcc900' stop-opacity='.25' offset='0%25'/%3e%3cstop stop-color='%23fcc900' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z'/%3e%3c/svg%3e\");\n  background-repeat: repeat-x;\n  background-size: 1600px 50%;\n  background-position: 0 130%, -50px 130%, 500px 130%;\n  animation: 20s _ngcontent-%COMP%_waves linear infinite forwards;\n}\n@keyframes _ngcontent-%COMP%_waves {\n  to {\n    background-position: 1600px 130%, 3150px 130%, 5300px 130%;\n  }\n}\n\n.header[_ngcontent-%COMP%]{\n  width:100%;\n\n}\n.main[_ngcontent-%COMP%]{\n  width:100%;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdHJhbnNhY3Rpb24tcGFnZS90cmFuc2FjdGlvbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjs7O0FBR25CO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7O0VBRVgsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDOzs7O0FBSUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEM7Ozs0ZUFHMGU7RUFDMWUsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQixtREFBbUQ7RUFDbkQsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRTtJQUNFLDBEQUEwRDtFQUM1RDtBQUNGOztBQUVBO0VBQ0UsVUFBVTs7QUFFWjtBQUNBO0VBQ0UsVUFBVTtBQUNaIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cblxuLnRyYW5zYWN0aW9uTGlzdHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDA7XG4gIG1hcmdpbi1yaWdodDoxMHB4O1xuXG5cbn1cbi5tYWluOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuLmxpc3RpdGVte1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgcGFkZGluZy1pbmxpbmU6OHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5cblxuaDF7XG4gIGNvbG9yOiBibGFjaztcbn1cbm1hdC1jYXJke1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmYyZjI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYwMCcgaGVpZ2h0PScxOTgnJTNlJTNjZGVmcyUzZSUzY2xpbmVhckdyYWRpZW50IGlkPSdhJyB4MT0nNTAlMjUnIHgyPSc1MCUyNScgeTE9Jy0xMC45NTklMjUnIHkyPScxMDAlMjUnJTNlJTNjc3RvcCBzdG9wLWNvbG9yPSclMjNmY2M5MDAnIHN0b3Atb3BhY2l0eT0nLjI1JyBvZmZzZXQ9JzAlMjUnLyUzZSUzY3N0b3Agc3RvcC1jb2xvcj0nJTIzZmNjOTAwJyBvZmZzZXQ9JzEwMCUyNScvJTNlJTNjL2xpbmVhckdyYWRpZW50JTNlJTNjL2RlZnMlM2UlM2NwYXRoIGZpbGw9J3VybCglMjNhKScgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNLjAwNSAxMjFDMzExIDEyMSA0MDkuODk4LS4yNSA4MTEgMGM0MDAgMCA1MDAgMTIxIDc4OSAxMjF2NzdIMHMuMDA1LTQ4IC4wMDUtNzd6Jy8lM2UlM2Mvc3ZnJTNlXCIpLFxuICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNjAwJyBoZWlnaHQ9JzE5OCclM2UlM2NkZWZzJTNlJTNjbGluZWFyR3JhZGllbnQgaWQ9J2EnIHgxPSc1MCUyNScgeDI9JzUwJTI1JyB5MT0nLTEwLjk1OSUyNScgeTI9JzEwMCUyNSclM2UlM2NzdG9wIHN0b3AtY29sb3I9JyUyM2ZjYzkwMCcgc3RvcC1vcGFjaXR5PScuMjUnIG9mZnNldD0nMCUyNScvJTNlJTNjc3RvcCBzdG9wLWNvbG9yPSclMjNmY2M5MDAnIG9mZnNldD0nMTAwJTI1Jy8lM2UlM2MvbGluZWFyR3JhZGllbnQlM2UlM2MvZGVmcyUzZSUzY3BhdGggZmlsbD0ndXJsKCUyM2EpJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00uMDA1IDEyMUMzMTEgMTIxIDQwOS44OTgtLjI1IDgxMSAwYzQwMCAwIDUwMCAxMjEgNzg5IDEyMXY3N0gwcy4wMDUtNDggLjAwNS03N3onLyUzZSUzYy9zdmclM2VcIiksXG4gICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzE2MDAnIGhlaWdodD0nMTk4JyUzZSUzY2RlZnMlM2UlM2NsaW5lYXJHcmFkaWVudCBpZD0nYScgeDE9JzUwJTI1JyB4Mj0nNTAlMjUnIHkxPSctMTAuOTU5JTI1JyB5Mj0nMTAwJTI1JyUzZSUzY3N0b3Agc3RvcC1jb2xvcj0nJTIzZmNjOTAwJyBzdG9wLW9wYWNpdHk9Jy4yNScgb2Zmc2V0PScwJTI1Jy8lM2UlM2NzdG9wIHN0b3AtY29sb3I9JyUyM2ZjYzkwMCcgb2Zmc2V0PScxMDAlMjUnLyUzZSUzYy9saW5lYXJHcmFkaWVudCUzZSUzYy9kZWZzJTNlJTNjcGF0aCBmaWxsPSd1cmwoJTIzYSknIGZpbGwtcnVsZT0nZXZlbm9kZCcgZD0nTS4wMDUgMTIxQzMxMSAxMjEgNDA5Ljg5OC0uMjUgODExIDBjNDAwIDAgNTAwIDEyMSA3ODkgMTIxdjc3SDBzLjAwNS00OCAuMDA1LTc3eicvJTNlJTNjL3N2ZyUzZVwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE2MDBweCA1MCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTMwJSwgLTUwcHggMTMwJSwgNTAwcHggMTMwJTtcbiAgYW5pbWF0aW9uOiAyMHMgd2F2ZXMgbGluZWFyIGluZmluaXRlIGZvcndhcmRzO1xufVxuQGtleWZyYW1lcyB3YXZlcyB7XG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNjAwcHggMTMwJSwgMzE1MHB4IDEzMCUsIDUzMDBweCAxMzAlO1xuICB9XG59XG5cbi5oZWFkZXJ7XG4gIHdpZHRoOjEwMCU7XG5cbn1cbi5tYWlue1xuICB3aWR0aDoxMDAlO1xufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/routes */ 2436);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 6401);
/* harmony import */ var _sfc_components_dist_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sfc/components/dist/loader */ 6795);





(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, {
  providers: [(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.provideProtractorTestingSupport)(), (0,_angular_router__WEBPACK_IMPORTED_MODULE_4__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__["default"])]
}).then(() => {
  (0,_sfc_components_dist_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window, {
    resourcesUrl: 'sfc/'
  });
}).catch(err => console.error(err));

/***/ }),

/***/ 8946:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@sfc/components/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**********************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./sfc-action-bar.entry.js": [
		5192,
		"common",
		"node_modules_sfc_components_dist_esm_sfc-action-bar_entry_js"
	],
	"./sfc-annotation.entry.js": [
		4929,
		"common",
		"node_modules_sfc_components_dist_esm_sfc-annotation_entry_js"
	],
	"./sfc-badge.entry.js": [
		3115,
		"node_modules_sfc_components_dist_esm_sfc-badge_entry_js"
	],
	"./sfc-button-circular.entry.js": [
		4487,
		"common",
		"node_modules_sfc_components_dist_esm_sfc-button-circular_entry_js"
	],
	"./sfc-button_2.entry.js": [
		6228,
		"node_modules_sfc_components_dist_esm_sfc-button_2_entry_js"
	],
	"./sfc-card-content.entry.js": [
		8708,
		"node_modules_sfc_components_dist_esm_sfc-card-content_entry_js"
	],
	"./sfc-card-header.entry.js": [
		7335,
		"node_modules_sfc_components_dist_esm_sfc-card-header_entry_js"
	],
	"./sfc-card.entry.js": [
		6961,
		"node_modules_sfc_components_dist_esm_sfc-card_entry_js"
	],
	"./sfc-carousel-item.entry.js": [
		3529,
		"node_modules_sfc_components_dist_esm_sfc-carousel-item_entry_js"
	],
	"./sfc-carousel.entry.js": [
		7888,
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-1c5c55",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-carousel_entry_js"
	],
	"./sfc-checkbox-group.entry.js": [
		739,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"default-node_modules_sfc_components_dist_esm_validators-9625fac4_js",
		"node_modules_sfc_components_dist_esm_sfc-checkbox-group_entry_js"
	],
	"./sfc-checkbox_2.entry.js": [
		7187,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"default-node_modules_sfc_components_dist_esm_validators-9625fac4_js",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-checkbox_2_entry_js"
	],
	"./sfc-collapsible-group.entry.js": [
		5288,
		"node_modules_sfc_components_dist_esm_sfc-collapsible-group_entry_js"
	],
	"./sfc-collapsible.entry.js": [
		8313,
		"default-node_modules_sfc_components_dist_esm_animation-2580fcd9_js-node_modules_sfc_component-3292c3",
		"node_modules_sfc_components_dist_esm_sfc-collapsible_entry_js"
	],
	"./sfc-content-reveal.entry.js": [
		2780,
		"default-node_modules_sfc_components_dist_esm_animation-2580fcd9_js-node_modules_sfc_component-3292c3",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-content-reveal_entry_js"
	],
	"./sfc-dataview-tab.entry.js": [
		2950,
		"node_modules_sfc_components_dist_esm_sfc-dataview-tab_entry_js"
	],
	"./sfc-dataview-tabs-group.entry.js": [
		5254,
		"node_modules_sfc_components_dist_esm_sfc-dataview-tabs-group_entry_js"
	],
	"./sfc-datepicker_2.entry.js": [
		9492,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"default-node_modules_sfc_components_dist_esm_validators-9625fac4_js",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-datepicker_2_entry_js"
	],
	"./sfc-dialog.entry.js": [
		3595,
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-3ce267",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-dialog_entry_js"
	],
	"./sfc-focus-trap.entry.js": [
		7626,
		"common",
		"node_modules_sfc_components_dist_esm_sfc-focus-trap_entry_js"
	],
	"./sfc-form-text.entry.js": [
		3353,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"node_modules_sfc_components_dist_esm_sfc-form-text_entry_js"
	],
	"./sfc-form.entry.js": [
		8580,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"node_modules_sfc_components_dist_esm_sfc-form_entry_js"
	],
	"./sfc-icon.entry.js": [
		7447,
		"common",
		"node_modules_sfc_components_dist_esm_sfc-icon_entry_js"
	],
	"./sfc-indicator-group.entry.js": [
		8259,
		"node_modules_sfc_components_dist_esm_sfc-indicator-group_entry_js"
	],
	"./sfc-input-datepicker.entry.js": [
		1769,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-input-datepicker_entry_js"
	],
	"./sfc-input-email.entry.js": [
		4285,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"default-node_modules_sfc_components_dist_esm_validators-9625fac4_js",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-input-email_entry_js"
	],
	"./sfc-input-error_2.entry.js": [
		4834,
		"node_modules_sfc_components_dist_esm_sfc-input-error_2_entry_js"
	],
	"./sfc-input-file.entry.js": [
		4072,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-input-file_entry_js"
	],
	"./sfc-input-license-plate.entry.js": [
		8492,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"node_modules_sfc_components_dist_esm_sfc-input-license-plate_entry_js"
	],
	"./sfc-input-money.entry.js": [
		2485,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"default-node_modules_sfc_components_dist_esm_validators-9625fac4_js",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-input-money_entry_js"
	],
	"./sfc-input-number.entry.js": [
		6293,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"default-node_modules_sfc_components_dist_esm_validators-9625fac4_js",
		"default-node_modules_sfc_components_dist_esm_clear-controller-14fcfddf_js-node_modules_sfc_co-864abe",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-input-number_entry_js"
	],
	"./sfc-input-percentage.entry.js": [
		9196,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"default-node_modules_sfc_components_dist_esm_validators-9625fac4_js",
		"default-node_modules_sfc_components_dist_esm_clear-controller-14fcfddf_js-node_modules_sfc_co-864abe",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-input-percentage_entry_js"
	],
	"./sfc-input-phone-number.entry.js": [
		6372,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"default-node_modules_sfc_components_dist_esm_validators-9625fac4_js",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-input-phone-number_entry_js"
	],
	"./sfc-input-postal-code.entry.js": [
		305,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"default-node_modules_sfc_components_dist_esm_validators-9625fac4_js",
		"default-node_modules_sfc_components_dist_esm_clear-controller-14fcfddf_js-node_modules_sfc_co-864abe",
		"node_modules_sfc_components_dist_esm_sfc-input-postal-code_entry_js"
	],
	"./sfc-input-postcode.entry.js": [
		5811,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"default-node_modules_sfc_components_dist_esm_validators-9625fac4_js",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-input-postcode_entry_js"
	],
	"./sfc-input-result.entry.js": [
		3340,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-input-result_entry_js"
	],
	"./sfc-input-search.entry.js": [
		444,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"default-node_modules_sfc_components_dist_esm_validators-9625fac4_js",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-input-search_entry_js"
	],
	"./sfc-input-text.entry.js": [
		3348,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"default-node_modules_sfc_components_dist_esm_validators-9625fac4_js",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-input-text_entry_js"
	],
	"./sfc-input-wrapper.entry.js": [
		9740,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"node_modules_sfc_components_dist_esm_sfc-input-wrapper_entry_js"
	],
	"./sfc-input.entry.js": [
		2364,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"default-node_modules_sfc_components_dist_esm_validators-9625fac4_js",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-input_entry_js"
	],
	"./sfc-link.entry.js": [
		2575,
		"node_modules_sfc_components_dist_esm_sfc-link_entry_js"
	],
	"./sfc-list-header.entry.js": [
		5532,
		"node_modules_sfc_components_dist_esm_sfc-list-header_entry_js"
	],
	"./sfc-list-item.entry.js": [
		3083,
		"common",
		"node_modules_sfc_components_dist_esm_sfc-list-item_entry_js"
	],
	"./sfc-list.entry.js": [
		3109,
		"node_modules_sfc_components_dist_esm_sfc-list_entry_js"
	],
	"./sfc-loading-state.entry.js": [
		6279,
		"node_modules_sfc_components_dist_esm_sfc-loading-state_entry_js"
	],
	"./sfc-message.entry.js": [
		3182,
		"common",
		"node_modules_sfc_components_dist_esm_sfc-message_entry_js"
	],
	"./sfc-modal.entry.js": [
		3233,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-modal_entry_js"
	],
	"./sfc-notification.entry.js": [
		7156,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-notification_entry_js"
	],
	"./sfc-option.entry.js": [
		717,
		"node_modules_sfc_components_dist_esm_sfc-option_entry_js"
	],
	"./sfc-output-bank-account.entry.js": [
		7511,
		"node_modules_sfc_components_dist_esm_sfc-output-bank-account_entry_js"
	],
	"./sfc-output-iban.entry.js": [
		6021,
		"node_modules_sfc_components_dist_esm_sfc-output-iban_entry_js"
	],
	"./sfc-output-money.entry.js": [
		4747,
		"common",
		"node_modules_sfc_components_dist_esm_sfc-output-money_entry_js"
	],
	"./sfc-pagination.entry.js": [
		7595,
		"common",
		"node_modules_sfc_components_dist_esm_sfc-pagination_entry_js"
	],
	"./sfc-popover.entry.js": [
		4420,
		"node_modules_sfc_components_dist_esm_sfc-popover_entry_js"
	],
	"./sfc-progress-bar.entry.js": [
		8858,
		"default-node_modules_sfc_components_dist_esm_deprecate-60f8531e_js-node_modules_sfc_component-2e399d",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-progress-bar_entry_js"
	],
	"./sfc-projector.entry.js": [
		954,
		"node_modules_sfc_components_dist_esm_sfc-projector_entry_js"
	],
	"./sfc-radio-button.entry.js": [
		4357,
		"node_modules_sfc_components_dist_esm_sfc-radio-button_entry_js"
	],
	"./sfc-radio-group.entry.js": [
		9366,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"default-node_modules_sfc_components_dist_esm_validators-9625fac4_js",
		"node_modules_sfc_components_dist_esm_sfc-radio-group_entry_js"
	],
	"./sfc-range.entry.js": [
		7936,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"default-node_modules_sfc_components_dist_esm_validators-9625fac4_js",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-range_entry_js"
	],
	"./sfc-search-bar_2.entry.js": [
		3008,
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-3ce267",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-search-bar_2_entry_js"
	],
	"./sfc-select-item-row_2.entry.js": [
		4241,
		"default-node_modules_sfc_components_dist_esm_deprecate-60f8531e_js-node_modules_sfc_component-2e399d",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-select-item-row_2_entry_js"
	],
	"./sfc-select-item.entry.js": [
		2150,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"default-node_modules_sfc_components_dist_esm_validators-9625fac4_js",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-select-item_entry_js"
	],
	"./sfc-select-object-row.entry.js": [
		5836,
		"node_modules_sfc_components_dist_esm_sfc-select-object-row_entry_js"
	],
	"./sfc-select-object.entry.js": [
		9633,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"default-node_modules_sfc_components_dist_esm_validators-9625fac4_js",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-select-object_entry_js"
	],
	"./sfc-select-searchable.entry.js": [
		4274,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"default-node_modules_sfc_components_dist_esm_validators-9625fac4_js",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-select-searchable_entry_js"
	],
	"./sfc-select.entry.js": [
		6121,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-select_entry_js"
	],
	"./sfc-step-indicator-group.entry.js": [
		2391,
		"node_modules_sfc_components_dist_esm_sfc-step-indicator-group_entry_js"
	],
	"./sfc-step-indicator.entry.js": [
		3720,
		"common",
		"node_modules_sfc_components_dist_esm_sfc-step-indicator_entry_js"
	],
	"./sfc-switch.entry.js": [
		6159,
		"node_modules_sfc_components_dist_esm_sfc-switch_entry_js"
	],
	"./sfc-tab-group.entry.js": [
		7334,
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-1c5c55",
		"node_modules_sfc_components_dist_esm_sfc-tab-group_entry_js"
	],
	"./sfc-tab.entry.js": [
		6638,
		"common",
		"node_modules_sfc_components_dist_esm_sfc-tab_entry_js"
	],
	"./sfc-table-collapsible.entry.js": [
		8127,
		"common",
		"node_modules_sfc_components_dist_esm_sfc-table-collapsible_entry_js"
	],
	"./sfc-table.entry.js": [
		9127,
		"node_modules_sfc_components_dist_esm_sfc-table_entry_js"
	],
	"./sfc-tag.entry.js": [
		7871,
		"node_modules_sfc_components_dist_esm_sfc-tag_entry_js"
	],
	"./sfc-textarea.entry.js": [
		8281,
		"default-node_modules_sfc_components_dist_esm_element-76d6061e_js-node_modules_sfc_components_-21516f",
		"default-node_modules_sfc_components_dist_esm_validation-controller-5aed6061_js",
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-0be003",
		"default-node_modules_sfc_components_dist_esm_validators-9625fac4_js",
		"common",
		"node_modules_sfc_components_dist_esm_sfc-textarea_entry_js"
	],
	"./sfc-tile.entry.js": [
		4031,
		"node_modules_sfc_components_dist_esm_sfc-tile_entry_js"
	],
	"./sfc-toast.entry.js": [
		3264,
		"node_modules_sfc_components_dist_esm_sfc-toast_entry_js"
	],
	"./sfc-toaster.entry.js": [
		4093,
		"node_modules_sfc_components_dist_esm_sfc-toaster_entry_js"
	],
	"./sfc-tree-view.entry.js": [
		913,
		"default-node_modules_sfc_components_dist_esm_bind-007e84a8_js-node_modules_sfc_components_dis-3ce267",
		"node_modules_sfc_components_dist_esm_sfc-tree-view_entry_js"
	],
	"./sfc-wizard-step-group.entry.js": [
		6581,
		"node_modules_sfc_components_dist_esm_sfc-wizard-step-group_entry_js"
	],
	"./sfc-wizard-step.entry.js": [
		5945,
		"node_modules_sfc_components_dist_esm_sfc-wizard-step_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 8946;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(9548), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map