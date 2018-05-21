import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import Inventory from './components/Inventory';

class App extends Component {
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
  render() {
    return (
      <div className="App">
        <Menu />
        <Inventory addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
