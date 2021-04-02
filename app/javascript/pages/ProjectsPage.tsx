import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProjectsList from "components/ProjectsList"
import { fetchProjects } from "repos/ProjectsRepo"
import LoadingIndicator from "components/LoadingIndicator"

const ProjectsPage = () => {
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    fetchProjects(setProjects)
  }, [])

  return (
    <>
      <Link to="/projects/new" className="button button-wide teal">New Project</Link>

      <br />

      {projects ? <ProjectsList projects={projects} /> : <LoadingIndicator />}
    </>
  )
}

export default ProjectsPage
