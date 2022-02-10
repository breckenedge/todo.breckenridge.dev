import React from "react"
import { ProjectI } from "interfaces"
import ProjectListItem from "components/ProjectListItem"
import sortBy from "utilities/sortBy"

const ProjectList = ({ projects }: { projects: Array<ProjectI> }) => {
  return (
    <div className="project-list">
      {projects.filter((p) => !p.deleted_at).sort(sortBy('name')).map((project: ProjectI) => <ProjectListItem project={project} key={project.id} />)}
    </div>
  )
}

export default ProjectList
