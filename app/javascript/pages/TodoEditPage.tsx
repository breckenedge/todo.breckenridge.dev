import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TodoForm from "components/TodoForm"
import TodoBreadcrumbs from "components/TodoBreadcrumbs"
import { fetchTodo } from "repos/TodosRepo"
import LoadingIndicator from "components/LoadingIndicator"

const TodoEditPage = () => {
  const id = useParams()["id"]
  const [todo, setTodo] = useState(null)

  useEffect(() => {
    fetchTodo(id, setTodo)
  }, [id])

  return (
    todo ?
    <>
      <TodoBreadcrumbs todo={todo} />
      <TodoForm todo={todo} />
    </>
    :
    <LoadingIndicator />
  )
}

export default TodoEditPage
