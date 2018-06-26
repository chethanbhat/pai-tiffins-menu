import React from 'react';
import Item from './Item';
import '../App.css';
import base from '../base'

class Menu extends React.Component{
  state = {
    list3: {}
  };
  componentDidMount(){
    base.listenTo('inventory', {
      context: this,
      then(data){
        this.setState({
          list3: data.list3
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
                  <h3 className="categoryTitle">Hot Beverages</h3>
                  {Object.keys(this.state.list3).map(key => this.state.list3[key].category === "hot" ? <Item key={key} details={this.state.list3[key]} /> : null)}
                </div>
                <div className="category">
                <h3 className="categoryTitle">Juice / Milkshakes</h3>
                {Object.keys(this.state.list3).map(key => this.state.list3[key].category === "juice" ? <Item key={key} details={this.state.list3[key]} /> : null)}
                </div>
                <div className="category">
                <h3 className="categoryTitle">Cold Beverages</h3>
                {Object.keys(this.state.list3).map(key => this.state.list3[key].category === "cold" ? <Item key={key} details={this.state.list3[key]} /> : null)}
                </div>
                <div className="category">
                  <h3 className="categoryTitle">Desserts</h3>
                  {Object.keys(this.state.list3).map(key => this.state.list3[key].category === "desserts" ? <Item key={key} details={this.state.list3[key]} /> : null)}
                </div>
                <div className="category">
                  <h3 className="categoryTitle">Ice Creams</h3>
                  {Object.keys(this.state.list3).map(key => this.state.list3[key].category === "ic" ? <Item key={key} details={this.state.list3[key]} /> : null)}
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Menu;