import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Redirect } from 'react-router-dom'
import Projects from './Projects'
import Project from './Project'
import ProjectForm from './ProjectForm'
import Navigation from './Navigation'
import Todos from './Todos'
import Todo from './Todo'
import TodoForm from './TodoForm'
import Search from './Search'
import Login from './Login'
import Profile from './Profile'

const CurrentUserContext = React.createContext({
  id: undefined,
  email: undefined,
  time_zone: 'Etc/UTC',
  update: () => {}
})

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CurrentUserContext.Provider value={window.currentUser}>
        <header>
          <Navigation />
        </header>
        <main>
          <Switch>
            <Route path="/todos">
              <Route path="/new" component={TodoForm} />
              <Route path="/:id/edit" component={TodoForm} />
              <Route path="/:id" component={Todo} />
              <Route path="/" component={Todos} />
            </Route>
            <Route path="/projects">
              <Route path="/new" component={ProjectForm} />
              <Route path="/:id/edit" component={ProjectForm} />
              <Route path="/:id" component={Project} />
              <Route path="/" component={Projects} />
            </Route>
            <Route path="/search" component={Search} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/">
              <Redirect to="/projects" />
            </Route>
          </Switch>
        </main>
        <footer>
        </footer>
      </CurrentUserContext.Provider>
    )
  }
}

export default App
