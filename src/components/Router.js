import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from './Menu'
import Inventory from './Inventory'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Menu} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/inventory" component={Inventory} />
    </Switch>
  </BrowserRouter>
)

export default Router;
