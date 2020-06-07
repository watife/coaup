import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./style.scss";

const Input = forwardRef(
  ({ type, label, name, disabled, className, error }, ref) => {
    return (
      <div className={clsx("input-group", className)}>
        <input
          type={type}
          className={clsx("input-field", disabled && "input-field--disabled", error && "input-field--error")}
          id={name}
          placeholder={name}
          name={name}
          disabled={disabled}
          ref={ref}
        />
        {label && <label htmlFor={name}>{label}</label>}
        <p className="input-error">{error}</p>
      </div>
    );
  }
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  disabled: false,
  error: '',
  name: "",
  defaultChecked: false,
};

export default Input;
