import React from "react"
import { ProjectI, TodoI } from "interfaces"
import sortBy, { reverseSortBy } from "utilities/sortBy"
import TodoListItem from "./TodoListItem"

const TodoList = ({ todos, currentProject }: { todos: Array<TodoI>, currentProject?: ProjectI }) => {
  let completeTodos: TodoI[] = []
  let incompleteTodos: TodoI[] = []

  // Group todos by status and due date
  todos.sort(reverseSortBy("created_at")).forEach((todo) => {
    if (todo.status === "complete") {
      completeTodos.push(todo)
    } else {
      incompleteTodos.push(todo)
    }
  })

  const toListItem = (todo: TodoI, i: number) => {
    return <TodoListItem key={i} todo={todo} currentProject={currentProject} />
  }

  return (
    <div className="todo-list">
      {incompleteTodos.map(toListItem)}
      {completeTodos.map(toListItem)}
    </div>
  )
}

export default TodoList
