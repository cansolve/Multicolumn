webpackHotUpdate(1,{

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _regenerator = __webpack_require__(381);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(384);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _fetch = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@fetch\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _fetch2 = _interopRequireDefault(_fetch);
	
	var _storage = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../tools/storage\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _storage2 = _interopRequireDefault(_storage);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var actions = {
	    initState: function initState() {
	        //初始化，加载菜单 和 用户信息
	        return {
	            type: 'initState'
	        };
	    },
	    //添加loading页面效果
	    addLoading: function addLoading() {
	        return {
	            type: 'addLoading'
	        };
	    },
	    //移除loading页面效果
	    removeLoading: function removeLoading() {
	        return {
	            type: 'removeLoading'
	        };
	    },
	    //添加gritter提示
	    addGritter: function addGritter(options) {
	        return {
	            type: 'addGritter',
	            options: options
	        };
	    },
	    //错误提示
	    errorGritter: function errorGritter(options, pos) {
	
	        if (options.rtncode === 'SYSTEM_ERROR') {
	            // alert('系统错误~请联系系统管理员！');
	        }
	        return {
	            type: 'errorGritter',
	            options: {
	                text: options.rtnmsg,
	                position: pos ? 'center' : ''
	            }
	        };
	    },
	    //移除gritter提示
	    removeGritter: function removeGritter() {
	        return {
	            type: 'removeGritter'
	        };
	    },
	    //提示dialog弹出框
	    addDialog: function addDialog(options) {
	        return {
	            type: 'addDialog',
	            options: options
	        };
	    },
	    //移除dialog弹出框
	    removeDialog: function removeDialog() {
	        return {
	            type: 'removeDialog'
	        };
	    },
	    loadData: function loadData(url) {
	        return function () {
	            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
	                var param, commonProjectId, val;
	                return _regenerator2.default.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                dispatch(actions.addLoading());
	
	                                param = getState().reducers.param;
	                                commonProjectId = _storage2.default.get('key');
	
	                                param.appId = commonProjectId;
	                                _context.next = 6;
	                                return (0, _fetch2.default)({
	                                    url: url,
	                                    method: 'POST',
	                                    param: param
	                                });
	
	                            case 6:
	                                val = _context.sent;
	
	                                dispatch(actions.removeLoading());
	
	                                if (val.rtncode == "SUCCESS") {
	                                    dispatch({
	                                        type: 'loadData',
	                                        result: val
	                                    });
	                                } else {
	                                    dispatch(actions.errorGritter(val));
	                                }
	
	                            case 9:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, undefined);
	            }));
	
	            return function (_x, _x2) {
	                return _ref.apply(this, arguments);
	            };
	        }();
	    },
	    updateState: function updateState(state) {
	        return {
	            type: 'updateState',
	            state: state
	        };
	    }
	};
	
	exports.default = actions;

/***/ })

})
//# sourceMappingURL=1.5ed45c6ecb3cf6e62159.hot-update.js.map