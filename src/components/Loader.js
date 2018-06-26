import React from 'react';
import '../App.css';
import {list1, list2, list3, list4} from '../list';
import base from '../base'

class Loader extends React.Component{
  state = {
    list1: {},
    list2: {},
    list3: {},
    list4: {}
  };
  componentDidMount(){
    this.refList1 = base.syncState(`inventory/list1`, {
        context: this, 
        state: 'list1'
    });
    this.refList2 = base.syncState(`inventory/list2`, {
        context: this, 
        state: 'list2'
      });
    this.refList3 = base.syncState(`inventory/list3`, {
        context: this, 
        state: 'list3'
    });
    this.refList4 = base.syncState(`inventory/list4`, {
        context: this, 
        state: 'list4'
    });
  }
  componentWillUnmount(){
    base.removeBinding(this.refList1);
    base.removeBinding(this.refList2);
    base.removeBinding(this.refList3);
    base.removeBinding(this.refList4);
  }
  loadSampleItems = () => {
    // Set the new item object to state
    this.setState({
      list1,
      list2,
      list3,
      list4
    })
  }
  render(){
      return (
        <h1>Loader</h1>
      )
  }
}

export default Loader;