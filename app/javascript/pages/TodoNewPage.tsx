import React, { useEffect, useState }  from "react"
import TodoForm from "components/TodoForm"
import { useParams } from "react-router-dom"
import { TodoI } from "interfaces"
import AppCache from "components/AppCache"

const TodoNewPage = () => {
  const projectId = useParams()["projectId"]
  const defaultTodo: TodoI = { project_id: projectId }
  const [todo, _setTodo] = useState(defaultTodo)
  const [currentProject, setCurrentProject] = useState(null)
  const { projects } = AppCache.useContainer()

  useEffect(() => {
    projectId ? projects.find((project) => project.id === projectId) : setCurrentProject(null)
  }, [projects, projectId])

  return (
    <>
      <TodoForm todo={todo} currentProject={currentProject} />
    </>
  )
}

export default TodoNewPage
