exports.id = 61;
exports.ids = [61];
exports.modules = {

/***/ 5061:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ useForm; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const useForm = (initialState, onSubmit) => {
  const {
    0: dataForm,
    1: setDataForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);

  const handleChange = e => {
    const {
      name,
      value
    } = e.currentTarget;
    setDataForm(_objectSpread(_objectSpread({}, dataForm), {}, {
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(dataForm);
    reset();
  };

  const reset = () => {
    setDataForm(initialState);
  };

  return [dataForm, handleChange, handleSubmit];
};

/***/ })

};
;