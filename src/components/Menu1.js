import React from 'react';
import Item from './Item';
import '../App.css';
import base from '../base'

class Menu extends React.Component{
  state = {
    list1: {}
  };
  componentDidMount(){
    base.listenTo('inventory', {
      context: this,
      then(data){
        this.setState({
            list1: data.list1
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
                  {Object.keys(this.state.list1).map(key => this.state.list1[key].category === "idlis" ? <Item key={key} details={this.state.list1[key]} /> : null)}
                </div>
                <div className="category">
                <h3 className="categoryTitle">Dosas</h3>
                {Object.keys(this.state.list1).map(key => this.state.list1[key].category === "dosas" ? <Item key={key} details={this.state.list1[key]} /> : null)}
                </div>
                <div className="category">
                <h3 className="categoryTitle">Rice</h3>
                {Object.keys(this.state.list1).map(key => this.state.list1[key].category === "rice" ? <Item key={key} details={this.state.list1[key]} /> : null)}
                </div>
                <div className="category">
                  <h3 className="categoryTitle">Snacks</h3>
                  {Object.keys(this.state.list1).map(key => this.state.list1[key].category === "snacks" ? <Item key={key} details={this.state.list1[key]} /> : null)}
                </div>
                <div className="category">
                  <h3 className="categoryTitle">Combos/Thalis</h3>
                  {Object.keys(this.state.list1).map(key => this.state.list1[key].category === "combos" ? <Item key={key} details={this.state.list1[key]} /> : null)}
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Menu;