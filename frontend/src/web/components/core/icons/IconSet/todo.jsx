import React from 'react'

const Todo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="icon-inbox-check"
    >
      <path
        fill="currentColor"
        className="primary"
        d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v10h2a2 2 0 0 1 2 2c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h2V5H5z"
      />
      <path
        fill="currentColor"
        className="secondary"
        d="M11 11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42l1.3 1.3z"
      />
    </svg>
  )
}

export default Todo
