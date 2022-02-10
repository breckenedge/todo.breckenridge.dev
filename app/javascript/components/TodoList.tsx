import React, { useMemo } from "react"
import { ProjectI, TodoI } from "interfaces"
import sortBy, { reverseSortBy, SortDir, SortKey } from "utilities/sortBy"
import TodoListItem from "./TodoListItem"
import AppCache from "./AppCache"

const TodoList = ({ currentProject, sortDir, sortKey, showCompleted }: { currentProject?: ProjectI, sortDir?: SortDir, sortKey?: SortKey, showCompleted?: "t" | "f" }) => {
  const { todos } = AppCache.useContainer()
  let sortFunction = sortDir === "desc" ? reverseSortBy : sortBy

  const currentTodos = useMemo(() => (
    todos
      .filter((t) => !t.deleted_at)
      .filter((t) => t.project_id === currentProject?.id)
      .sort(sortFunction(sortKey))
  ), [currentProject, todos, sortFunction, sortDir, sortKey, showCompleted])

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
      {currentTodos.map(toListItem)}
    </div>
  )
}

export default TodoList
