webpackHotUpdate(1,{

/***/ 701:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
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
//# sourceMappingURL=1.1d518e85b766b1e7e687.hot-update.js.map