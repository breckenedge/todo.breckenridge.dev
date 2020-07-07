import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { checkPropTypes } from 'prop-types'
import ProjectListItem from './ProjectListItem'

class ProjectList extends React.Component {
  renderProjects(projects) {
    const { activeId } = this.props

    return projects.map((project) => (
      <ProjectListItem key={project.id} project={project} onComplete={this.props.onComplete} onIncomplete={this.props.onIncomplete}/>
    ))
  }

  render() {
    let incompleteProjects = this.props.projects.filter((project) => (project.status === "incomplete"))
    let completeProjects = this.props.projects.filter((project) => (project.status !== "incomplete"))

    return (
      <div>
        <Link to="/projects/new" className="button button-wide accent4">New Project</Link>

        <br />

        <h2>Incomplete</h2>

        <div className="project-list">
          {this.renderProjects(incompleteProjects)}
        </div>

        <hr />

        <h2>Complete</h2>

        <div className="project-list">
          {this.renderProjects(completeProjects)}
        </div>
      </div>
    )
  }
}

ProjectList.propTypes = {
  activeId: PropTypes.number,
  projects: PropTypes.arrayOf(PropTypes.object)
}

ProjectList.defaultProps = {
  activeId: undefined,
  projects: []
}

export default ProjectList
