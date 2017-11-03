import React from 'react';
import { 
  Router, 
  Route, 
  IndexRoute,
  hashHistory, 
} from 'react-router';
import { Provider } from 'react-redux';
import { 
  syncHistoryWithStore, 
} from 'react-router-redux';

import Store from './store';
const history = syncHistoryWithStore(hashHistory, Store);

/*
	前端模块引入
*/
import Demo from './component/demo/index'; //首页

/*
	前端路由配置	
*/


let cacheUrl = '';

class router extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return(
  	  <Provider store={Store}>
    	  <Router history={history}>
          {<Route path="/" name="demo" component={ Demo } />}
        </Router>
  	  </Provider>
  	)
  }
}

export default router;