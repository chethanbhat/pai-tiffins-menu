import React from 'react';
import '../App.css';
import AddItemForm from './AddItemForm'
import EditItemForm from './EditItemForm'
import base from '../base'

class Inventory extends React.Component{
  state = {
    list3: {}
  };
  categories = {
    'hot': 'Hot Beverages',
    'cold': 'Cold Beverages',
    'juice': 'Juice / Milkshakes',
    'desserts': 'Desserts',
    'ic': 'Ice Creams'
  };
  componentDidMount(){
    this.refItems = base.syncState(`inventory/list3`, {
      context: this, 
      state: 'list3'
    });
  }
  componentWillUnmount(){
    base.removeBinding(this.refItems);
  }
  addItem = (item) => {
      const list3 = {...this.state.list3};
      const keyNum = Object.keys(list3).length+2;
      list3[`item${keyNum}`] = item 
      this.setState({list3});
  };
  editItem = (key, updateditem) => {
    // Take a copy of existing state
    
    const list3 = {...this.state.list3};

    // Add new item to the items
    list3[key] = updateditem
    
    // Set the new item object to state
    this.setState({
        list3
    })

  };
  render(){
      return (
        <div className="inventory">
          <h3 className="title">Beverages & Desserts Inventory !</h3>
          <div className="addItemForm">
          <AddItemForm addItem={this.addItem} categories={this.categories}/>
          <h3 className="title">Edit Existing Items</h3>

          <div className="form-category">
            <h3>Hot Beverages</h3>
            {Object.keys(this.state.list3).map(key => this.state.list3[key].category === "hot" ? <EditItemForm key={key} index={key} details={this.state.list3[key]} editItem={this.editItem} /> : null)}
          </div>
          <div className="form-category">
            <h3>Juice / Milkshakes</h3>
            {Object.keys(this.state.list3).map(key => this.state.list3[key].category === "juice" ? <EditItemForm key={key} index={key} details={this.state.list3[key]} editItem={this.editItem} /> : null)}
          </div>
          <div className="form-category">
            <h3>Cold Beverages</h3>
            {Object.keys(this.state.list3).map(key => this.state.list3[key].category === "cold" ? <EditItemForm key={key} index={key} details={this.state.list3[key]} editItem={this.editItem} /> : null)}
          </div>
          <div className="form-category">
            <h3>Desserts</h3>
            {Object.keys(this.state.list3).map(key => this.state.list3[key].category === "desserts" ? <EditItemForm key={key} index={key} details={this.state.list3[key]} editItem={this.editItem} /> : null)}
          </div>
          <div className="form-category">
            <h3>Ice Creams</h3>
            {Object.keys(this.state.list3).map(key => this.state.list3[key].category === "ic" ? <EditItemForm key={key} index={key} details={this.state.list3[key]} editItem={this.editItem} /> : null)}
          </div>

          </div>
        </div>
      )
  }
}

export default Inventory;