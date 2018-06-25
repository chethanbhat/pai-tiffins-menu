import React from 'react';
import Item from './Item';
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
  componentDidMount(){
    base.listenTo('inventory', {
      context: this,
      then(data){
        this.setState({
          items: data.items
        });
      }
    })
  }
    render(){
        return (
          <div className="menu">
            <div className="main-menu">
              <div className="categories">
                <div className="category">
                  <h3 className="categoryTitle">Idlis</h3>
                  {Object.keys(this.state.items).map(key => this.state.items[key].category === "idlis" ? <Item key={key} details={this.state.items[key]} /> : null)}
                </div>
                <div className="category">
                <h3 className="categoryTitle">Dosas</h3>
                {Object.keys(this.state.items).map(key => this.state.items[key].category === "dosas" ? <Item key={key} details={this.state.items[key]} /> : null)}
                </div>
                <div className="category">
                <h3 className="categoryTitle">Rice</h3>
                {Object.keys(this.state.items).map(key => this.state.items[key].category === "rice" ? <Item key={key} details={this.state.items[key]} /> : null)}
                </div>
                <div className="category">
                  <h3 className="categoryTitle">Snacks</h3>
                  {Object.keys(this.state.items).map(key => this.state.items[key].category === "snacks" ? <Item key={key} details={this.state.items[key]} /> : null)}
                </div>
                <div className="category">
                  <h3 className="categoryTitle">Thalis</h3>
                  {Object.keys(this.state.items).map(key => this.state.items[key].category === "thali" ? <Item key={key} details={this.state.items[key]} /> : null)}
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Menu;