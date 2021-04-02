import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import TodosList from "components/TodosList"
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
          <div className="two-column">
            <div>
              <h1>{project.name}</h1>
            </div>

            <div className="no-wrap">
              <Link to={`/projects/${id}/edit`} className="button blue">
                Edit
              </Link>
            </div>
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

          <div className="navigation-header">
            <h2>Todos</h2>
            <Link className="button teal" to={`/todos/new?project_id=${project.id}`}>
              +
            </Link>
          </div>

          <TodosList todos={todos} />
        </div>
      :
        <LoadingIndicator/>
      }
    </>
  )
}

export default ProjectPage
