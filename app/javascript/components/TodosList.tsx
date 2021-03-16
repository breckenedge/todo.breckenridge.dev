import React from "react"
import { Link } from "react-router-dom"
import TodoCompleteToggle from "components/TodoCompleteToggle"
import { TodoI } from "interfaces"
import sortBy, { sortByStatus } from "utilities/sortBy"

const TodosList = ({ todos }: { todos: Array<TodoI> }) => {
  return (
    <div className="todo-list">
      {todos.sort(sortBy('name')).sort(sortByStatus).map((todo: TodoI, i: number)=> (
        <div key={i} className={`todo ${todo.status}`}>
          <TodoCompleteToggle todo={todo} />
          <Link to={`/todos/${todo.id}`} className="name">
            {todo.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default TodosList
