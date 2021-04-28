import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import DateInput from "components/DateInput"
import ProjectSelect from "components/ProjectSelect"
import TextInput from "components/TextInput"
import TextAreaInput from "components/TextAreaInput"
import AuthenticityTokenContext from "contexts/AuthenticityTokenContext"
import { ProjectI, TodoI } from "interfaces"
import { createTodo, updateTodo, deleteTodo } from "repos/TodosRepo"

const TodoForm = ({ todo, currentProject }: { todo: TodoI, currentProject?: ProjectI }) => {
  const authToken = useContext(AuthenticityTokenContext)
  const [model, setModel] = useState(todo)
  let history = useHistory()

  useEffect(() => setModel(todo), [todo])

  const handleSubmit = (e) => {
    e.preventDefault()
    const meth = todo.id ? updateTodo : createTodo
    meth(model, authToken, (data: TodoI) => {
      currentProject ? history.push(`/projects/${currentProject.id}`) : history.push("/todos")
    })
  }

  const handleChange = (attr: string, e) => {
    setModel({
      ...model,
      [attr]: e.target.value,
    })
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure that you want to delete this todo?")) {
      deleteTodo(model, authToken, () => { history.push('/todos') })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextInput
          required={true}
          id="todo_name"
          label="Name"
          value={model.name || ""}
          onChange={(e) => handleChange("name", e)}
          autoFocus={true} />
        <DateInput
          required={false}
          id="todo_due_date"
          label="Due on"
          value={model.due_date || ""}
          onChange={(e) => handleChange("due_date", e)} />
        <ProjectSelect
          id="todo_project_id"
          label="Project"
          value={model.project_id}
          onChange={(e) => handleChange("project_id", e)}
        />
        <TextAreaInput
          required={false}
          id="todo_description"
          label="Description"
          value={model.description || ""}
          rows={3}
          onChange={(e) => handleChange('description', e)} />
        <button
          type="submit"
          className="button button-wide blue">
            Save
        </button>
      </form>
      <hr />
      {todo.id && <button onClick={handleDelete} className="button button-wide red">Delete Todo</button>}
    </>
  )
}

TodoForm.defaultProps = {
  todo: {},
}

export default TodoForm
