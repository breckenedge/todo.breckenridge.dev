import React from 'react'
import ReactDOM from 'react-dom'
import { Switch } from 'react-router-dom'
import PropsRoute from './PropsRoute'
import PropTypes from 'prop-types'
import ProjectList from './ProjectList'
import ProjectForm from './ProjectForm'
import Project from './Project'
import axios from 'axios'

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: null
    }

    this.addProject = this.addProject.bind(this)
    this.updateProject = this.updateProject.bind(this)
    this.deleteProject = this.deleteProject.bind(this)
    this.completeProject = this.completeProject.bind(this)
    this.incompleteProject = this.incompleteProject.bind(this)
    this.updateProjectStatus = this.updateProjectStatus.bind(this)
  }

  // Fixme: Extract show-like so that not all projects are downloaded when viewing just one project
  componentDidMount() {
    const { match } = this.props
    const projectId = match.params.id
    axios.get('/api/projects.json')
      .then((response) => this.setState({ projects: response.data }))
      .catch((error) => console.log(error))
  }

  addProject(newProject) {
    axios
      .post("/api/projects.json", newProject)
      .then((response) => {
        const { projects } = this.state
        const createdProject = response.data
        projects.push(createdProject)
        this.props.history.push(`/projects/${createdProject.id}`)
        this.setState({ projects })
      })
      .catch((error) => console.log(error))
  }

  updateProject(updatedProject) {
    axios
      .put(`/api/projects/${updatedProject.id}.json`, updatedProject)
      .then(() => {
        const { projects } = this.state
        const idx = projects.findIndex(project => project.id === updatedProject.id)
        projects[idx] = updatedProject
        this.props.history.push(`/projects/${updatedProject.id}`)
        this.setState({ projects })
      })
      .catch((error) => console.log(error))
  }

  deleteProject(projectId) {
    axios
      .delete(`/api/projects/${projectId}`)
      .then(() => {
        const { projects } = this.state
        const idx = projects.findIndex(project => project.id === projectId)
        projects.splice(idx, 1)
        this.props.history.push("/projects")
        this.setState({ project })
      })
      .catch((error) => console.log(error))
  }

  completeProject(updatedProject) {
    updatedProject.status = "complete"
    this.updateProjectStatus(updatedProject)
  }

  incompleteProject(updatedProject) {
    updatedProject.status = "incomplete"
    this.updateProjectStatus(updatedProject)
  }

  updateProjectStatus(updatedProject) {
    axios
      .put(`/api/projects/${updatedProject.id}.json`, {status: updatedProject.status})
      .then(() => {
        const { projects } = this.state
        const idx = projects.findIndex(project => project.id === updatedProject.id)
        projects[idx] = updatedProject
        this.setState({ projects })
      })
      .catch((error) => console.log(error))
  }

  render() {
    const { projects } = this.state
    if (projects === null) return null

    const { match } = this.props
    const projectId = match.params.id
    const project = projects.find((project) => project.id === Number(projectId))

    return (
      <div>
        <Switch>
          <PropsRoute path="/projects/new" component={ProjectForm} onSubmit={this.addProject} />
          <PropsRoute path="/projects/:id/edit" component={ProjectForm} project={project} onSubmit={this.updateProject} onDelete={this.deleteProject} />
          <PropsRoute path="/projects/:id" component={Project} project={project} />
          <PropsRoute path="/projects" component={ProjectList} projects={projects} onComplete={this.completeProject} onIncomplete={this.incompleteProject} />
        </Switch>
      </div>
    )
  }
}

Projects.propTypes = {
  match: PropTypes.shape(),
  history: PropTypes.shape({ push: PropTypes.func }).isRequired
}

Projects.defaultProps = {
  match: undefined
}

export default Projects
