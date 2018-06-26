import React from 'react';
import '../App.css';
import AddItemForm from './AddItemForm'
import EditItemForm from './EditItemForm'
import items from '../items';
import base from '../base'

class Inventory extends React.Component{
  state = {
    items: {}
  };
  componentDidMount(){
    this.refItems = base.syncState(`${this.props.match.path}/items`, {
      context: this, 
      state: 'items'
    });
  }
  componentWillUnmount(){
    base.removeBinding(this.refItems);
  }
  addItem = (item) => {
      const items = {...this.state.items};
      const keyNum = Object.keys(items).length+2;
      items[`item${keyNum}`] = item 
      this.setState({items});
      console.log("Added");
  };
  editItem = (key, updateditem) => {
    // Take a copy of existing state
    
    const items = {...this.state.items};

    // Add new item to the items
    items[key] = updateditem
    
    // Set the new item object to state
    this.setState({
      items
    })

  };
  render(){
      return (
        <div className="inventory">
          <h3 className="title">South Indian Inventory !</h3>
          <div className="addItemForm">
          <AddItemForm addItem={this.addItem}/>
          <h3 className="title">Edit Existing Items</h3>

          <div className="form-category">
            <h3>Dosas</h3>
            {Object.keys(this.state.items).map(key => this.state.items[key].category === "dosas" ? <EditItemForm key={key} index={key} details={this.state.items[key]} editItem={this.editItem} /> : null)}
          </div>
          <div className="form-category">
            <h3>Idlis</h3>
            {Object.keys(this.state.items).map(key => this.state.items[key].category === "idlis" ? <EditItemForm key={key} index={key} details={this.state.items[key]} editItem={this.editItem} /> : null)}
          </div>
          <div className="form-category">
            <h3>Rice</h3>
            {Object.keys(this.state.items).map(key => this.state.items[key].category === "rice" ? <EditItemForm key={key} index={key} details={this.state.items[key]} editItem={this.editItem} /> : null)}
          </div>
          <div className="form-category">
            <h3>Snacks</h3>
            {Object.keys(this.state.items).map(key => this.state.items[key].category === "snacks" ? <EditItemForm key={key} index={key} details={this.state.items[key]} editItem={this.editItem} /> : null)}
          </div>
          <div className="form-category">
            <h3>Thali</h3>
            {Object.keys(this.state.items).map(key => this.state.items[key].category === "thali" ? <EditItemForm key={key} index={key} refState={this.state.items} stateCode={2} details={this.state.items[key]} editItem={this.editItem} /> : null)}
          </div>

          </div>
        </div>
      )
  }
}

export default Inventory;