import React from "react"
import { ProjectI } from "interfaces"
import { Link } from "react-router-dom"
import TodayDelta from "components/TodayDelta"

const ProjectListItem = ({ project }: { project: ProjectI }) => (
  <Link to={`/projects/${project.id}`} className="project">
    <div className="name">
      {project.name}
    </div>
    <div className="due-date">
      {project.due_date && <TodayDelta date={project.due_date}/>}
    </div>
  </Link>
)

export default ProjectListItem
