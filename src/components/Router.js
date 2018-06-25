import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from './Menu'
import Inventory from './Inventory'
import App from '../App';
import App1 from '../App1';
import App2 from '../App2';
import App3 from '../App3';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/inventory" component={Inventory} />
      <Route exact path="/app" component={App} />
      <Route exact path="/ex1" component={App1} />
      <Route exact path="/ex2" component={App2} />
      <Route exact path="/ex3" component={App3} />
    </Switch>
  </BrowserRouter>
)

export default Router;
