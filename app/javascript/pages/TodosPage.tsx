import React, { useEffect, useState } from "react"
import { fetchTodos } from "repos/TodosRepo"
import { Link } from "react-router-dom"
import TodoList from "components/TodoList"
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

      {todos ? <TodoList todos={todos} /> : <LoadingIndicator />}
    </>
  )
}

export default TodosPage
