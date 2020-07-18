import React, { useState } from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import './sidebar.scss'

import avatar from './avatar.jpg'
import { Icon } from 'web/components/core'

const Sidebar = ({ menu, setMenu }) => {
  return (
    <div className={clsx('sidebar', !menu && 'sidebar-collapse')}>
      <div className="sidebar-menu">
        <Icon
          type={!menu ? 'menu' : 'arrowLeft'}
          className="sidebar-menu--icon"
          onClick={() => setMenu(!menu)}
        />
      </div>
      <hr />
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
            <NavLink
              to="/dashboard"
              activeClassName="sidebar-selected"
            >
              <div className="sidebar-components__item">
                <Icon
                  type="dashboard"
                  className="sidebar-components__item--icon"
                />
                <p className="sidebar-components__item--name">
                  Overview
                </p>
              </div>
            </NavLink>
            <NavLink
              to="/dashboard/projects"
              activeClassName="sidebar-selected"
            >
              <div className="sidebar-components__item">
                <Icon
                  type="project"
                  className="sidebar-components__item--icon"
                />
                <p className="sidebar-components__item--name">
                  Projects
                </p>
              </div>
            </NavLink>
            <NavLink
              to="/dashboard/todo"
              activeClassName="sidebar-selected"
            >
              <div className="sidebar-components__item">
                <Icon
                  type="todo"
                  className="sidebar-components__item--icon"
                />
                <p className="sidebar-components__item--name">
                  To-Do
                </p>
              </div>
            </NavLink>
            <NavLink
              to="/dashboard/calendar"
              activeClassName="sidebar-selected"
            >
              <div className="sidebar-components__item">
                <Icon
                  type="calendar"
                  className="sidebar-components__item--icon"
                />
                <p className="sidebar-components__item--name">
                  Calendar
                </p>
              </div>
            </NavLink>
          </div>
          <div className="sidebar-components__main">
            <NavLink
              to="/dashboard/messages"
              activeClassName="sidebar-selected"
            >
              <div className="sidebar-components__item">
                <Icon
                  type="chat"
                  className="sidebar-components__item--icon"
                />
                <p className="sidebar-components__item--name">
                  Messages
                </p>
              </div>
            </NavLink>
            <NavLink
              to="/dashboard/clients"
              activeClassName="sidebar-selected"
            >
              <div className="sidebar-components__item">
                <Icon
                  type="client"
                  className="sidebar-components__item--icon"
                />
                <p className="sidebar-components__item--name">
                  Clients
                </p>
              </div>
            </NavLink>
            <NavLink
              to="/dashboard/users"
              activeClassName="sidebar-selected"
            >
              <div className="sidebar-components__item">
                <Icon
                  type="users"
                  className="sidebar-components__item--icon"
                />
                <p className="sidebar-components__item--name">
                  Users
                </p>
              </div>
            </NavLink>
          </div>

          <div className="sidebar-components__main">
            <NavLink
              to="/dashboard/documents"
              activeClassName="sidebar-selected"
            >
              <div className="sidebar-components__item">
                <Icon
                  type="document"
                  className="sidebar-components__item--icon"
                />
                <p className="sidebar-components__item--name">
                  Documents
                </p>
              </div>
            </NavLink>
            <div className="sidebar-components__item">
              <Icon
                type="time"
                className="sidebar-components__item--icon"
              />
              <p className="sidebar-components__item--name">
                Timesheet
              </p>
            </div>
            <div className="sidebar-components__item">
              <Icon
                type="trend"
                className="sidebar-components__item--icon"
              />
              <p className="sidebar-components__item--name">
                Reports
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
