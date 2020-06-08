import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { withLayout } from "../model/container";
import Register from "../model/pages/register";
import Page500 from "../model/pages/static/500";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={withLayout(Register)} />
      <Route path="/network" component={withLayout(Page500)} />
    </Switch>
  </BrowserRouter>
)

export default Routes