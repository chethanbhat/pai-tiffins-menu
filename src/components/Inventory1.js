import React from 'react';
import '../App.css';
import AddItemForm from './AddItemForm'
import EditItemForm from './EditItemForm'
import items from '../items';
import base from '../base'

class Inventory extends React.Component{
  state = {
    list1: {}
  };
  categories = {
    'dosas': 'Dosas',
    'idlis': 'Idlis',
    'rice': 'Rice',
    'snacks': 'Snacks',
    'combos': 'Combos'
  };
  componentDidMount(){
    this.refItems = base.syncState(`inventory/list1`, {
      context: this, 
      state: 'list1'
    });
  }
  componentWillUnmount(){
    base.removeBinding(this.refItems);
  }
  addItem = (item) => {
      const list1 = {...this.state.list1};
      const keyNum = Object.keys(items).length+2;
      list1[`item${keyNum}`] = item 
      this.setState({list1});
  };
  editItem = (key, updateditem) => {
    // Take a copy of existing state
    
    const list1 = {...this.state.list1};

    // Add new item to the items
    list1[key] = updateditem
    
    // Set the new item object to state
    this.setState({
        list1
    })

  };
  render(){
      return (
        <div className="inventory">
          <h3 className="title">South Indian Inventory !</h3>
          <div className="addItemForm">
          <AddItemForm addItem={this.addItem} categories={this.categories}/>
          <h3 className="title">Edit Existing Items</h3>

          <div className="form-category">
            <h3>Dosas</h3>
            {Object.keys(this.state.list1).map(key => this.state.list1[key].category === "dosas" ? <EditItemForm key={key} index={key} details={this.state.list1[key]} editItem={this.editItem} /> : null)}
          </div>
          <div className="form-category">
            <h3>Idlis</h3>
            {Object.keys(this.state.list1).map(key => this.state.list1[key].category === "idlis" ? <EditItemForm key={key} index={key} details={this.state.list1[key]} editItem={this.editItem} /> : null)}
          </div>
          <div className="form-category">
            <h3>Rice</h3>
            {Object.keys(this.state.list1).map(key => this.state.list1[key].category === "rice" ? <EditItemForm key={key} index={key} details={this.state.list1[key]} editItem={this.editItem} /> : null)}
          </div>
          <div className="form-category">
            <h3>Snacks</h3>
            {Object.keys(this.state.list1).map(key => this.state.list1[key].category === "snacks" ? <EditItemForm key={key} index={key} details={this.state.list1[key]} editItem={this.editItem} /> : null)}
          </div>
          <div className="form-category">
            <h3>Combos / Thali</h3>
            {Object.keys(this.state.list1).map(key => this.state.list1[key].category === "combos" ? <EditItemForm key={key} index={key} details={this.state.list1[key]} editItem={this.editItem} /> : null)}
          </div>

          </div>
        </div>
      )
  }
}

export default Inventory;