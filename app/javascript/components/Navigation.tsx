import React, { useContext, useEffect } from "react"
import { NavLink } from "react-router-dom"
import CurrentUserContext from "contexts/CurrentUserContext"

const Navigation = () => {
  const { currentUser } = useContext(CurrentUserContext)

  return (
    <>
      {currentUser ?
        <>
          <NavLink to="/projects" id="projects-link">Projects</NavLink>
          <NavLink to="/todos" id="todos-link">Todos</NavLink>
          {
          /* <NavLink to="/search" id="search-link">🔍</NavLink> */
          }
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
