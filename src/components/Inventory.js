import React from 'react';
import '../App.css';
import AddItemForm from './AddItemForm'
import EditItemForm from './EditItemForm'
import {dosas, idlis, snacks, rice} from '../food'
import base from '../base'

class Inventory extends React.Component{
  state = {
    dosas: {},
    idlis: {},
    rice: {},
    snacks: {},
    items: {}
  };
  componentDidMount(){
    this.refIdlis = base.syncState(`${this.props.match.path}/idlis`, {
      context: this, 
      state: 'idlis'
    });
    this.refDosas = base.syncState(`${this.props.match.path}/dosas`, {
      context: this, 
      state: 'dosas'
    });
    this.refSnacks = base.syncState(`${this.props.match.path}/snacks`, {
      context: this, 
      state: 'snacks'
    });
    this.refRice = base.syncState(`${this.props.match.path}/rice`, {
      context: this, 
      state: 'rice'
    });
  }
  componentWillUnmount(){
    base.removeBinding(this.refIdlis);
    base.removeBinding(this.refDosas);
    base.removeBinding(this.refSnacks);
    base.removeBinding(this.refRice);
  }
  addItem = (item, stateCode=1, category=null) => {
    // Set the new item object to state
    let items, keyNum;
    switch(stateCode){
      case 1:   
                items = {...this.state.items};
                keyNum = Object.keys(items).length;
                items[`item${keyNum}`] = item 
                this.setState({'idlis' : items});
                break;
      case 2:   
                items = {...this.state.items};
                keyNum = Object.keys(items).length;
                items[`item${keyNum}`] = item 
                this.setState({'dosas' : items});
                break;
      case 3:   
                items = {...this.state.items};
                keyNum = Object.keys(items).length;
                items[`item${keyNum}`] = item 
                this.setState({'rice' : items});
                break;
      case 4:   
                items = {...this.state.items};
                keyNum = Object.keys(items).length;
                items[`item${keyNum}`] = item 
                this.setState({'snacks' : items});
                break;
      default:  break;
    }
  };
  editItem = (key, updateditem, refState, stateCode) => {
    // Take a copy of existing state
    
    const items = refState;

    // Add new item to the items
    items[key] = updateditem
    
    switch(stateCode){
      case 1:   this.setState({'idlis' : items});
                break;
      case 2:   this.setState({'dosas' : items});
                break;
      case 3:   this.setState({'rice' : items});
                break;
      case 4:   this.setState({'snacks' : items});
                break;
      default:  break;
    }

    // Set the new item object to state
    this.setState({
      items
    })

  };
  loadSampleItems = () => {
    // Set the new item object to state
    this.setState({
      dosas, idlis, rice, snacks
    })
  }
  render(){
      return (
        <div className="inventory">
          <h3 className="title">South Indian Inventory !</h3>
          <div className="addItemForm">
          <AddItemForm addItem={this.addItem}/>
          <h3 className="title">Edit Existing Items</h3>

          <div className="form-category">
          <h3>Dosas</h3>
          {Object.keys(this.state.dosas).map(key => <EditItemForm key={key} index={key} refState={this.state.dosas} stateCode={2} details={this.state.dosas[key]} editItem={this.editItem} />)}
          </div>

          <div className="form-category">
          <h3>Idlis</h3>
          {Object.keys(this.state.idlis).map(key => <EditItemForm key={key} index={key} refState={this.state.idlis} stateCode={1} details={this.state.idlis[key]} editItem={this.editItem} />)}
          </div>

          <div className="form-category">
          <h3>Rice</h3>
          {Object.keys(this.state.rice).map(key => <EditItemForm key={key} index={key} refState={this.state.rice} stateCode={3} details={this.state.rice[key]} editItem={this.editItem} />)}
          </div>

          <div className="form-category">
          <h3>Snacks</h3>
          {Object.keys(this.state.snacks).map(key => <EditItemForm key={key} index={key} refState={this.state.snacks} stateCode={4} details={this.state.snacks[key]} editItem={this.editItem} />)}
          </div>

          </div>
        </div>
      )
  }
}

export default Inventory;