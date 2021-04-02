import React, { useEffect, useState } from "react"
import { fetchTodos } from "repos/TodosRepo"
import { Link } from "react-router-dom"
import TodosList from "components/TodosList"
import LoadingIndicator from "components/LoadingIndicator"

const TodosPage = () => {
  const [todos, setTodos] = useState(null)

  useEffect(() => {
    fetchTodos(setTodos)
  }, [])

  return (
    <>
      <Link to="/todos/new" className="button teal button-wide">New Todo</Link>

      <br />

      {todos ? <TodosList todos={todos} /> : <LoadingIndicator />}
    </>
  )
}

export default TodosPage
