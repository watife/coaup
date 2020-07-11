import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './style.scss'

// eslint-disable-next-line react/display-name
const CheckBox = forwardRef(
  ({ label, className, checked, name, disabled, value }, ref) => {
    return (
      <div className={clsx('checkbox', className)}>
        <input
          type="checkbox"
          name={name}
          defaultChecked={checked}
          value={value}
          className="checkbox__input"
          id={name}
          disabled={disabled}
          ref={ref}
        />
        <label
          htmlFor={name}
          className={clsx(label && 'checkbox__label')}
        >
          <p>{label}</p>
        </label>
      </div>
    )
  }
)

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool
}

CheckBox.defaultProps = {
  disabled: false,
  defaultChecked: false,
  label: '',
  className: '',
  checked: false
}

export default CheckBox
