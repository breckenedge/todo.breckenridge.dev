import React from 'react'
import InputWithLabel from './InputWithLabel'

const TextAreaInput = ({
  id,
  name,
  required,
  label,
  onChange,
  value,
  rows,
}) => {
  return (
    <InputWithLabel label={label} id={id}>
      <textarea
        className='text'
        name={name}
        required={required}
        id={id}
        onChange={onChange}
        value={value || ''}
        rows={rows} />
    </InputWithLabel>
  )
}

export default TextAreaInput
