import React from 'react';
import '../App.css';

class EditItemForm extends React.Component{

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
  renderOption(cuisine){
    let output = "";
    const cuisineArr = ["South Indian","North Indian","Chinese","Juice","Desserts"]
    cuisineArr.forEach(item => {
        output+= `<option value="${item}">${item}</option>`
    });
    console.log(output);
    return output;

  }
  render(){
        return (
          <form className="item-form" onSubmit={this.createItem} ref={(formRef) => {this.formRef = formRef}}>
              <div class="form-group name ">
                  <label>Name :</label>
                  <input name="name" type="text" placeholder="Name" value={this.props.details.name} />
              </div>
              <div class="form-group price">
                  <label>Price (Rs) :</label>
                  <input name="price" type="text" placeholder="20" value={this.props.details.price} />
             </div>
             <div class="form-group status">
                <label>Status :</label>
                <div class="radio-group">
                        <input type="radio" name="option" id="radio1" checked={this.props.details.status === "available" ? "checked" : false} />
                        <label for="radio1">Available</label>
                        
                        <input type="radio" name="option" id="radio2" checked={this.props.details.status === "unavailable" ? "checked" : false} />
                        <label for="radio2">Unavailable</label>
                </div>
              </div>

            <div class="form-group cuisine">
              <label>Cuisine :</label>
              <select id="cuisine">
                <option value="South Indian">{this.props.details.cuisine}</option>
                {this.renderOption()}
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

export default EditItemForm; 