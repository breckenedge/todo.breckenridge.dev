import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TodoForm from "components/TodoForm"
import LoadingIndicator from "components/LoadingIndicator"
import AppCache from "components/AppCache"

const TodoEditPage = () => {
  const id = useParams()["id"]
  const projectId = useParams()["projectId"]
  const [todo, setTodo] = useState(null)
  const [currentProject, setCurrentProject] = useState(null)
  const { projects, todos } = AppCache.useContainer()

  useEffect(() => {
    setTodo(todos.find((t) => t.id === id))
  }, [todos, id])

  useEffect(() => {
    setCurrentProject(projectId ? projects.find((p) => p.id === projectId) : null)
  }, [projects, projectId])

  return (
    <>
      {todo && <TodoForm todo={todo} currentProject={currentProject} />}
    </>
  )
}

export default TodoEditPage
