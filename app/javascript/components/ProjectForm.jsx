import React from 'react'
import ReactDOM from 'react-dom'
import Project from './Project'
import PropTypes from 'prop-types'

class ProjectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      project: props.project,
      errors: {}
    }

    this.updateName = this.updateName.bind(this)
    this.updateDueDate = this.updateDueDate.bind(this)
    this.updateDetails = this.updateDetails.bind(this)
    this.updateStatus = this.updateStatus.bind(this)
    this.updateEstimatesEnabled = this.updateEstimatesEnabled.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentWillReceiveProps({ project }) {
    console.log(project)
    this.setState({ project })
  }

  updateName(event) {
    let project = this.state.project
    project.name = event.target.value
    this.setState({project: project})
  }

  updateDueDate(event) {
    let project = this.state.project
    project.due_date = event.target.value
    this.setState({project: project})
  }

  updateDetails(event) {
    let project = this.state.project
    project.details = event.target.value
    this.setState({project: project})
  }

  updateStatus(event) {
    let project = this.state.project

    if (project.status === "complete") {
      project.status = "incomplete"
    } else {
      project.status = "complete"
    }

    this.setState({project: project})
  }

  updateEstimatesEnabled(event) {
    let project = this.state.project

    if (project.estimates_enabled) {
      project.estimates_enabled = false
    } else {
      project.estimates_enabled = true
    }

    this.setState({project: project})
  }

  handleSubmit(event) {
    event.preventDefault()
    const { project } = this.state
    this.props.onSubmit(project)
  }

  handleDelete(event) {
    if (confirm("Are you sure?")) {
      event.preventDefault()
      this.props.onDelete(this.state.project.id)
    }
  }

  render() {
    const { project } = this.state
    let deleteButton = ""

    if (project.id) {
      deleteButton = (
        <div>
          <hr />
          <button className="button button-wide accent0" type="button" onClick={this.handleDelete}>
            Delete
          </button>
        </div>
      )
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" value={this.state.project.name} onChange={this.updateName} />
          </div>

          <div className="input">
            <label htmlFor="due_date">Due date</label>
            <input id="due_date" name="due_date" type="date" value={this.state.project.due_date} onChange={this.updateDueOn} />
          </div>

          <div className="input">
            <label htmlFor="details">Details</label>
            <textarea id="details" name="details" value={this.state.project.details} onChange={this.updateDetails} rows="5" />
          </div>

          <div className="input">
            <label htmlFor="status">
              <input id="status" name="status" type="checkbox" checked={this.state.project.status === "complete"} onChange={this.updateStatus} value="complete" />
              Complete?
            </label>
          </div>

          <div className="input">
            <label htmlFor="estimates_enabled">
              <input id="estimates_enabled" name="estimates_enabled" type="checkbox" checked={this.state.project.estimates_enabled} onChange={this.updateEstimatesEnabled} value="true" />
              Estimates enabled?
            </label>
          </div>

          <button className="button button-wide accent5" type="submit">Save</button>
        </form>

        {deleteButton}
      </div>
    )
  }
}

ProjectForm.propTypes = {
  project: PropTypes.shape(),
  onSubmit: PropTypes.func.isRequired
}

ProjectForm.defaultProps = {
  project: {
    name: undefined,
    due_date: undefined,
    details: undefined,
    estimates_enabled: false,
    status: "incomplete"
  }
}

export default ProjectForm
