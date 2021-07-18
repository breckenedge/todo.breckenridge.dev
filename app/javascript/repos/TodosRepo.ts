import { TodoI } from "interfaces/TodoI"
import { del, get, post, put } from "./json-rest-helper"
import { v4 } from "uuid"

const fetchTodo = (project_id: String, id: string, onSuccess: (data: TodoI) => void) => {
  get(`/projects/${project_id}/todos/${id}`, onSuccess)
}

const completeTodo = (todo: TodoI, authToken: string, onSuccess: (data: TodoI) => void) => {
  updateTodo({ id: todo.id, status: "complete" }, authToken, onSuccess)
}

const incompleteTodo = (todo: TodoI, authToken: string, onSuccess: (data: TodoI) => void) => {
  updateTodo({ id: todo.id, status: "incomplete" }, authToken, onSuccess)
}

const createTodo = (todo: TodoI, authToken: string, onSuccess: (data: TodoI) => void) => {
  todo.id = v4()
  post(`/projects/${todo.project_id}/todos`, todo, authToken, onSuccess)
}

const updateTodo = (todo: TodoI, authToken: string, onSuccess: (data: TodoI) => void) => {
  put(`/projects/${todo.project_id}/todos/${todo.id}`, todo, authToken, onSuccess)
}

const deleteTodo = (todo: TodoI, authToken: string, onSuccess: () => void) => {
  del(`/projects/${todo.project_id}/todos/${todo.id}`, authToken, onSuccess)
}

export { fetchTodo, createTodo, updateTodo, deleteTodo, completeTodo, incompleteTodo }
