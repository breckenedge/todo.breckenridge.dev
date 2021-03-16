import { TodoI } from "interfaces/TodoI"
import { del, get, post, put } from "./json-rest-helper"

const fetchTodos = (onSuccess: (data: Array<TodoI>) => void) => {
  fetch("/todos", { headers: { Accept: "application/json" } })
    .then(response => response.json())
    .then(data => {
      onSuccess(data)
    })
}

const fetchTodo = (id: number, onSuccess: (data: TodoI) => void) => {
  get(`/todos/${id}`, onSuccess)
}

const completeTodo = (todo: TodoI, authToken: string, onSuccess: (data: TodoI) => void) => {
  updateTodo({ id: todo.id, status: "complete" }, authToken, onSuccess)
}

const incompleteTodo = (todo: TodoI, authToken: string, onSuccess: (data: TodoI) => void) => {
  updateTodo({ id: todo.id, status: "incomplete" }, authToken, onSuccess)
}

const createTodo = (todo: TodoI, authToken: string, onSuccess: (data: TodoI) => void) => {
  post("/todos", todo, authToken, onSuccess)
}

const updateTodo = (todo: TodoI, authToken: string, onSuccess: (data: TodoI) => void) => {
  put(`/todos/${todo.id}`, todo, authToken, onSuccess)
}

const deleteTodo = (todo: TodoI, authToken: string, onSuccess: () => void) => {
  del(`/todos/${todo.id}`, authToken, onSuccess)
}

export { fetchTodos, fetchTodo, createTodo, updateTodo, deleteTodo, completeTodo, incompleteTodo }
