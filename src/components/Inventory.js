import React from 'react';
import '../App.css';
import AddItemForm from './AddItemForm'
import foodItems from '../items'
import Item from './Item';
import base from '../base'

class Inventory extends React.Component{
  state = {
    items: {}
  };
  componentDidMount(){
    this.ref = base.syncState(`${this.props.match.path}/items`, {
      context: this, 
      state: 'items'
    });
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
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
  render(){
      return (
        <div className="inventory">
          <h1>Hello I'm Inventory !</h1>
          <div className="inventory-form">
          <AddItemForm addItem={this.addItem}/>
          <button onClick={this.loadSampleItems}>Load Items</button>
          </div>
          <div className="menu">
          <div className="main-menu">
              {Object.keys(this.state.items).map(key => <Item key={key} details={this.state.items[key]} />)}
            </div>
            <div className="main-inventory">
              {Object.keys(this.state.items).map(key => <Item key={key} details={this.state.items[key]} />)}
            </div>
          </div>


        </div>
      )
  }
}

export default Inventory;