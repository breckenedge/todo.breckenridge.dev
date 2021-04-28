import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TodoForm from "components/TodoForm"
import TodoBreadcrumbs from "components/TodoBreadcrumbs"
import { fetchTodo } from "repos/TodosRepo"
import { fetchProject } from "repos/ProjectsRepo"
import LoadingIndicator from "components/LoadingIndicator"

const TodoEditPage = () => {
  const id = useParams()["id"]
  const projectId = useParams()["projectId"]
  const [todo, setTodo] = useState(null)
  const [currentProject, setCurrentProject] = useState(null)

  useEffect(() => {
    fetchTodo(id, setTodo)
  }, [id])

  useEffect(() => {
    projectId ? fetchProject(projectId, setCurrentProject) : setCurrentProject(null)
  }, [projectId])

  return (
    todo ?
    <>
      <TodoBreadcrumbs todo={todo} currentProject={currentProject} />
      <TodoForm todo={todo} currentProject={currentProject} />
    </>
    :
    <LoadingIndicator />
  )
}

export default TodoEditPage
