import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './dashboard.scss'
import { Sidebar } from 'web/components/styled'
/**
 * Dashboard routes
 */
import Overview from '../overview'

const ROUTES = [
  {
    path: '/dashboard',
    exact: true,
    component: Overview
  },
  {
    path: '/dashboard/projects',
    exact: true,
    component: () => <h2>Project</h2>
  }
]

const Dashboard = () => {
  const [menu, setMenu] = useState(false)
  return (
    <Router>
      <div className="dashboard">
        <Sidebar menu={menu} setMenu={setMenu} />

        <div
          className={clsx(
            'dashboard-box',
            !menu ? 'dashboard-box__fullwidth' : 'dashboard-box__minwidth'
          )}
        >
          <div className="dashboard-box__main">
            <Switch>
              {ROUTES.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                >
                  <route.component />
                </Route>
              ))}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

Dashboard.propTypes = {}

export default Dashboard
