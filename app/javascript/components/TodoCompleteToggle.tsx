import React, { useEffect, useState } from "react"
import AppCache from "./AppCache"
import { TodoI } from "interfaces"
import CompleteToggle from "components/CompleteToggle"

const TodoCompleteToggle = ({ todo }: { todo: TodoI }) => {
  const [status, setStatus] = useState(todo.status)
  const { updateTodo } = AppCache.useContainer()

  useEffect(() => { setStatus(todo.status) }, [todo])

  return (
    <CompleteToggle
      status={status}
      onClick={() => updateTodo({ ...todo, status: todo.status === 'complete' ? 'incomplete' : 'complete' }, () => {})}
    />
  )
}

export default TodoCompleteToggle
