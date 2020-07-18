import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './styled.scss'

const CircularProgressbar = ({
  size = 70,
  thickness = 2,
  value = 20,
  className,
  children
}) => {
  const [offset, setOffset] = useState(0)

  const center = size / 2
  const radius = size / 2 - thickness / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const progressOffset = ((100 - value) / 100) * circumference
    setOffset(progressOffset)
  }, [value, circumference])

  return (
    <div className={clsx('circularprogress-box', className)}>
      <svg width={size} height={size} className="circularprogress">
        <circle
          className="circularprogress-bg"
          stroke="var(--color-circularprogress-outer)"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={thickness}
        />
        <circle
          className="circularprogress-determinate"
          stroke="var(--color-circularprogress-inner)"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={thickness}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="circularprogress-child">{children}</div>
    </div>
  )
}

CircularProgressbar.propTypes = {
  size: PropTypes.number.isRequired,
  thickness: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
}

CircularProgressbar.defaultProps = {
  className: ''
}

export default CircularProgressbar
