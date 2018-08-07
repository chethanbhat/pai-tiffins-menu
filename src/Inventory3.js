import React, { Component } from 'react';
import Inventory from './components/Inventory3'
import LogIn from './components/LogIn'
import {firebaseApp} from './base'

class App extends Component {
  state = {
    user: {}
  }
  componentDidMount(){
    this.authListener();
  }
  authListener = () => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({user});
        localStorage.setItem('user', user.id);
      }
      else {
        this.setState({user: null});
        localStorage.removeItem('user');
      }
    })
  }
  render() {
    return (
      <div> 
        {this.state.user ? <Inventory /> : <LogIn />}
      </div>
    );
  }
}

export default App;
