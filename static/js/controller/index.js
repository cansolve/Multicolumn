import React from 'react';
import { render } from 'react-dom';
/*
	前端界面的css样式引用
*/
import '../../font/fontawesome-webfont.woff';
import '../../font/fontawesome-webfont.ttf';
import '../../css/bootstrap.min.css';
import '../../css/font-awesome.min.css';
import '../../css/jquery.gritter.css';
import '../../css/ace.min.css';
import '../../css/ace-rtl.min.css';
import '../../css/ace-skins.min.css';

import '../../scss/index.scss';

/*路由引入*/
import Router from './router';

async function init(){
	render(
	  <Router />,
	  document.getElementById('app')
	);
}

export default init();



