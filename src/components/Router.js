import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from './Menu'
import Inventory1 from '../Inventory1'
import Inventory2 from '../Inventory2'
import Inventory3 from '../Inventory3'
import Inventory4 from '../Inventory4'
import App from '../App';
import Menu1 from '../Menu1';
import Menu2 from '../Menu2';
import Menu3 from '../Menu3';
import Menu4 from '../Menu4';
import Loader from './Loader';
import SignUp from './SignUp';
import LogIn from './LogIn';
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/inventory" component={Inventory1} />
      <Route exact path="/app" component={App} />
      <Route exact path="/inventory1" component={Inventory1} />
      <Route exact path="/inventory2" component={Inventory2} />
      <Route exact path="/inventory3" component={Inventory3} />
      <Route exact path="/inventory4" component={Inventory4} />
      <Route exact path="/menu1" component={Menu1} />
      <Route exact path="/menu2" component={Menu2} />
      <Route exact path="/menu3" component={Menu3} />
      <Route exact path="/menu4" component={Menu4} />
      <Route exact path="/loader" component={Loader} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={LogIn} />
    </Switch>
  </BrowserRouter>
)

export default Router;
