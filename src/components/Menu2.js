import React from 'react';
import Item from './Item';
import '../App.css';
import base from '../base'

class Menu extends React.Component{
  state = {
    list2: {}
  };
  componentDidMount(){
    base.listenTo('inventory', {
      context: this,
      then(data){
        this.setState({
          list2: data.list2
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
                  <h3 className="categoryTitle">Starters</h3>
                  {Object.keys(this.state.list2).map(key => this.state.list2[key].category === "starters" ? <Item key={key} details={this.state.list2[key]} /> : null)}
                </div>
                <div className="category">
                <h3 className="categoryTitle">Indian Breads</h3>
                {Object.keys(this.state.list2).map(key => this.state.list2[key].category === "breads" ? <Item key={key} details={this.state.list2[key]} /> : null)}
                </div>
                <div className="category">
                <h3 className="categoryTitle">Gravy</h3>
                {Object.keys(this.state.list2).map(key => this.state.list2[key].category === "gravy" ? <Item key={key} details={this.state.list2[key]} /> : null)}
                </div>
                <div className="category">
                  <h3 className="categoryTitle">Rice</h3>
                  {Object.keys(this.state.list2).map(key => this.state.list2[key].category === "rice" ? <Item key={key} details={this.state.list2[key]} /> : null)}
                </div>
                <div className="category">
                  <h3 className="categoryTitle">Noodles</h3>
                  {Object.keys(this.state.list2).map(key => this.state.list2[key].category === "noodles" ? <Item key={key} details={this.state.list2[key]} /> : null)}
                </div>
                <div className="category">
                  <h3 className="categoryTitle">Combos</h3>
                  {Object.keys(this.state.list2).map(key => this.state.list2[key].category === "combos" ? <Item key={key} details={this.state.list2[key]} /> : null)}
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Menu;