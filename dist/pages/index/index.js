(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");

var _index = __webpack_require__(/*! ../../json/sentence/index */ "./src/json/sentence/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "activeSentence", "preList", "introList"], _this.config = {
      navigationBarTitleText: 'PIGPIGer!'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
      /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */

      this.state = {
        introList: _index.introList,
        preList: [],
        activeSentence: { text: '' }
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.createNewSen(this.state.introList);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "createNewSen",
    value: function createNewSen(list) {
      var len = list.length;
      if (!len) {
        wx.showToast({
          title: '我一片空白。。。',
          icon: 'none',
          duration: 2000
        });
        return;
      }
      var index = Math.floor(Math.random() * len);
      var activeItem = list[index];
      activeItem.text = activeItem.text.replace(/\/n/g, '<br />');
      this.setState({
        activeSentence: activeItem
      });
      var _state = this.state,
          preList = _state.preList,
          introList = _state.introList,
          activeSentence = _state.activeSentence;

      introList.splice(index, 1);
      preList.push(activeSentence);
      this.setState({
        introList: introList,
        preList: preList
      });
    }
  }, {
    key: "backHandle",
    value: function backHandle() {
      var preList = this.state.preList;

      if (!preList.length) {
        return;
      }var pre = preList.pop();
      this.setState({
        preList: preList,
        activeSentence: pre
      });
    }
  }, {
    key: "nextHandle",
    value: function nextHandle() {
      this.createNewSen(this.state.introList);
    }
  }, {
    key: "copyHandle",
    value: function copyHandle() {
      wx.setClipboardData({
        data: this.state.activeSentence.text.replace(/\<br \/>/g, ' '),
        success: function success(res) {
          wx.getClipboardData({
            success: function success(res) {
              wx.showToast({
                title: '复制成功',
                icon: 'success',
                duration: 2000
              });
            }
          });
        }
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state2 = this.__state,
          activeSentence = _state2.activeSentence,
          preList = _state2.preList;

      var anonymousState__temp = preList.length > 1 ? __webpack_require__(/*! ../../icons/home/back.png */ "./src/icons/home/back.png") : null;

      var anonymousState__temp2 = __webpack_require__(/*! ../../icons/home/copy.png */ "./src/icons/home/copy.png");

      var anonymousState__temp3 = __webpack_require__(/*! ../../icons/home/next.png */ "./src/icons/home/next.png");

      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class.$$events = ["backHandle", "copyHandle", "nextHandle"], _class.$$componentPath = "pages/index/index", _temp2);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/strugglinglee/Desktop/new-start/txt-pig/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/strugglinglee/Desktop/new-start/txt-pig/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/index.wxml";

/***/ }),

/***/ "./src/icons/home/back.png":
/*!*********************************!*\
  !*** ./src/icons/home/back.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/icons/home/copy.png":
/*!*********************************!*\
  !*** ./src/icons/home/copy.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/icons/home/next.png":
/*!*********************************!*\
  !*** ./src/icons/home/next.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/index/index.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/index.tsx?taro&type=template&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_strugglinglee_Desktop_new_start_txt_pig_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/strugglinglee/Desktop/new-start/txt-pig/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/strugglinglee/Desktop/new-start/txt-pig/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_strugglinglee_Desktop_new_start_txt_pig_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_strugglinglee_Desktop_new_start_txt_pig_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_strugglinglee_Desktop_new_start_txt_pig_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_strugglinglee_Desktop_new_start_txt_pig_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/index/index.tsx","runtime","taro","vendors","common"]]]);