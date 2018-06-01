import React from 'react';
import Item from './Item';
import {dosas, idlis, snacks, rice} from '../food'
import '../App.css';
import base from '../base'

class Menu extends React.Component{
  state = {
    dosas: {},
    idlis: {},
    rice: {},
    snacks: {},
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
        dosas, idlis, rice, snacks
      })
  }
  componentDidMount(){
    base.listenTo('inventory', {
      context: this,
      then(data){
        this.setState({
          dosas: data.dosas,
          rice: data.rice,
          snacks: data.snacks,
          idlis: data.idlis,
        });
      }
    })
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
    render(){
        return (
          <div className="menu">
            <div className="title">
              <h1>{this.props.cuisine}</h1>
            </div>
            <div className="main-menu">
              <div className="categories">
                <div className="category">
                  <h3>Idlis</h3>
                  {Object.keys(this.state.idlis).map(key => <Item key={key} details={this.state.idlis[key]} />)}
                </div>
                <div className="category">
                <h3>Dosas</h3>
                  {Object.keys(this.state.dosas).map(key => <Item key={key} details={this.state.dosas[key]} />)}
                </div>
                <div className="category">
                <h3>Rice</h3>
                  {Object.keys(this.state.rice).map(key => <Item key={key} details={this.state.rice[key]} />)}
                </div>
                <div className="category">
                  <h3>Snacks</h3>
                  {Object.keys(this.state.snacks).map(key => <Item key={key} details={this.state.snacks[key]} />)}
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Menu;