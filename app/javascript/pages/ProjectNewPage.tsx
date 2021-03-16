import ProjectForm from "components/ProjectForm"
import React from "react"
import { ProjectI } from "interfaces"

const ProjectNewPage = () => {
  const defaultState: ProjectI = {}

  return (
    <ProjectForm project={defaultState} />
  )
}

export default ProjectNewPage
