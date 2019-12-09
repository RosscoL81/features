(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./client/src/views/select_view.js":
/*!*****************************************!*\
  !*** ./client/src/views/select_view.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SelectView; });\n// const PubSub = require('../helpers/pub_sub.js');\nconst PubSub = __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\"));\n\nclass SelectView{\n  constructor(element){\n  this.element = element;\n};\n\nbindEvents() {\n  PubSub.subscribe('InstrumentFamilies:data-ready', (evt) => {\n    const allInstrumentFamilies = evt.detail;\n    this.populate(allInstrumentFamilies);\n  });\n\n  this.element.addEventListener('change', (evt) => {\n    const selectedIndex = evt.target.value;\n    PubSub.publish('SelectView:change', selectedIndex);\n  });\n};\n\npopulate(instrumentFamilyData) {\n  instrumentFamilyData.forEach((familiy, index) => {\n    const option = document.createElement('option');\n    option.textContent = familiy.name;\n    option.value = index;\n    this.element.appendChild(option);\n  });\n};\n}\n// module.exports = SelectView;\n\n\n\n//# sourceURL=webpack:///./client/src/views/select_view.js?");

/***/ })

}]);