import React, { useEffect, useState }  from "react"
import TodoForm from "components/TodoForm"
import { useParams } from "react-router-dom"
import { fetchProject } from "repos/ProjectsRepo"
import { TodoI } from "interfaces"

const TodoNewPage = () => {
  const projectId = useParams()["projectId"]
  const defaultTodo: TodoI = { project_id: projectId }
  const [todo, setTodo] = useState(defaultTodo)
  const [currentProject, setCurrentProject] = useState(null)

  useEffect(() => {
    projectId ? fetchProject(projectId, setCurrentProject) : setCurrentProject(null)
  }, [projectId])

  return (
    <>
      <TodoForm todo={todo} currentProject={currentProject} />
    </>
  )
}

export default TodoNewPage
