import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import CompleteToggle from './CompleteToggle'

const TodoListItem = ({ todo, onComplete, onIncomplete }) => {
  const toggleClassName = `complete-toggle ${todo.status === "complete" ? "complete" : "incomplete"}`
  const toggleContent = todo.status === "complete" ? "×" : "✓"
  const toggleAction = todo.status === "complete" ? onIncomplete : onComplete

  return (
    <div className={todo.status + " todo"}>
      <CompleteToggle onClick={toggleAction} toggleContent={toggleContent} toggleClassName={toggleClassName} />

      <Link to={`/todos/${todo.id}`} className="name">{todo.name}</Link>
    </div>
  )
}

export default TodoListItem
