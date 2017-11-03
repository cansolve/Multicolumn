webpackHotUpdate(1,{

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.reducers = undefined;
	
	var _extends2 = __webpack_require__(692);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _assign = __webpack_require__(693);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var initParam = {
		conditions: {},
		orders: [],
		pageIndex: 0,
		isFirstLoad: true,
		pageSize: 10
	};
	var initialState = {
		nav: [],
		user: {},
		loading: false,
		data: [],
		count: 0,
		param: (0, _assign2.default)({}, initParam),
		dialog: '',
		gritter: {},
		rspdata: {}
	};
	
	var functions = {
		initState: function initState(state, action) {
			return (0, _extends3.default)({}, state, {
				param: (0, _assign2.default)({}, initParam),
				data: [],
				count: 0,
				url: '',
				rspdata: {}
	
			});
		},
		addLoading: function addLoading(state, action) {
			return (0, _extends3.default)({}, state, {
				loading: true
			});
		},
		removeLoading: function removeLoading(state, action) {
			return (0, _extends3.default)({}, state, {
				loading: false
			});
		},
		addGritter: function addGritter(state, action) {
			var result = action.options;
	
			return (0, _extends3.default)({}, state, {
				gritter: {
					text: result.text,
					position: 'center'
				}
			});
		},
		removeGritter: function removeGritter(state, action) {
			return (0, _extends3.default)({}, state, {
				gritter: {}
			});
		},
		errorGritter: function errorGritter(state, action) {
			var result = action.options;
			return (0, _extends3.default)({}, state, {
				gritter: {
					text: result.text,
					position: 'center'
				}
			});
		},
		addDialog: function addDialog(state, action) {
			return (0, _extends3.default)({}, state, {
				dialog: action.options
			});
		},
		removeDialog: function removeDialog(state, action) {
			return (0, _extends3.default)({}, state, {
				dialog: ''
			});
		},
		loadData: function loadData(state, action) {
			return (0, _extends3.default)({}, state, {
				rspdata: action.result.rspdata,
				count: action.result.rspdata.count,
				data: action.result.rspdata.list
			});
		},
		updateState: function updateState(state, action) {
			return (0, _extends3.default)({}, state, action.state);
		}
	};
	
	function reducers() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _assign2.default)({}, initialState);
		var action = arguments[1];
	
		switch (action.type) {
			case 'initState':
				state = functions.initState(state, action);
				break;
			case 'addLoading':
				state = functions.addLoading(state, action);
				break;
			case 'removeLoading':
				state = functions.removeLoading(state, action);
				break;
			case 'addGritter':
				state = functions.addGritter(state, action);
				break;
			case 'errorGritter':
				state = functions.errorGritter(state, action);
				break;
			case 'removeGritter':
				state = functions.removeGritter(state, action);
				break;
			case 'addDialog':
				state = functions.addDialog(state, action);
				break;
			case 'removeDialog':
				state = functions.removeDialog(state, action);
				break;
			case 'loadData':
				state = functions.loadData(state, action);
				break;
			case 'updateState':
				state = functions.updateState(state, action);
				break;
			default:
				break;
		}
	
		return state;
	}
	
	exports.reducers = reducers;

/***/ })

})
//# sourceMappingURL=1.e8b60945974db2341d6d.hot-update.js.map