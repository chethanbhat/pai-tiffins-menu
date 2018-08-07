import React from 'react';
import '../App.css';
import AddItemForm from './AddItemForm'
import EditItemForm from './EditItemForm'
import base, {firebaseApp} from '../base'

class Inventory extends React.Component{
  state = {
    list4: {}
  };
  categories = {
    'chaats': 'Chaats',
    'continental': 'Continental',
  };
  componentDidMount(){
    this.refItems = base.syncState(`inventory/list4`, {
      context: this, 
      state: 'list4'
    });
  }
  componentWillUnmount(){
    base.removeBinding(this.refItems);
  }
  addItem = (item) => {
      const list4 = {...this.state.list4};
      const keyNum = Object.keys(list4).length+2;
      list4[`item${keyNum}`] = item 
      this.setState({list4});
  };
  editItem = (key, updateditem) => {
    // Take a copy of existing state
    
    const list4 = {...this.state.list4};

    // Add new item to the items
    list4[key] = updateditem
    
    // Set the new item object to state
    this.setState({
        list4
    })  

  };
  signout = () => {
    firebaseApp.auth().signOut();
  };
  render(){
      return (
        <div className="inventory">
          <div className="menu-bar">
            <h3>Welcome User</h3>
            <button className="btn btn-danger nav-btns" onClick={this.signout}>Sign Out</button>
          </div>        
          <h3 className="title">Chaats & Continental Inventory !</h3>
          <div className="addItemForm">
          <AddItemForm addItem={this.addItem} categories={this.categories}/>
          <h3 className="title">Edit Existing Items</h3>

          <div className="form-category">
            <h3>Chaats</h3>
            {Object.keys(this.state.list4).map(key => this.state.list4[key].category === "chaats" ? <EditItemForm key={key} index={key} details={this.state.list4[key]} editItem={this.editItem} /> : null)}
          </div>
          <div className="form-category">
            <h3>Continental</h3>
            {Object.keys(this.state.list4).map(key => this.state.list4[key].category === "continental" ? <EditItemForm key={key} index={key} details={this.state.list4[key]} editItem={this.editItem} /> : null)}
          </div>
          </div>
        </div>
      )
  }
}

export default Inventory;