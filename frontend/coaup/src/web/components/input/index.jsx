import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './style.scss'

// eslint-disable-next-line react/display-name
const Input = forwardRef(
  (
    {
      type,
      label,
      name,
      disabled,
      className,
      error,
      autoComplete = 'off'
    },
    ref
  ) => {
    return (
      <div className={clsx('input-group', className)}>
        <input
          type={type}
          className={clsx(
            'input-field',
            disabled && 'input-field--disabled',
            error && 'input-field--error'
          )}
          id={name}
          placeholder={name}
          name={name}
          disabled={disabled}
          ref={ref}
          autoComplete={autoComplete}
        />
        {label && <label htmlFor={name}>{label}</label>}
        <p className="input-error">{error}</p>
      </div>
    )
  }
)

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
  autoComplete: PropTypes.string
}

Input.defaultProps = {
  disabled: false,
  error: '',
  label: '',
  className: '',
  name: '',
  autoComplete: 'off'
}

export default Input
