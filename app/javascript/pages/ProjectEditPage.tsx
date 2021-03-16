import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProjectForm from "components/ProjectForm"
import { fetchProject } from "repos/ProjectsRepo"
import LoadingIndicator from "components/LoadingIndicator"

const ProjectEditPage = () => {
  const id = useParams()["id"]
  const [project, setProject] = useState(null)

  useEffect(() => {
    fetchProject(id, setProject)
  }, [id])

  return (
    project ? <ProjectForm project={project} /> : <LoadingIndicator/>
  )
}

export default ProjectEditPage
