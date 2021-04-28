import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchProject } from "repos/ProjectsRepo"
import { ProjectI, TodoI } from "interfaces"

const TodoBreadcrumbs = ({ todo, currentProject }: { todo: TodoI, currentProject?: ProjectI }) => {
  return (
    <>
      {<div className="navigate-back">
        <Link to={currentProject ? `/projects/${currentProject.id}` : "/todos"}>
          ← {currentProject ? currentProject.name : "Back to List"}
        </Link>
      </div>}
    </>
  )
}

export default TodoBreadcrumbs
