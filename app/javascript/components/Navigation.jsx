import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

const Navigation = () => (
  <nav>
    <Link to="/" id="projects-link">Projects</Link>
    <Link to="/todos" id="todos-link">Todos</Link>
    <Link to="/search" id="search-link">Search</Link>
    <div style={{flexGrow: 1}}></div>
    <Link to="/profile" id="profile-link">Profile</Link>
  </nav>
)

export default Navigation
