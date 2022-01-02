import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import TodoListController from "components/TodoListController"
import { ProjectI, TodoI } from "interfaces"
import { fetchProjectWithTodos } from "repos/ProjectsRepo"
import LoadingIndicator from "components/LoadingIndicator"

const ProjectPage = () => {
  const id = useParams()["id"]
  const [project, setProject] = useState(null)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchProjectWithTodos(id, (data) => {
      setProject(data.project)
      setTodos(data.todos)
    })
  }, [id])

  return (
    <>
      {project ?
        <div>
          <div className="no-wrap">
            <Link to={`/projects/${id}/edit`} className="button blue">
              Edit Project
            </Link>
          </div>

          <dl>
            {project.due_date &&
              <>
                <dt>Due date</dt>
                <dd>{project.due_date}</dd>
              </>
            }

            {project.details &&
              <>
                <dt>Details</dt>
                <dd>{project.details}</dd>
              </>
            }
          </dl>

          <TodoListController todos={todos} currentProject={project} setTodos={setTodos} />
        </div>
      :
        <LoadingIndicator/>
      }
    </>
  )
}

export default ProjectPage
