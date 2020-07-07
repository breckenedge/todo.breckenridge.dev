import React from 'react'
import ReactDOM from 'react-dom'

const TodoForm = ({ todo }) => (
  <div>
    <button className="button button-wide accent5">Save</button>
  </div>
)

TodoForm.defaultProps = {
  todo: {}
}

export default TodoForm
