import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import TodoList from "components/TodoList"
import ProjectList from "components/ProjectList"
import { fetchToday, fetchLate } from "repos/TodosRepo"
import { fetchProjects } from "repos/ProjectsRepo"
import { ProjectI, TodoI } from "interfaces"

const TodayPage = () => {
  const [todaysTodos, setTodaysTodos] = useState([] as TodoI[])
  const [lateTodos, setLateTodos] = useState([] as TodoI[])
  const [projects, setProjects] = useState([] as ProjectI[])
  
  useEffect(() => {
    Promise.all([
      fetchToday,
      fetchLate,
      fetchProjects,
    ]).then((responses) => {
      responses[0]().then(setTodaysTodos)
      responses[1]().then(setLateTodos)
      responses[2]().then(setProjects)
    })
  }, [])

  return (
    <>
      {lateTodos.length > 0 && <>
        <h2>Late</h2>
        <TodoList todos={lateTodos} />
        <hr />
      </>}

      <h2>Today</h2>
      {todaysTodos.length > 0 && <TodoList todos={todaysTodos} />}
      {todaysTodos.length <= 0 && <>🎉 all done!</>}

      <hr/>

      <div className="two-column">
        <h2>Projects</h2>
        <div>
          <Link to="/projects/new" className="button button-wide teal">New Project</Link>
        </div>
      </div>
      <ProjectList projects={projects} />
    </>
  )
}

export default TodayPage
