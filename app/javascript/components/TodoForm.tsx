import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import DateInput from "components/DateInput"
import CheckboxInput from './CheckboxInput'
import ProjectSelect from "components/ProjectSelect"
import TextInput from "components/TextInput"
import TextAreaInput from "components/TextAreaInput"
import AuthenticityTokenContext from "contexts/AuthenticityTokenContext"
import ConfirmButton from './ConfirmButton'
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
      currentProject ? history.push(`/projects/${currentProject.id}`) : history.push("/")
    })
  }

  const handleChange = (attr: string, e) => {
    setModel({
      ...model,
      [attr]: e.target.value,
    })
  }

  const handleDelete = () => {
    deleteTodo(model, authToken)
      .then(() => {
        history.push(currentProject ? `/projects/${currentProject.id}/todos` : '/')
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CheckboxInput
          label="Complete"
          checked={model.status === 'complete'}
          onChange={(e) => { e.target.checked ? setModel({...model, status: 'complete'}) : setModel({...model, status: 'incomplete'}) }}
        />
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
      {todo.id && <ConfirmButton className="button button-wide red" onSubmit={handleDelete}>Delete Todo</ConfirmButton>}
    </>
  )
}

TodoForm.defaultProps = {
  todo: {},
}

export default TodoForm
