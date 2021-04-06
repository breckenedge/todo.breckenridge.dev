import React from "react"
import TodoForm from "components/TodoForm"
import TodoBreadcrumbs from "components/TodoBreadcrumbs"
import useQuery from "hooks/useQuery"

const TodoNewPage = () => {
  const query = useQuery()
  const todo = {
    project_id: query.get("project_id")
  }

  return (
    <>
      <TodoBreadcrumbs todo={todo} />
      <TodoForm todo={todo} />
    </>
  )
}

export default TodoNewPage
