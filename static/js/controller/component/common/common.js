import React from 'react';

import Header from './header';
import Left from './left';
import Crumbs from './crumbs';
import Loading from './loading';

class Common extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      isPermissions: true
    }
  }
  mediaChange(event) {
    event.preventDefault();
    this.setState({
      display: this.state.display ? '' : 'display'
    })
  }
  componentWillMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <div>
        <Header {...this.props} />
        <div className="main-container" id="main-container">
          <div className="main-container-inner">
            <a className={'menu-toggler ' + this.state.display} id="menu-toggler" href="#" onClick={this.mediaChange.bind(this)}>
              <span className="menu-text"></span>
            </a>
            <Left display={this.state.display} {...this.props} />
            <div className="main-content">
              <Crumbs {...this.props} />
              <div className="page-content clearfix">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}


export default Common;