import React from 'react'
import InputWithLabel from './InputWithLabel'

const SelectInput = ({
  id,
  name,
  required,
  label,
  onChange,
  value,
  options,
}) => {
  const optionElements = []
  optionElements.push(<option key='_' value=''></option>)

  options.forEach((opt) => {
    optionElements.push(<option key={opt.value} value={opt.value}>{opt.label}</option>)
  })

  return (
    <InputWithLabel label={label} id={id}>
      <select
        className='select'
        name={name}
        required={required}
        id={id}
        onChange={onChange}
        value={value || ''}>
        {optionElements}
      </select>
    </InputWithLabel>
  )
}

export default SelectInput
