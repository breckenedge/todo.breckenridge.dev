import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import TodoList from "components/TodoList"
import ProjectList from "components/ProjectList"
import { TodoI } from "interfaces"
import AppCache from "components/AppCache"
import { todayISO8601 } from "utilities/date"

const TodayPage = () => {
  const [todaysTodos, setTodaysTodos] = useState([] as TodoI[])
  const [lateTodos, setLateTodos] = useState([] as TodoI[])
  let { projects, todos } = AppCache.useContainer()

  useEffect(() => {
    const today = todayISO8601()
    const todosWithDates = todos.filter((todo) => todo.due_date)
    setTodaysTodos(todosWithDates.filter((todo) => todo.due_date === today))
    setLateTodos(todosWithDates.filter((todo) => todo.status === 'incomplete' && todo.due_date < today))
  }, [todos])

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
