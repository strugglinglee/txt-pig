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

/***/ "./src/json/sentence/chp.js":
/*!**********************************!*\
  !*** ./src/json/sentence/chp.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var chpList = exports.chpList = [{
  text: "生活每天都让我灰头土脸，你却有能力让沙漠里开出蔷薇",
  author: "",
  origin: ""
}, {
  text: "你就是人间水蜜桃，每天都在用脸杀人，持靓行凶。",
  author: "",
  origin: ""
}, {
  text: "美女是天使吧，哪家医院做的？怎么拿掉翅膀一点痕迹都没有。",
  author: "",
  origin: ""
}, {
  text: "你才不是什么小人物，你在我这里，是所有的天气和心情。",
  author: "",
  origin: ""
}, {
  text: "你一抬眼，似华山烟雨间，剑气点过我眉心，溅起春风。",
  author: "",
  origin: ""
}, {
  text: "你好，我是警察，你因为太可爱被逮捕了，手伸出来给我抓住 。",
  author: "",
  origin: ""
}, {
  text: "上帝的珠宝掉落一地，所以我看见满天繁星和你的眼睛",
  author: "",
  origin: ""
}, {
  text: "今天的你也是宇宙独一无二的可爱，与众不同的可爱，表里如一的可爱，迷倒万千少男的可爱，说了再见也还是挥之不去的可爱，世界第一未解之谜，万千科学家用尽一生，所有的科学道理也解释不出的可爱。",
  author: "",
  origin: ""
}, {
  text: "哥哥好帅 哥哥的腿不是腿 是塞纳河畔的春水 哥哥的背不是背 是保加利亚的玫瑰 哥哥的皮肤是华东平原 水嫩散发着青春 哥哥的眼睛是夜空恒星 闪闪发光勾人魂 哥哥的嗓音是黑洞 我们是光 逃不出声音的引力 哥哥的腹肌是丘陵 一不小心就摔在里面 哥哥的手指是麻醉针 碰一下，便沉醉",
  author: "",
  origin: ""
}, {
  text: "有完没完，仙女下凡不提早说一声？",
  author: "",
  origin: ""
}, {
  text: "求你不要再用脸蛋来杀人了，我已经厌倦了在你面前反复去世",
  author: "",
  origin: ""
}, {
  text: "今天也为你的容颜，跳起了华尔兹",
  author: "",
  origin: ""
}, {
  text: "谁的童话书又没合好，让公主跑出来了？",
  author: "",
  origin: ""
}, {
  text: "你好美，太平洋是我为你流的口水。",
  author: "",
  origin: ""
}, {
  text: "你的容颜应该申请吉尼斯纪录",
  author: "",
  origin: ""
}, {
  text: "今天也为你的容颜跳起了华尔兹呢！",
  author: "",
  origin: ""
}, {
  text: "姐妹，稍微有点姿色行了，倒不必美的如此满分。",
  author: "",
  origin: ""
}, {
  text: "能不能教教我，你是怎么自带仙女滤镜的？",
  author: "",
  origin: ""
}, {
  text: "我正开着日光灯玩手机，忽然觉得周围都暗了下来，原来是手机里你的美貌在发光！",
  author: "",
  origin: ""
}, {
  text: "以这样的脸蛋每天生活着是什么感受，真想体验一下！",
  author: "",
  origin: ""
}, {
  text: "昏迷，为什么会有明星出现在我的朋友圈！",
  author: "",
  origin: ""
}, {
  text: "你这辈子唯一的遗憾就是亲不到自己的脸！",
  author: "",
  origin: ""
}, {
  text: "我对你的爱就像拖拉机上山轰轰烈烈",
  author: "",
  origin: ""
}, {
  text: "上帝的珠宝掉落地，所以我看见满天繁星和你的眼睛～",
  author: "",
  origin: ""
}, {
  text: "你简直是人类美学的奇迹了，word天！",
  author: "",
  origin: ""
}, {
  text: "不知道为啥你要隔三差五发张自拍， 我真的无语，要发就天天发，这是在拯救世界知道吗？！",
  author: "",
  origin: ""
}, {
  text: "给别人条活路吧，别打扮了，美到窒息了。",
  author: "",
  origin: ""
}, {
  text: "你让我深深地了解了一笑倾城这句话的意义，在看完照片后，我不敢轻易回复，我担心我庸俗不堪的语言会玷污了这世间少有的美感。但我还是回复了，觉得如果不能在如此精彩的照片后面留下自己的伏笔，那将会成为我一生的遗憾。请原谅我的自私!无论用多么华丽的言语修饰都已无法形容这张照片的美感，太美了。",
  author: "",
  origin: ""
}, {
  text: "你真是个小糯米团子又软又甜啊！！你就是水蜜桃牛奶味的小甜崽吧！",
  author: "",
  origin: ""
}, {
  text: "你是不同的，唯一的，柔软的，干净的，天空一样的。你是我温暖的手套，冰冷的啤酒，带着阳光味道的衬衫，日复一日的梦想。",
  author: "",
  origin: ""
}, {
  text: "看小图以为是美女，结果点开大图，呵呵，原来是惊天大美女。",
  author: "",
  origin: ""
}, {
  text: "这是什么绝世美少女，玩年一遇的颜啊！今天也是仔细品味姐姐盛世美颜的一天。姐姐的眼眸就像珍宝匣里最美的琥珀，是俘虏我心的最美的那颗，这样明媚的脸庞是什么仙子颜啊！是真实存在的珍宝吗？我看姐姐是从拉斐尔画里走出来的自带光环的绝世贵族吧！所以上帝才会更偏心一些",
  author: "",
  origin: ""
}, {
  text: "大陆颜值的标杆，即使是后脑勺也是惊人的美貌！连风和阳光都会嫉妒吧？好像从清纯漫画走出来的女主角，这样的美貌简直就是人类洗眼液啊！",
  author: "",
  origin: ""
}, {
  text: "除了故乡，我只为你一人写过月亮",
  author: "",
  origin: ""
}, {
  text: "想在哥哥鼻梁上滑滑梯 想在哥哥睫毛上荡秋千",
  author: "",
  origin: ""
}, {
  text: "哥哥好帅 哥哥的腿不是腿 是塞纳河畔的春水 哥哥的背不是背 是保加利亚的玫瑰 哥哥的皮肤是华东平原 水嫩散发着青春 哥哥的眼睛是夜空恒星 闪闪发光勾人魂 哥哥的嗓音是黑洞 我们是光 逃不出声音的引力 哥哥的腹肌是丘陵 一不小心就摔在里面 哥哥的手指是麻醉针 碰一下，便沉醉",
  author: "",
  origin: ""
}, {
  text: "这张脸在古代可以换边疆300年和平了！",
  author: "",
  origin: ""
}, {
  text: "不要淋到雨啦，不然你会可爱到发芽。",
  author: "",
  origin: ""
}, {
  text: "如果不是因为有屏幕隔着，那我这会应该不是被宝贝你的美貌重伤，而是直接死亡吧，这大概就是梦里会出现的可人了，为了你我要早睡！",
  author: "",
  origin: ""
}, {
  text: "美好的事情都被你用脸做到了。",
  author: "",
  origin: ""
}, {
  text: "你就是人间水蜜桃，每天都在用脸杀人，持靓行凶。",
  author: "",
  origin: ""
}, {
  text: "姐妹的腿不是腿，塞纳河畔的春水，姐妹的背不是背，保加利亚的玫瑰，姐妹的腰不是腰，夺命三郎的弯刀，姐妹的嘴不是嘴，安河桥下的清水。",
  author: "",
  origin: ""
}, {
  text: "我和姐姐去美术馆偷东西，只有我被抓了，因为姐姐本身就是艺术品。",
  author: "",
  origin: ""
}, {
  text: "姐太美了，恐龙灭绝一定是因为它们手太短没法为你美貌鼓掌。",
  author: "",
  origin: ""
}, {
  text: "无语 ，童话书忘了关 ，王子跑出来了。",
  author: "",
  origin: ""
}, {
  text: "这样明媚的脸庞是什么仙子颜啊！是真实存在的珍宝吗？我看姐姐是从拉斐尔画里走出来的自带光环的绝世贵族吧！",
  author: "",
  origin: ""
}];

/***/ }),

/***/ "./src/json/sentence/cute.js":
/*!***********************************!*\
  !*** ./src/json/sentence/cute.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cuteList = exports.cuteList = [{
  text: "事已至此，先吃饭吧。",
  author: "",
  origin: ""
}, {
  text: "本人丰富，无法简介。",
  author: "",
  origin: ""
}, {
  text: "丑的才谈恋爱，美的卖空调。",
  author: "",
  origin: ""
}, {
  text: "一天不端奶茶杯，孤独一生没人追。",
  author: "",
  origin: ""
}, {
  text: "最近过得怎么样，大小 便还正常吗？",
  author: "",
  origin: ""
}, {
  text: "一直很尊重金钱，没偷，没抢，没有。",
  author: "",
  origin: ""
}, {
  text: "朋友圈人 设仅供参考，具体性格看你是谁。",
  author: "",
  origin: ""
}, {
  text: "生活不易，猪猪叹气，叹气泄气，还得打气。",
  author: "",
  origin: ""
}, {
  text: "只要我把自己吃得够圆，就没人能把我看扁。",
  author: "",
  origin: ""
}, {
  text: "学了一句拒绝人的话：要不这样，你当我死 了吧。",
  author: "",
  origin: ""
}, {
  text: "加我就现在，不要因为你的懦弱，导致我们两个人的寂寞。",
  author: "",
  origin: ""
}, {
  text: "我是迪士尼公主，说不上一模一样吧，但最起码是毫不相干。",
  author: "",
  origin: ""
}, {
  text: "有没有美女想要垫个下巴，请联系我，我有双下巴，打算卖一个。",
  author: "",
  origin: ""
}, {
  text: "白素贞1000岁才下山谈恋爱，你急什么？",
  author: "",
  origin: ""
}, {
  text: "当你生活不顺心的时候，不要慌，看看你的钱包和存款，哭出来就好了。",
  author: "",
  origin: ""
}, {
  text: "社交小常识：下次＝星期八，改天＝32号，以后＝13月，有时间＝25点。",
  author: "",
  origin: ""
}, {
  text: "往往是街边那些不起眼的店铺，才能做出真正的美味，而那些富丽堂皇，灯红酒绿的大饭店，我没吃过。",
  author: "",
  origin: ""
}, {
  text: "帮朋友问的，就是最近有一个女孩子变胖了，但是她很善良，请问可以点外卖吗？",
  author: "",
  origin: ""
}, {
  text: "我从没想到，我会和死亡如此接近，现在想想还是很后怕，再晚几秒，我就饿死了。",
  author: "",
  origin: ""
}, {
  text: "我本可以放下所有，不看你一眼的转身离开，但是你的一声爸爸，又让我回到了原地。",
  author: "",
  origin: ""
}, {
  text: "我现在的心情就像去了皮的大土豆，还剩OTATO",
  author: "",
  origin: ""
}, {
  text: "我是那种小众的可爱女孩，目前就我一个人知道，真的超级小众",
  author: "",
  origin: ""
}, {
  text: "老骥伏枥志在千里，横扫饥饿做回自己",
  author: "",
  origin: ""
}, {
  text: "以后把闹钟调成唢呐，醒了就上课，没醒就上路",
  author: "",
  origin: ""
}, {
  text: "你连我都不赞，你赞什么，暂时将你眼睛闭了起来吗？",
  author: "",
  origin: ""
}, {
  text: "看到路上有个小孩在踩影子，我觉得好幼稚，所以绕开了/n我怕他踩到我的影子",
  author: "",
  origin: ""
}];

/***/ }),

/***/ "./src/json/sentence/dgr.js":
/*!**********************************!*\
  !*** ./src/json/sentence/dgr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dgrList = exports.dgrList = [{
  text: "打工人，打工魂，打工人都是人上人！！",
  author: "",
  origin: ""
}, {
  text: "累吗？累就对了，舒服是留给有钱人的。早安，打工人！",
  author: "",
  origin: ""
}, {
  text: "冷吗？冷就对了，温暖是留给开小轿车的人。早安，打工人！",
  author: "",
  origin: ""
}, {
  text: "难吗？难就对了，只要我们不努力，总有一天没饭吃。早安，打工人！",
  author: "",
  origin: ""
}, {
  text: "没有困难的工作，只有勇敢的打工人。",
  author: "",
  origin: ""
}, {
  text: "早上好/n在天愿作比翼鸟/n在地怨为打工人。",
  author: "",
  origin: ""
}, {
  text: "有人夜夜笙歌，有人一大早为生活奔波。早安，打工人！",
  author: "",
  origin: ""
}, {
  text: "打工可能会少活十年，不打工你一天也活不下去。早点睡，打工人。",
  author: "",
  origin: ""
}, {
  text: "生活里80%的痛苦来源于打工，但是我知道，如果不打工，就会有100%的痛苦来源于没钱，所以在打工和没钱之间 我选择打工",
  author: "",
  origin: ""
}, {
  text: "敢上九天揽月，敢下五洋捉鳖，但却不敢迟到。因为迟到扣钱，早安，打工人！",
  author: "",
  origin: ""
}, {
  text: "有人相爱，有人夜里看海，有人七八个闹钟起不来，早安，打工人！",
  author: "",
  origin: ""
}, {
  text: "头等舱可以优先登机，银行VIP可以不用排队，演唱会最贵的票位置也最好，世界从不平等，你有多努力，就有多特殊，早安，打工人！",
  author: "",
  origin: ""
}, {
  text: "你在拼多多到处找人砍价， 他在滴滴打车求人助力，我在电子厂拧螺丝拧到凌晨，我们都有光明的未来，早安！打工人！",
  author: "",
  origin: ""
}, {
  text: "打工人 说“上班”，就感觉像是为生活所迫，不情不愿。说“打工”，就像是带着美好的憧憬，用努力和汗水去创造未来。早安！打工人们！",
  author: "",
  origin: ""
}, {
  text: "靠别人是公主，靠你叽哇是日本人，靠北啦是台湾人，靠自己是光荣的打工人，早安打工人！",
  author: "",
  origin: ""
}, {
  text: "只要我够努力，老板一定会过上他想要的生活！早安！打工人！",
  author: "",
  origin: ""
}, {
  text: "干不完的活，睡不够的觉，喂不胖的钱包，买不起的貂，半辈子就挣了两个亿，一个失忆，一个回忆。早安，打工人！",
  author: "",
  origin: ""
}, {
  text: "你的同事，要不就是拆二代体验生活，要不就是关系户整天吊儿郎当。只有你，是真正在为生活奔波的打工仔。加油，打工人！",
  author: "",
  origin: ""
}, {
  text: "爱情不是生活的全部，打工才是。 早安，打工人！",
  author: "",
  origin: ""
}, {
  text: "打工不仅能致富，还能交友娶媳妇。",
  author: "",
  origin: ""
}, {
  text: "打工赚不了几个钱，但是多打几份工可以让你没时间花钱。",
  author: "",
  origin: ""
}, {
  text: "我带上了头盔，就无法吻你;摘下了头灰被交警罚款50。早安，打工人！",
  author: "",
  origin: ""
}, {
  text: "每天对着空气挥一拳，不为别的，就为干这个世界！早安，打工人！",
  author: "",
  origin: ""
}];

/***/ }),

/***/ "./src/json/sentence/index.js":
/*!************************************!*\
  !*** ./src/json/sentence/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chpList = exports.introList = exports.zyList = exports.wyyList = exports.nightList = exports.loneList = exports.cuteList = exports.dgrList = undefined;

var _dgr = __webpack_require__(/*! ./dgr */ "./src/json/sentence/dgr.js");

var _cute = __webpack_require__(/*! ./cute */ "./src/json/sentence/cute.js");

var _lone = __webpack_require__(/*! ./lone */ "./src/json/sentence/lone.js");

var _night = __webpack_require__(/*! ./night */ "./src/json/sentence/night.js");

var _wyy = __webpack_require__(/*! ./wyy */ "./src/json/sentence/wyy.js");

var _zy = __webpack_require__(/*! ./zy */ "./src/json/sentence/zy.js");

var _chp = __webpack_require__(/*! ./chp */ "./src/json/sentence/chp.js");

//推荐列表取每个list前15个
var introList = _dgr.dgrList.slice(0, 15).concat(_cute.cuteList.slice(0, 15), _lone.loneList.slice(0, 15), _night.nightList.slice(0, 15), _wyy.wyyList.slice(0, 20), _chp.chpList.slice(0, 15));

exports.dgrList = _dgr.dgrList;
exports.cuteList = _cute.cuteList;
exports.loneList = _lone.loneList;
exports.nightList = _night.nightList;
exports.wyyList = _wyy.wyyList;
exports.zyList = _zy.zyList;
exports.introList = introList;
exports.chpList = _chp.chpList;

/***/ }),

/***/ "./src/json/sentence/lone.js":
/*!***********************************!*\
  !*** ./src/json/sentence/lone.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var loneList = exports.loneList = [{
  text: "一切都明明白白/n但我们仍匆匆错过/n因为你相信命运/n因为我怀疑生活。",
  author: "顾城",
  origin: "错过"
}, {

  text: "你只是一个普通人，你身边的人大多也都艰难辛苦。夜里痛哭还好说，悄悄爬上楼顶又悄悄下来的也不是没有。你得记着别人和你一样脆弱，这样你就不吝惜脸面随时都可献出一个温暖的拥抱。你也得记着你和别人一样坚强，没困住别人的泥沼深渊同样也困不住你。",
  author: "",
  origin: ""
}, {
  text: "有没有一种可能，这世上是没有爱的",
  author: "",
  origin: ""
}, {
  text: "但是我想，这个世界里，/n虽然没有最美好的相遇，/n却应该有为了相遇，或者重逢，/n所做的最美好的努力。",
  author: "勒·克莱齐奥",
  origin: "流浪的星星"
}, {
  text: "成年后的我们，总能演好别人，唯独丢了自己",
  author: "",
  origin: ""
}, {
  text: "难过的时候，你只能安静的一个人躺在床上，这就是生活",
  author: "",
  origin: ""
}, {
  text: "我准备好了一年四季，你却只感兴趣别人的春天。",
  author: "",
  origin: ""
}, {
  text: "很高兴长大了，长大后很久没有很高兴过了。",
  author: "",
  origin: ""
}, {
  text: "我们怎么就不是小孩子了。",
  author: "",
  origin: ""
}, {
  text: "你尽管怀疑，我有用毕生回答的勇气。",
  author: "",
  origin: ""
}, {
  text: "城市里灯火阑珊，我总误以为星辰只有小时候的才会璀璨。/n逢到少有的停电，小半个城市都笼在黑暗，那些多年不曾亲近的星辰，告诉我，孤独才能催生灿烂。/n灯火人间里，你还要你的“”滚烫星河”吗？",
  author: "",
  origin: ""
}, {
  text: "“我们最遗憾的，莫过于从来没被别人坚定选择过…”/n“可是我们也从来没有坚定的选择过别人。。。”",
  author: "",
  origin: ""
}, {
  text: "谁不是彷徨又坚定/n孤独又忐忑/n最软的肉裹着最硬的壳/n做着人间普通一个。",
  author: "",
  origin: "田螺"
}, {
  text: "谁能想到/n经常解开别人心结的人/n心里全是死结",
  author: "",
  origin: ""
}, {
  text: "无论走到哪里都应该记住/n过去都是假的/n回忆是一条没有尽头的路/n一切以往的春天都不复存在/n就连那最坚韧而又狂乱的爱情/n归根结底，也不过是/n一种转瞬即逝的现实。",
  author: "",
  origin: "百年孤独"
}, {
  text: "什么都可以变/n为什么这个不能变？",
  author: "",
  origin: "无问西东"
}, {
  text: "我这辈子最遗憾的事情/n就是推我入地狱的人/n也曾带我上天堂。",
  author: "张爱玲",
  origin: "色戒"
}, {
  text: "日日重复同样的事/n遵循着与昨日相同的惯例/n若能避开猛烈的狂喜/n自然也不会有悲痛的来袭。",
  author: "太宰治",
  origin: "人间失格"
}, {
  text: "七岁和十七岁之间有十年/n十七岁和二十七岁之间有一生",
  author: "",
  origin: ""
}, {
  text: "人生前二十多年吃亏就吃在太懂事了/n这是我做人最大的败笔/n这个“懂事”，是懂别人的事/n理解别人的苦处，容易被别人打动/n甚至在自我和别人发生冲突时/n顺从别人的意志，为别人牺牲自己的利益/n然而，我没有为自己做点什么/n我也不懂自己。",
  author: "",
  origin: ""
}, {
  text: "愿意忍受今天的我的寂寞/n来代替忍受比今天更寂寞/n未来的我的寂寞。",
  author: "夏目漱石",
  origin: "心"
}, {
  text: "每个人的心里，有多么长的一个清单/n这些清单里写着多少美好的事/n可是，它们总是被推迟，被搁置/n在时间的阁楼上腐烂/n为什么勇气的问题/n总是被误以为是时间的问题/n而那些沉重、抑郁的、不得已的/n总是被叫做生活本身。",
  author: "刘瑜",
  origin: ""
}, {
  text: "总而言之/n在这广阔的世界上/n除了自己你无人可投靠。",
  author: "村上春树",
  origin: ""
}, {
  text: "深情即是一桩悲剧/n必得以死来句读。/n你真是一个令人欢喜的人/n你的杯不应该为我而空。",
  author: "简媜",
  origin: "四月裂帛"
}, {
  text: "人的一生有多长呢？/n一生啊，就是从我见到你的妈妈那一刻开始，一直到我再也看不见你的妈妈那一刻结束。",
  author: "",
  origin: ""
}, {
  text: "今天上班累吗/n工作任务多吗/n客户有没有刁难你/n上级凶吗/n同事好相处吗/n中午的外卖好吃吗/n我想问的是你今天开心吗",
  author: "",
  origin: ""
}, {
  text: "任何一种触及灵魂的深刻感情/n都是从理解对方的痛苦开始的。",
  author: "",
  origin: ""
}, {
  text: "每个愤世嫉俗的人/n骨子里都是受挫的浪漫主义者",
  author: "",
  origin: ""
}, {
  text: "她不会发福老去/n不会穿职业装/n不会带着柴米油盐的气息/n她永远年轻漂亮穿着白色长裙站在你的回忆里/n笑靥如花",
  author: "",
  origin: ""
}, {
  text: "谁能想到/n经常解开别人心结的人/n心里全是死结",
  author: "",
  origin: ""
}, {
  text: "那些因为缘分而来的东西，终有缘尽而别的时候。缘尽时，别勉强，别纠缠，你才能过得更好。",
  author: "三毛",
  origin: ""
}];

/***/ }),

/***/ "./src/json/sentence/night.js":
/*!************************************!*\
  !*** ./src/json/sentence/night.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var nightList = exports.nightList = [{
  text: "你看星星都要睡了，我的星星也该睡了。",
  author: "",
  origin: ""
}, {
  text: "你可以亲口和我说晚安嘛？/n可以啊/n那我先亲口再说。",
  author: "",
  origin: ""
}, {
  text: "晚上睡觉不要关窗户，我要偷偷溜进你梦里。",
  author: "",
  origin: ""
}, {
  text: "马上就要进入睡眠程序了，里边有个bug能让我闭上眼也能看到你。",
  author: "",
  origin: ""
}, {
  text: "细碎的烦恼我帮你扫，你只需要把月亮挂好，闭上眼睡个好觉。",
  author: "",
  origin: ""
}, {
  text: "快点去碎觉我不想在朋友圈水滴筹碰到你。",
  author: "",
  origin: ""
}, {
  text: "晚来思君/n唯望君安",
  author: "",
  origin: ""
}, {
  text: "星星是银河给月亮的情书/n你是世界赠予我的恩赐",
  author: "",
  origin: ""
}, {
  text: "在你睡觉前/n我给你看看宇宙吧.＊.,☄＊ ..：＊ ： ＊. ＊.｀： ＊.  ＊ .：✨： ＊ ＊.： ☄＊.＊：.＊ ☄..＊ ：❄️ ＊. ＊^. ☀.＊：＊.  ： 。＊.：✨☄ .＊｀. ＊⭐｀.^＊ ｀. 。：。 .：＊：｀. 。＊ .＊：^＊.｀＊：｀. ＊ . 。✨＊^｀。. .✨＊。 ^｀.＊.  ＊☄",
  author: "",
  origin: ""
}, {
  text: "你能晚点再睡吗/n这样今天我还能多喜欢你一会会儿",
  author: "",
  origin: ""
}, {
  text: "月亮是我抛的硬币/n两面都是梦见你/n晚安",
  author: "",
  origin: ""
}, {
  text: "最近月亮不营业/n晚安就由我来说吧",
  author: "",
  origin: ""
}, {
  text: "今天的世界已经打烊了/n已经不对外营业/n晚安",
  author: "",
  origin: ""
}, {
  text: "晚上不要梦到我，梦里陪聊也是收费的",
  author: "",
  origin: ""
}, {
  text: "晚安，一会儿会有蚊子替我亲你",
  author: "",
  origin: ""
}, {
  text: "你就熬夜吧，熬个黑眼圈，掉头发，丑死你",
  author: "",
  origin: ""
}, {
  text: "晚睡的小朋友，就领取不到今日份的美梦了喔，你现在要做的是就是盖好小棉被，然后躺下来好好睡觉啦。",
  author: "",
  origin: ""
}, {
  text: "尊敬的移动用户：您已经成功定制了半夜叫醒尿尿业务，每天半夜我们会不定时打扰您，直到您起床。退定业务请回复：我是猪，我要睡觉，我不起床，我不尿尿！",
  author: "",
  origin: ""
}, {
  text: "我知道这个凡间给你的善意总不太多，但我永远带玫瑰色眼镜看你。祝你晚安，梦里有刚刚好的月亮。",
  author: "",
  origin: ""
}, {
  text: "告诉你个秘密，明天我还喜欢你",
  author: "",
  origin: ""
}, {
  text: "想去你的梦境看看，每晚都为你挂上一颗星星。",
  author: "",
  origin: ""
}, {
  text: "你快睡吧，养猪场这个钟点是催眠的时候了",
  author: "",
  origin: ""
}, {
  text: "昨天晚上我失眠了，在我数的两万三千七百五十二只羊里总觉得有一只是你扮的，所以今天晚上我要去把你找来。",
  author: "",
  origin: ""
}];

/***/ }),

/***/ "./src/json/sentence/wyy.js":
/*!**********************************!*\
  !*** ./src/json/sentence/wyy.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var wyyList = exports.wyyList = [{
  text: "到底有多少人到现在还不明白/n人和人之间想要保持长久舒适的关系/n靠的是共性和吸引/n而不是压迫 捆绑 奉承 和一味的付出/n以及道德式的自我感动",
  author: "网易云热评",
  origin: "往后余生"
}, {
  text: "「失去一个很珍惜的人是怎样的体验?」/n姜思达说过：想有一条永远认得我的海豚 也想让它好好在海里玩一辈子。/n我希望他记得我 永远记得/n也希望他快乐 永远快乐。",
  author: "网易云热评",
  origin: "耿"
}, {
  text: "小时候问过母亲大人一个很傻的问题/n说鱼身体里那么多刺，就不会痛吗？/n突然觉得这比喻用在人身上也挺适合的，/n那些往事曾经像刺一样扎在身体里，/n时间久了感觉不到痛了，/n大概不是消失了，/n只是它们都已经变成我们的骨头了吧。",
  author: "网易云热评",
  origin: "城"
}, {
  text: "“有些人比较幸运/n想你可以直接告诉你/n有些人比较不幸/n想你只能转换为听歌 喝酒 走夜路”",
  author: "网易云热评",
  origin: "荒岛"
}, {
  text: "就算我和你牵手走过多少路,/n为你做过多少疯狂的事,/n给过你多少感动,/n可是我不明白,/n不管我以前为你多么努力,/n分开了以后你想起来的时候还是波澜不惊,/n而还没说话眼眶就湿润的人,/n是我 不是你",
  author: "网易云热评",
  origin: "礼物"
}, {
  text: "你好像瘦了，/n头发也变长，/n背影陌生到让我觉得，/n见你是上个世纪的事，/n然后你开口叫我名字，/n我就想笑，好像自己刚刚放学，/n只在校门口等了你五分钟而已。",
  author: "网易云热评",
  origin: ""
}, {
  text: "“自己满身灰暗/n还总想着/n给别人一些光”",
  author: "网易云热评",
  origin: "暗里有光"
}, {
  text: "有的人坐飞机就能见面/n有的人需要坐时光机才能相见",
  author: "网易云热评",
  origin: "爱在夏天"
}, {
  text: "“你真的分清了占有欲/n喜欢/n爱和新鲜感吗/n还是不甘心 ”",
  author: "网易云热评",
  origin: "少女的祈祷"
}, {
  text: "半山腰总是最挤的/n你得去山顶看看啊",
  author: "网易云热评",
  origin: "无名之辈"
}, {
  text: "水星在自己不近不远的轨迹守护太阳。而我以后也会一直在你身边熙熙攘攘的人群，不再走近，也不会远离。我会努力变得更好，希望你也是。",
  author: "网易云热评",
  origin: "水星记"
}, {
  text: "朋友或是情人,能走过三个月的已不容易,能坚持六个月的值得珍惜,能相守一年的堪称奇迹，能熬过两年的才叫知己，超过三年的值得记忆，五年后还在的，应请进生命里。十年后依然在的，那就不是朋友了，已经是亲人，是生命的一部分了！",
  author: "网易云热评",
  origin: "致每一个走入心里的人"
}, {
  text: "小时候不理解老人晒太阳，一坐就是半天。长大了才明白，目之所及皆是回忆，心之所想皆是过往，眼之所看皆是遗憾。",
  author: "网易云热评",
  origin: "红莓花儿开"
}, {
  text: "把情绪调成静音模式",
  author: "网易云热评",
  origin: "阴天"
}, {
  text: " 人生最大的自由，不是想做什么就做什么，而是，想不做什么就不做什么。",
  author: "网易云热评",
  origin: "自由の翼"
}, {
  text: "任何一种触及灵魂的深刻感情，都是从理解对方的痛苦开始的。",
  author: "网易云热评",
  origin: "胡广生"
}, {
  text: "现在你在哪里/n今天遇见了什么人说了什么话/n去了什么地方/n最后一次想起我是什么时候/n现在爱着谁呢",
  author: "网易云热评",
  origin: "我想你了"
}, {
  text: "女孩子很容易被感动，喜欢的人说一句稍微宠溺一点的话，就开心的想把脸埋进被子里闷闷的笑出声，笑完又觉得丢脸，明明一大把年纪了，还像个没爱过人的小孩子。所以啊，一定要找一个让你少女心爆棚的人，而不是让你成为怨妇的人。",
  author: "网易云热评墙音乐",
  origin: "人生苦短"
}, {
  text: "大部分人在二三十岁上就死去了，因为过了这个年龄，他们只是自己的影子，此后的余生则是在模仿自己中度过，日复一日，更机械，更装腔作势地重复他们在有生之年的所作所为，所思所想，所爱所恨。 ​​​​",
  author: "网易云热评",
  origin: ""
}, {
  text: "未成定局的事就不要弄的人尽皆知",
  author: "网易云热评",
  origin: ""
}, {
  text: "大胆点生活/n你没那么多观众",
  author: "网易云热评",
  origin: ""
}, {
  text: "人最大的悲哀在于，拿着爸妈提供的物质，学着他们不懂的知识，见识他们没有见识过的世面，体验他们没体验过的人生，到头来，却嫌弃他们如此笨拙 。",
  author: "网易云音乐热评 李荣浩",
  origin: "爸爸妈妈"
}, {
  text: "当初我们亲密无间，无话不谈，后来你走了。在后来我明白，你就像我跑步时流下的汗水，我越努力，你走的越快。只是因为你从未爱过我。",
  author: "网易云音乐 陈奕迅",
  origin: "我们"
}, {
  text: "离开都是有征兆的，只不过被你忽略了，你的怀疑都是真的， 他的变化历历在目 ，他该让你失望的事 ，从来都没有辜负过你。 “离开那个错的人独自上岸自我救赎 ，他一定会夜夜难熬 ，夜夜想起我的好。",
  author: "网易云热评",
  origin: "离岸"
}, {
  text: "我问妈妈不结婚可以吗，妈妈只说:“如果外面烟花四起，街坊邻居饭味溢出，大街上一家人手牵手出行，你能忍住不哭就可以。”/n“可是现在不让放烟花，家家都有油烟机，没几个人会出门……”",
  author: "网易云热评",
  origin: ""
}, {
  text: "上天不会无缘无故做出莫名其妙的决定，它让你放弃和等待，是为了给你最好的。",
  author: "网易云热评",
  origin: "最好的安排"
}, {
  text: "其实人这一辈子真的遇不到几个真心，能对你好，爱你的人 ，所以能牵手的时候别并肩 ，记得不要冷冰冰 ，不要说反话。",
  author: "网易云热评",
  origin: "雨过之后"
}, {
  text: "一个人出生了，人们不知道他未来的样子，却说“恭喜恭喜”/n一个人死去了，人们不知道那死后的世界，却说“可惜可惜”。/n——三毛",
  author: "网易云音乐 一只榴莲",
  origin: "了"
}, {
  text: "学生时代的喜欢大概就是，进教室门口的第一眼，下意识的先看向你的座位。",
  author: "网易云热评",
  origin: "一次就好"
}, {
  text: "表白是小孩子才会做的事 ，成年人需要诱惑， 想学会诱惑 ，/n首先要放弃做人 ，一般有三种模式 ，要么变成猫 ，要么变成虎， 要么变成被雨淋湿的狗。",
  author: "网易云热评",
  origin: "回头爱"
}, {
  text: "我不善言语，凡事冷漠，不刻意迎合也不取悦谁 ，性子很傲 ，慢热但是重感情，我没有很难过，也没有很快乐。",
  author: "网易云热评",
  origin: "关于盛夏的光和影"
}, {
  text: "20岁，还在啃老,拥有远大的报复，却知道自己没能力。背不起自己的梦想，也辜负了所有的苦难。大话连篇，却没有真才实学。/n没能足够珍惜朋友，也没有一个可以牵手的人。现在，我坐在天台上，看着夜空，思绪万千。",
  author: "网易云热评",
  origin: "一身坦荡"
}, {
  text: "我的梦想除了赚很多很多的钱，还想和你在盛夏的晚上穿着拖鞋在街上晃荡，渴了就喝瓶啤酒，/n醉了就去山顶吹吹风，困了就靠在你的肩头。",
  author: "网易云热评",
  origin: "summer friend"
}, {
  text: "“没有人永远19岁，但永远有人19岁。”",
  author: "网易云音乐 一只榴莲",
  origin: "了"
}, {
  text: "学生时代的喜欢大概就是，进教室门口的第一眼，下意识的先看向你的座位。",
  author: "网易云热评 焦迈奇 ",
  origin: "风吹着我向你跑来"
}, {
  text: "时间会慢慢沉淀，有些人会在你心底慢慢模糊，学会放手，你的幸福需要自己的成全。",
  author: "网易云热评",
  origin: "MmMM"
}, {
  text: "“总是欺骗的说对的人终究会来到 然而又有多少个几年可以等”。",
  author: "网易云热评",
  origin: "孤记"
}, {
  text: "“你是在哭的最伤心那个晚上变成大人的吗”。/n“不是，是我忍住没哭的那个晚上。”",
  author: "网易云热评",
  origin: ""
}, {
  text: "不要跟别人交心吐露太多，因为你迟早会发现自己会后悔的，讲真，交心这件事，很幼稚，我倒不是鼓励你变得复杂，我只是希望你能学会保护自己。 ​​​​",
  author: "网易云热评",
  origin: "胆小鬼"
}, {
  text: "希望你的下一段爱情 是志趣相投 是两厢情愿 是万水千山 是灵犀一点通。",
  author: "网易云热评",
  origin: "我们再重蹈覆辙好不好"
}, {
  text: "结局总是好的，如果不好，说明还不是结局。 ​​​​",
  author: "网易云热评",
  origin: "后来"
}, {
  text: "到了这个年纪，谁都不想取悦了，跟谁在一起舒服就在一起，包括朋友，累了我就躲远，你喜欢我我喜欢你，我们就在一起，我们都不喜欢，就千万不要勉强在一起。 ​​​​",
  author: "网易云热评",
  origin: "小半"
}];

/***/ }),

/***/ "./src/json/sentence/zy.js":
/*!*********************************!*\
  !*** ./src/json/sentence/zy.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var zyList = exports.zyList = [{
  text: "纵然伤心，也不要愁眉不展，因为你不知道是谁会爱上你的笑容",
  author: "泰戈尔",
  origin: "飞鸟集"
}, {
  text: "我要你知道，在这个世界上总有一个人是等着你的，不管在什么时候，不管在什么地方，反正你知道，总有这么个人。",
  author: "张爱玲",
  origin: "半生缘"
}, {
  text: "不要因为事与愿违而感到惊讶，因为这个宇宙比你大得多。",
  author: "阿兰・德波顿",
  origin: "哲学的慰藉"
}, {
  text: "信仰是心中的绿洲，思想的骆驼队是永远走不到的。",
  author: "纪伯伦",
  origin: "沙与沫"
}, {
  text: "凡事不能让人怀着热情去做的事情，都是不值得的事。",
  author: "马克斯・韦伯",
  origin: "学术与政治"
}, {
  text: "生活总是让我们遍体鳞伤，可是后来，那些受伤的地方一定会变成我们最强壮的地方。",
  author: "海明威",
  origin: "永别了武器"
}, {
  text: "把自己立成帆，才能招来风。",
  author: "尾鱼",
  origin: "七根凶简"
}, {
  text: "回忆这东西若是有气味的话，那就是樟脑的香，甜而稳妥，像记得分明的快乐，甜而怅惘，像忘却了的忧愁。",
  author: "张爱玲",
  origin: "更衣记"
}, {
  text: "追逐梦想就像走钢索，你不知道自己什么时候会掉下去，你必须非常努力，才能保持平衡。",
  author: "卢思浩",
  origin: "愿有人陪你颠沛流离"
}, {
  text: "有些路，只能一个人走。",
  author: "龙应台",
  origin: "目送"
}, {
  text: "失落时悄悄伸出手和风击个掌",
  author: "",
  origin: ""
}, {
  text: "没有真正快乐的人/n只有比较想的开的人",
  author: "",
  origin: ""
}, {
  text: "雨会停，天会晴，没有什么会永远糟糕透顶",
  author: "",
  origin: ""
}, {
  text: "把期待降到最低，所有遇见便都是惊喜。",
  author: "",
  origin: ""
}, {
  text: "努力追上那个曾经被赋予厚望的自己",
  author: "",
  origin: ""
}, {
  text: "虽然辛苦/n我还是会选择那种滚烫的人生",
  author: "",
  origin: ""
}, {
  text: "你生来就值得被爱，这一点你无需质疑",
  author: "",
  origin: ""
}, {
  text: "要乖/n要长大/n要努力/n要不负众望",
  author: "",
  origin: ""
}, {
  text: "这个世界泥泞破碎/n却也能开出温柔的花朵",
  author: "",
  origin: ""
}, {
  text: "保持对生活的热爱把每一天都过得热气腾腾",
  author: "",
  origin: ""
}, {
  text: "发动态 删动态 不交际熬夜 难过 沉默 听歌",
  author: "",
  origin: ""
}, {
  text: "目前这个年纪真尴尬，不够成熟，也不够幼稚，没有能力，却有野心",
  author: "",
  origin: ""
}, {
  text: "我最信任的人教会我不要相信任何人",
  author: "",
  origin: ""
}, {
  text: "所有人都要让我努力，却没有人能让我快乐",
  author: "",
  origin: ""
}, {
  text: "能有什么办法 失去和拥有都由不得我",
  author: "",
  origin: ""
}, {
  text: "管他熙熙攘攘阳关道，我偏要一条独木桥走到黑。",
  author: "",
  origin: ""
}, {
  text: " 不赶什么浪潮，也不搭什么船，我自己有海。",
  author: "",
  origin: ""
}, {
  text: "我还是想回到五岁，不用每天看凌晨的月亮和星光不用醒来就一头扎进单词和古文做拼命三郎，但会在傍晚的巷口，逆着落日低沉的光，傻傻地去追那抓不住的风。",
  author: "",
  origin: ""
}, {
  text: "我本身是个小格局的人，常着眼于眼前的烦心事和快乐事，一日三餐和父母健康。但我同样希望世界温柔，有些很好很好的人不应该受委屈。",
  author: "",
  origin: ""
}, {
  text: "说“我爱你”总觉得太潦草，我只始终记得《千江有水千江月》里那句：“许多事情，我是自你起，才开始想的。”",
  author: "",
  origin: ""
}, {
  text: "太阳能维修，月亮可更换，星星不闪包退换。",
  author: "",
  origin: ""
}, {
  text: "一个真相：太在意细节的人永远感受不到被爱 ​​​​。",
  author: "",
  origin: ""
}, {
  text: "越长大越觉得，发一次脾气和痛快的大哭一场是多么困难的事儿 ​​​​。",
  author: "",
  origin: ""
}, {
  text: "不管感情还是生活，见好就收，不行就撤，你才会快乐 ​​​​。",
  author: "",
  origin: ""
}, {
  text: "小朋友请你记住，这种进一步退一步都是难过的感觉 ​​​​。",
  author: "",
  origin: ""
}, {
  text: "随口答应的事也会记得去做到的人，真的太温柔了 。",
  author: "",
  origin: ""
}, {
  text: "一食一饭，一草一木，皆是生活。",
  author: "",
  origin: ""
}, {
  text: "一瓶可乐三块，第一口值两块，这世上很多东西都是这样。",
  author: "",
  origin: ""
}, {
  text: "若逢新雪初霁， 满月当空， 下面平铺着皓影， 上面流转着亮银， 而你带笑地向我走来， 月色和雪色之间， 你是第三种绝色。",
  author: "",
  origin: ""
}, {
  text: "掉头一去是风吹黑发， 回首再来已雪满白头。",
  author: "",
  origin: ""
}, {
  text: "活在世上，你好像随时都在期待着，期待着有什么可以看一看的事。有时你疲疲困困，你的心休息，你的生命匍伏着像一条假寐的狗，而一到有什么事情来了，你醒豁过来，白日里闪来了清晨。",
  author: "",
  origin: ""
}, {
  text: "年轻的时候，即使身无分文，一贫如洗，也会享受生活。 在没有列车的时候，我和她和猫躺在铁轨上，安静地简直像坐在湖底，我们年轻，新婚不久，阳光免费。",
  author: "",
  origin: ""
}, {
  text: "每个人都有属于自己的一片森林，也许我们从来不曾去过，但它一直在那里，总会在那里。迷失的人迷失了，相逢的人会再相逢。",
  author: "",
  origin: ""
}, {
  text: "不管全世界所有人怎么说，我都认为自己的感受才是正确的。无论别人怎么看，我绝不打乱自己的节奏。喜欢的事自然可以坚持，不喜欢怎么也长久不了。",
  author: "",
  origin: ""
}, {
  text: "我或许败北，或许迷失自己，或许努力也抵达不了，或许我已经失去一切，任凭怎么挣扎也只能徒呼奈何，或许我只是徒然掬一把废墟灰烬，唯我一人蒙在鼓里，或许这里没有任何人把赌注下在我身上。无所谓。有一点是明确的：至少我有值得等待值得寻求的东西。",
  author: "",
  origin: ""
}];

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

},[["./src/pages/index/index.tsx","runtime","taro","vendors"]]]);