import React from "react"
import { Link } from "react-router-dom"
import ProjectCompleteToggle from "components/ProjectCompleteToggle"
import { ProjectI } from "interfaces"
import sortBy, { sortByStatus } from "utilities/sortBy"

const ProjectsList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.sort(sortBy('name')).sort(sortByStatus).map((p: ProjectI) => {
        return (
          <div key={p.id} className="project list-item">
            <ProjectCompleteToggle project={p} />
            <Link to={`/projects/${p.id}`} className="name-and-progress">
              <div className="name">{p.name}</div>
              <div className="progress"></div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectsList
