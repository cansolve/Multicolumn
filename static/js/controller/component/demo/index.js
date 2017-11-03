import React from 'react';
import Dispatch from '@dispatch';
import Multicolumn from '@module/multicolumn';
import Common from '../common/common';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
   
    var data = [
      {
        id: 1,
        name: '数据1'
      },
      {
        id: 2,
        name: '数据2',
        hasRule:'0'
      },
      {
        id: 3,
        name: '数据3'
      },
      {
        id: 4,
        name: '数据44'
      },
      {
        id: 5,
        name: '数据55555'
      },
    ];
    var defaultData = [
      {
        id: 7,
        name: '默认数据1'
      },
      {
        id: 8,
        name: '默认数据2'
      },
      {
        id: 9,
        name: '默认数据3'
      }
    ];
    
    return (
      <Common {...this.props } >
        <Multicolumn
          data={data}
          size={['50%',700]}
          titName='管理平台'
          defaultValue={defaultData}
          onChange={(val) => { }}
        />
        
      </Common >
    )
  }
}

export default Dispatch(Index);