import React from 'react';
import _ from 'lodash';

class Left extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      display: ''
    }
  }
  
  render() {
    
    return (
      <div className="sidebar ">
        <ul className="nav nav-list">
          
        </ul>

        <div className="sidebar-collapse">
          <i className="icon-double-angle-left"></i>
        </div>
      </div>
    )
  }
}

export default Left;