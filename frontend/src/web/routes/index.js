import React, { useEffect, useState } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { withLayout } from '../model/container'
import Page500 from '../model/pages/static/500'
import LoginPage from '../model/pages/login'
import Register from '../model/pages/register/company'
import RegisterPersonal from '../model/pages/register/personal'
import Dashboard from '../model/pages/Dashboard'

/**
 * @ Redux
 * @returns {*}
 * @constructor
 */

const Routes = () => {
  // useEffect(() => {
  //   const host = window.location.host
  //
  //   const companyHost = host.split('.')
  //
  //   console.log(companyHost[0])
  // }, [window.location.host])

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/register/company"
          exact
          component={withLayout(Register)}
        />
        <Route
          path="/register/personal"
          exact
          component={withLayout(RegisterPersonal)}
        />
        <Route path="/network" component={withLayout(Page500)} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
