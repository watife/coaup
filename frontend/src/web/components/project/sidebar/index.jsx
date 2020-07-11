import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import './sidebar.scss'

import avatar from './avatar.jpg'
import { Icon } from 'web/components/core'

const Sidebar = ({ components }) => {
  const [menu, setMenu] = useState(false)
  return (
    <div className={clsx('sidebar', menu && 'sidebar-collapse')}>
      <div className="sidebar-menu">
        <Icon
          type={menu ? 'menu' : 'arrowLeft'}
          className="sidebar-menu--icon"
          onClick={() => setMenu(!menu)}
        />
      </div>
      <div className="sidebar-profile">
        <div className="sidebar-profilebox">
          <img
            src={avatar}
            alt="user-profile-picture"
            className="sidebar-profile--img"
          />
          <h4 className="sidebar-profile--name">
            Boluwatife Fakorede <br />
            <p className="sidebar-profile--role">Founder</p>
          </h4>
        </div>

        <div className="sidebar-components">
          <div className="sidebar-components__main">
            <div className="sidebar-components__item">
              <Icon type="dashboard" />
              <p className="sidebar-components__item--name">
                Dashboard
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  components: PropTypes.array.isRequired
}

export default Sidebar
