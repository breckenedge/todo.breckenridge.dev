import React from "react"
import { Link } from "react-router-dom"
import TodoCompleteToggle from "components/TodoCompleteToggle"
import { TodoI, ProjectI } from "interfaces"
import TodayDelta from "components/TodayDelta"

const TodoListItem = ({ todo, currentProject, showCompleted }: { todo: TodoI, currentProject?: ProjectI, showCompleted: "t" | "f" }) => {
  const projectId = currentProject?.id || todo.project_id

  if (todo.status === "complete" && showCompleted === "f") {
    return null
  }

  return (
    <div className={`todo ${todo.status}`}>
      <TodoCompleteToggle todo={todo} />
      <Link to={projectId ? `/projects/${projectId}/todos/${todo.id}` : `/todos/${todo.id}`} className="name">
        {todo.name}
      </Link>
      {todo.due_date &&
        <div className="due-date">
          {<TodayDelta date={todo.due_date}/>}
        </div>
      }
    </div>
  )
}

export default TodoListItem
