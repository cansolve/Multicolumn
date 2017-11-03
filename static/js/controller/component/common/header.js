import React from 'react';
import user from '../../../../image/user.jpg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: 0
    }
  }
  
  componentDidMount() { }
  componentWillUnmount() { }
  render() {
    return (
      <div className="navbar navbar-default">
        <div className="navbar-container">
          <div className="navbar-header pull-left">
            <a href="#" className="navbar-brand">
              <small>
                <i className="icon-leaf"></i>
                {title}
              </small>
            </a>
          </div>
          <div className="navbar-header pull-right">
            <ul className="nav ace-nav">
              <li className="light-blue open">
                <a href="#">
                  <img className="nav-user-photo" src={user} alt="Photo" />
                  <span className="user-info">
                    <small>欢迎,</small>admin
                  </span>
                  <i className="icon-caret-down"></i>
                </a>

              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


export default Header;