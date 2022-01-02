import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import AuthenticityTokenContext from "contexts/AuthenticityTokenContext"
import DateInput from "components/DateInput"
import TextInput from "components/TextInput"
import TextAreaInput from "components/TextAreaInput"
import { ProjectI } from "interfaces"
import { updateProject, createProject, deleteProject } from "repos/ProjectsRepo"

const ProjectForm = ({ project }: { project: ProjectI }) => {
  const authToken = useContext(AuthenticityTokenContext)
  const [model, setModel] = useState(project)
  let history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const meth = project.id ? updateProject : createProject
    meth(model, authToken, (data: ProjectI) => { history.push(`/projects/${data.id}`) })
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure that you want to delete this project?")) {
      deleteProject(model, authToken).then(() => { history.push('/') })
    }
  }

  useEffect(() => setModel(project), [project])

  const handleChange = (attr: string, e) => {
    setModel({
      ...model,
      [attr]: e.target.value,
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          id="project_name"
          autoFocus={true}
          required={true}
          value={model.name || ""}
          onChange={(e) => handleChange("name", e)} />
        <DateInput
          label="Due date"
          id="project_due_date"
          value={model.due_date || ""}
          onChange={(e) => handleChange("due_date", e)} />
        <TextAreaInput
          label="Details"
          id="project_details"
          value={model.details || ""}
          onChange={(e) => handleChange("details", e)} />
        <button
          type="submit"
          className="button button-wide blue">Save</button>
      </form>
      <hr />
      {project.id && <button onClick={handleDelete} className="button button-wide red">Delete Project</button>}
    </>
  )
}

export default ProjectForm
