import { ProjectI, TodoI } from "interfaces"
import { del, get, getPromise, put } from "./json-rest-helper"
import { v4 } from "uuid"

const fetchProject = (id: string, onSuccess: (data: ProjectI) => void) => {
  get(`/projects/${id}`, (data: ProjectI) => {
    onSuccess(data)
  })
}

const fetchProjectWithTodos = (id: string, onSuccess: (data: { project: ProjectI, todos: Array<TodoI> }) => void) => {
  get(`/projects/${id}?include=todos`, onSuccess)
}

const fetchProjects = (): Promise<any> => {
  return getPromise("/projects")
}

const updateProject = (project: ProjectI, authToken: string, onSuccess: (data: ProjectI) => void) => {
  put(`/projects/${project.id}`, project, authToken, onSuccess)
}

const createProject = (project: ProjectI, authToken: string, onSuccess: (data: ProjectI) => void) => {
  project.id = v4()
  fetch("/projects", { method: "post", headers: { Accept: "application/json", "Content-Type": "application/json", "X-CSRF-Token": authToken }, body: JSON.stringify(project) })
    .then((response) => response.json())
    .then((data) => onSuccess(data))
}

const deleteProject = (project: ProjectI, authToken: string): Promise<any> => {
  return del(`/projects/${project.id}`, authToken)
}

export { fetchProject, fetchProjectWithTodos, fetchProjects, updateProject, createProject, deleteProject }
