import React from 'react'
import ReactDOM from 'react-dom'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos }) => {
  const renderedTodos = todos.map((todo) => {
    return <TodoListItem todo={todo} key={todo.id} />
  })

  return (
    <div className="todo-list">
      {renderedTodos}
    </div>
  )
}

export default TodoList
