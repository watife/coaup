import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import './icon.scss'

import Dashboard from './IconSet/dashboard'
import ArrowLeft from './IconSet/arrow-left'
import Menu from './IconSet/menu'
import Project from './IconSet/project'
import Todo from './IconSet/todo'
import Calendar from './IconSet/calendar'
import Message from './IconSet/message'
import Client from './IconSet/client'
import Users from './IconSet/users'
import Time from './IconSet/time'
import Document from './IconSet/document'
import Trend from './IconSet/trend'
import More from './IconSet/more'
import Notification from './IconSet/notification'

const ICON_TYPE = {
  dashboard: Dashboard,
  arrowLeft: ArrowLeft,
  menu: Menu,
  project: Project,
  todo: Todo,
  calendar: Calendar,
  chat: Message,
  client: Client,
  users: Users,
  time: Time,
  document: Document,
  trend: Trend,
  more: More,
  notification: Notification
}

const Icon = ({ type, className, onClick }) => {
  const IconToRender = ICON_TYPE[type] || Dashboard
  return (
    <div
      className={clsx('icon-default', className)}
      onClick={onClick}
    >
      <IconToRender />
    </div>
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

Icon.defaultProps = {
  className: '',
}

export default Icon
