import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from './Menu'
import Inventory from './Inventory'
import App from '../App';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Menu} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/inventory" component={Inventory} />
      <Route exact path="/app" component={App} />
    </Switch>
  </BrowserRouter>
)

export default Router;
