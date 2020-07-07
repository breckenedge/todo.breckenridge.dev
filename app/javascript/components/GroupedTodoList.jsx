import React from 'react'
import ReactDOM from 'react-dom'
import arrayUniq from 'array-uniq'
import TodoList from './TodoList'

class GroupedTodoList extends React.Component {
  renderTodosByDate(todosByDate) {
    return Object.keys(todosByDate).map((date) => (
      <div key={date}>
        <div className="todo-list-heading">
          <h3>{date ? date : "No due date"}</h3>
        </div>

        <TodoList todos={todosByDate[date]} />
      </div>
    ))
  }

  render() {
    const todos = this.props.todos
    const completeTodos = todos.filter((todo) => todo.status === "complete")
    const incompleteTodos = todos.filter((todo) => todo.status !== "complete")
    const incompleteDates = arrayUniq(incompleteTodos.map((todo) => todo.due_on)).sort()

    let incompleteTodosByDate = {}
    incompleteTodos.forEach((todo) => {
      if (incompleteTodosByDate[todo.due_on] === undefined) {
        incompleteTodosByDate[todo.due_on] = []
      }
      incompleteTodosByDate[todo.due_on].push(todo)
    })

    return (
      <div>
        {this.renderTodosByDate(incompleteTodosByDate)}

        <h3 className="accent4 todo-list-heading">Complete</h3>
        <TodoList todos={completeTodos} />
      </div>
    )
  }
}

GroupedTodoList.defaultProps = {
  todos: []
}

export default GroupedTodoList
