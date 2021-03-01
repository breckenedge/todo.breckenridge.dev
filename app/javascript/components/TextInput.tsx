import React from 'react'
import InputWithLabel from './InputWithLabel'

const TextInput = ({
  id,
  name,
  required,
  label,
  onChange,
  value,
}) => {
  return (
    <InputWithLabel label={label} id={id}>
      <input
        className='string'
        name={name}
        required={required}
        id={id}
        onChange={onChange}
        value={value || ''} />
    </InputWithLabel>
  )
}

export default TextInput
