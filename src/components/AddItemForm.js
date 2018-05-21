import React from 'react';
import '../App.css';

class AddItemForm extends React.Component{

  createItem = (event) => {
    event.preventDefault();
    
    const { name, status, price, cuisine, category } = this.formRef;
    const item = {
      name: name.value,
      price: price.value,
      status: status.value, 
      cuisine: cuisine.value,
      category: category.value
    }

    this.props.addItem(item);
    // Refresh the form
    this.formRef.reset();
  }
  render(){
        return (
          <form onSubmit={this.createItem} ref={(formRef) => {this.formRef = formRef}}>
              <label>Name</label>
              <input name="name" type="text" placeholder="Item Name" /> <br />
              <label>Price</label>
              <input name="price" type="text" placeholder="Item Name" /> <br />
              <label>Cusine</label>
              <br />
              <input type="radio" name="cuisine" value="South Indian" defaultChecked /> South Indian 
              <input type="radio" name="cuisine" value="North Indian" /> North Indian 
              <input type="radio" name="cuisine" value="Chinese" /> Chinese 
              <input type="radio" name="cuisine" value="Juice" /> Juice 
              <input type="radio" name="cuisine" value="Deserts" /> Deserts
              <br />
              <label>Category</label>
              <input type="text"  name="category"  placeholder="Dosas, Snacks, Breads, Soup etc" /> <br />
              <label>Status</label>
              <br />
              <input type="radio" name="status" value="available" defaultChecked /> Available 
              <input type="radio" name="status" value="unavailable" /> Unavailable 
              <br />
              <button>Submit</button>
          </form>
        )
    }
}

export default AddItemForm; 