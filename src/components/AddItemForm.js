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
          <form className="item-form" onSubmit={this.createItem} ref={(formRef) => {this.formRef = formRef}}>
              <div class="form-group name ">
                  <label>Name :</label>
                  <input name="name" type="text" placeholder="Name" />
              </div>
              <div class="form-group price">
                  <label>Price (Rs) :</label>
                  <input name="price" type="text" placeholder="20" />
             </div>
             <div class="form-group status">
                <label>Status :</label>
                <div class="radio-group">
                        <input type="radio" name="option" id="radio1" checked="checked" />
                        <label for="radio1">Available</label>
                        
                        <input type="radio" name="option" id="radio2" />
                        <label for="radio2">Unavailable</label>
                </div>
              </div>

            <div class="form-group cuisine">
              <label>Cuisine :</label>
              <select id="cuisine">
                <option value="South Indian" defaultChecked>South Indian</option>
                <option value="North Indian">North Indian</option>
                <option value="Chineese">Chineese</option>
                <option value="Juice">Juice</option>
                <option value="Desserts">Desserts</option>
              </select>
            </div>
            <div class="form-group category">
                <label>Category :</label>
                <input type="text" name="category" placeholder="Dosas, Snacks, Breads, Soup etc" />
            </div>
            <div class="form-group">
                <div class="btn-group">
                        <button>Submit</button>
                        <button>Reset</button>
                </div>
            </div>
          </form>
        )
    }
}

export default AddItemForm; 