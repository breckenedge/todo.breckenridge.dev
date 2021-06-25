import React, { useContext, useEffect, useState, useRef } from "react"
import { fetchTodos, createTodo } from "repos/TodosRepo"
import LoadingIndicator from "components/LoadingIndicator"
import AuthenticityTokenContext from "contexts/AuthenticityTokenContext"
import TextInput from "components/TextInput"
import TodoListController from "components/TodoListController"

const TodosPage = () => {
  const [todos, setTodos] = useState(null)

  useEffect(() => {
    fetchTodos(setTodos)
  }, [])

  return (
    <TodoListController todos={todos} setTodos={setTodos} />
  )
}

export default TodosPage
