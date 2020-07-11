import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './style.scss'

// eslint-disable-next-line react/display-name
const Button = forwardRef(
  (
    {
      children,
      className,
      type = 'button',
      variant = 'primary',
      size = 'normal',
      width,
      onClick,
      disabled
    },
    ref
  ) => {
    return (
      <button
        style={{ width: { width } }}
        type={type}
        className={clsx(
          `btn btn--${variant} btn--${size}`,
          className
        )}
        ref={ref}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
)

Button.propTypes = {
  children: PropTypes.elementType.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.number,
  variant: PropTypes.string,
  size: PropTypes.oneOf(['normal', 'small', 'big']),
  disabled: PropTypes.bool,
  className: PropTypes.string
}

Button.defaultProps = {
  disabled: false,
  type: 'button',
  width: 40,
  variant: 'primary',
  size: 'normal',
  onClick: () => {},
  className: ''
}

export default Button
