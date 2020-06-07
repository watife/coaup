import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { withLayout } from "../model/container";
import { Register } from "../model/pages/register";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={withLayout(Register)} />
    </Switch>
  </BrowserRouter>
)

export default Routes