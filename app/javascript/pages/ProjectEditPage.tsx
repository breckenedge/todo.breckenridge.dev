import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProjectForm from "components/ProjectForm"
import LoadingIndicator from "components/LoadingIndicator"
import AppCache from "components/AppCache"

const ProjectEditPage = () => {
  const id = useParams()["id"]
  const [project, setProject] = useState(null)
  const { projects } = AppCache.useContainer()

  useEffect(() => {
    setProject(projects.find((p) => p.id === id))
  }, [id, projects])

  return (
    project ? <ProjectForm project={project} /> : <LoadingIndicator/>
  )
}

export default ProjectEditPage
