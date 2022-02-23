import React from "react"
import { ProjectI, TodoI } from "interfaces"
import TodoListItem from "./TodoListItem"

const TodoList = ({ todos, currentProject, showCompleted }: { todos: Array<TodoI>, currentProject?: ProjectI, showCompleted?: "t" | "f" }) => {

  const toListItem = (todo: TodoI, i: number) => (
    <TodoListItem
      key={i}
      todo={todo}
      showCompleted={showCompleted}
      currentProject={currentProject}
    />
  )

  return (
    <div className="todo-list">
      {todos.map(toListItem)}
    </div>
  )
}

export default TodoList
