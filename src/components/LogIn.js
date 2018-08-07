import React from 'react';
import {firebaseApp} from '../base'

class SignUp extends React.Component{
    verifyUser = (event) => {
        event.preventDefault();
        const {email, password} = this.formRef;

        firebaseApp.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((user) => {
        })
        .catch(error => {
          console.log(error);
        })        
    }
    render(){
        return (
            <div className="login-page">
                <form className="login-form" onSubmit={this.verifyUser} ref={(formRef) => {this.formRef = formRef}}>
                <h3 className="form-title">Log In</h3>
                <div className="form-group user-mail">
                    <label>Email:</label>
                    <input name="email" type="email" className="form-control" placeholder="arun@paitiffins.com" />
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