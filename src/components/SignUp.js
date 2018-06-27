import React from 'react';

class SignUp extends React.Component{
    createUser = (event) => {
        event.preventDefault();
        const { name, email, password} = this.formRef;
        
        const user = {
            name: name.value,
            email: email.value,
            password: password.value
        }
        
        console.log(user)

    }
    render(){
        return (
            <form className="signup-form" onSubmit={this.createUser} ref={(formRef) => {this.formRef = formRef}}>
            <h3>Sign Up</h3>
            <div className="form-group user-mail">
                <label>Name:</label>
                <input name="name" type="text" placeholder="Arun Kumar" />
            </div>
            <div className="form-group user-mail">
                <label>Email:</label>
                <input name="email" type="email" placeholder="arun@paitiffins.com" />
            </div>
            <div className="form-group user-password">
                <label>Password:</label>
                <input name="password" type="password" placeholder="********" />
           </div>
          <div className="form-group">
              <div className="btn-group">
                      <button>Submit</button>
              </div>
          </div>
        </form>
        )
    }
}

export default SignUp;