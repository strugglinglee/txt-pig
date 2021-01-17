(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/category/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/category/index.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/category/index.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

// import {  dgrList,cuteList,loneList,nightList,wyyList,zyList,chpList } from '../../json/sentence'


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.scss */ "./src/pages/category/index.scss");

var _api = __webpack_require__(/*! ../../services/api */ "./src/services/api.ts");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initTextParams = {
  pageSize: 10,
  page: 1,
  category: ''
};

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray85", "$compid__164", "$compid__165", "textList", "categorys", "current", "activeType", "textParams"], _this.config = {
      navigationBarTitleText: '探索'
    }, _this.anonymousFunc0Map = {}, _this.customComponents = ["AtTabs", "AtTabsPane"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */

      this.state = {
        current: 0,
        activeType: 'zy',
        categorys: [],
        textParams: _extends({}, initTextParams),
        textList: []
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "handleClick",
    value: function handleClick(value) {
      var _this2 = this;

      //scrollTo(0)
      this.setState({
        current: value,
        activeType: value
      }, function () {
        _this2.changeCurCategory(_this2.state.categorys[value].type);
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.getCategories();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
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
    key: "getCategories",
    value: function getCategories() {
      var _this3 = this;

      _api2.default.get('/api/categories', {
        pageSize: 10,
        page: 1
      }).then(function (_ref2) {
        var response = _ref2.data.response;

        var categorys = response.map(function (m) {
          return _extends({}, m, { title: m.name });
        });
        _this3.setState({
          categorys: categorys
        }, function () {
          _this3.changeCurCategory('');
        });
      });
    }
  }, {
    key: "getTextList",
    value: function getTextList() {
      var _this4 = this;

      var textParams = _extends({}, initTextParams, { category: this.state.textParams.category });
      _api2.default.get('/api/texts', textParams).then(function (_ref3) {
        var response = _ref3.data.response;

        _this4.setState({
          textList: response
        });
      });
    }
  }, {
    key: "getNextTextList",
    value: function getNextTextList() {
      var _this5 = this;

      var _state = this.state,
          textParams = _state.textParams,
          textList = _state.textList;

      textParams = _extends({}, textParams, { page: ++textParams.page });
      _api2.default.get('/api/texts', textParams).then(function (_ref4) {
        var response = _ref4.data.response;

        if (response.length) {
          _this5.setState({
            textList: [].concat(_toConsumableArray(textList), _toConsumableArray(response)),
            textParams: _extends({}, textParams, { page: ++textParams.page })
          });
        } else {
          _taroWeapp2.default.showToast({
            title: "到底了～",
            icon: "none"
          });
        }
      });
    }
  }, {
    key: "onPullDownRefresh",
    value: function onPullDownRefresh() {
      this.getTextList();
    }
  }, {
    key: "onReachBottom",
    value: function onReachBottom() {
      this.getNextTextList();
    }
  }, {
    key: "changeCurCategory",
    value: function changeCurCategory(category) {
      var _this6 = this;

      //如果未传值 则取第一个分类
      if (!category && this.state.categorys.length > 0) {
        category = this.state.categorys[0].type;
      }
      //仍无值 则退出
      if (!category) {
        return;
      }this.setState({
        textParams: _extends({}, this.state.textParams, {
          category: category
        })
      }, function () {
        _this6.getTextList();
      });
    }
  }, {
    key: "copyHandle",
    value: function copyHandle(text) {
      text = text.replace(/\/n/g, ' ');
      if (!text) {
        wx.showToast({
          title: '无内容可供复制',
          icon: 'none',
          duration: 2000
        });
        return;
      }
      wx.setClipboardData({
        data: text,
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
    key: "onShareAppMessage",
    value: function onShareAppMessage() {
      return {
        title: "\u6B22\u8FCE\u8FDB\u5165\u6587\u6848\u732A\u732A\u7684\u795E\u5947\u4E16\u754C",
        path: "/pages/index/index"
      };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this7 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__164"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__164 = _genCompid2[0],
          $compid__164 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__165"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__165 = _genCompid4[0],
          $compid__165 = _genCompid4[1];

      var _state2 = this.__state,
          current = _state2.current,
          categorys = _state2.categorys,
          textList = _state2.textList;

      var loopArray85 = textList.map(function (m, n) {
        m = {
          $original: (0, _taroWeapp.internal_get_original)(m)
        };

        var $loopState__temp2 = __webpack_require__(/*! ../../icons/mine-s.png */ "./src/icons/mine-s.png");

        var _$indexKey = "idzzz" + n;

        _this7.anonymousFunc0Map[_$indexKey] = function () {
          _this7.copyHandle(m.$original.text);
        };

        var $loopState__temp4 = m.$original.text.replace(/\/n/g, '<br />') || '暂无内容';
        return {
          $loopState__temp2: $loopState__temp2,
          _$indexKey: _$indexKey,
          $loopState__temp4: $loopState__temp4,
          $original: m.$original
        };
      });
      _taroWeapp.propsManager.set({
        "current": current,
        "scroll": true,
        "tabList": categorys,
        "onClick": this.handleClick.bind(this)
      }, $compid__164, $prevCompid__164);
      _taroWeapp.propsManager.set({
        "current": current,
        "index": current
      }, $compid__165, $prevCompid__165);
      Object.assign(this.__state, {
        loopArray85: loopArray85,
        $compid__164: $compid__164,
        $compid__165: $compid__165
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class.$$events = ["anonymousFunc0"], _class.$$componentPath = "pages/category/index", _temp2);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/strugglinglee/Desktop/new-start/txt-pig/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/category/index.tsx?taro&type=template&parse=PAGE&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/strugglinglee/Desktop/new-start/txt-pig/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/category/index.tsx?taro&type=template&parse=PAGE& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/category/index.wxml";

/***/ }),

/***/ "./src/pages/category/index.scss":
/*!***************************************!*\
  !*** ./src/pages/category/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/category/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/category/index.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/category/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/category/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/category/index.tsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************!*\
  !*** ./src/pages/category/index.tsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/category/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/category/index.tsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************!*\
  !*** ./src/pages/category/index.tsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_strugglinglee_Desktop_new_start_txt_pig_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/strugglinglee/Desktop/new-start/txt-pig/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/strugglinglee/Desktop/new-start/txt-pig/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/category/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_strugglinglee_Desktop_new_start_txt_pig_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_strugglinglee_Desktop_new_start_txt_pig_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_strugglinglee_Desktop_new_start_txt_pig_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_strugglinglee_Desktop_new_start_txt_pig_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { HTTP_STATUS } from '../constants/status'
//import { logError } from '../utils/error'
var baseUrl = 'http://42.192.211.93';
exports.default = {
  baseOptions: function baseOptions(params) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    var url = params.url,
        data = params.data;

    var contentType = 'application/json';
    contentType = params.contentType || contentType;
    // const setCookie = (res: {
    //   cookies: Array<{
    //     name: string,
    //     value: string,
    //     expires: string,
    //     path: string
    //   }>,
    //   header: {
    //     'Set-Cookie': string
    //   }
    // }) => {
    //   if (res.cookies && res.cookies.length > 0) {
    //     let cookies = ''
    //     res.cookies.forEach((cookie, index) => {
    //       // windows的微信开发者工具返回的是cookie格式是有name和value的,在mac上是只是字符串的
    //       if (cookie.name && cookie.value) {
    //         cookies += index === res.cookies.length - 1 ? `${cookie.name}=${cookie.value};expires=${cookie.expires};path=${cookie.path}` : `${cookie.name}=${cookie.value};`
    //       } else {
    //         cookies += `${cookie};`
    //       }
    //     });
    //     Taro.setStorageSync('cookies', cookies)
    //   }
    //   if (res.header && res.header['Set-Cookie']) {
    //     Taro.setStorageSync('cookies', res.header['Set-Cookie'])
    //   }
    // }
    var option = {
      url: url.indexOf('http') !== -1 ? url : baseUrl + url,
      data: data,
      method: method,
      header: {
        'content-type': contentType,
        cookie: _taroWeapp2.default.getStorageSync('cookies')
      },
      // mode: 'cors',
      xhrFields: { withCredentials: true },
      success: function success(res) {
        // setCookie(res)
        // if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
        //   return logError('api', '请求资源不存在')
        // } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
        //   return logError('api', '服务端出现了问题')
        // } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
        //   return logError('api', '没有权限访问')
        // } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
        //   Taro.clearStorage()
        //   Taro.navigateTo({
        //     url: '/pages/login/index'
        //   })
        //   return logError('api', '请先登录')
        // } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
        return res.data;
        //}
      },
      error: function error(e) {
        console.log(e);
        //logError('api', '请求接口出现问题', e)
      }
    };
    // eslint-disable-next-line
    return _taroWeapp2.default.request(option);
  },
  get: function get(url, data) {
    var option = { url: url, data: data };
    return this.baseOptions(option);
  },

  post: function post(url, data, contentType) {
    var params = { url: url, data: data, contentType: contentType };
    return this.baseOptions(params, 'POST');
  },
  put: function put(url, data) {
    var option = { url: url, data: data };
    return this.baseOptions(option, 'PUT');
  },
  delete: function _delete(url, data) {
    var option = { url: url, data: data };
    return this.baseOptions(option, 'DELETE');
  }
};

/***/ })

},[["./src/pages/category/index.tsx","runtime","taro","vendors","common"]]]);