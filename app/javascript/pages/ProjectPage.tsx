import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import TodoListController from "components/TodoListController"
import LoadingIndicator from "components/LoadingIndicator"
import AppCache from "components/AppCache"

const ProjectPage = () => {
  const id = useParams()["id"]
  const [project, setProject] = useState(null)
  const { projects, todos } = AppCache.useContainer()

  useEffect(() => {
    setProject(projects.find((p) => p.id === id))
  }, [id, projects, todos])

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

          <TodoListController currentProject={project} />
        </div>
      :
        <LoadingIndicator/>
      }
    </>
  )
}

export default ProjectPage
