import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TodoDetails from "components/TodoDetails"
import { TodoI } from "interfaces/TodoI"
import TodoBreadcrumbs from "components/TodoBreadcrumbs"
import { fetchTodo } from "repos/TodosRepo"

const TodoPage = () => {
  const defaultState: TodoI = {}
  const id = useParams()["id"]
  const [todo, setTodo] = useState(defaultState)

  useEffect(() => { fetchTodo(id, setTodo) }, [])

  return (
    <>
      <TodoBreadcrumbs todo={todo} />
      <TodoDetails todo={todo} />
    </>
  )
}

export default TodoPage
