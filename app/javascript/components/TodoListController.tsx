import React, { useContext, useRef, useState } from "react"
import { createTodo } from "repos/TodosRepo"
import { fetchProjectWithTodos } from "repos/ProjectsRepo"
import AuthenticityTokenContext from "contexts/AuthenticityTokenContext"
import { Link } from "react-router-dom"
import { ProjectI, TodoI } from "interfaces"
import TodoList from "components/TodoList"
import LoadingIndicator from "components/LoadingIndicator"

const TodoListController = ({ todos, currentProject, setTodos }: { todos?: Array<TodoI>, currentProject?: ProjectI, setTodos?: (todos: Array<TodoI>) => void }) => {
  const authToken = useContext(AuthenticityTokenContext)
  const newTodoNameInput = useRef(null)
  const [newTodo, setNewTodo] = useState(null)
  const [savingNewTodo, setSavingNewTodo] = useState(false)

  const handleSubmitNewTodo = (e) => {
    e.preventDefault()
    setSavingNewTodo(true)
    createTodo(newTodo, authToken, (data) => {
      fetchProjectWithTodos(currentProject.id, (data) => setTodos(data.todos))
      setSavingNewTodo(false)
      setNewTodo(null)
    })
  }

  const handleChangeNewTodoName = (e) => {
    setNewTodo({ project_id: currentProject?.id, name: e.target.value })
  }

  return (
    <>
      <form onSubmit={handleSubmitNewTodo}>
        <input
          type="text"
          id="new-todo-name"
          className="string"
          placeholder={savingNewTodo ? "Saving..." : "Enter a todo..."}
          ref={newTodoNameInput}
          value={newTodo?.name || ""}
          onChange={handleChangeNewTodoName}
          required={true}
          disabled={savingNewTodo}
        />
      </form>

      {todos ? <TodoList todos={todos} currentProject={currentProject} /> : <LoadingIndicator />}
    </>
  )
}

export default TodoListController
