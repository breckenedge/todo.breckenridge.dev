import React, { useCallback } from "react"
import { ProjectI, TodoI } from "interfaces"
import sortBy, { reverseSortBy, SortDir, SortKey } from "utilities/sortBy"
import TodoListItem from "./TodoListItem"

const TodoList = ({ todos, currentProject, sortDir, sortKey, showCompleted }: { todos: Array<TodoI>, currentProject?: ProjectI, sortDir: SortDir, sortKey: SortKey, showCompleted: "t" | "f" }) => {
  let sortFunction = sortDir === "desc" ? reverseSortBy : sortBy

  const toListItem = (todo: TodoI, i: number) => {
    return <TodoListItem key={i} todo={todo} showCompleted={showCompleted} currentProject={currentProject} />
  }

  return (
    <div className="todo-list">
      {todos.sort(sortFunction(sortKey)).map(toListItem)}
    </div>
  )
}

export default TodoList
