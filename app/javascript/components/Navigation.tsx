import React, { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router"
import { matchPath, NavLink } from "react-router-dom"
import CurrentUserContext from "contexts/CurrentUserContext"
import AppCache from "./AppCache"

const Navigation = () => {
  const { currentUser } = useContext(CurrentUserContext)
  const { pathname } = useLocation()
  const params = matchPath(pathname, { path: "/projects/:projectId" })
  const projectId = params ? params["params"]["projectId"] : null
  const [project, setProject] = useState(undefined)
  const { projects } = AppCache.useContainer()

  useEffect(() => {
    if (projectId && projectId !== "new") {
      setProject(projects.find((p) => p.id === projectId))
    } else {
      setProject(undefined)
    }
  }, [projectId, projects])

  return (
    <>
      {currentUser ?
        <>
          <NavLink exact to="/">Todos</NavLink>
          {project && <NavLink to={`/projects/${project.id}`}>{project.name}</NavLink>}
          <div style={{flexGrow: 1}}></div>
          <NavLink to="/profile" id="profile-link">⚙</NavLink>
        </>
        :
        <>
          <NavLink to="/log_in">Log In</NavLink>
        </>
      }
    </>
  )
}

export default Navigation
