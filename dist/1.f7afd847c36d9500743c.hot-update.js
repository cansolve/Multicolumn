webpackHotUpdate(1,{

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(692);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(469);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(473);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(474);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(478);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(498);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _index = __webpack_require__(506);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(512);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(513);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _header = __webpack_require__(706);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _left = __webpack_require__(708);
	
	var _left2 = _interopRequireDefault(_left);
	
	var _crumbs = __webpack_require__(709);
	
	var _crumbs2 = _interopRequireDefault(_crumbs);
	
	var _loading = __webpack_require__(710);
	
	var _loading2 = _interopRequireDefault(_loading);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var _components = {
	  Common: {
	    displayName: 'Common'
	  }
	};
	
	var _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/tongxiang/onemt/myGit-demo/appcenter-mgr-web/static/js/controller/component/common/common.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/tongxiang/onemt/myGit-demo/appcenter-mgr-web/static/js/controller/component/common/common.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformHmrLibIndexJs2(_UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var Common = _wrapComponent('Common')(function (_React$Component) {
	  (0, _inherits3.default)(Common, _React$Component);
	
	  function Common(props) {
	    (0, _classCallCheck3.default)(this, Common);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Common.__proto__ || (0, _getPrototypeOf2.default)(Common)).call(this, props));
	
	    _this.state = {
	      display: '',
	      isPermissions: true
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(Common, [{
	    key: 'mediaChange',
	    value: function mediaChange(event) {
	      event.preventDefault();
	      this.setState({
	        display: this.state.display ? '' : 'display'
	      });
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement('div', null, _react3.default.createElement(_header2.default, this.props), _react3.default.createElement('div', { className: 'main-container', id: 'main-container' }, _react3.default.createElement('div', { className: 'main-container-inner' }, _react3.default.createElement('a', { className: 'menu-toggler ' + this.state.display, id: 'menu-toggler', href: '#', onClick: this.mediaChange.bind(this) }, _react3.default.createElement('span', { className: 'menu-text' })), _react3.default.createElement(_left2.default, (0, _extends3.default)({ display: this.state.display }, this.props)), _react3.default.createElement('div', { className: 'main-content' }, _react3.default.createElement(_crumbs2.default, this.props), _react3.default.createElement('div', { className: 'page-content clearfix' }, this.props.children)))));
	    }
	  }]);
	  return Common;
	}(_react3.default.Component));
	
	exports.default = Common;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(250)(module)))

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(469);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(473);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(474);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(478);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(498);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _index = __webpack_require__(506);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(512);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(513);
	
	var _index6 = _interopRequireDefault(_index5);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var _components = {
	  Crumbs: {
	    displayName: "Crumbs"
	  }
	};
	
	var _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: "/Users/tongxiang/onemt/myGit-demo/appcenter-mgr-web/static/js/controller/component/common/crumbs.js",
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: "/Users/tongxiang/onemt/myGit-demo/appcenter-mgr-web/static/js/controller/component/common/crumbs.js",
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformHmrLibIndexJs2(_UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var Crumbs = _wrapComponent("Crumbs")(function (_React$Component) {
	  (0, _inherits3.default)(Crumbs, _React$Component);
	
	  function Crumbs(props) {
	    (0, _classCallCheck3.default)(this, Crumbs);
	    return (0, _possibleConstructorReturn3.default)(this, (Crumbs.__proto__ || (0, _getPrototypeOf2.default)(Crumbs)).call(this, props));
	  }
	
	  (0, _createClass3.default)(Crumbs, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {}
	  }, {
	    key: "sendAjax",
	    value: function sendAjax(event) {}
	  }, {
	    key: "render",
	    value: function render() {
	      return _react3.default.createElement("div", { className: "breadcrumbs" }, _react3.default.createElement("ul", { className: "breadcrumb" }, _react3.default.createElement("li", null, _react3.default.createElement("i", { className: "icon-home home-icon" }), _react3.default.createElement("a", { href: "#" }, "\u9996\u9875")), _react3.default.createElement("li", { className: "active" })), _react3.default.createElement("div", { className: "nav-search", id: "nav-search" }, _react3.default.createElement("form", { className: "form-search" }, _react3.default.createElement("select", { className: "form-control",
	        onChange: this.sendAjax.bind(this), value: this.state.value }, this.state.projects.map(function (items, i) {
	        return _react3.default.createElement("option", { value: items.id, key: i }, items.name);
	      })))));
	    }
	  }]);
	  return Crumbs;
	}(_react3.default.Component));
	
	exports.default = Crumbs;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(250)(module)))

/***/ })

})
//# sourceMappingURL=1.f7afd847c36d9500743c.hot-update.js.map