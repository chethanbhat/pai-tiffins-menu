import React from 'react';
import '../App.css';

class AddItemForm extends React.Component{

  createItem = (event) => {
    event.preventDefault();
    
    const { name, alias, status, price, category, cuisine } = this.formRef;
    const item = {
      name: name.value,
      alias: alias.value,
      price: price.value,
      status: status.value,
      category: category.value,
      cuisine: cuisine.value
    }

    this.props.addItem(item);
    // Refresh the form
    this.formRef.reset();
  }
  render(){
        return (
          <form className="item-form" onSubmit={this.createItem} ref={(formRef) => {this.formRef = formRef}}>
              <h3>Add a new item</h3>
              <div className="form-group name">
                  <label>Name :</label>
                  <input name="name" type="text" placeholder="Name" />
              </div>
              <div className="form-group name">
                  <label>Alias :</label>
                  <input name="alias" type="text" placeholder="ಹೆಸರು" />
              </div>
              <div className="form-group price">
                  <label>Price (Rs) :</label>
                  <input name="price" type="text" placeholder="20" />
             </div>
             <div className="form-group">
                <label>Status :</label>
                <div className="radio-group">
                        <input type="radio" name="status" id="radio1" value="available" defaultChecked="checked" />
                        <label>Available</label>
                        
                        <input type="radio" name="status" value="unavailable" id="radio2" />
                        <label>Unavailable</label>
                </div>
              </div>
            <div className="form-group">
                <label>Category :</label>
                <select name="category">
                  <option value="snacks">Snacks</option>
                  <option value="dosas">Dosas</option>
                  <option value="idlis">Idlis</option>
                  <option value="rice">Rice</option>
                  <option value="thali">Thali</option>
                </select>  
            </div>
            <div className="form-group">
                <label>Cuisine :</label>
                <select name="cuisine">
                  <option value="south indian">South Indian</option>
                  <option value="north indian">North Indian</option>
                  <option value="juice">Juice</option>
                  <option value="dessert">Dessert</option>
                </select>   
            </div>
            <div className="form-group">
                <div className="btn-group">
                        <button>Submit</button>
                        <button>Reset</button>
                </div>
            </div>
          </form>
        )
    }
}

export default AddItemForm; 