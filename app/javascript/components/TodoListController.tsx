import React, { useRef, useState } from "react"
import { ProjectI, TodoI } from "interfaces"
import TodoList from "components/TodoList"
import { SortKey, SortDir } from "utilities/sortBy"
import AppCache from "./AppCache"

const TodoListController = ({ currentProject }: { currentProject?: ProjectI }) => {
  const newTodoNameInput = useRef(null)
  const skSortKey = currentProject ? `project:${currentProject.id}:sortKey` : "sortKey"
  const skSortDir = currentProject ? `project:${currentProject.id}:sortDir` : "sortDir"
  const skShowCompleted = currentProject ? `project:${currentProject.id}:showCompleted` : "showCompleted"
  const [newTodo, setNewTodo] = useState(null)
  const [sortKey, setSortKey] = useState((localStorage.getItem(skSortKey) || "name") as SortKey)
  const [sortDir, setSortDir] = useState((localStorage.getItem(skSortDir) || "desc") as SortDir)
  const [showCompleted, setShowCompleted] = useState((localStorage.getItem(skShowCompleted) || "t"))
  const { createTodo } = AppCache.useContainer()

  const handleSubmitNewTodo = (e) => {
    e.preventDefault()
    createTodo(newTodo, () => setNewTodo(null))
  }

  const handleChangeNewTodoName = (e) => {
    setNewTodo({ project_id: currentProject?.id, name: e.target.value })
  }

  const handleChangeSortKey = (e) => {
    const newSortKey = e.target.value as SortKey
    localStorage.setItem(skSortKey, newSortKey)
    setSortKey(newSortKey)
  }

  const handleChangeSortDir = () => {
    const newSortDir = (sortDir === "desc" ? "asc" : "desc") as SortDir
    localStorage.setItem(skSortDir, newSortDir)
    setSortDir(newSortDir)
  }

  const handleChangeShowCompleted = () => {
    const newShowCompleted = showCompleted === "t" ? "f" : "t"
    localStorage.setItem(skShowCompleted, newShowCompleted)
    setShowCompleted(newShowCompleted)
  }

  return (
    <>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "0.75em", fontSize: "85%"}}>
        <label style={{flexGrow: 1}}>
          Show completed <input type="checkbox" onChange={handleChangeShowCompleted} checked={showCompleted === "t"}/>
        </label>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
          <label htmlFor="sortBy" style={{display: "none"}}>Sort</label>
          <select id="sortBy" className="select" onChange={handleChangeSortKey} value={sortKey} style={{marginRight: "0.25em"}}>
            <option value="name">Sort by name</option>
            <option value="due_date">Sort by due date</option>
            <option value="created_at">Sort by creation date</option>
          </select>
          <button onClick={handleChangeSortDir} className="button purple">{sortDir === "desc" ? "↓" : "↑"}</button>
        </div>
      </div>

      <form onSubmit={handleSubmitNewTodo}>
        <input
          type="text"
          id="new-todo-name"
          className="string"
          placeholder={"Enter a todo..."}
          ref={newTodoNameInput}
          value={newTodo?.name || ""}
          onChange={handleChangeNewTodoName}
          required={true}
        />
      </form>

      <TodoList
        sortDir={sortDir}
        sortKey={sortKey}
        showCompleted={showCompleted}
        currentProject={currentProject}
      />
    </>
  )
}

export default TodoListController
