import React from 'react';
import '../App.css';
import AddItemForm from './AddItemForm'
import EditItemForm from './EditItemForm'
import base from '../base'

class Inventory extends React.Component{
  state = {
    list2: {}
  };
  categories = {
    'starters': 'Starters',
    'breads': 'Breads',
    'gravy': 'Gravy',
    'rice': 'Rice',
    'noodles': 'Noodles',
    'combos': 'Combos'
  };
  componentDidMount(){
    this.refItems = base.syncState(`inventory/list2`, {
      context: this, 
      state: 'list2'
    });
  }
  componentWillUnmount(){
    base.removeBinding(this.refItems);
  }
  addItem = (item) => {
      const list2 = {...this.state.list2};
      const keyNum = Object.keys(list2).length+2;
      list2[`item${keyNum}`] = item 
      this.setState({list2});
  };
  editItem = (key, updateditem) => {
    // Take a copy of existing state
    
    const list2 = {...this.state.list2};

    // Add new item to the items
    list2[key] = updateditem
    
    // Set the new item object to state
    this.setState({
        list2
    })

  };
  render(){
      return (
        <div className="inventory">
          <h3 className="title">North & Chinese Inventory !</h3>
          <div className="addItemForm">
          <AddItemForm addItem={this.addItem} categories={this.categories}/>
          <h3 className="title">Edit Existing Items</h3>

          <div className="form-category">
            <h3>Starters</h3>
            {Object.keys(this.state.list2).map(key => this.state.list2[key].category === "starters" ? <EditItemForm key={key} index={key} details={this.state.list2[key]} editItem={this.editItem} /> : null)}
          </div>
          <div className="form-category">
            <h3>Indian Breads</h3>
            {Object.keys(this.state.list2).map(key => this.state.list2[key].category === "breads" ? <EditItemForm key={key} index={key} details={this.state.list2[key]} editItem={this.editItem} /> : null)}
          </div>
          <div className="form-category">
            <h3>Gravy</h3>
            {Object.keys(this.state.list2).map(key => this.state.list2[key].category === "gravy" ? <EditItemForm key={key} index={key} details={this.state.list2[key]} editItem={this.editItem} /> : null)}
          </div>
          <div className="form-category">
            <h3>Rice</h3>
            {Object.keys(this.state.list2).map(key => this.state.list2[key].category === "rice" ? <EditItemForm key={key} index={key} details={this.state.list2[key]} editItem={this.editItem} /> : null)}
          </div>
          <div className="form-category">
            <h3>Noodles</h3>
            {Object.keys(this.state.list2).map(key => this.state.list2[key].category === "snacks" ? <EditItemForm key={key} index={key} details={this.state.list2[key]} editItem={this.editItem} /> : null)}
          </div>
          <div className="form-category">
            <h3>Combos</h3>
            {Object.keys(this.state.list2).map(key => this.state.list2[key].category === "combos" ? <EditItemForm key={key} index={key} details={this.state.list2[key]} editItem={this.editItem} /> : null)}
          </div>

          </div>
        </div>
      )
  }
}

export default Inventory;