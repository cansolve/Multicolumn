import React from 'react';

class Crumbs extends React.Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount() {
    
  }
  sendAjax(event) {
    
  }
  render() {
    return (
      <div className="breadcrumbs">
        <ul className="breadcrumb">
          <li>
            <i className="icon-home home-icon"></i>
            <a href="#">首页</a>
          </li>
          <li className="active">
          </li>
        </ul>
        <div className="nav-search" id="nav-search">
        <form className="form-search">
          <select className="form-control">
            
          </select>
        </form>
      </div>
      </div>
    )
  }
}

export default Crumbs;