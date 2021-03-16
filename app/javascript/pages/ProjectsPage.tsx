import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProjectsList from "components/ProjectsList"
import { fetchProjects } from "repos/ProjectsRepo"
import LoadingIndicator from "components/LoadingIndicator"

const ProjectsPage = () => {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchProjects((data) => {
      setProjects(data)
      setIsLoading(false)
    })
  }, [])

  return (<div>
    <Link to="/projects/new" className="button button-wide teal">New Project</Link>

    <br />

    {isLoading && <LoadingIndicator />}
    {!isLoading &&
      <ProjectsList projects={projects} />
    }
  </div>)
}

export default ProjectsPage
