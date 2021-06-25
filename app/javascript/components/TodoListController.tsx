import React, { useContext, useRef, useState } from "react"
import { fetchTodos, createTodo } from "repos/TodosRepo"
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
      currentProject ? fetchProjectWithTodos(currentProject.id, (data) => setTodos(data.todos)) : fetchTodos(setTodos)
      setSavingNewTodo(false)
      setNewTodo(null)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmitNewTodo} style={{display: 'flex', flexDirection: "row"}}>
        <label
          htmlFor="new-todo-name"
          style={{display: 'none'}}
        >
          New todo
        </label>
        <input
          type="text"
          id="new-todo-name"
          className="string"
          placeholder={savingNewTodo ? "Saving..." : "Enter a todo..."}
          ref={newTodoNameInput}
          value={newTodo?.name || ""}
          onChange={(e) => setNewTodo({project_id: currentProject?.id, name: e.target.value})}
          required={true}
          disabled={savingNewTodo}
        />
        <input
          type="submit"
          value="Create Todo"
          className="button teal"
          style={{display: 'none'}}
          disabled={savingNewTodo}
        />
      </form>

      {todos ? <TodoList todos={todos} currentProject={currentProject} /> : <LoadingIndicator />}
    </>
  )
}

export default TodoListController
