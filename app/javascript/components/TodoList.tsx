import React from "react"
import { TodoI } from "interfaces"
import sortBy, { sortByStatus } from "utilities/sortBy"
import TodoListItem from "./TodoListItem"
import { todayISO8601 } from "utilities/date"

const TodoList = ({ todos }: { todos: Array<TodoI> }) => {
  let completeTodos: TodoI[] = []
  let upcomingTodos: TodoI[] = []
  let incompleteTodos: TodoI[] = []
  let lateTodos: TodoI[] = []
  let today = todayISO8601()

  // Group todos by status and due date
  todos.sort(sortBy("name")).forEach((todo) => {
    if (todo.status === "complete") {
      completeTodos.push(todo)
    } else if (todo.due_date) {
      if (todo.due_date < today) {
        lateTodos.push(todo)
      } else {
        upcomingTodos.push(todo)
      }
    } else {
      incompleteTodos.push(todo)
    }
  })

  const toListItem = (todo: TodoI, i: number) => {
    return <TodoListItem key={i} todo={todo} />
  }

  return (
    <div className="todo-list">
      {lateTodos.length > 0 && <h3>Late</h3>}
      {lateTodos.sort(sortBy('due_date')).map(toListItem)}

      {upcomingTodos.length > 0 && <h3>Upcoming</h3>}
      {upcomingTodos.sort(sortBy('due_date')).map(toListItem)}

      {incompleteTodos.length > 0 && <h3>No Due Date</h3>}
      {incompleteTodos.map(toListItem)}

      {completeTodos.length > 0 && <h3>Completed</h3>}
      {completeTodos.map(toListItem)}
    </div>
  )
}

export default TodoList
