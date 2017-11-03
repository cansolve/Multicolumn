import React from 'react';

import Dispatch from '@dispatch';
import Common from '../common/common';


class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.initState();
  }
  render() {
    return (
      <Common {...this.props}>

      </Common>
    )
  }
}

export default Dispatch(Index);