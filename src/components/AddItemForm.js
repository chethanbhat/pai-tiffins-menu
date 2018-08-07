import React from 'react';
import '../App.css';

class AddItemForm extends React.Component{

  createItem = (event) => {
    event.preventDefault();
    
    const { name, status, price, category} = this.formRef;
    const item = {
      name: name.value,
      price: price.value,
      status: status.value,
      category: category.value,
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
                  <input name="name" type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="form-group price">
                  <label>Price (Rs) :</label>
                  <input name="price" type="text" className="form-control" placeholder="20" />
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
                <select name="category" className="form-control">
                  {Object.keys(this.props.categories).map(key => <option key={key} value={key}>{this.props.categories[key]}</option> )}
                </select>
            </div>
            <div className="form-group">
                <div className="btn-group">
                        <button className="btn btn-success">Submit</button>
                </div>
            </div>
          </form>
        )
    }
}

export default AddItemForm; 