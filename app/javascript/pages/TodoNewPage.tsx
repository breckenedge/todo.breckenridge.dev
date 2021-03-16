import React from "react"
import TodoForm from "components/TodoForm"
import TodoBreadcrumbs from "components/TodoBreadcrumbs"
import useQuery from "hooks/useQuery"

const TodoNewPage = () => {
  const query = useQuery()
  const projectId = query.get("project_id")
  const todo = {
    project_id: projectId ? parseInt(projectId) : null
  }

  return (
    <>
      <TodoBreadcrumbs todo={todo} />
      <TodoForm todo={todo} />
    </>
  )
}

export default TodoNewPage
