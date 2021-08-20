import React from "react"
import { Link } from "react-router-dom"
import TodoCompleteToggle from "components/TodoCompleteToggle"
import { TodoI, ProjectI } from "interfaces"
import TodayDelta from "components/TodayDelta"

const TodoListItem = ({ todo, currentProject }: { todo: TodoI, currentProject?: ProjectI }) => {
  return (
    <div className={`todo ${todo.status}`}>
      <TodoCompleteToggle todo={todo} />
      <Link to={currentProject ? `/projects/${currentProject.id}/todos/${todo.id}` : `/todos/${todo.id}`} className="name">
        {todo.name}
      </Link>
      {todo.due_date && todo.status !== "complete" &&
        <div className="due-date">
          {<TodayDelta date={todo.due_date}/>}
        </div>
      }
    </div>
  )
}

export default TodoListItem
