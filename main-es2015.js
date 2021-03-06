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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/convoc/convoc.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/convoc/convoc.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<article class=\"ed-container mg-top-1\">\n\n  <section class=\"ed-container ed-item item-contraccion\">\n    <div class=\"ed-container ed-item single-card\">\n\n      <div class=\"ed-item \">\n        <h3 class=\"titulo\">\n          <picture class=\"titulo-imagen\">\n            <source media=\"(max-width: 650px)\" srcset=\".../../../assets/images/convocatoria-t.svg\">\n              <img src=\"../../../assets/images/convocatoria-t.svg\" alt=\"Objetivo con svg\">\n          </picture>\n        </h3>\n      </div>\n      <div class=\"ed-container ed-item m-center\">\n        <div class=\"ed-item s-block-center txt-semilight\">\n          <p>Te invitamos a leer con detalle nuestra convocatoria. Es importante tener en cuenta todos los requisitos para llevar acabo tu registro. Cualquier aspecto no establecido en dicha convocatoria se tratará directamente en el correo: olimpiadaredlarousse@gmail.com</p>\n          <p>Este calendario de actividades se detalla en la convocatoria en pdf.</p>\n        </div>\n        <div class=\"ed-item\">\n          <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" color=\"danger\">\n\n            <ng-container matColumnDef=\"actividad\">\n              <th mat-header-cell *matHeaderCellDef> Actividad </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.actividad}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"fecha\">\n              <th mat-header-cell *matHeaderCellDef> Fecha </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.fecha}} </td>\n            </ng-container>\n          \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n        </div>\n      </div>\n\n    </div>\n    <aside class=\"ed-item manchones\">\n      <p class=\"s-90 s-to-right\">\n        <img src=\"../../../assets/images/manchon-r.svg\" alt=\"\">\n      </p>\n    </aside>\n  </section>\n\n  <section class=\"ed-container ed-item item-contraccion\">\n    <div class=\"ed-container ed-item single-card\">\n\n      <div class=\"ed-item \">\n          <h3 class=\"titulo\">\n            <picture class=\"titulo-imagen\">\n              <source media=\"(max-width: 650px)\" srcset=\".../../../assets/images/convo-resumida.svg\">\n                <img src=\"../../../assets/images/convo-resumida.svg\" alt=\"Convocatoria con svg\">\n            </picture>\n          </h3>\n      </div>\n      <div class=\"ed-container ed-item m-center\">\n        <div class=\"ed-item s-block-center\">\n          <p class=\"txt-semilight\">RED Larousse invita a alumnos pertenecientes a su comunidad a participar en la Primera Olimpiada Nacional de Ortografía, que se llevará acabo de febero a junio de 2020.</p>\n          <p class=\"txt-semilight\">Se podrá participar en dos categorías:</p>\n            <ul class=\"lista-onored\">\n              <li>Intermedio (3° a 6° de primaria)</li>\n              <li>Avanzado (1° a 3° de secundaria)</li>\n            </ul>\n          <p class=\"txt-semilight\">Divididas en las siguientes zonas:</p>\n            <ul class=\"lista-onored\">\n              <li>Centro-Sur: Puebla Tlaxcala Veracruz Yucatán Chiapas Morelos Morelia</li>\n              <li>Bajío: Querétaro-Guanajuato-Aguascalientes</li>\n              <li>Metropolitana: Ciudad de México-Estado de México</li>\n            </ul>\n          <p>\n            <a mat-stroked-button color=\"primary\" href=\"../../../assets/download/convocatoria-1olimpiada-n-ortografia-red-200220.pdf\" target=\"_blank\">Consulta el pdf de la convocatoria extendida para más detalles. <mat-icon aria-hidden=\"false\" aria-label=\"Ver pdf\">keyboard_arrow_down</mat-icon>\n            </a>\n          </p>\n        </div>\n      </div>\n  \n    </div>\n    <aside class=\"ed-item manchones\">\n      <p class=\"s-40 s-to-right\">\n        <img src=\"../../../assets/images/manchon-az.svg\" alt=\"\">\n      </p>\n    </aside>\n  </section>\n\n  <section class=\"ed-container ed-item item-contraccion\">\n    <div class=\"ed-container ed-item single-card\">\n \n      <div class=\"ed-item \">\n        <h3 class=\"titulo\">\n          <picture class=\"titulo-imagen\">\n            <source media=\"(max-width: 650px)\" srcset=\".../../../assets/images/participantes.svg\">\n              <img src=\"../../../assets/images/participantes.svg\" alt=\"participantes con svg\">\n          </picture>\n        </h3>\n      </div>\n      <div class=\"ed-container ed-item \">\n        <div class=\"ed-item l-100 m-100 s-100 s-block-center\">\n          <ul class=\"listado-participantes\">\n            <li>\n              <img src=\"../../../assets/images/shield.png\" alt=\"\">\n            </li>\n            <li>\n              <img src=\"../../../assets/images/shield.png\" alt=\"\">\n            </li>\n            <li>\n              <img src=\"../../../assets/images/shield.png\" alt=\"\">\n            </li>\n            <li>\n              <img src=\"../../../assets/images/shield.png\" alt=\"\">\n            </li>\n            <li>\n              <img src=\"../../../assets/images/shield.png\" alt=\"\">\n            </li>\n          </ul>\n        </div>\n      </div>\n\n    </div>\n    <aside class=\"ed-item manchones\">\n      <p class=\"s-40 s-to-right\">\n        <img src=\"../../../assets/images/manchon-a.svg\" alt=\"\">\n      </p>\n    </aside>\n  </section>\n\n  <section class=\"ed-container ed-item item-contraccion\">\n    <div class=\"ed-container ed-item single-card\">\n\n        <div class=\"ed-container ed-item m-center\">\n          <div class=\"ed-item s-block-center txt-semilight\">\n            <p>Descarga la convocatoria en pdf para compartirla con tus estudiantes o los padres de familia.</p>\n          </div>\n          <div class=\"ed-item s-block-center\">\n            <a mat-fab color=\"primary\" \n            href=\"../../../assets/download/convocatoria-1olimpiada-n-ortografia-red-200220.pdf\" target=\"_blank\">\n              <mat-icon>cloud_download</mat-icon>\n            </a>\n          </div>\n        </div>\n\n    </div>\n    <aside class=\"ed-item manchones\">\n      <p class=\"s-80 s-to-right\">\n        <img src=\"../../../assets/images/manchon-az.svg\" alt=\"\">\n      </p>\n    </aside>\n  </section>\n\n  <section class=\"ed-container ed-item item-contraccion\">\n    <div class=\"ed-container ed-item single-card\">\n\n        <div class=\"ed-container ed-item m-center\">\n          <div class=\"ed-item s-block-center txt-semilight\">\n            <p>Descarga el <b>Aviso de Privacidad</b> que debes entregar firmado por los padres o tutores del estudiante.</p>\n          </div>\n          <div class=\"ed-item s-block-center\">\n            <a mat-fab color=\"accent\" \n            href=\"../../../assets/download/convocatoria-1olimpiada-n-ortografia-red-200220.pdf\" target=\"_blank\">\n              <mat-icon>cloud_download</mat-icon>\n            </a>\n          </div>\n        </div>\n\n    </div>\n    <aside class=\"ed-item manchones\">\n      <p class=\"s-40 s-to-right\">\n        <img src=\"../../../assets/images/manchon-r.svg\" alt=\"\">\n      </p>\n    </aside>\n  </section>\n\n</article>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/granfinal/granfinal.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/granfinal/granfinal.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<article class=\"ed-container\">\n\n  <section class=\"ed-container ed-item item-contraccion\">\n    <div class=\"ed-container ed-item single-card\">\n\n        <div class=\"ed-item \">\n          <h3 class=\"titulo\">\n            <picture class=\"titulo-imagen\">\n              <source media=\"(max-width: 650px)\" srcset=\".../../../assets/images/final.svg\">\n                <img src=\"../../../assets/images/final.svg\" alt=\"final con svg\">\n            </picture>\n          </h3>\n        </div>\n        <div class=\"ed-container ed-item\">\n          <div class=\"ed-item l-25 m-50 s-100 s-block-center\">\n            <div class=\"pics\">\n              <img src=\"../../../assets/images/participacion-pic.svg\" alt=\"\">\n            </div>\n          </div>\n          <div class=\"ed-item l-75 m-50 s-100 s-to-center s-left txt-semilight\">\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est numquam ratione aperiam nam iste ut assumenda cum eligendi at maiores rem sed esse necessitatibus quod perspiciatis placeat, perferendis eveniet doloribus!</p>\n          </div>\n        </div>\n\n    </div>\n    <aside class=\"ed-item manchones\">\n      <p class=\"s-50 s-to-right\">\n        <img src=\"../../../assets/images/manchon-a.svg\" alt=\"\">\n      </p>\n    </aside>\n  </section>\n\n  <section class=\"ed-container ed-item item-contraccion\">\n    <div class=\"ed-container ed-item single-card\">\n\n      <div class=\"ed-item \">\n        <h3 class=\"titulo\">\n          <picture class=\"titulo-imagen\">\n            <source media=\"(max-width: 650px)\" srcset=\".../../../assets/images/listado.svg\">\n              <img src=\"../../../assets/images/listado.svg\" alt=\"listado con svg\">\n          </picture>\n        </h3>\n      </div>\n\n      <div class=\"ed-container ed-item \">\n        <div class=\"ed-item m-center s-block-center txt-semilight\">\n          <p class=\"s-block-center\">Estos son los colegios son finalistas.</p>\n          <ul class=\"listado-participantes semi\">\n            <li>\n              <p>Colegio Nombre Largo Largo</p>\n              <p>Coach Nombre Apellido Apellido</p>\n            </li>\n            <li>\n              <p>Colegio Nombre Largo Largo</p>\n              <p>Coach Nombre Apellido Apellido</p>\n            </li>\n            <li>\n              <p>Colegio Nombre Largo Largo</p>\n              <p>Coach Nombre Apellido Apellido</p>\n            </li>\n            <li>\n              <p>Colegio Nombre Largo Largo</p>\n              <p>Coach Nombre Apellido Apellido</p>\n            </li>\n            <li>\n              <p>Colegio Nombre Largo Largo</p>\n              <p>Coach Nombre Apellido Apellido</p>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n    </div>\n    <aside class=\"ed-item manchones\">\n      <p class=\"s-10 s-to-right\">\n        <img src=\"../../../assets/images/manchon-r.svg\" alt=\"\">\n      </p>\n    </aside>\n  </section>\n\n</article>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<article class=\"ed-container full\">\n  <section class=\"ed-item greatHeader\"></section>\n</article>\n<article class=\"ed-container\">\n  <section class=\"ed-container ed-item item-contraccion\">\n    <div class=\"ed-item homeCard\">\n      <span class=\"homeCard--logo\">\n        <img src=\"../../../assets/images/ono-h-full.png\" alt=\"\">\n        <span class=\"filete\"></span>\n      </span>\n      <div class=\" presentacion \">\n        <h1 class=\"m-center\">Esta es la Primera Olimpiada Nacional de RED Larousse.</h1>\n        <p class=\"txt-light m-center\">Una aventura de doce semanas cuyo objetivo es brindar a todos los miembros de nuestra comunidad un espacio de diversión y aprendizaje.</p>\n      </div>\n    </div>\n    <aside class=\"ed-item manchones\">\n      <p class=\"s-100 m-75 s-to-right\">\n        <img src=\"../../../assets/images/manchon-a.svg\" alt=\"\">\n      </p>\n    </aside>\n  </section>\n\n  <section class=\"ed-container ed-item item-contraccion\">\n    <div class=\"ed-container ed-item single-card\">\n\n      <div class=\"ed-item \">\n          <h3 class=\"titulo\">\n            <picture class=\"titulo-imagen\">\n              <source media=\"(max-width: 650px)\" srcset=\".../../../assets/images/objetivo.svg\">\n                <img src=\"../../../assets/images/objetivo.svg\" alt=\"Objetivo con svg\">\n            </picture>\n          </h3>\n      </div>\n      <div class=\"ed-container ed-item m-center\">\n        <div class=\"ed-item l-75 m-50 s-100 s-block-center s-to-center s-right txt-semilight\">\n    \n            <p>Involucrar a los alumnos de la comunidad <b>RED Larousse</b> en actividades que favorezcan su desarrollo académico y social; además de motivarlos a fortalecer su vocabulario y el manejo fluido del mismo.</p>\n\n        </div>\n        <div class=\"ed-item l-25 m-50 s-100 main-center cross-center\">\n          <div class=\"pics\">\n            <img src=\"../../../assets/images/objetivo-pic.svg\" alt=\"\">\n          </div>\n        </div>\n      </div>\n  \n    </div>\n    <aside class=\"ed-item manchones\">\n      <p class=\"s-50 s-to-left\">\n        <img src=\"../../../assets/images/manchon-az.svg\" alt=\"\">\n      </p>\n    </aside>\n  </section>\n\n  <section class=\"ed-container ed-item item-contraccion\">\n    <div class=\"ed-container ed-item single-card\">\n\n        <div class=\"ed-item \">\n          <h3 class=\"titulo\">\n            <picture class=\"titulo-imagen\">\n              <source media=\"(max-width: 650px)\" srcset=\".../../../assets/images/participantes.svg\">\n                <img src=\"../../../assets/images/participantes.svg\" alt=\"participantes con svg\">\n            </picture>\n          </h3>\n        </div>\n        <div class=\"ed-container ed-item \">\n          <div class=\"ed-item l-25 m-50 s-100 s-block-center\">\n            <div class=\"pics\">\n              <img src=\"../../../assets/images/participacion-pic.svg\" alt=\"\">\n            </div>\n          </div>\n          <div class=\"ed-item l-75 m-50 s-100 s-to-center s-left txt-semilight\">\n            <p>Podrán participar alumnos que estén inscritos al ciclo escolar 2019-2020 de colegios que formen parte de la comunidad RED Larousse, en las categorías intermedio y avanzado.</p>\n          </div>\n        </div>\n\n    </div>\n    <aside class=\"ed-item manchones\">\n      <p class=\"s-10 s-to-right\">\n        <img src=\"../../../assets/images/manchon-r.svg\" alt=\"\">\n      </p>\n    </aside>\n  </section>\n\n  <section class=\"ed-container ed-item item-contraccion\">\n    <div class=\"ed-container ed-item single-card\">\n\n        <div class=\"ed-container ed-item \">\n          <div class=\"ed-item  s-block-center txt-semilight\">\n            <p>Conóce fechas, requisitos y todos los detalles en la convocatoria extendida de esta olimpiada ortográfica.</p>\n          </div>\n          <div class=\"ed-item m-center\">\n            <a mat-fab color=\"primary\" routerLink=\"/convocatoria\">\n              <mat-icon>arrow_forward</mat-icon>\n            </a>\n             \n          </div>\n        </div>\n\n    </div>\n  </section>\n\n</article>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/semifinal/semifinal.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/semifinal/semifinal.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<article class=\"ed-container\">\n\n  <section class=\"ed-container ed-item item-contraccion\">\n    <div class=\"ed-container ed-item single-card\">\n\n        <div class=\"ed-item \">\n          <h3 class=\"titulo\">\n            <picture class=\"titulo-imagen\">\n              <source media=\"(max-width: 650px)\" srcset=\".../../../assets/images/semifinal.svg\">\n                <img src=\"../../../assets/images/semifinal.svg\" alt=\"semifinal con svg\">\n            </picture>\n          </h3>\n        </div>\n        <div class=\"ed-container ed-item\">\n          <div class=\"ed-item l-25 m-50 s-100 s-block-center\">\n            <div class=\"pics\">\n              <img src=\"../../../assets/images/participacion-pic.svg\" alt=\"\">\n            </div>\n          </div>\n          <div class=\"ed-item l-75 m-50 s-100 s-to-center s-left txt-semilight\">\n            <p>Podrán participar alumnos que estén inscritos al ciclo escolar 2019-2020 de colegios que formen parte de la comunidad RED Larousse, en las categorías intermedio y avanzado.</p>\n          </div>\n        </div>\n\n    </div>\n    <aside class=\"ed-item manchones\">\n      <p class=\"s-50 s-to-right\">\n        <img src=\"../../../assets/images/manchon-a.svg\" alt=\"\">\n      </p>\n    </aside>\n  </section>\n\n  <section class=\"ed-container ed-item item-contraccion\">\n    <div class=\"ed-container ed-item single-card\">\n\n      <div class=\"ed-item \">\n        <h3 class=\"titulo\">\n          <picture class=\"titulo-imagen\">\n            <source media=\"(max-width: 650px)\" srcset=\".../../../assets/images/listado.svg\">\n              <img src=\"../../../assets/images/listado.svg\" alt=\"listado con svg\">\n          </picture>\n        </h3>\n      </div>\n\n      <div class=\"ed-container ed-item \">\n        <div class=\"ed-item m-center s-block-center txt-semilight\">\n          <p class=\"s-block-center\">Estos son los colegios que continúan a las semifinales.</p>\n          <ul class=\"listado-participantes semi\">\n            <li>\n              <p>Colegio Nombre Largo Largo</p>\n              <p>Coach Nombre Apellido Apellido</p>\n            </li>\n            <li>\n              <p>Colegio Nombre Largo Largo</p>\n              <p>Coach Nombre Apellido Apellido</p>\n            </li>\n            <li>\n              <p>Colegio Nombre Largo Largo</p>\n              <p>Coach Nombre Apellido Apellido</p>\n            </li>\n            <li>\n              <p>Colegio Nombre Largo Largo</p>\n              <p>Coach Nombre Apellido Apellido</p>\n            </li>\n            <li>\n              <p>Colegio Nombre Largo Largo</p>\n              <p>Coach Nombre Apellido Apellido</p>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n    </div>\n    <aside class=\"ed-item manchones\">\n      <p class=\"s-10 s-to-right\">\n        <img src=\"../../../assets/images/manchon-r.svg\" alt=\"\">\n      </p>\n    </aside>\n  </section>\n\n</article>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" class=\"footer-toolbar\">\n\n  <div class=\"toolbar-logo\">\n    <div class=\"ftoolbar-creditos\">\n      <p>© RED Larousse {{ anio }}</p>\n      <p>Convocatoria exlusiva para colegios RED Larousse</p>\n    </div>\n  </div>\n  <div class=\"toolbar-botonera\">\n    <button mat-stroked-button \n        matTooltip=\"Envía mail a olimpiadaredlarousse@gmail.com\"\n        aria-label=\"Escribe a: olimpiadaredlarousse@gmail.com\" \n        matTooltipPosition=\"right\">Contacto\n    </button>\n  </div>\n  <div class=\"toolbar-loguer\">\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n      <mat-icon>more_vert</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item disabled>\n        <mat-icon>remove</mat-icon>\n        <span>Developer</span>\n      </button>\n    </mat-menu>\n  </div>\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/dialog.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi cum quo maiores laborum molestias eveniet ipsum delectus expedita sit. Magnam, nobis? Dignissimos architecto quod necessitatibus amet accusamus, suscipit quae!</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" class=\"header-toolbar\">\n  <div class=\"toolbar-logo\" (click)=\"launch()\">\n    <button mat-button>\n      <mat-icon aria-hidden=\"false\" aria-label=\"sidenav\" >dehaze</mat-icon>\n    </button>\n  </div>\n  <div class=\"toolbar-botonera\">\n    <a mat-button routerLink=\"home\" routerLinkActive=\"active\">Inicio</a>\n    <a mat-button routerLink=\"convocatoria\" routerLinkActive=\"active\">Convocatoria</a>\n    <a mat-button disabled>Semi Final</a>\n    <a mat-button disabled>Finalistas</a>\n  </div>\n  <div class=\"toolbar-loguer\">\n    <a mat-stroked-button routerLink=\"home\" \n    (click)=\"openDialog()\">Login</a>\n  </div>\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_convoc_convoc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/convoc/convoc.component */ "./src/app/pages/convoc/convoc.component.ts");
/* harmony import */ var _pages_semifinal_semifinal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/semifinal/semifinal.component */ "./src/app/pages/semifinal/semifinal.component.ts");
/* harmony import */ var _pages_granfinal_granfinal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/granfinal/granfinal.component */ "./src/app/pages/granfinal/granfinal.component.ts");







const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'convocatoria', component: _pages_convoc_convoc_component__WEBPACK_IMPORTED_MODULE_4__["ConvocComponent"] },
    { path: 'semifinales', component: _pages_semifinal_semifinal_component__WEBPACK_IMPORTED_MODULE_5__["SemifinalComponent"] },
    { path: 'finalistas', component: _pages_granfinal_granfinal_component__WEBPACK_IMPORTED_MODULE_6__["GranfinalComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'olimpiadaOrtograficaRED';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_convoc_convoc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/convoc/convoc.component */ "./src/app/pages/convoc/convoc.component.ts");
/* harmony import */ var _pages_semifinal_semifinal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/semifinal/semifinal.component */ "./src/app/pages/semifinal/semifinal.component.ts");
/* harmony import */ var _pages_granfinal_granfinal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/granfinal/granfinal.component */ "./src/app/pages/granfinal/granfinal.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");












// jalar todo el material desde modulo personalizado

let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _pages_convoc_convoc_component__WEBPACK_IMPORTED_MODULE_8__["ConvocComponent"],
            _pages_semifinal_semifinal_component__WEBPACK_IMPORTED_MODULE_9__["SemifinalComponent"],
            _pages_granfinal_granfinal_component__WEBPACK_IMPORTED_MODULE_10__["GranfinalComponent"],
            _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["DialogsemiComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"]
        ],
        entryComponents: [
            _pages_semifinal_semifinal_component__WEBPACK_IMPORTED_MODULE_9__["SemifinalComponent"],
            _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["DialogsemiComponent"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



// componentes desde material design













let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"]
        ],
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/pages/convoc/convoc.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/convoc/convoc.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnZvYy9jb252b2MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/convoc/convoc.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/convoc/convoc.component.ts ***!
  \**************************************************/
/*! exports provided: ConvocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvocComponent", function() { return ConvocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const ELEMENT_DATA = [
    { actividad: 'Publicación de la convocatoria', fecha: '24 febrero' },
    { actividad: 'Registro de docentes', fecha: '24 febrero al 6 de marzo' },
    { actividad: 'Recepción de material para Ronda 1 en los colegios', fecha: '16 al 20 de marzo' },
    { actividad: 'Eliminatoria Ronda 1 (Interna)', fecha: '23 al 27 de marzo' },
    { actividad: 'Los docentes envían el nombre del ganador por categoría por colegio. Los docentes reciben mail de confirmación', fecha: '30 de marzo al 3 de abril' },
    { actividad: 'Envío de usuario y contraseña para participantes de Ronda 2', fecha: '20 al 24 de abril' },
    { actividad: 'Aplicación del examen de Ronda 2', fecha: '28 de abril' },
    { actividad: 'Notificación de ganadores Ronda 2. Publicación de resultados en el micrositio', fecha: '4 al 8 de mayo' },
    { actividad: 'Aplicación de examen de Ronda 3', fecha: '20 de mayo' },
    { actividad: 'Notificación a ganadores vía correo electrónico. Publicación de resultados en el micrositio', fecha: '25 al 29 de mayo' },
    { actividad: 'Entrega de premios a ganadores', fecha: '1 al 26 de junio' },
];
let ConvocComponent = class ConvocComponent {
    constructor() {
        this.displayedColumns = ['actividad', 'fecha'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() {
    }
};
ConvocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-convoc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./convoc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/convoc/convoc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./convoc.component.css */ "./src/app/pages/convoc/convoc.component.css")).default]
    })
], ConvocComponent);



/***/ }),

/***/ "./src/app/pages/granfinal/granfinal.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/granfinal/granfinal.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyYW5maW5hbC9ncmFuZmluYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/granfinal/granfinal.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/granfinal/granfinal.component.ts ***!
  \********************************************************/
/*! exports provided: GranfinalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GranfinalComponent", function() { return GranfinalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GranfinalComponent = class GranfinalComponent {
    constructor() { }
    ngOnInit() {
    }
};
GranfinalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-granfinal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./granfinal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/granfinal/granfinal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./granfinal.component.css */ "./src/app/pages/granfinal/granfinal.component.css")).default]
    })
], GranfinalComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
    goConvo() {
        console.log("si pus si");
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/semifinal/semifinal.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/semifinal/semifinal.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbWlmaW5hbC9zZW1pZmluYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/semifinal/semifinal.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/semifinal/semifinal.component.ts ***!
  \********************************************************/
/*! exports provided: SemifinalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemifinalComponent", function() { return SemifinalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let SemifinalComponent = class SemifinalComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
};
SemifinalComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
SemifinalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-semifinal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./semifinal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/semifinal/semifinal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./semifinal.component.css */ "./src/app/pages/semifinal/semifinal.component.css")).default]
    })
], SemifinalComponent);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.anio = new Date().getFullYear();
    }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent, DialogsemiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsemiComponent", function() { return DialogsemiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let HeaderComponent = class HeaderComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.animal = "coso";
    }
    ngOnInit() {
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogsemiComponent);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    launch() {
        console.log("el menu drawer");
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")).default]
    })
], HeaderComponent);

let DialogsemiComponent = class DialogsemiComponent {
};
DialogsemiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog.component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/dialog.component.html")).default,
    })
], DialogsemiComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: true
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mac/Documents/webapp/olimpOrtogRED/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map