import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import GroupedTodoList from './GroupedTodoList'
import { Link, Switch, Route } from 'react-router-dom'
import TodoForm from './TodoForm'

class Todos extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todos: props.todos }
  }

  componentDidMount() {
    axios.get('/api/todos')
      .then((response) => this.setState({todos: response.data} ))
      .catch((error) => console.log(error))
  }

  render() {
    const { todos } = this.state
    if (todos === null) return null

    return (
      <div>
        <Switch>
          <Route path="/todos/new">
            <TodoForm />
          </Route>
          <Route path="/todos">
            <Link to="/todos/new" className="button button-wide accent4">New Todo</Link>
            <GroupedTodoList todos={this.state.todos} />
          </Route>
        </Switch>
      </div>
    )
  }
}

Todos.defaultProps = {
  todos: []
}

export default Todos
