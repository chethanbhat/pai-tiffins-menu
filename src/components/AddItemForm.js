import React from 'react';
import '../App.css';

class AddItemForm extends React.Component{

  createItem = (event) => {
    event.preventDefault();
    
    const { name, status, price, category } = this.formRef;
    const item = {
      name: name.value,
      price: price.value,
      status: status.value,
      category: category.value
    }

    let stateCode = 1;

    if(category === 'dosas'){stateCode = 2}
    else if(category === 'idlis'){stateCode = 1}
    else if(category === 'rice'){stateCode = 3}
    else if(category === 'snacks'){stateCode = 4}
    else {stateCode = 5}

    this.props.addItem(item, stateCode, category.value);
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
                <input type="text" name="category" placeholder="Dosas, Snacks, Breads, Soup etc" />
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