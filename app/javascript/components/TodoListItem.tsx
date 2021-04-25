import React from "react"
import { Link } from "react-router-dom"
import TodoCompleteToggle from "components/TodoCompleteToggle"
import { TodoI } from "interfaces"

const TodoListItem = ({ todo }: { todo: TodoI }) => {
  return (
    <div className={`todo ${todo.status}`}>
      <TodoCompleteToggle todo={todo} />
      <Link to={`/todos/${todo.id}`} className="name">
        {todo.name}
      </Link>
      <div className="due-on">
        {todo.due_on && todo.due_on}
      </div>
    </div>
  )
}

export default TodoListItem
