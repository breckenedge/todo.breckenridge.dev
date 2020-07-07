import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import GroupedTodoList from './GroupedTodoList'

class Project extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      project: props.project,
      todos: props.todos
    }
  }

  componentDidMount() {
    axios.get(`/api/projects/${this.props.match.params.id}/todos.json`)
      .then((response) => this.setState({ todos: response.data }))
      .catch((error) => console.log(error))
  }

  render() {
    const project = this.state.project
    const todos = this.state.todos
    const dueDate = project.due_date
    const details = project.details

    return (
      <div>
        <div className="navigate-back">
          <Link to="/">← Back to list</Link>
        </div>

        <div className="two-column">
          <div>
            <h1>{project.name}</h1>
          </div>

          <div className="no-wrap">
            <Link to={`/projects/${project.id}/edit`} className="button accent5">Edit</Link>
          </div>
        </div>

        <dl>
          <dt>Due date</dt>
          <dd>{dueDate}</dd>
 
          <dt>Details</dt>
          <dd>{details}</dd>
        </dl>

        <div className="navigation-header">
          <h2>Todos</h2>
          <Link to={`/todos/new?project_id=${project.id}`} className="button accent4">+</Link>
        </div>

        <div className="link-list">
          <GroupedTodoList todos={todos} />
        </div>
      </div>
    )
  }
}

Project.defaultProps = {
  project: {},
  todos: []
}

export default Project
