import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LogInPage from "pages/LogInPage"
import ProfilePage from "pages/ProfilePage"
import ProjectPage from "pages/ProjectPage"
import ProjectNewPage from "pages/ProjectNewPage"
import ProjectEditPage from "pages/ProjectEditPage"
import TodoEditPage from "pages/TodoEditPage"
import TodoNewPage from "pages/TodoNewPage"
import TodayPage from "pages/TodayPage"
import Navigation from "components/Navigation"
import CurrentUserContext from "contexts/CurrentUserContext"
import AppCache from "components/AppCache"

const AppLayout = () => {
  const { currentUser } = useContext(CurrentUserContext)
  const history = useHistory()
  const { fetchProjects, fetchTodos } = AppCache.useContainer()

  useEffect(() => {
    if (!currentUser && history) {
      history.push("/log_in")
    }
  }, [])

  useEffect(() => {
    fetchProjects()
    fetchTodos()
  }, [])

  return (
    <BrowserRouter>
      <header>
        <nav><Navigation /></nav>
      </header>
      <main>
        <Switch>
          <Route path="/log_in">
            <LogInPage />
          </Route>

          <Route path="/projects/:projectId/todos/:id/edit">
            <TodoEditPage />
          </Route>
          <Route path="/projects/:projectId/todos/new">
            <TodoNewPage />
          </Route>
          <Route path="/projects/:projectId/todos/:id">
            <TodoEditPage />
          </Route>

          <Route path="/projects/:id/edit">
            <ProjectEditPage />
          </Route>
          <Route path="/projects/new">
            <ProjectNewPage />
          </Route>
          <Route path="/projects/:id">
            <ProjectPage />
          </Route>

          <Route path="/profile">
            <ProfilePage />
          </Route>

          <Route path="/">
            <TodayPage />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default AppLayout
