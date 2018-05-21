import React from 'react';
// import Cuisine from './Cuisine';
// import Food from './Food';
import Item from './Item';
import foodItems from '../items'
import '../App.css';
import base from '../base'

class Menu extends React.Component{
  state = {
    items: {}
  };
  addItem = (item) => {
    // Take a copy of existing state
    const items = {...this.state.items};

    // Add new item to the items
    items[`item${Date.now()}`] = item 

    // Set the new item object to state
    this.setState({
      items: items
    })
  };
  loadSampleItems = () => {
      // Set the new item object to state
      this.setState({
        items: foodItems
      })
  }
  componentDidMount(){
    this.ref = base.syncState(`inventory`, {
      context: this, 
      state: 'items'
    });
    const syncItems = this.ref;
    console.table(syncItems);
    // this.setState({
    //   items: syncItems
    // })
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
    render(){
        return (
          <div className="menu">
            <div className="main-menu">
              {Object.keys(this.state.items).map(key => <Item key={key} details={this.state.items[key]} />)}
            </div>
          </div>
        )
    }
}

export default Menu;