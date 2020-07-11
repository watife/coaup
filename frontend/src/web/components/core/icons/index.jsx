import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import './icon.scss'

import Dashboard from './IconSet/dashboard'
import ArrowLeft from './IconSet/arrow-left'
import Menu from './IconSet/menu'

const ICON_TYPE = {
  dashboard: Dashboard,
  arrowLeft: ArrowLeft,
  menu: Menu
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
  onClick: PropTypes.func
}

Icon.defaultProps = {
  className: ''
}

export default Icon
