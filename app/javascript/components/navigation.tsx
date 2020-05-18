import React from 'react'
import ReactDOM from 'react-dom'

const Navigation = () => (
  <nav>
    <a href="/projects" id="projects-link">Projects</a>
    <a href="/todos" id="todos-link">Todos</a>
    <a href="/search" id="search-link">Search</a>
    <div style={{flexGrow: 1}}></div>
    <a href="/profile" id="profile-link">Profile</a>
  </nav>
)

export default Navigation
