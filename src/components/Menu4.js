import React from 'react';
import Item from './Item';
import '../App.css';
import base from '../base'

class Menu extends React.Component{
  state = {
    list4: {}
  };
  componentDidMount(){
    base.listenTo('inventory', {
      context: this,
      then(data){
        this.setState({
          list4: data.list4
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
                  <h3 className="categoryTitle">Chaats</h3>
                  {Object.keys(this.state.list4).map(key => this.state.list4[key].category === "chaats" ? <Item key={key} details={this.state.list4[key]} /> : null)}
                </div>
                <div className="category">
                <h3 className="categoryTitle">Continental</h3>
                {Object.keys(this.state.list4).map(key => this.state.list4[key].category === "continental" ? <Item key={key} details={this.state.list4[key]} /> : null)}
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Menu;