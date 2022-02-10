import { useCallback, useContext, useState } from "react"
import { createContainer } from "unstated-next"
import { get, post, put, del } from '../utilities/json-rest-helper'
import AuthenticityTokenContext from "contexts/AuthenticityTokenContext"
import { v4 } from "uuid"
import { formatDateISO8601 } from "utilities/date"

function useAppCache() {
  const authToken = useContext(AuthenticityTokenContext)
  let [todos, setTodos] = useState([])
  let [todosFetchedAt, setTodosFetchAt] = useState(undefined)
  let [projects, setProjects] = useState([])
  let [projectsFetchedAt, setProjectsFetchedAt] = useState(undefined)

  const fetchProjects = useCallback(() => {
    if (projectsFetchedAt) {
      return projects
    }

    get('/projects', (data) => {
      setProjects(data)
      setProjectsFetchedAt(new Date())
      return data
    })
  }, [authToken, projectsFetchedAt, projects, setProjectsFetchedAt, setProjects])

  const createProject = useCallback((data, onSuccess) => {
    data.id = v4()
    data.created_at = formatDateISO8601(new Date())
    setProjects(projects.concat([data]))
    post('/projects', data, authToken, onSuccess)
  }, [authToken, projects, setProjects])

  const updateProject = useCallback((data, onSuccess) => {
    setProjects(projects.map((p) => {
      if (p.id === data.id) {
        return { ...p, ...data }
      } else {
        return p
      }
    }))
    put(`/projects/${data.id}`, data, authToken, onSuccess)
  }, [authToken, projects, setProjects])

  const deleteProject = useCallback((data, onSuccess) => {
    setProjects(projects.map((p) => {
      if (p.id !== data.id) {
        return p
      }
      return { ...p, deleted_at: new Date() }
    }))

    del(`/projects/${data.id}`, authToken, onSuccess)
  }, [authToken, projects, setProjects])

  const fetchTodos = useCallback(() => {
    if (todosFetchedAt) {
      return todos
    }

    get('/todos', (data) => {
      setTodos(data)
      setTodosFetchAt(new Date())
      return data
    })
  }, [authToken, setTodos, setTodosFetchAt, todosFetchedAt])

  const createTodo = useCallback((data, onSuccess) => {
    data.id = v4()
    data.created_at = formatDateISO8601(new Date())
    setTodos(todos.concat([data]))
    console.log(todos)
    post('/todos', data, authToken, onSuccess)
  }, [todos, setTodos]);

  const updateTodo = useCallback((data, onSuccess) => {
    setTodos(todos.map((t) => {
      if (t.id !== data.id) {
        return t
      }
      return { ...t, ...data }
    }))

    put(`/todos/${data.id}`, data, authToken, onSuccess)
  }, [authToken, todos, setTodos]);

  const deleteTodo = useCallback((data, onSuccess) => {
    setTodos(todos.map((t) => {
      if (t.id !== data.id) {
        return t
      }
      return { ...data, deleted_at: new Date() }
    }))

    del(`/todos/${data.id}`, authToken, onSuccess)
  }, [authToken, todos, setTodos])

  return {
    projects,
    todos,
    fetchProjects,
    fetchTodos,
    createProject,
    createTodo,
    updateProject,
    updateTodo,
    deleteProject,
    deleteTodo,
  }
}

const AppCache = createContainer(useAppCache)

export default AppCache
