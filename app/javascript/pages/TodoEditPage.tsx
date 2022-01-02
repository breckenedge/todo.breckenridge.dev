import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TodoForm from "components/TodoForm"
import { fetchTodo } from "repos/TodosRepo"
import { fetchProject } from "repos/ProjectsRepo"
import LoadingIndicator from "components/LoadingIndicator"

const TodoEditPage = () => {
  const id = useParams()["id"]
  const projectId = useParams()["projectId"]
  const [todo, setTodo] = useState(null)
  const [currentProject, setCurrentProject] = useState(null)

  useEffect(() => {
    fetchTodo(projectId, id, setTodo)
  }, [id])

  useEffect(() => {
    fetchProject(projectId, setCurrentProject)
  }, [projectId])

  return (
    todo ?
    <>
      <TodoForm todo={todo} currentProject={currentProject} />
    </>
    :
    <LoadingIndicator />
  )
}

export default TodoEditPage
