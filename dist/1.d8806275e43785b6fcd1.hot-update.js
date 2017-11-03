webpackHotUpdate(1,{

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
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
	
	var _dispatch = __webpack_require__(700);
	
	var _dispatch2 = _interopRequireDefault(_dispatch);
	
	var _multicolumn = __webpack_require__(702);
	
	var _multicolumn2 = _interopRequireDefault(_multicolumn);
	
	var _common = __webpack_require__(705);
	
	var _common2 = _interopRequireDefault(_common);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var _components = {
	  Index: {
	    displayName: 'Index'
	  }
	};
	
	var _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/tongxiang/onemt/myGit-demo/appcenter-mgr-web/static/js/controller/component/demo/index.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/tongxiang/onemt/myGit-demo/appcenter-mgr-web/static/js/controller/component/demo/index.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformHmrLibIndexJs2(_UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var Index = _wrapComponent('Index')(function (_React$Component) {
	  (0, _inherits3.default)(Index, _React$Component);
	
	  function Index(props) {
	    (0, _classCallCheck3.default)(this, Index);
	    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));
	  }
	
	  (0, _createClass3.default)(Index, [{
	    key: 'render',
	    value: function render() {
	
	      var data = [{
	        id: 1,
	        name: '数据1'
	      }, {
	        id: 2,
	        name: '数据2'
	      }, {
	        id: 3,
	        name: '数据3'
	      }, {
	        id: 4,
	        name: '数据44'
	      }, {
	        id: 5,
	        name: '数据55555'
	      }];
	      var defaultData = [{
	        id: 7,
	        name: '默认数据1'
	      }, {
	        id: 8,
	        name: '默认数据2'
	      }, {
	        id: 9,
	        name: '默认数据3'
	      }];
	
	      return _react3.default.createElement(_common2.default, this.props, _react3.default.createElement(_multicolumn2.default, {
	        data: data,
	        size: ['50%', 700],
	        titName: '\u7BA1\u7406\u5E73\u53F0',
	        defaultValue: defaultData,
	        onChange: function onChange(val) {}
	      }));
	    }
	  }]);
	  return Index;
	}(_react3.default.Component));
	
	exports.default = (0, _dispatch2.default)(Index);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(250)(module)))

/***/ }),

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
	
	var _gritter = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@module/gritter\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _gritter2 = _interopRequireDefault(_gritter);
	
	var _dialog = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@module/dialog\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
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
	      return _react3.default.createElement('div', null, _react3.default.createElement(_header2.default, this.props), _react3.default.createElement('div', { className: 'main-container', id: 'main-container' }, _react3.default.createElement('div', { className: 'main-container-inner' }, _react3.default.createElement('a', { className: 'menu-toggler ' + this.state.display, id: 'menu-toggler', href: '#', onClick: this.mediaChange.bind(this) }, _react3.default.createElement('span', { className: 'menu-text' })), _react3.default.createElement(_left2.default, (0, _extends3.default)({ display: this.state.display }, this.props)), _react3.default.createElement('div', { className: 'main-content' }, _react3.default.createElement(_crumbs2.default, this.props), _react3.default.createElement('div', { className: 'page-content clearfix' }, this.props.children)))), this.props.dialog, this.props.gritter.text ? _react3.default.createElement(_gritter2.default, (0, _extends3.default)({}, this.props.gritter, {
	        removeGritter: this.props.removeGritter.bind(this)
	      })) : '', this.props.loading ? _react3.default.createElement(_loading2.default, null) : '');
	    }
	  }]);
	  return Common;
	}(_react3.default.Component));
	
	exports.default = Common;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(250)(module)))

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
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
	
	var _user = __webpack_require__(707);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _storage = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../../tools/storage\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _cookie = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../../tools/cookie\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var _components = {
	  Header: {
	    displayName: 'Header'
	  }
	};
	
	var _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/tongxiang/onemt/myGit-demo/appcenter-mgr-web/static/js/controller/component/common/header.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/tongxiang/onemt/myGit-demo/appcenter-mgr-web/static/js/controller/component/common/header.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformHmrLibIndexJs2(_UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var Header = _wrapComponent('Header')(function (_React$Component) {
	  (0, _inherits3.default)(Header, _React$Component);
	
	  function Header(props) {
	    (0, _classCallCheck3.default)(this, Header);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));
	
	    _this.state = {
	      isShow: 0
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(Header, [{
	    key: 'exit',
	    value: function exit(event) {
	      _cookie2.default.remove('token');
	    }
	  }, {
	    key: 'changeLang',
	    value: function changeLang(value, event) {}
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      var _self = this;
	      var param = this.state.isShow ? 0 : 1;
	      this.setState({
	        isShow: param
	      });
	      var fn = function fn() {
	        _self.setState({
	          isShow: 0
	        });
	        window.removeEventListener('click', fn);
	      };
	      param ? window.addEventListener('click', fn, false) : window.removeEventListener('click', fn);
	      event.preventDefault();
	      event.stopPropagation();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var uap = _storage2.default.get('uapSsoUrl') + '/logout?service=' + window.location.origin;
	      return _react3.default.createElement('div', { className: 'navbar navbar-default' }, _react3.default.createElement('div', { className: 'navbar-container' }, _react3.default.createElement('div', { className: 'navbar-header pull-left' }, _react3.default.createElement('a', { href: '#', className: 'navbar-brand' }, _react3.default.createElement('small', null, _react3.default.createElement('i', { className: 'icon-leaf' }), title))), _react3.default.createElement('div', { className: 'navbar-header pull-right' }, _react3.default.createElement('ul', { className: 'nav ace-nav' }, _react3.default.createElement('li', { className: this.state.isShow ? 'light-blue open' : 'light-blue' }, _react3.default.createElement('a', { href: '#', onClick: this.handleChange.bind(this) }, _react3.default.createElement('img', { className: 'nav-user-photo', src: _user2.default, alt: 'linjie\'s Photo' }), _react3.default.createElement('span', { className: 'user-info' }, _react3.default.createElement('small', null, '\u6B22\u8FCE,'), this.props.user.name), _react3.default.createElement('i', { className: 'icon-caret-down' })), _react3.default.createElement('ul', { className: 'user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close' }, _react3.default.createElement('li', null, _react3.default.createElement('a', { href: '#', onClick: this.changeLang.bind(this, 'cn') }, _react3.default.createElement('i', { className: 'icon-circle' }), '\u4E2D\u6587')), _react3.default.createElement('li', { className: 'divider' }), _react3.default.createElement('li', null, _react3.default.createElement('a', { href: uap, onClick: this.exit.bind(this) }, _react3.default.createElement('i', { className: 'icon-off' }), '\u9000\u51FA'))))))));
	    }
	  }]);
	  return Header;
	}(_react3.default.Component));
	
	exports.default = Header;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(250)(module)))

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBoRXhpZgAASUkqAAgAAAAEABoBBQABAAAAPgAAABsBBQABAAAARgAAACgBAwABAAAAAgAAADEBAgASAAAATgAAAAAAAABgAAAAAQAAAGAAAAABAAAAUGFpbnQuTkVUIHYzLjUuMTAA/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAJAAkAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+pLu4itbWa4ncJFEhd2JwAAMk15dd/EK9vJP9ASO3gbIQkBnYepz09cV0fxemmg+H+pNA20sYkY/7LSKCPxBI/GvFPA8dxq+t/2TbkqzAPvC8RjuT+lAHbx+OtXstSNss/2hWUMTOA2PptxxXpHhfXU1uz3MgiuV+/HnP4j2rz3xJ4Tt9JC3vmySMV8tnwAAfWrXw8kb/hIIAxAQwSIDyCT8pAPr3/KgD1HAopaKAOW+Kelzax4KvYLQO06FJlVf4trAkY78ZwPXFYng3Rm0OC2fT58W9wqb0eFNxzjOWwGz7Hjius1XxDbWReOJWuJ1JDLGQNh9zXGaDq1xLK1s8bI8cxkiLtvLqTnqAckemKAOtXSJri6mXUrua5t2+UQMFEZH0UD26+h9a870yKTTvGX2eOfCWt4QBu3MsQPAOf8AZIGfQ16YLxlRZpQoJQkqVYNx3wQDj8K8f0K11Aarf6hq4VL2a5+0YjbIXLMcZ7joPpQB7TBqltNGHBYA9iKK87a8eDCIzbcZGDRQBaaMGQKScEnPNNvNMt2QuA6sD1VsdBxRRQBFbySx2L4lc/Kc5749aryKBPOo6Kigfh0oooAS15gXPOOKKKKAP//Z"

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
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
	
	var _lodash = __webpack_require__(249);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var _components = {
	  ChildrenLi: {
	    displayName: 'ChildrenLi'
	  },
	  Left: {
	    displayName: 'Left'
	  }
	};
	
	var _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/tongxiang/onemt/myGit-demo/appcenter-mgr-web/static/js/controller/component/common/left.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/tongxiang/onemt/myGit-demo/appcenter-mgr-web/static/js/controller/component/common/left.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformHmrLibIndexJs2(_UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var ChildrenLi = _wrapComponent('ChildrenLi')(function (_React$Component) {
	  (0, _inherits3.default)(ChildrenLi, _React$Component);
	
	  function ChildrenLi(props) {
	    (0, _classCallCheck3.default)(this, ChildrenLi);
	    return (0, _possibleConstructorReturn3.default)(this, (ChildrenLi.__proto__ || (0, _getPrototypeOf2.default)(ChildrenLi)).call(this, props));
	  }
	
	  (0, _createClass3.default)(ChildrenLi, [{
	    key: 'render',
	    value: function render() {
	      var styleCss = this.props.status ? { display: 'block' } : { display: 'none' };
	
	      return _react3.default.createElement('ul', { className: 'submenu', style: styleCss }, this.props.data.map(function (items, i) {
	
	        var reg = new RegExp('^#\/' + items.url + '(\/.+)*\\?');
	        var classValue = reg.test(window.location.hash) ? 'active' : '';
	
	        return _react3.default.createElement('li', { key: i, className: classValue }, _react3.default.createElement('a', { href: '#/' + items.url }, _react3.default.createElement('i', { className: 'menu-icon fa fa-caret-right' }), items.name), _react3.default.createElement('b', { className: 'arrow' }));
	      }));
	    }
	  }]);
	  return ChildrenLi;
	}(_react3.default.Component));
	
	var Left = _wrapComponent('Left')(function (_React$Component2) {
	  (0, _inherits3.default)(Left, _React$Component2);
	
	  function Left(props) {
	    (0, _classCallCheck3.default)(this, Left);
	
	    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Left.__proto__ || (0, _getPrototypeOf2.default)(Left)).call(this, props));
	
	    _this2.state = {
	      min: 0,
	      display: ''
	    };
	    return _this2;
	  }
	
	  (0, _createClass3.default)(Left, [{
	    key: 'handleToggle',
	    value: function handleToggle(event) {
	      var _li = event.currentTarget.parentNode;
	      if (_li.className.indexOf('open') == -1) {
	        _lodash2.default.forEach(_li.parentNode.childNodes, function (items) {
	          items.className = items.className.replace('open', '');
	          _lodash2.default.forEach(items.childNodes, function (val) {
	            if (val.tagName.toLowerCase() === 'ul') {
	              val.style.display = 'none';
	            }
	          });
	        });
	        _li.className += ' open';
	        _lodash2.default.forEach(_li.childNodes, function (items) {
	          if (items.tagName.toLowerCase() === 'ul') {
	            items.style.display = 'block';
	          }
	        });
	      } else {
	        _li.className = _li.className.replace('open', '');
	        _lodash2.default.forEach(_li.childNodes, function (items) {
	          if (items.tagName.toLowerCase() === 'ul') {
	            items.style.display = 'none';
	          }
	        });
	      }
	      event.preventDefault();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'changeMin',
	    value: function changeMin() {
	      this.setState({
	        min: this.state.min ? 0 : 1
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var _self = this,
	          minClass = void 0,
	          iconClass = void 0;
	
	      if (this.state.min) {
	        minClass = 'sidebar menu-min ' + this.props.display;
	        iconClass = 'icon-double-angle-right';
	      } else {
	        minClass = 'sidebar ' + this.props.display;
	        iconClass = 'icon-double-angle-left';
	      }
	      var nav = this.props.nav;
	      return _react3.default.createElement('div', { className: minClass }, _react3.default.createElement('ul', { className: 'nav nav-list' }, nav.map(function (items, i) {
	        var reg = new RegExp('^#\/' + items.url);
	        var classValue = reg.test(window.location.hash) ? 'open active' : '';
	
	        if (items.children && items.children.length > 0) {
	          items.children = items.children.filter(function (menu) {
	            return menu.type == 'page';
	          });
	          return _react3.default.createElement('li', { key: i, className: classValue }, _react3.default.createElement('a', { href: '#/' + items.url, onClick: _this3.handleToggle }, _react3.default.createElement('i', { className: 'icon-fire' }), _react3.default.createElement('span', { className: 'menu-text' }, ' ', items.name, ' '), _react3.default.createElement('b', { className: 'arrow icon-angle-down' })), _react3.default.createElement(ChildrenLi, { data: items.children, status: classValue }));
	        } else {
	          return _react3.default.createElement('li', { key: i }, _react3.default.createElement('a', { href: '#/' + items.url }, _react3.default.createElement('i', { className: 'icon-fire' }), _react3.default.createElement('span', { className: 'menu-text' }, ' ', items.name, ' ')));
	        }
	      })), _react3.default.createElement('div', { className: 'sidebar-collapse', onClick: this.changeMin.bind(this) }, _react3.default.createElement('i', { className: iconClass })));
	    }
	  }]);
	  return Left;
	}(_react3.default.Component));
	
	exports.default = Left;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(250)(module)))

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(381);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(384);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
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
	
	var _fetch = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../tools/fetch\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _fetch2 = _interopRequireDefault(_fetch);
	
	var _storage = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../../tools/storage\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _storage2 = _interopRequireDefault(_storage);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var _components = {
	  Crumbs: {
	    displayName: 'Crumbs'
	  }
	};
	
	var _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/tongxiang/onemt/myGit-demo/appcenter-mgr-web/static/js/controller/component/common/crumbs.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/tongxiang/onemt/myGit-demo/appcenter-mgr-web/static/js/controller/component/common/crumbs.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformHmrLibIndexJs2(_UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var Crumbs = _wrapComponent('Crumbs')(function (_React$Component) {
	  (0, _inherits3.default)(Crumbs, _React$Component);
	
	  function Crumbs(props) {
	    (0, _classCallCheck3.default)(this, Crumbs);
	
	    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Crumbs.__proto__ || (0, _getPrototypeOf2.default)(Crumbs)).call(this, props));
	
	    var val = _storage2.default.get('key');
	    var appid = _storage2.default.get('appid');
	    if (val == null) {
	      val = 1;
	    }
	    if (appid == null) {
	      appid = 100000168;
	    }
	    _storage2.default.set('key', val);
	    _storage2.default.set('appid', appid);
	
	    _this2.state = {
	      value: val,
	      appId: appid,
	      projects: []
	    };
	    return _this2;
	  }
	
	  (0, _createClass3.default)(Crumbs, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this = this;
	      (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	        var val;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return (0, _fetch2.default)({
	                  url: '/sys/getProjectAppList',
	                  method: 'POST',
	                  param: {}
	                });
	
	              case 2:
	                val = _context.sent;
	
	                if (val.rtncode == 'SUCCESS') {
	                  _this.setState({
	                    projects: val.rspdata.apps
	                  });
	                } else {}
	
	              case 4:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }))();
	    }
	  }, {
	    key: 'sendAjax',
	    value: function sendAjax(event) {
	      var val = event.target.value;
	      _storage2.default.set('key', val);
	      this.state.projects.map(function (project, i) {
	        if (project.id == val) {
	          _storage2.default.set('appid', project.code);
	        }
	      });
	      window.location.reload();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement('div', { className: 'breadcrumbs' }, _react3.default.createElement('ul', { className: 'breadcrumb' }, _react3.default.createElement('li', null, _react3.default.createElement('i', { className: 'icon-home home-icon' }), _react3.default.createElement('a', { href: '#' }, '\u9996\u9875')), _react3.default.createElement('li', { className: 'active' }, this.props.route ? this.props.route.name : '')), _react3.default.createElement('div', { className: 'nav-search', id: 'nav-search' }, _react3.default.createElement('form', { className: 'form-search' }, _react3.default.createElement('select', { className: 'form-control',
	        onChange: this.sendAjax.bind(this), value: this.state.value }, this.state.projects.map(function (items, i) {
	        return _react3.default.createElement('option', { value: items.id, key: i }, items.name);
	      })))));
	    }
	  }]);
	  return Crumbs;
	}(_react3.default.Component));
	
	exports.default = Crumbs;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(250)(module)))

/***/ }),

/***/ 710:
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
	  Loading: {
	    displayName: "Loading"
	  }
	};
	
	var _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: "/Users/tongxiang/onemt/myGit-demo/appcenter-mgr-web/static/js/controller/component/common/loading.js",
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: "/Users/tongxiang/onemt/myGit-demo/appcenter-mgr-web/static/js/controller/component/common/loading.js",
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformHmrLibIndexJs2(_UsersTongxiangOnemtMyGitDemoAppcenterMgrWebNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var Loading = _wrapComponent("Loading")(function (_React$Component) {
	  (0, _inherits3.default)(Loading, _React$Component);
	
	  function Loading(props) {
	    (0, _classCallCheck3.default)(this, Loading);
	    return (0, _possibleConstructorReturn3.default)(this, (Loading.__proto__ || (0, _getPrototypeOf2.default)(Loading)).call(this, props));
	  }
	
	  (0, _createClass3.default)(Loading, [{
	    key: "render",
	    value: function render() {
	      return _react3.default.createElement("div", { className: "loading skin-blue" }, _react3.default.createElement("div", { className: "loading-con" }, _react3.default.createElement("div", { className: "loading-one" }, _react3.default.createElement("span", null)), _react3.default.createElement("div", { className: "loading-two" }, _react3.default.createElement("span", null)), _react3.default.createElement("div", { className: "loading-three" }, _react3.default.createElement("span", null)), _react3.default.createElement("span", { className: "loading-left" }), _react3.default.createElement("span", { className: "loading-top" }), _react3.default.createElement("span", { className: "loading-right" }), _react3.default.createElement("span", { className: "loading-bottom" })));
	    }
	  }]);
	  return Loading;
	}(_react3.default.Component));
	
	exports.default = Loading;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(250)(module)))

/***/ })

})
//# sourceMappingURL=1.d8806275e43785b6fcd1.hot-update.js.map