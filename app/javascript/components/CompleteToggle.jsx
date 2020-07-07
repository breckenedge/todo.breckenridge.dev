import React from 'react'
import ReactDOM from 'react-dom'

const CompleteToggle = ({ onClick, toggleContent, toggleClassName }) => (
  <button className={toggleClassName} onClick={onClick}>
    <div className="icon">{toggleContent}</div>
  </button>
)

export default CompleteToggle
