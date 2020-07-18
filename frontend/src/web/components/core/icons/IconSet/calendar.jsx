import React from 'react'

const Calendar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="icon-calendar-date"
    >
      <path
        fill="currentColor"
        className="primary"
        d="M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm0 5v10h14V9H5z"
      />
      <path
        fill="currentColor"
        className="secondary"
        d="M13 13h3v3h-3v-3zM7 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1z"
      />
    </svg>
  )
}

export default Calendar
