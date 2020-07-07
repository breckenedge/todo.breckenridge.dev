import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import CompleteToggle from './CompleteToggle'

const ProjectListItem = ({ project, onComplete, onIncomplete }) => {
  const toggleClassName = "complete-toggle " + (project.status === "complete" ? "complete" : "incomplete")
  const toggleContent = project.status === "complete" ? "×" : "✓"
  const toggleAction = project.status === "complete" ? onIncomplete : onComplete

  return (
    <div className="list-item project">
      <CompleteToggle onClick={() => toggleAction(project)} toggleContent={toggleContent} toggleClassName={toggleClassName} />

      <Link to={`/projects/${project.id}`} className="name-and-progress">
        <div className="name">{project.name}</div>
        <div className="progress">{project.percent_complete}</div>
      </Link>
    </div>
  )
}

ProjectListItem.propTypes = {
  project: PropTypes.shape()
}

ProjectListItem.defaultProps = {
  project: undefined
}

export default ProjectListItem
