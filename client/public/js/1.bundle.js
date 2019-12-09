(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./client/src/models/instrument_families.js":
/*!**************************************************!*\
  !*** ./client/src/models/instrument_families.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InstrumentFamilies; });\n// const PubSub = require('../helpers/pub_sub.js');\nconst PubSub = __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\"));\n\nclass InstrumentFamilies{\n  constructor(data){\n  this.data = data;\n};\n\nbindEvents() {\n  PubSub.publish('InstrumentFamilies:data-ready', this.data);\n\n  PubSub.subscribe('SelectView:change', (evt) => {\n    const selectedIndex = evt.detail;\n    this.publishFamilyDetail(selectedIndex);\n  });\n};\n\npublishFamilyDetail(selectedIndex) {\n  const selectedFamily = this.data[selectedIndex];\n  PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)\n};\n}\n// module.exports = InstrumentFamilies;\n\n\n\n//# sourceURL=webpack:///./client/src/models/instrument_families.js?");

/***/ })

}]);