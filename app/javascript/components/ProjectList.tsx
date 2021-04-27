import React from "react"
import { ProjectI } from "interfaces"
import ProjectListItem from "components/ProjectListItem"
import sortBy, { sortByStatus } from "utilities/sortBy"

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.sort(sortBy('name')).sort(sortByStatus).map((project: ProjectI, i: number) => <ProjectListItem project={project} key={i} />)}
    </div>
  )
}

export default ProjectList
