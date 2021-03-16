import React, { useContext, useEffect, useState } from "react"
import AuthenticityTokenContext from "contexts/AuthenticityTokenContext"
import { completeTodo, incompleteTodo } from "repos/TodosRepo"
import { TodoI } from "interfaces"

const TodoCompleteToggle = ({ todo }: { todo: TodoI }) => {
  const authToken = useContext(AuthenticityTokenContext)
  const [status, setStatus] = useState(todo.status)
  const method = status === "complete" ? incompleteTodo : completeTodo

  useEffect(() => { setStatus(todo.status) }, [todo])

  return (
    <button
      className={`complete-toggle ${status}`}
      type="button"
      onClick={() => { method(todo, authToken, (data) => { setStatus(data.status) }) }}
    >
      <div className="icon">
        {status === "complete" ? "×" : "✓" }
      </div>
    </button>
  )
}

export default TodoCompleteToggle
