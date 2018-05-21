import React from 'react';
import '../App.css';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class AddItemForm extends React.Component{
  nameRef = React.createRef();
  statusRef = React.createRef();
  createItem = (event) => {
    event.preventDefault();
    console.log(this.nameRef.value)
  }  
  render(){
        return (
          <form onSubmit={this.createItem}>
            <input type="text" name="name" ref={this.nameRef}/>
            <button>Submit</button>
          </form>
          // <Form onSubmit={this.createItem}>
          //   <FormGroup>
          //     <Label for="itemName">Title</Label>
          //     <Input name="name" ref={this.nameRef} id="itemName" type="text" placeholder="Item Name" />
          //   </FormGroup>
          //   <FormGroup tag="fieldset">
          //     <FormGroup check> 
          //     <Label check>
          //       <Input type="radio" name="status" ref={this.statusRef} value="available" defaultChecked />{' '}
          //       Available
          //     </Label>
          //   </FormGroup>
          //   <FormGroup check>
          //     <Label check>
          //       <Input type="radio" name="status" ref={this.statusRef} value="unavailable" />{' '}
          //       Unavailable
          //     </Label>
          //   </FormGroup>
          //   </FormGroup>
          //   <Button>Add Item</Button>
          // </Form>
        )
    }
}

export default AddItemForm; 