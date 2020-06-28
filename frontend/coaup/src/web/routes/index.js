import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { withLayout } from '../model/container'
import Register from '../model/pages/register'
import Page500 from '../model/pages/static/500'
import LoginPage from '../model/pages/login'

/**
 * @ Redux
 * @returns {*}
 * @constructor
 */
import { updateCompany } from 'core/company/presentation/redux/actions'
import companyService from 'core/company/use-cases'

const Routes = () => {
  // const dispatch = useDispatch()
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={withLayout(Register)} />
        <Route path="/network" component={withLayout(Page500)} />
        <Route
          path="/login"
          component={LoginPage}
          // render={(props) => (
          //   <LoginPage
          //     // dispatch={dispatch}
          //     updateCompany={updateCompany}
          //     companyService={companyService}
          //     {...props}
          //   />
          // )}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
