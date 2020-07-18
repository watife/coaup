import React from 'react'
import PropTypes from 'prop-types'

import './styled.scss'

const LinearProgressbar = ({ value, backgroundColor }) => {
  return (
    <div className="progressbar">
      <span style={{ width: `${value}%` }}>
        <span
          className="progressbar--indicator"
          style={{ backgroundColor: backgroundColor }}
        />
      </span>
    </div>
  )
}

LinearProgressbar.propTypes = {
  value: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string
}

LinearProgressbar.defaultProps = { backgroundColor: '' }

export default LinearProgressbar
