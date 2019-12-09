(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./client/src/views/instrument_family_view.js":
/*!****************************************************!*\
  !*** ./client/src/views/instrument_family_view.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InstrumentFamilyView; });\n// const PubSub = require('../helpers/pub_sub.js');\nconst PubSub = __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\"));\n\nclass InstrumentFamilyView{\n  constructor(container){\n  this.container = container;\n};\n\nbindEvents() {\n  PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) => {\n    const instrumentFamily = evt.detail;\n    this.render(instrumentFamily);\n  });\n};\n\nrender(family) {\n  this.container.innerHTML = '';\n  const {name, description, instruments} = family;\n\n  const familyName = this.createElement('h2', name);\n  this.container.appendChild(familyName);\n\n  const familyDescription = this.createElement('p', description);\n  this.container.appendChild(familyDescription);\n\n  const instrumentListTitle = this.createElement('h3', 'Instruments include:');\n  this.container.appendChild(instrumentListTitle);\n\n  const instrumentList = this.createInstrumentList(instruments);\n  this.container.appendChild(instrumentList);\n};\n\ncreateElement(elementType, text) {\n  const element = document.createElement(elementType);\n  element.textContent = text;\n  return element;\n};\n\ncreateInstrumentList(instruments) {\n  const list = document.createElement('ul');\n\n  instruments.forEach((instrument) => {\n    const listItem = document.createElement('li');\n    listItem.textContent = instrument;\n    list.appendChild(listItem);\n  });\n\n  return list;\n};\n}\n\n// module.exports = InstrumentFamilyView;\n\n\n\n//# sourceURL=webpack:///./client/src/views/instrument_family_view.js?");

/***/ })

}]);