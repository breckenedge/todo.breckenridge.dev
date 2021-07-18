import React from "react"
import { Link } from "react-router-dom"
import { ProjectI, TodoI } from "interfaces"

const TodoBreadcrumbs = ({ todo, currentProject }: { todo: TodoI, currentProject?: ProjectI }) => {
  return (
    <>
      {<div className="navigate-back">
        <Link to={`/projects/${currentProject?.id}`}>
          ← {currentProject?.name}
        </Link>
      </div>}
    </>
  )
}

export default TodoBreadcrumbs
