import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from 'clsx';

import "./style.scss";

const Button = forwardRef(
  (
    { children,
      className, 
      type = "button", 
      variant = "primary", 
      size = "normal",
      width,
      onClick,
      disabled=false },
    ref
  ) => {
    return (
      <button
        style={{width: {width}}}
        type={type}
        className={clsx(`btn btn--${variant} btn--${size}`, className)}
        ref={ref}
        onClick={onClick}
        disabled={disabled}
      >
        { children }
      </button>
    );
  }
);

Button.propTypes = {
  children: PropTypes.elementType.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.number,
  variant: PropTypes.string,
  size: PropTypes.oneOf(["normal", "small", "large"]),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  disabled: false,
  type: 'button',
  width: 40,
  variant: 'primary',
  size: 'normal',
  onClick: () => {}
}

export default Button;
