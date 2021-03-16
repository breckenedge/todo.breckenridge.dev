import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchProject } from "repos/ProjectsRepo"
import { ProjectI, TodoI } from "interfaces"

const TodoBreadcrumbs = ({ todo }: { todo: TodoI }) => {
  const defaultState: ProjectI = {}
  const [project, setProject] = useState(defaultState)

  useEffect(() => {
    if (todo.project_id) {
      fetchProject(todo.project_id, (data) => { setProject(data) })
    } else {
      setProject(defaultState)
    }
  }, [todo.project_id])

  return (
    <>
      {<div className="navigate-back">
        <Link to={project.id ? `/projects/${project.id}` : "/todos"}>
          ← {project.name ? project.name : "Back to List"}
        </Link>
      </div>}
    </>
  )
}

export default TodoBreadcrumbs
