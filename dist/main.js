(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer *ngIf=\"removeFooter()\"></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-buttons\">\r\n    <div class=\"container\">\r\n        <div class=\"tim-title\">\r\n            <h2>Basic Components</h2>\r\n        </div>\r\n        <div id=\"buttons\">\r\n            <div class=\"tim-title\">\r\n                <h3>Buttons\r\n                    <br/>\r\n                    <small>Pick your style</small>\r\n                </h3>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <button type=\"button\" class=\"btn btn-danger\">Default</button>\r\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Round</button>\r\n                    <button type=\"button\" class=\"btn btn-danger btn-round\"><i class=\"fa fa-heart\"></i> With Icon</button>\r\n                    <button type=\"button\" class=\"btn btn-danger btn-just-icon\"><i class=\"fa fa-heart\"></i></button>\r\n                    <button type=\"button\" class=\"btn btn-danger btn-link\">Simple</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"tim-title\">\r\n                <h3><small>Pick your size</small></h3>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-sm\">Small</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-danger\">Regular</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-lg\">Large</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"tim-title\">\r\n                <h3><small>Pick your color</small></h3>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <button type=\"button\" class=\"btn btn-outline-default btn-round\">Default</button><button type=\"button\" class=\"btn btn-outline-primary btn-round\">Primary</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-info btn-round\">Info</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-success btn-round\">Success</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-warning btn-round\">Warning</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-round\">Danger</button>\r\n                </div>\r\n            </div>\r\n            <br/>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <button type=\"button\" class=\"btn btn-default btn-round\">Default</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-round\">Primary</button>\r\n                    <button type=\"button\" class=\"btn btn-info btn-round\">Info</button>\r\n                    <button type=\"button\" class=\"btn btn-success btn-round\">Success</button>\r\n                    <button type=\"button\" class=\"btn btn-warning btn-round\">Warning</button>\r\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Danger</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n            <br/>\r\n        <div class=\"tim-title\">\r\n            <h3>Links</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <a href=\"#0\" class=\"btn btn-link btn-default\">Default</a>\r\n                <a href=\"#0\" class=\"btn btn-link btn-primary\">Primary</a>\r\n                <a href=\"#0\" class=\"btn btn-link btn-success\">Success</a>\r\n                <a href=\"#0\" class=\"btn btn-link btn-info\">Info</a>\r\n                <a href=\"#0\" class=\"btn btn-link btn-warning\">Warning</a>\r\n                <a href=\"#0\" class=\"btn btn-link btn-danger\">Danger</a>\r\n                <a href=\"#0\" class=\"btn btn-link btn-neutral\">Neutral</a>\r\n            </div>\r\n        </div>\r\n        <br/>\r\n        <div class=\"tim-title\">\r\n            <h3>Inputs</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-3\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Default\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <div class=\"form-group has-success\">\r\n                    <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess1\" value=\"Success\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <div class=\"form-group has-danger\">\r\n                    <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\" value=\"Error\">\r\n                    <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"basic-addon1\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-group\" aria-hidden=\"true\"></i></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br/>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Checkboxes</h3>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\r\n                    Unchecked\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\r\n                    Checked\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check disabled\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled=\"\">\r\n                    Disabled unchecked\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check disabled\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\" disabled=\"\">\r\n                    Disabled checked\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Radio Buttons</h3>\r\n                </div>\r\n                <div class=\"form-check-radio\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" >\r\n                    Radio is off\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check-radio\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\" checked=\"\">\r\n                    Radio is on\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check-radio disabled\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios3\" value=\"option3\" disabled=\"\">\r\n                    Disabled Radio is off\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check-radio disabled\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios4\" value=\"option3\" checked disabled=\"\">\r\n                    Disabled Radio is on\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Toggle Buttons</h3>\r\n                </div>\r\n                <bSwitch\r\n                    [switch-on-color]=\"'primary'\">\r\n                </bSwitch>\r\n                <bSwitch\r\n                    [switch-on-color]=\"'primary'\"\r\n                    [(ngModel)]=\"state_default\"> Toggle is off\r\n                </bSwitch>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Sliders</h3>\r\n                </div>\r\n                <nouislider [connect]=\"false\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"false\" class=\"slider\"></nouislider>\r\n                <br>\r\n                <nouislider class=\"slider slider-info\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"false\"></nouislider>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"page-header section-dark\" style=\"background-image: url('assets/img/antoine-barres.jpg')\">\r\n        <div class=\"filter\"></div>\r\n        <div class=\"content-center\">\r\n            <div class=\"container\">\r\n                <div class=\"title-brand\">\r\n                    <div class=\"angular-logo\">\r\n                        <img src=\"assets/img/angular2-logo.png\" alt=\"\">\r\n                    </div>\r\n                    <h1 class=\"presentation-title\">Paper Kit 2 Angular</h1>\r\n                    <div class=\"fog-low\">\r\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"fog-low right\">\r\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n\r\n                <h2 class=\"presentation-subtitle text-center\">Free Bootstrap 4 UI Kit for Angular 7</h2>\r\n            </div>\r\n        </div>\r\n        <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png'); \"></div>\r\n        <h6 class=\" category-absolute ml-auto mr-auto\">Designed and coded by\r\n        <!-- <h6 class=\"category category-absolute\">Designed and coded by -->\r\n\r\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">\r\n                <img src=\"assets/img/creative-tim-white-slim2.png\" class=\"creative-tim-logo\">\r\n            </a>\r\n        </h6>\r\n    </div>\r\n    <div class=\"main\">\r\n      <app-basicelements></app-basicelements>\r\n      <app-navigation></app-navigation>\r\n      <div class=\"section\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                      <div class=\"tim-title\">\r\n                          <h3>Progress Bar</h3>\r\n                          <br/>\r\n                      </div>\r\n                      <ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar><br>\r\n                      <ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar><br>\r\n                      <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar><br>\r\n                      <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\r\n\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <div class=\"tim-title\">\r\n                          <h3>Pagination</h3>\r\n                          <br/>\r\n                      </div>\r\n                      <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\r\n                      <br/>\r\n                      <ngb-pagination [collectionSize]=\"100\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\"></ngb-pagination>\r\n                  </div>\r\n              </div>\r\n              <br/>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                      <div class=\"tim-title\">\r\n                          <h3>Navigation Tabs</h3>\r\n                      </div>\r\n\r\n                      <div class=\"nav-tabs-navigation\">\r\n                          <div class=\"nav-tabs-wrapper\">\r\n                              <ngb-tabset [justify]=\"'center'\">\r\n                                  <ngb-tab title=\"Home\">\r\n                                      <ng-template ngbTabContent>\r\n                                          <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.</p>\r\n                                      </ng-template>\r\n                                  </ngb-tab>\r\n                                  <ngb-tab title=\"Profile\">\r\n                                      <ng-template ngbTabContent>\r\n                                          <p>Here is your profile.</p>\r\n                                      </ng-template>\r\n                                  </ngb-tab>\r\n                                  <ngb-tab title=\"Messages\">\r\n                                      <ng-template ngbTabContent>\r\n                                          <p>Here are your messages.</p>\r\n                                      </ng-template>\r\n                                  </ngb-tab>\r\n                              </ngb-tabset>\r\n                          </div>\r\n                      </div>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"col-md-6\">\r\n                      <div class=\"tim-title\">\r\n                          <h3>Labels</h3>\r\n                      </div>\r\n                      <span class=\"label label-default\">Default</span>\r\n                      <span class=\"label label-primary\">Primary</span>\r\n                      <span class=\"label label-info\">Info</span>\r\n                      <span class=\"label label-success\">Success</span>\r\n                      <span class=\"label label-warning\">Warning</span>\r\n                      <span class=\"label label-danger\">Danger</span>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section section-notifications\" id=\"notifications\">\r\n          <div class=\"container\">\r\n              <div class=\"tim-title\">\r\n                  <h3>Notification</h3>\r\n              </div>\r\n          </div>\r\n          <app-notification></app-notification>\r\n      </div>\r\n      <app-typography></app-typography>\r\n      <div class=\"section javascript-components\">\r\n          <div class=\"container\">\r\n              <div class=\"tim-title\">\r\n                  <h2>Angular Native Components</h2>\r\n              </div>\r\n              <div class=\"row\" id=\"modals\">\r\n                  <div class=\"col-md-6\">\r\n                      <div class=\"tim-title\">\r\n                          <h3>Modal</h3>\r\n                      </div>\r\n                      <app-modal-component></app-modal-component>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <div class=\"tim-title\">\r\n                          <h3>Popovers</h3>\r\n                      </div>\r\n\r\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\">\r\n                          on right\r\n                      </button>\r\n\r\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\r\n                          on top\r\n                      </button>\r\n\r\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\r\n                          on left\r\n                      </button>\r\n\r\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\r\n                          on bottom\r\n                      </button>\r\n\r\n                  </div>\r\n                  <br/>\r\n                  <div class=\"col-md-6\">\r\n                      <div class=\"tim-title\">\r\n                          <h3>Datepicker</h3>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                          <div class='col-sm-6'>\r\n                              <form class=\"form-inline\">\r\n                                  <div class=\"form-group\">\r\n                                      <div class=\"input-group date\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                                               name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" (focus)=\"focus=true\" (blur)=\"focus=false\" />\r\n                                          <div class=\"input-group-append\">\r\n                                              <span class=\"glyphicon glyphicon-calendar input-group-text\">\r\n                                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                                              </span>\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                              </form>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <div class=\"tim-title\">\r\n                          <h3>Tooltips</h3>\r\n                      </div>\r\n\r\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\r\n                         on right\r\n                     </button>\r\n                     <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\r\n                        on left\r\n                     </button>\r\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\r\n                         on top\r\n                      </button>\r\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\r\n                         on bottom\r\n                      </button>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section\" id=\"carousel\">\r\n          <div class=\"container\">\r\n              <div class=\"tim-title\">\r\n                  <h3>Carousel</h3>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-8 mr-auto ml-auto\">\r\n                      <div class=\"card page-carousel\">\r\n                          <ngb-carousel>\r\n                              <ng-template ngbSlide>\r\n                                  <img src=\"./assets/img/soroush-karimi.jpg\" alt=\"Random first slide\">\r\n                                  <div class=\"carousel-caption\">\r\n                                      <p>Somewhere</p>\r\n                                  </div>\r\n                              </ng-template>\r\n                              <ng-template ngbSlide>\r\n                                  <img src=\"./assets/img/federico-beccari.jpg\" alt=\"Random second slide\">\r\n                                  <div class=\"carousel-caption\">\r\n                                      <p>Somewhere else</p>\r\n                                  </div>\r\n                              </ng-template>\r\n                              <ng-template ngbSlide>\r\n                                  <img src=\"./assets/img/joshua-stannard.jpg\" alt=\"Random third slide\">\r\n                                  <div class=\"carousel-caption\">\r\n                                      <p>Here it is</p>\r\n                                  </div>\r\n                              </ng-template>\r\n                          </ngb-carousel>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n        <div class=\"section section-dark section-nucleo-icons\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-12\">\r\n                        <h2 class=\"title\">Nucleo Icons</h2><br/>\r\n                        <p class=\"description\">\r\n                            Now UI Kit comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit Make sure you check all of them and use those that you like the most.\r\n                        </p><br/>\r\n                        <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-danger btn-round\">View Demo Icons</a>\r\n                        <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-outline-danger btn-round\" target=\"_blank\">View All Icons</a>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-6 col-md-12\">\r\n                        <div class=\"icons-container\">\r\n                            <i class=\"nc-icon nc-time-alarm\"></i>\r\n                            <i class=\"nc-icon nc-atom\"></i>\r\n                            <i class=\"nc-icon nc-camera-compact\"></i>\r\n                            <i class=\"nc-icon nc-watch-time\"></i>\r\n                            <i class=\"nc-icon nc-key-25\"></i>\r\n                            <i class=\"nc-icon nc-diamond\"></i>\r\n                            <i class=\"nc-icon nc-user-run\"></i>\r\n                            <i class=\"nc-icon nc-layout-11\"></i>\r\n                            <i class=\"nc-icon nc-badge\"></i>\r\n                            <i class=\"nc-icon nc-bulb-63\"></i>\r\n                            <i class=\"nc-icon nc-favourite-28\"></i>\r\n                            <i class=\"nc-icon nc-planet\"></i>\r\n                            <i class=\"nc-icon nc-tie-bow\"></i>\r\n                            <i class=\"nc-icon nc-zoom-split\"></i>\r\n                            <i class=\"nc-icon nc-cloud-download-93\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"section section-dark\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\r\n                        <h2 class=\"title\">Completed with examples</h2>\r\n                        <p class=\"description\">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful kit.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"section section-image section-login\" style=\"background-image: url('assets/img/login-image.jpg');\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-4 col-md-6 col-sm-12 ml-auto mr-auto\">\r\n                        <div class=\"card card-register\">\r\n                            <h3 class=\"title\">Welcome</h3>\r\n                            <div class=\"social-line text-center\">\r\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                </a>\r\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-just-icon\">\r\n                                    <i class=\"fa fa-google-plus\"></i>\r\n                                </a>\r\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                </a>\r\n                            </div>\r\n                            <form class=\"register-form\">\r\n                                <label>Email</label>\r\n                                <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                  <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\">\r\n                                        <i class=\"nc-icon nc-email-85\"></i>\r\n                                    </span>\r\n                                  </div>\r\n\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\r\n                                </div>\r\n\r\n                                <label>Password</label>\r\n                                <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                                  <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\">\r\n                                        <i class=\"nc-icon nc-key-25\"></i>\r\n                                    </span>\r\n                                  </div>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\r\n                                </div>\r\n                                <button class=\"btn btn-danger btn-block btn-round\">Register</button>\r\n                            </form>\r\n                            <div class=\"forgot\">\r\n                                <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col text-center\" routerLinkActive=\"active\">\r\n                            <a [routerLink]=\"['/signup']\" class=\"btn btn-outline-neutral btn-round btn-lg\">View Register Page</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"section section-dark\">\r\n            <div class=\"container\">\r\n                <div class=\"row example-page\">\r\n                    <div class=\"col-md-6 text-center\" routerLinkActive=\"active\">\r\n                        <a [routerLink]=\"['/landing']\">\r\n                            <img src=\"./assets/img/examples/landing-page.JPG\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\" style=\"width: 100%\">\r\n                            <a [routerLink]=\"['/landing']\" class=\"btn btn-outline-neutral btn-round\">Landing Page</a>\r\n                        </a>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6 text-center\" routerLinkActive=\"active\">\r\n                        <a [routerLink]=\"['/user-profile']\">\r\n                            <img src=\"./assets/img/examples/profile-page.JPG\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\" style=\"width: 100%\">\r\n                            <a [routerLink]=\"['/user-profile']\" class=\"btn btn-outline-neutral btn-round\">Profile Page</a>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"section\">\r\n            <div class=\"container text-center\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\r\n                        <h2 class=\"title\">Do you like what you see?</h2>\r\n                        <p class=\"description\">Cause if you do, it can be yours for Free. Hit the button below and download it. Start a new project or give an old Bootstrap 4 project a new look.</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 download-area ml-auto mr-auto\">\r\n                        <a href=\"https://www.creative-tim.com/product/paper-kit-2\" class=\"btn btn-warning btn-round\">Download free HTML</a>\r\n                        <a href=\"https://www.creative-tim.com/product/paper-kit-2-angular\" class=\"btn btn-danger btn-round\">Download free Angular</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row justify-content-md-center sharing-area text-center\">\r\n                    <div class=\"text-center col-md-12 col-lg-8\">\r\n                        <h3>Thank you for supporting us!</h3>\r\n                    </div>\r\n                    <div class=\"text-center col-md-12 col-lg-8\">\r\n                        <a href=\"#pablo\" class=\"btn btn-twitter-bg twitter-sharrre btn-round\" rel=\"tooltip\" title=\"Tweet!\">\r\n                            <i class=\"fa fa-twitter\"></i> Twitter\r\n                        </a>\r\n                        <a href=\"#pablo\" class=\"btn btn-google-bg linkedin-sharrre btn-round\" rel=\"tooltip\" title=\"Share!\">\r\n                            <i class=\"fa fa-google-plus\"></i> Google\r\n                        </a>\r\n                        <a href=\"#pablo\" class=\"btn btn-facebook-bg facebook-sharrre btn-round\" rel=\"tooltip\" title=\"Share!\">\r\n                            <i class=\"fa fa-facebook-square\"></i> Facebook\r\n                        </a>\r\n                        <a href=\"https://github.com/creativetimofficial/paper-kit\" class=\"btn btn-github-bg btn-github sharrre btn-round\" rel=\"tooltip\" title=\"Star on Github\">\r\n                            <i class=\"fa fa-github\"></i> Star\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>You can pass an existing component as content of the modal window. In this case remember to add content component\r\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\r\n\r\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-navbars\">\r\n    <div class=\"container\" id=\"menu-dropdown\">\r\n        <div class=\"tim-title\">\r\n            <h3>Menu</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n                    <div class=\"container\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\r\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-icon\"></span>\r\n                            <span class=\"navbar-toggler-icon\"></span>\r\n                            <span class=\"navbar-toggler-icon\"></span>\r\n                        </button>\r\n                        <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\r\n                            <ul class=\"navbar-nav\">\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <div ngbDropdown class=\"d-inline-block dropdown\">\r\n                                        <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</a>\r\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\r\n                                            <a class=\"dropdown-item\">Action - 1</a>\r\n                                            <a class=\"dropdown-item\">Another Action</a>\r\n                                            <a class=\"dropdown-item\">Something else is here</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <nav class=\"navbar navbar-expand-lg bg-danger\">\r\n                    <div class=\"container\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\r\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu-icon\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-icon\"></span>\r\n                            <span class=\"navbar-toggler-icon\"></span>\r\n                            <span class=\"navbar-toggler-icon\"></span>\r\n                        </button>\r\n                        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbar-menu-icon\">\r\n                            <ul class=\"navbar-nav\">\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-email-85\" aria-hidden=\"true\"></i></a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i></a>\r\n                                </li>\r\n                                <li class=\"nav-item \">\r\n                                    <div ngbDropdown class=\"dropdown\" placement=\"bottom-left\">\r\n                                    <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\r\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-danger dropdown-menu-right\">\r\n                                            <a class=\"dropdown-item\">Action - 1</a>\r\n                                            <a class=\"dropdown-item\">Another Action</a>\r\n                                            <a class=\"dropdown-item\">Something else is here</a>\r\n                                            <div class=\"dropdown-divider\"></div>\r\n                                            <a class=\"dropdown-item\">Separated link</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"navbar\">\r\n        <div class=\"container\">\r\n            <div class=\"tim-title\">\r\n                <h3>Navigation</h3>\r\n                <br/>\r\n            </div>\r\n        </div>\r\n        <div class=\"navigation-example\">\r\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n                <div class=\"container\">\r\n                    <a class=\"navbar-brand\" href=\"#\">Primary Color</a>\r\n                    <button class=\"navbar-toggler navbar-toggler-right burger-menu\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                    </button>\r\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i>&nbsp;Discover</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i>&nbsp;Profile</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i>&nbsp;Settings</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg bg-info\">\r\n                <div class=\"container\">\r\n                    <a class=\"navbar-brand\" href=\"#\">Info Color</a>\r\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                    </button>\r\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\">Discover</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\">Profile</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\">Settings</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg bg-success\">\r\n                <div class=\"container\">\r\n                    <a class=\"navbar-brand\" href=\"#\">Success Color</a>\r\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                    </button>\r\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i></a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i> </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\r\n                <div class=\"container\">\r\n                    <a class=\"navbar-brand\" href=\"#\">Warning Color</a>\r\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                    </button>\r\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i></a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\r\n                <div class=\"container\">\r\n                    <a class=\"navbar-brand\" href=\"#\">Danger Color</a>\r\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                    </button>\r\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Share</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Tweet</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i> Pin</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\r\n                <div class=\"container\">\r\n                    <a class=\"navbar-brand\" href=\"#\">Transparent</a>\r\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-transparent\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                    </button>\r\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-transparent\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Facebook</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Twitter</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i> Instagram</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngFor=\"let alert of alerts\">\r\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\">\r\n        <div class=\"container\">\r\n            <ng-container *ngIf=\"alert.icon\">\r\n                <i class=\"nc-icon {{alert.icon}}\"></i>\r\n            </ng-container>\r\n\r\n            {{ alert.message }}\r\n            <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\r\n                <i class=\"nc-icon nc-simple-remove\"></i>\r\n            </button>\r\n        </div>\r\n    </ngb-alert>\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n    <h1>Paper Kit 2 Icons</h1>\r\n    <p>Built with <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a></p>\r\n</header>\r\n\r\n<div id=\"icons-wrapper\">\r\n    <section>\r\n        <ul>\r\n            <li>\r\n                <i class=\"nc-icon nc-air-baloon\"></i>\r\n                <p>nc-air-baloon</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-album-2\"></i>\r\n                <p>nc-album-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-alert-circle-i\"></i>\r\n                <p>nc-alert-circle-i</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-align-center\"></i>\r\n                <p>nc-align-center</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-align-left-2\"></i>\r\n                <p>nc-align-left-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-ambulance\"></i>\r\n                <p>nc-ambulance</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-app\"></i>\r\n                <p>nc-app</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-atom\"></i>\r\n                <p>nc-atom</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-badge\"></i>\r\n                <p>nc-badge</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bag-16\"></i>\r\n                <p>nc-bag-16</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bank\"></i>\r\n                <p>nc-bank</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-basket\"></i>\r\n                <p>nc-basket</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bell-55\"></i>\r\n                <p>nc-bell-55</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bold\"></i>\r\n                <p>nc-bold</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-book-bookmark\"></i>\r\n                <p>nc-book-bookmark</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bookmark-2\"></i>\r\n                <p>nc-bookmark-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-box-2\"></i>\r\n                <p>nc-box-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-box\"></i>\r\n                <p>nc-box</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-briefcase-24\"></i>\r\n                <p>nc-briefcase-24</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bulb-63\"></i>\r\n                <p>nc-bulb-63</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bullet-list-67\"></i>\r\n                <p>nc-bullet-list-67</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bus-front-12\"></i>\r\n                <p>nc-bus-front-12</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-button-pause\"></i>\r\n                <p>nc-button-pause</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-button-play\"></i>\r\n                <p>nc-button-play</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-button-power\"></i>\r\n                <p>nc-button-power</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-calendar-60\"></i>\r\n                <p>nc-calendar-60</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-camera-compact\"></i>\r\n                <p>nc-camera-compact</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-caps-small\"></i>\r\n                <p>nc-caps-small</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-cart-simple\"></i>\r\n                <p>nc-cart-simple</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-chart-bar-32\"></i>\r\n                <p>nc-chart-bar-32</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-chart-pie-36\"></i>\r\n                <p>nc-chart-pie-36</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-chat-33\"></i>\r\n                <p>nc-chat-33</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-check-2\"></i>\r\n                <p>nc-check-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-circle-10\"></i>\r\n                <p>nc-circle-10</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-cloud-download-93\"></i>\r\n                <p>nc-cloud-download-93</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-cloud-upload-94\"></i>\r\n                <p>nc-cloud-upload-94</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-compass-05\"></i>\r\n                <p>nc-compass-05</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-controller-modern\"></i>\r\n                <p>nc-controller-modern</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-credit-card\"></i>\r\n                <p>nc-credit-card</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-delivery-fast\"></i>\r\n                <p>nc-delivery-fast</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-diamond\"></i>\r\n                <p>nc-diamond</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-email-85\"></i>\r\n                <p>nc-email-85</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-favourite-28\"></i>\r\n                <p>nc-favourite-28</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-glasses-2\"></i>\r\n                <p>nc-glasses-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-globe-2\"></i>\r\n                <p>nc-globe-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-globe\"></i>\r\n                <p>nc-globe</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-hat-3\"></i>\r\n                <p>nc-hat-3</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-headphones\"></i>\r\n                <p>nc-headphones</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-html5\"></i>\r\n                <p>nc-html5</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-image\"></i>\r\n                <p>nc-image</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-istanbul\"></i>\r\n                <p>nc-istanbul</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-key-25\"></i>\r\n                <p>nc-key-25</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-laptop\"></i>\r\n                <p>nc-laptop</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-layout-11\"></i>\r\n                <p>nc-layout-11</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-lock-circle-open\"></i>\r\n                <p>nc-lock-circle-open</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-map-big\"></i>\r\n                <p>nc-map-big</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-minimal-down\"></i>\r\n                <p>nc-minimal-down</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-minimal-left\"></i>\r\n                <p>nc-minimal-left</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-minimal-right\"></i>\r\n                <p>nc-minimal-right</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-minimal-up\"></i>\r\n                <p>nc-minimal-up</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-mobile\"></i>\r\n                <p>nc-mobile</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-money-coins\"></i>\r\n                <p>nc-money-coins</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-note-03\"></i>\r\n                <p>nc-note-03</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-palette\"></i>\r\n                <p>nc-palette</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-paper\"></i>\r\n                <p>nc-paper</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-pin-3\"></i>\r\n                <p>nc-pin-3</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-planet\"></i>\r\n                <p>nc-planet</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-refresh-69\"></i>\r\n                <p>nc-refresh-69</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-ruler-pencil\"></i>\r\n                <p>nc-ruler-pencil</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-satisfied\"></i>\r\n                <p>nc-satisfied</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-scissors\"></i>\r\n                <p>nc-scissors</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-send\"></i>\r\n                <p>nc-send</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-settings-gear-65\"></i>\r\n                <p>nc-settings-gear-65</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-settings\"></i>\r\n                <p>nc-settings</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-share-66\"></i>\r\n                <p>nc-share-66</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-shop\"></i>\r\n                <p>nc-shop</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-simple-add\"></i>\r\n                <p>nc-simple-add</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-simple-delete\"></i>\r\n                <p>nc-simple-delete</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-simple-remove\"></i>\r\n                <p>nc-simple-remove</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-single-02\"></i>\r\n                <p>nc-single-02</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-single-copy-04\"></i>\r\n                <p>nc-single-copy-04</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-sound-wave\"></i>\r\n                <p>nc-sound-wave</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-spaceship\"></i>\r\n                <p>nc-spaceship</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-sun-fog-29\"></i>\r\n                <p>nc-sun-fog-29</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-support-17\"></i>\r\n                <p>nc-support-17</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-tablet-2\"></i>\r\n                <p>nc-tablet-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-tag-content\"></i>\r\n                <p>nc-tag-content</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-tap-01\"></i>\r\n                <p>nc-tap-01</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-tie-bow\"></i>\r\n                <p>nc-tie-bow</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-tile-56\"></i>\r\n                <p>nc-tile-56</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-time-alarm\"></i>\r\n                <p>nc-time-alarm</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-touch-id\"></i>\r\n                <p>nc-touch-id</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-trophy\"></i>\r\n                <p>nc-trophy</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-tv-2\"></i>\r\n                <p>nc-tv-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-umbrella-13\"></i>\r\n                <p>nc-umbrella-13</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-user-run\"></i>\r\n                <p>nc-user-run</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-vector\"></i>\r\n                <p>nc-vector</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-watch-time\"></i>\r\n                <p>nc-watch-time</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-world-2\"></i>\r\n                <p>nc-world-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-zoom-split\"></i>\r\n                <p>nc-zoom-split</p>\r\n            </li>\r\n            <!-- list of icons here with the proper class-->\r\n        </ul>\r\n    </section>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\r\n    <div class=\"container tim-container\">\r\n        <div class=\"tim-title\">\r\n            <h3>Typography</h3>\r\n            <br/>\r\n        </div>\r\n        <div id=\"typography\">\r\n            <div class=\"row\">\r\n                <div class=\"typography-line\">\r\n                    <h1>\r\n                        <span class=\"note\">Header 1</span> Thinking in textures\r\n                    </h1>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <h2>\r\n                        <span class=\"note\">Header 2</span> Thinking in textures\r\n                    </h2>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <h3>\r\n                        <span class=\"note\">Header 3</span> Thinking in textures\r\n                    </h3>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <h4>\r\n                        <span class=\"note\">Header 4</span> Thinking in textures\r\n                    </h4>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <h5>\r\n                        <span class=\"note\">Header 5</span> Thinking in textures\r\n                    </h5>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <h6>\r\n                        <span class=\"note\">Header 6</span> Thinking in textures\r\n                    </h6>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <p>\r\n                        <span class=\"note\">Paragraph</span> Thinking in textures\r\n                    </p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Quote</span>\r\n                    <blockquote class=\"blockquote\">\r\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n                        <footer class=\"blockquote-footer\">Someone famous in <cite title=\"source Title\">Source Title</cite></footer>\r\n                    </blockquote>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Muted text</span>\r\n                    <p class=\"text-muted\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Primary text</span>\r\n                    <p class=\"text-primary\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Success text</span>\r\n                    <p class=\"text-success\">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Info text</span>\r\n                    <p class=\"text-info\">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Warning text</span>\r\n                    <p class=\"text-warning\">Etiam porta sem malesuada magna mollis euismod.</p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Danger text</span>\r\n                    <p class=\"text-danger\">Donec ullamcorper nulla non metus auctor fringilla.</p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <h2><span class=\"note\">Small tag</span>Header with small subtitle\r\n                        <br/>\r\n                        <small>\".small\" is a tag for the headers</small>\r\n                    </h2>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br/>\r\n        <div id=\"images\">\r\n            <div class=\"container\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Images</h3>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-8 col-sm-6 col-md-3\">\r\n                        <h4 class=\"images-title\">Rounded Image</h4>\r\n                        <img src=\"assets/img/uriel-soberanes.jpg\" class=\"img-rounded img-responsive\" alt=\"Rounded Image\">\r\n                        <div class=\"img-details\">\r\n                            <div class=\"author\">\r\n                                <img src=\"assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\r\n                            </div>\r\n                            <p>Chet Faker</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\r\n                        <h4 class=\"images-title\">Circle Image</h4>\r\n                        <img src=\"assets/img/faces/joe-gardner-2.jpg\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\">\r\n                        <p class=\"text-center\">Joe Gardner</p>\r\n                    </div>\r\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\r\n                        <h4 class=\"images-title\">Thumbnail</h4>\r\n                        <img src=\"assets/img/faces/clem-onojeghuo-3.jpg\" class=\"img-thumbnail img-responsive\" alt=\"Rounded Image\">\r\n                        <p class=\"text-center\">Erik Faker</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/landing/landing.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/landing/landing.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('./assets/img/daniel-olahh.jpg');\">\r\n    <div class=\"filter\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"motto text-center\">\r\n            <h1>Yadav Industries</h1>\r\n            <h3>Provide better quality product to market.</h3>\r\n            <br />\r\n            <a href=\"https://www.youtube.com\" class=\"btn btn-outline-neutral btn-round\"><i\r\n                    class=\"fa fa-play\"></i>Watch video</a>\r\n            <button type=\"button\" class=\"btn btn-outline-neutral btn-round\">Download</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"main\">\r\n    <div class=\"section text-center\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 mr-auto ml-auto\">\r\n                    <h2 class=\"title\">Let's talk product</h2>\r\n                    <h5 class=\"description\">This is the paragraph where you can write more details about your product.\r\n                        Keep you user engaged by providing meaningful information. Remember that by this time, the user\r\n                        is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see\r\n                        more.</h5>\r\n                    <br>\r\n                    <a href=\"#paper-kit\" class=\"btn btn-danger btn-round\">See Details</a>\r\n                </div>\r\n            </div>\r\n            <br /><br />\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"info\">\r\n                        <div class=\"icon icon-danger\">\r\n                            <i class=\"nc-icon nc-album-2\"></i>\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            <h4 class=\"info-title\">Beautiful Gallery</h4>\r\n                            <p class=\"description\">Spend your time generating new ideas. You don't have to think of\r\n                                implementing.</p>\r\n                            <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"info\">\r\n                        <div class=\"icon icon-danger\">\r\n                            <i class=\"nc-icon nc-bulb-63\"></i>\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            <h4 class=\"info-title\">New Ideas</h4>\r\n                            <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\r\n                            <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"info\">\r\n                        <div class=\"icon icon-danger\">\r\n                            <i class=\"nc-icon nc-chart-bar-32\"></i>\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            <h4 class=\"info-title\">Statistics</h4>\r\n                            <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>\r\n                            <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"info\">\r\n                        <div class=\"icon icon-danger\">\r\n                            <i class=\"nc-icon nc-sun-fog-29\"></i>\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            <h4 class=\"info-title\">Delightful design</h4>\r\n                            <p>Find unique and handmade delightful designs related items directly from our sellers.</p>\r\n                            <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"section\" id=\"carousel\">\r\n        <div class=\"container\">\r\n            <div class=\"tim-title\">\r\n                <h3>Industry Gallery</h3>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 mr-auto ml-auto\">\r\n                    <div class=\"card page-carousel\">\r\n                        <ngb-carousel>\r\n                            <ng-template ngbSlide>\r\n                                <img src=\"./assets/img/soap-industries-500x500.jpg\" alt=\"Random first slide\">\r\n                                <div class=\"carousel-caption\">\r\n                                    <p>Raw material processing</p>\r\n                                </div>\r\n                            </ng-template>\r\n                            <ng-template ngbSlide>\r\n                                <img src=\"./assets/img/soap-processing.jpg\" alt=\"Random first slide\">\r\n                                <div class=\"carousel-caption\">\r\n                                    <p>Quality Test</p>\r\n                                </div>\r\n                            </ng-template>\r\n                            <ng-template ngbSlide>\r\n                                <img src=\"./assets/img/liquid-washing-homogenizing-mixer.jpg\" alt=\"Random second slide\">\r\n                                <div class=\"carousel-caption\">\r\n                                    <p>Liquid washing homogenizing mixer</p>\r\n                                </div>\r\n                            </ng-template>\r\n                        </ngb-carousel>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"section section-dark text-center\">\r\n        <div class=\"container\">\r\n            <h2 class=\"title\">Let's talk about us</h2>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card card-profile card-plain\">\r\n                        <div class=\"card-avatar\">\r\n                            <a href=\"#avatar\"><img src=\"./assets/img/faces/clem-onojeghuo-3.jpg\" alt=\"...\"></a>\r\n                        </div>\r\n                        <div class=\"card-block\">\r\n                            <a href=\"#paper-kit\">\r\n                                <div class=\"author\">\r\n                                    <h4 class=\"card-title\">Yadav Yadav</h4>\r\n                                    <h6 class=\"card-category\">Founder</h6>\r\n                                </div>\r\n                            </a>\r\n                            <p class=\"card-description text-center\">\r\n                                Teamwork is so important that it is virtually impossible for you to reach the heights of\r\n                                your capabilities or make the money that you want without becoming very good at it.\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"card-footer text-center\">\r\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i\r\n                                    class=\"fa fa-twitter\"></i></a>\r\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i\r\n                                    class=\"fa fa-google-plus\"></i></a>\r\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i\r\n                                    class=\"fa fa-linkedin\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card card-profile card-plain\">\r\n                        <div class=\"card-avatar\">\r\n                            <a href=\"#avatar\"><img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"...\"></a>\r\n                        </div>\r\n                        <div class=\"card-block\">\r\n                            <a href=\"#paper-kit\">\r\n                                <div class=\"author\">\r\n                                    <h4 class=\"card-title\">Sophie West</h4>\r\n                                    <h6 class=\"card-category\">Manager</h6>\r\n                                </div>\r\n                            </a>\r\n                            <p class=\"card-description text-center\">\r\n                                A group becomes a team when each member is sure enough of himself and his contribution\r\n                                to praise the skill of the others. No one can whistle a symphony. It takes an orchestra\r\n                                to play it.\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"card-footer text-center\">\r\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i\r\n                                    class=\"fa fa-twitter\"></i></a>\r\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i\r\n                                    class=\"fa fa-google-plus\"></i></a>\r\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i\r\n                                    class=\"fa fa-linkedin\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card card-profile card-plain\">\r\n                        <div class=\"card-avatar\">\r\n                            <a href=\"#avatar\"><img src=\"./assets/img/faces/erik-lucatero-2.jpg\" alt=\"...\"></a>\r\n                        </div>\r\n                        <div class=\"card-block\">\r\n                            <a href=\"#paper-kit\">\r\n                                <div class=\"author\">\r\n                                    <h4 class=\"card-title\">Robert Orben</h4>\r\n                                    <h6 class=\"card-category\">Sales Manager</h6>\r\n                                </div>\r\n                            </a>\r\n                            <p class=\"card-description text-center\">\r\n                                The strength of the team is each individual member. The strength of each member is the\r\n                                team. If you can laugh together, you can work together, silence isn’t golden, it’s\r\n                                deadly.\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"card-footer text-center\">\r\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i\r\n                                    class=\"fa fa-twitter\"></i></a>\r\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i\r\n                                    class=\"fa fa-google-plus\"></i></a>\r\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i\r\n                                    class=\"fa fa-linkedin\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"section landing-section\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 mr-auto ml-auto\">\r\n                    <h2 class=\"text-center\">Keep in touch?</h2>\r\n                    <form class=\"contact-form\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <label>Name</label>\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <span class=\"input-group-text\"><i class=\"nc-icon nc-single-02\"></i></span>\r\n                                    </div>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" (focus)=\"focus=true\"\r\n                                        (blur)=\"focus=false\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <label>Email</label>\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <span class=\"input-group-text\"> <i class=\"nc-icon nc-email-85\"></i></span>\r\n                                    </div>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus1=true\"\r\n                                        (blur)=\"focus1=false\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <label>Message</label>\r\n                        <textarea class=\"form-control\" rows=\"4\"\r\n                            placeholder=\"Tell us your thoughts and feelings...\"></textarea>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4 mr-auto ml-auto\">\r\n                                <button class=\"btn btn-danger btn-lg btn-fill\">Send Message</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/profile/profile.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/profile/profile.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('./assets/img/fabio-mangione.jpg');\">\r\n        <div class=\"filter\"></div>\r\n    </div>\r\n    <div class=\"section profile-content\">\r\n        <div class=\"container\">\r\n            <div class=\"owner\">\r\n                <div class=\"avatar\">\r\n                    <img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\r\n                </div>\r\n                <div class=\"name\">\r\n                    <h4 class=\"title\">Jane Faker<br /></h4>\r\n                    <h6 class=\"description\">Music Producer</h6>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\r\n                    <p>An artist of considerable range, Jane Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>\r\n                    <br />\r\n                    <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-cog\"></i> Settings</button>\r\n                </div>\r\n            </div>\r\n            <br/>\r\n            <div class=\"nav-tabs-navigation\">\r\n                <div class=\"nav-tabs-wrapper\">\r\n                    <ngb-tabset [justify]=\"'center'\">\r\n                        <ngb-tab title=\"Follows\">\r\n                            <ng-template ngbTabContent >\r\n                                <div class=\"row following\" id=\"follows\">\r\n                                    <div class=\"col-md-6 ml-auto mr-auto\">\r\n                                        <ul class=\"list-unstyled follows\">\r\n                                            <li>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\r\n                                                        <img src=\"./assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\r\n                                                    </div>\r\n                                                    <div class=\"col-md-7 col-sm-4 ml-auto\">\r\n                                                        <h6>Flume<br/><small>Musical Producer</small></h6>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">\r\n                                                        <div class=\"form-check\">\r\n                                                          <label class=\"form-check-label\">\r\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\r\n                                                            <span class=\"form-check-sign\"></span>\r\n                                                          </label>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </li>\r\n                                            <hr />\r\n                                            <li>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\r\n                                                        <img src=\"./assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\r\n                                                    </div>\r\n                                                    <div class=\"col-md-7 col-sm-4 ml-auto\">\r\n                                                        <h6>Banks<br /><small>Singer</small></h6>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">\r\n                                                        <div class=\"form-check\">\r\n                                                          <label class=\"form-check-label\">\r\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\r\n                                                            <span class=\"form-check-sign\"></span>\r\n                                                          </label>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-template>\r\n                        </ngb-tab>\r\n                        <ngb-tab title=\"Following\">\r\n                            <ng-template ngbTabContent>\r\n                                <h3 class=\"text-muted\">Not following anyone yet :(</h3>\r\n                                <br>\r\n                                <button class=\"btn btn-warning btn-round\">Find artists</button>\r\n                            </ng-template>\r\n                        </ngb-tab>\r\n                    </ngb-tabset>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/signup/signup.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/signup/signup.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"page-header\" style=\"background-image: url('./assets/img/login-image.jpg');\">\r\n        <div class=\"filter\"></div>\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\r\n                      <div class=\"card card-register\">\r\n                          <h3 class=\"title\">Welcome</h3>\r\n                          <div class=\"social-line text-center\">\r\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\r\n                                  <i class=\"fa fa-facebook-square\"></i>\r\n                              </a>\r\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-just-icon\">\r\n                                  <i class=\"fa fa-google-plus\"></i>\r\n                              </a>\r\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\r\n                                  <i class=\"fa fa-twitter\"></i>\r\n                              </a>\r\n                          </div>\r\n                          <form class=\"register-form\">\r\n                              <label>Email</label>\r\n                              <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                <div class=\"input-group-prepend\">\r\n                                  <span class=\"input-group-text\">\r\n                                      <i class=\"nc-icon nc-email-85\"></i>\r\n                                  </span>\r\n                                </div>\r\n\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\r\n                              </div>\r\n\r\n                              <label>Password</label>\r\n                              <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                                <div class=\"input-group-prepend\">\r\n                                  <span class=\"input-group-text\">\r\n                                      <i class=\"nc-icon nc-key-25\"></i>\r\n                                  </span>\r\n                                </div>\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\r\n                              </div>\r\n                              <button class=\"btn btn-danger btn-block btn-round\">Register</button>\r\n                          </form>\r\n                          <div class=\"forgot\">\r\n                              <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\r\n                          </div>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer register-footer text-center\">\r\n                    <h6>&copy;{{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim</h6>\r\n                </div>\r\n            </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <nav class=\"footer-nav\">\r\n                <ul>\r\n                    <li><a href=\"https://kkdubey.github.io\">Home</a></li>\r\n                    <li><a href=\"https://kkdubey.github.io\">Blog</a></li>\r\n                    <li><a href=\"https://kkdubey.github.io/license\">Licenses</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"credits ml-auto\">\r\n                <span class=\"copyright\">\r\n                    © {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by KKD\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-translate\">\r\n            <a class=\"navbar-brand\" href=\"https://kkdubey.github.io\">Yadav Soap Industries</a>\r\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\"\r\n                data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\"\r\n                aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n                <span class=\"navbar-toggler-bar\"></span>\r\n                <span class=\"navbar-toggler-bar\"></span>\r\n                <span class=\"navbar-toggler-bar\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"navbar-collapse\" id=\"navbarToggler\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\r\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Twitter\" data-placement=\"bottom\"\r\n                        href=\"https://twitter.com/kkdubey12\" target=\"_blank\">\r\n                        <i class=\"fa fa-twitter\"></i>\r\n                        <p class=\"d-lg-none\">Twitter</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\r\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Like us on Facebook\" data-placement=\"bottom\"\r\n                        href=\"https://www.facebook.com/kkdubey1989\" target=\"_blank\">\r\n                        <i class=\"fa fa-facebook-square\"></i>\r\n                        <p class=\"d-lg-none\">Facebook</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\r\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Instagram\" data-placement=\"bottom\"\r\n                        href=\"https://www.instagram.com/kkdubey16\" target=\"_blank\">\r\n                        <i class=\"fa fa-instagram\"></i>\r\n                        <p class=\"d-lg-none\">Instagram</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\r\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Star on GitHub\" data-placement=\"bottom\"\r\n                        href=\"https://www.github.com/kkdubey\" target=\"_blank\">\r\n                        <i class=\"fa fa-github\"></i>\r\n                        <p class=\"d-lg-none\">GitHub</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>");

/***/ }),

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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listen('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _examples_examples_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/examples.module */ "./src/app/examples/examples.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
                _examples_examples_module__WEBPACK_IMPORTED_MODULE_10__["ExamplesModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _examples_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/signup/signup.component */ "./src/app/examples/signup/signup.component.ts");
/* harmony import */ var _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/landing/landing.component */ "./src/app/examples/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'home', component: _components_components_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsComponent"] },
    // { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup', component: _examples_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'landing', component: _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFzaWNlbGVtZW50cy9iYXNpY2VsZW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicelementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function() { return BasicelementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var BasicelementsComponent = /** @class */ (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state_default = true;
    }
    BasicelementsComponent.prototype.ngOnInit = function () { };
    BasicelementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basicelements',
            template: __importDefault(__webpack_require__(/*! raw-loader!./basicelements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./basicelements.component.scss */ "./src/app/components/basicelements/basicelements.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer) {
        this.renderer = renderer;
        this.page = 4;
        this.page1 = 5;
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var input_group_focus = document.getElementsByClassName('form-control');
        var input_group = document.getElementsByClassName('input-group');
        var _loop_1 = function (i) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        };
        for (var i = 0; i < input_group.length; i++) {
            _loop_1(i);
        }
    };
    ComponentsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    ComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-components',
            template: __importDefault(__webpack_require__(/*! raw-loader!./components.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html")).default,
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/__ivy_ngcc__/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basicelements/basicelements.component */ "./src/app/components/basicelements/basicelements.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/components/notification/notification.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_11__["ComponentsComponent"],
                _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_7__["BasicelementsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__["TypographyComponent"],
                _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_10__["NucleoiconsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_12__["NotificationComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["NgbdModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["NgbdModalContent"]
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["NgbdModalContent"]],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_11__["ComponentsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    NgbdModalContent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }
    ]; };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-component',
            template: __importDefault(__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html")).default
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/notification/notification.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/notification/notification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
            icon: 'nc-bell-55'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
            icon: 'nc-bell-55'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NotificationComponent.prototype, "alerts", void 0);
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __importDefault(__webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./notification.component.scss */ "./src/app/components/notification/notification.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVjbGVvaWNvbnMvbnVjbGVvaWNvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.ts ***!
  \*****************************************************************/
/*! exports provided: NucleoiconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoiconsComponent", function() { return NucleoiconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('app-nucleoicons')[0];
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.add('navbar-hidden');
        body.classList.add('demo-icons');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-hidden');
    };
    NucleoiconsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    NucleoiconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nucleoicons',
            template: __importDefault(__webpack_require__(/*! raw-loader!./nucleoicons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./nucleoicons.component.scss */ "./src/app/components/nucleoicons/nucleoicons.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography',
            template: __importDefault(__webpack_require__(/*! raw-loader!./typography.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./typography.component.scss */ "./src/app/components/typography/typography.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/examples/examples.module.ts":
/*!*********************************************!*\
  !*** ./src/app/examples/examples.module.ts ***!
  \*********************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/examples/landing/landing.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/examples/profile/profile.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/examples/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            ],
            declarations: [
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
            ]
        })
    ], ExamplesModule);
    return ExamplesModule;
}());



/***/ }),

/***/ "./src/app/examples/landing/landing.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/examples/landing/landing.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/examples/landing/landing.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/examples/landing/landing.component.ts ***!
  \*******************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () { };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __importDefault(__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/landing/landing.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./landing.component.scss */ "./src/app/examples/landing/landing.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/examples/profile/profile.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/examples/profile/profile.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/examples/profile/profile.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/examples/profile/profile.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/profile/profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./profile.component.scss */ "./src/app/examples/profile/profile.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/examples/signup/signup.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/examples/signup/signup.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/examples/signup/signup.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/examples/signup/signup.component.ts ***!
  \*****************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.test = new Date();
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __importDefault(__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/signup/signup.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./signup.component.scss */ "./src/app/examples/signup/signup.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*!

 =========================================================
 * Paper Kit 2 Angular - v1.3.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-kit-2-angular
 * Copyright 2017 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/timcreative/paper-kit/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Work\POC\Angular\kkdubey.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map