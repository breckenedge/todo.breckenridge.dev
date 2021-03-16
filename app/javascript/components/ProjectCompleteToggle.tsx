import React, { useContext, useState } from "react"
import { ProjectI } from "interfaces"
import { completeProject, incompleteProject } from "repos/ProjectsRepo"
import AuthenticityTokenContext from "contexts/AuthenticityTokenContext"

const ProjectCompleteToggle = ({ project }: { project: ProjectI }) => {
  const [status, setStatus] = useState(project.status)
  const authToken = useContext(AuthenticityTokenContext)

  const handleClick = (e) => {
    e.preventDefault()
    const method = status === "complete" ? incompleteProject : completeProject
    method(project, authToken, () => {
      setStatus(status === "complete" ? "incomplete" : "complete")
    })
  }

  return (
    <button type="button" className={`complete-toggle ${status}`} onClick={handleClick}>
      <div className="icon">{status === "complete" ? "×" : "✓" }</div>
    </button>
  )
}

export default ProjectCompleteToggle
