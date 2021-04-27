import React from "react"
import { ProjectI } from "interfaces"
import { Link } from "react-router-dom"
import ProjectCompleteToggle from "components/ProjectCompleteToggle"

const ProjectListItem = ({ project }: { project: ProjectI }) => (
  <div className="project list-item">
    <ProjectCompleteToggle project={project} />
    <Link to={`/projects/${project.id}`} className="name">
      {project.name}
    </Link>
    <div className="due-date">
      {project.due_date}
    </div>
  </div>
)

export default ProjectListItem
