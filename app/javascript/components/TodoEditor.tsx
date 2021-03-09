import React from 'react'
import TodoForm from './TodoForm'
import { TodoI } from '../interfaces/TodoI'

interface PropsI {
  todo: TodoI,
  returnTo?: string,
}

const TodoEditor = ({ todo, returnTo }) => {
  const onSubmit = () => {}

  return (
    <TodoForm
      onSubmit={onSubmit}
      todo={todo}
      returnTo={returnTo}
    />
  )
}

export default TodoEditor
