import React, { useState } from 'react'
import CheckboxInput from './CheckboxInput'
import DateInput from './DateInput'
import SelectInput from './SelectInput'
import TextInput from './TextInput'
import TextAreaInput from './TextAreaInput'

const TodoForm = ({ authenticityToken, todo, projectOptions }) => {
  const [model, setModel] = useState(todo)
  const url = `/todos/${model.id || ''}`

  const handleChange = (attr, e) => {
    const target = e.target
    let value = e.target.value

    if (target.type === 'checkbox' && !target.checked) {
      value = ''
    }

    setModel({
      ...model,
      [attr]: value,
    })
  }

  return (
    <form
      action={url}
      method='post'>
      <input
        type='hidden'
        name='_method'
        value={model.id ? 'patch' : 'post'} />
      <input
        type='hidden'
        name='authenticity_token'
        value={authenticityToken} />
      <TextInput
        required={true}
        name='todo[name]'
        id='todo_name'
        label='Name'
        value={model.name}
        onChange={(e) => handleChange('name', e)} />
      <DateInput
        required={false}
        name='todo[due_on]'
        id='todo_due_on'
        label='Due on'
        value={model.due_on}
        onChange={(e) => handleChange('due_on', e)} />
      <SelectInput
        required={false}
        name='todo[project_id]'
        id='todo_project_id'
        label='Project'
        value={model.project_id}
        onChange={(e) => handleChange('project_id', e)}
        options={projectOptions.map((p) => ({ value: p.id, label: p.name }))} />
      <TextAreaInput
        required={false}
        name='todo[description]'
        id='todo_description'
        label='Description'
        value={model.description}
        rows={3}
        onChange={(e) => handleChange('description', e)} />
      <CheckboxInput
        name='todo[status]'
        id='todo_status'
        label='Complete?'
        checked={model.status === 'complete' || false}
        value='complete'
        falseValue='incomplete'
        onChange={(e) => handleChange('status', e)} />
      <input
        type="submit"
        value="Save"
        className="button button-wide accent5" />
    </form>
  )
}

TodoForm.defaultProps = {
  model: {},
}

export default TodoForm
