import React, { useContext, useEffect, useState } from "react"
import AuthenticityTokenContext from "contexts/AuthenticityTokenContext"
import { completeTodo, incompleteTodo } from "repos/TodosRepo"
import { TodoI } from "interfaces"
import CompleteToggle from "components/CompleteToggle"

const TodoCompleteToggle = ({ todo }: { todo: TodoI }) => {
  const authToken = useContext(AuthenticityTokenContext)
  const [status, setStatus] = useState(todo.status)
  const method = status === "complete" ? incompleteTodo : completeTodo

  useEffect(() => { setStatus(todo.status) }, [todo])

  return (
    <CompleteToggle
      status={status}
      onClick={() => method(todo, authToken, (data) => { setStatus(data.status) })}
    />
  )
}

export default TodoCompleteToggle
