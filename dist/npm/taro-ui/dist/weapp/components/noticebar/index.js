(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/noticebar/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/noticebar/index.tsx?taro&type=script&parse=COMPONENT&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/taro-ui/dist/weapp/components/noticebar/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.tsx");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtNoticebar = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtNoticebar, _AtComponent);

  function AtNoticebar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtNoticebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtNoticebar.__proto__ || Object.getPrototypeOf(AtNoticebar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "close", "icon", "showMore", "_moreText", "show", "animElemId", "animationData", "dura", "isWEAPP", "isALIPAY", "isWEB", "marquee", "speed", "single", "customStyle", "moreText", "className", "children"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtNoticebar, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtNoticebar.prototype.__proto__ || Object.getPrototypeOf(AtNoticebar.prototype), '_constructor', this).call(this, props);
      var animElemId = "J_" + Math.ceil(Math.random() * 10e5).toString(36);
      this.state = {
        show: true,
        animElemId: animElemId,
        animationData: [{}],
        dura: 15,
        isWEAPP: _taroWeapp2.default.getEnv() === _taroWeapp2.default.ENV_TYPE.WEAPP,
        isALIPAY: _taroWeapp2.default.getEnv() === _taroWeapp2.default.ENV_TYPE.ALIPAY,
        isWEB: _taroWeapp2.default.getEnv() === _taroWeapp2.default.ENV_TYPE.WEB
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'onClose',
    value: function onClose(event) {
      this.setState({
        show: false
      });
      this.props.onClose && this.props.onClose(event);
    }
  }, {
    key: 'onGotoMore',
    value: function onGotoMore(event) {
      this.props.onGotoMore && this.props.onGotoMore(event);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      if (!this.timeout) {
        this.interval && clearInterval(this.interval);
        this.initAnimation();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.marquee) {
        return;
      }this.initAnimation();
    }
  }, {
    key: 'initAnimation',
    value: function initAnimation() {
      var _this2 = this;

      var _state = this.state,
          isWEAPP = _state.isWEAPP,
          isALIPAY = _state.isALIPAY;

      this.timeout = setTimeout(function () {
        _this2.timeout = null;
        if (_this2.state.isWEB) {
          var elem = document.querySelector("." + _this2.state.animElemId);
          if (!elem) {
            return;
          }var width = elem.getBoundingClientRect().width;
          var dura = width / +_this2.props.speed;
          _this2.setState({ dura: dura });
        } else if (isWEAPP || isALIPAY) {
          var query = isALIPAY ? _taroWeapp2.default.createSelectorQuery() : _taroWeapp2.default.createSelectorQuery().in(_this2.$scope);
          query.select("." + _this2.state.animElemId).boundingClientRect().exec(function (res) {
            var queryRes = res[0];
            if (!queryRes) {
              return;
            }var width = queryRes.width;

            var dura = width / +_this2.props.speed;
            var animation = _taroWeapp2.default.createAnimation({
              duration: dura * 1000,
              timingFunction: 'linear'
            });
            var resetAnimation = _taroWeapp2.default.createAnimation({
              duration: 0,
              timingFunction: 'linear'
            });
            var resetOpacityAnimation = _taroWeapp2.default.createAnimation({
              duration: 0,
              timingFunction: 'linear'
            });
            var animBody = function animBody() {
              resetOpacityAnimation.opacity(0).step();
              _this2.setState({ animationData: resetOpacityAnimation.export() });
              setTimeout(function () {
                resetAnimation.translateX(0).step();
                _this2.setState({ animationData: resetAnimation.export() });
              }, 300);
              setTimeout(function () {
                resetOpacityAnimation.opacity(1).step();
                _this2.setState({ animationData: resetOpacityAnimation.export() });
              }, 600);
              setTimeout(function () {
                animation.translateX(-width).step();
                _this2.setState({ animationData: animation.export() });
              }, 900);
            };
            animBody();
            _this2.interval = setInterval(animBody, dura * 1000 + 1000);
          });
        }
      }, 100);
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          single = _props.single,
          icon = _props.icon,
          marquee = _props.marquee,
          customStyle = _props.customStyle;
      var _props2 = this.__props,
          showMore = _props2.showMore,
          close = _props2.close;
      var dura = this.__state.dura;

      var rootClassName = ['at-noticebar'];
      var _moreText = this.__props.moreText;
      if (!single) {
        showMore = false;
      }if (!_moreText) {
        _moreText = '查看详情';
      }var style = {};
      var innerClassName = ['at-noticebar__content-inner'];
      if (marquee) {
        close = false;
        style['animation-duration'] = dura + "s";
        innerClassName.push(this.__state.animElemId);
      }
      var classObject = {
        'at-noticebar--marquee': marquee,
        'at-noticebar--weapp': marquee && (this.__state.isWEAPP || this.__state.isALIPAY),
        'at-noticebar--single': !marquee && single
      };
      var iconClass = ['at-icon'];
      if (icon) {
        iconClass.push("at-icon-" + icon);
      }var anonymousState__temp = this.__state.show ? (0, _classnames2.default)(rootClassName, classObject, this.__props.className) : null;
      var anonymousState__temp2 = this.__state.show ? (0, _taroWeapp.internal_inline_style)(customStyle) : null;
      var anonymousState__temp3 = icon ? (0, _classnames2.default)(iconClass, iconClass) : null;
      var anonymousState__temp4 = this.__state.show ? (0, _classnames2.default)(innerClassName) : null;
      var anonymousState__temp5 = this.__state.show ? (0, _taroWeapp.internal_inline_style)(style) : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        close: close,
        icon: icon,
        showMore: showMore,
        _moreText: _moreText
      });
      return this.__state;
    }
  }]);

  return AtNoticebar;
}(_component2.default), _class.$$events = ["onClose", "onGotoMore"], _class.$$componentPath = "node_modules/taro-ui/dist/weapp/components/noticebar/index", _temp2);


AtNoticebar.defaultProps = {
  close: false,
  single: false,
  marquee: false,
  speed: 100,
  moreText: '查看详情',
  showMore: false,
  icon: '',
  customStyle: {},
  onClose: function onClose() {},
  onGotoMore: function onGotoMore() {}
};
AtNoticebar.propTypes = {
  close: _propTypes2.default.bool,
  single: _propTypes2.default.bool,
  marquee: _propTypes2.default.bool,
  speed: _propTypes2.default.number,
  moreText: _propTypes2.default.string,
  showMore: _propTypes2.default.bool,
  icon: _propTypes2.default.string,
  customStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  onClose: _propTypes2.default.func,
  onGotoMore: _propTypes2.default.func
};
exports.default = AtNoticebar;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtNoticebar));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/strugglinglee/Desktop/new-start/txt-pig/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/noticebar/index.tsx?taro&type=template&parse=COMPONENT&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/strugglinglee/Desktop/new-start/txt-pig/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/taro-ui/dist/weapp/components/noticebar/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "npm/taro-ui/dist/weapp/components/noticebar/index.wxml";

/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/noticebar/index.tsx":
/*!************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/noticebar/index.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/taro-ui/dist/weapp/components/noticebar/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/taro-ui/dist/weapp/components/noticebar/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/noticebar/index.tsx?taro&type=script&parse=COMPONENT&":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/noticebar/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/noticebar/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/noticebar/index.tsx?taro&type=template&parse=COMPONENT&":
/*!************************************************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/noticebar/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_strugglinglee_Desktop_new_start_txt_pig_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/strugglinglee/Desktop/new-start/txt-pig/node_modules&outputPath=npm!../../../../../@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/strugglinglee/Desktop/new-start/txt-pig/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/noticebar/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_strugglinglee_Desktop_new_start_txt_pig_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_strugglinglee_Desktop_new_start_txt_pig_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_strugglinglee_Desktop_new_start_txt_pig_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_strugglinglee_Desktop_new_start_txt_pig_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/noticebar/index.tsx","runtime","taro","vendors"]]]);