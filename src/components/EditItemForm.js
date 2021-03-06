import React from 'react';
import '../App.css';

class EditItemForm extends React.Component{
  handleChange = (event) => {
    const updatedItem = {
      ...this.props.details,
      [event.currentTarget.name]: event.currentTarget.value
    }
    this.props.editItem(this.props.index, updatedItem);
  }
  render(){
        return (
          <form className="editItemForm" ref={(formRef) => {this.formRef = formRef}}>
            <input id="editName" name="name" type="text" className="form-control" placeholder="Name" onChange={this.handleChange} value={this.props.details.name} />
            <input id="editPrice" name="price" type="text" className="form-control" placeholder="20" onChange={this.handleChange} value={this.props.details.price} />
            <div className="radio-group" id="editRadioGrp">
                    <input type="radio" name="status" id="radio1" onChange={this.handleChange} value="available" checked={this.props.details.status === "available" ? "checked" : false} />
                    <label>Available</label>                       
                    <input type="radio" name="status" id="radio2" onChange={this.handleChange} value="unavailable" checked={this.props.details.status === "unavailable" ? "checked" : false} />
                    <label>Unavailable</label>
            </div>
            {/* <input id="editCategory" name="category" type="text" placeholder="Category" onChange={this.handleChange} value={this.props.details.category} />                     */}
          </form>
        )
    }
}

export default EditItemForm; 