import React from "react"
import { ProjectI, TodoI } from "interfaces"
import sortBy, { sortByStatus } from "utilities/sortBy"
import TodoListItem from "./TodoListItem"
import { todayISO8601 } from "utilities/date"

const TodoList = ({ todos, currentProject }: { todos: Array<TodoI>, currentProject?: ProjectI }) => {
  let completeTodos: TodoI[] = []
  let todayTodos: TodoI[] = []
  let upcomingTodos: TodoI[] = []
  let incompleteTodos: TodoI[] = []
  let lateTodos: TodoI[] = []
  const today = todayISO8601()

  // Group todos by status and due date
  todos.sort(sortBy("name")).forEach((todo) => {
    if (todo.status === "complete") {
      completeTodos.push(todo)
    } else if (todo.due_date) {
      if (todo.due_date < today) {
        lateTodos.push(todo)
      } else if (todo.due_date === today) {
        todayTodos.push(todo)
      } else {
        upcomingTodos.push(todo)
      }
    } else {
      incompleteTodos.push(todo)
    }
  })

  const toListItem = (todo: TodoI, i: number) => {
    return <TodoListItem key={i} todo={todo} currentProject={currentProject} />
  }

  return (
    <div className="todo-list">
      {lateTodos.length > 0 && <h3>Late</h3>}
      {lateTodos.sort(sortBy('due_date')).map(toListItem)}

      {todayTodos.length > 0 && <h3>Today</h3>}
      {todayTodos.sort(sortBy('due_date')).map(toListItem)}

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
