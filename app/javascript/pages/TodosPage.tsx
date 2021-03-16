import React, { useEffect, useState } from "react"
import { TodoI } from "interfaces/TodoI"
import { fetchTodos } from "repos/TodosRepo"
import { Link } from "react-router-dom"
import TodosList from "components/TodosList"
import LoadingIndicator from "components/LoadingIndicator"

const TodosPage = () => {
  const defaultState: Array<TodoI> = []
  const [todos, setTodos] = useState(defaultState)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchTodos(setTodos)
    setIsLoading(false)
  }, [])

  return (
    <>
      <Link
        to="/todos/new"
        className="button teal button-wide">
        New Todo
      </Link>

      <br />

      {isLoading ? <LoadingIndicator /> : <TodosList todos={todos} />}
    </>
  )
}

export default TodosPage
