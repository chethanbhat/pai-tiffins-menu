import React from 'react';
import '../App.css';
import AddItemForm from './AddItemForm'

class Inventory extends React.Component{
    render(){
        return (
          <div className="inventory">
            <h1>Hello I'm Inventory !</h1>
            <div className="inventory-form">
            <AddItemForm />
            </div>

          </div>
        )
    }
}

export default Inventory;