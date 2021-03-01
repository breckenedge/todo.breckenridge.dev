import React from 'react'
import InputWithLabel from './InputWithLabel'

const DateInput = ({
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
        type='date'
        className='string'
        name={name}
        required={required}
        id={id}
        onChange={onChange}
        value={value || ''} />
      <button
        type='button'
        onClick={() => { onChange({ target: { value: '' } }) }}>Clear</button>
    </InputWithLabel>
  )
}

export default DateInput
