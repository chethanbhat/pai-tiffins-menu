import React from 'react';
import { firebaseApp } from '../base';

class SignUp extends React.Component{
    createUser = (event) => {
        event.preventDefault();
        const { email, password} = this.formRef;
        firebaseApp.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((u) => {

        })
        .catch(error => {
            console.log(error);
        })
    }
    render(){
        return (
            <div className="signup-page">
            <form className="signup-form" onSubmit={this.createUser} ref={(formRef) => {this.formRef = formRef}}>
            <h3 className="form-title">Sign Up</h3>
            <div className="form-group user-mail">
                <label>Email:</label>
                <input name="email" className="form-control" type="email" placeholder="arun@paitiffins.com" />
            </div>
            <div className="form-group user-password">
                <label>Password:</label>
                <input name="password" type="password" className="form-control" placeholder="********" />
           </div>
           <button className="btn btn-danger">Submit</button>
        </form>
            </div>
        )
    }
}

export default SignUp;