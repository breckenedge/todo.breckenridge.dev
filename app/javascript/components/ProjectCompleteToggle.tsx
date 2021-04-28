import React, { useContext, useState } from "react"
import { ProjectI } from "interfaces"
import { completeProject, incompleteProject } from "repos/ProjectsRepo"
import AuthenticityTokenContext from "contexts/AuthenticityTokenContext"
import CompleteToggle from "components/CompleteToggle"

const ProjectCompleteToggle = ({ project }: { project: ProjectI }) => {
  const authToken = useContext(AuthenticityTokenContext)
  const [status, setStatus] = useState(project.status)
  const method = status === "complete" ? incompleteProject : completeProject

  return (
    <CompleteToggle
      status={status}
      onClick={() => method(project, authToken, (data) => { setStatus(data.status) })}
    />
  )
}

export default ProjectCompleteToggle
