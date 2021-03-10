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
      <div style={{ display: "flex" }}>
        <input
          type='date'
          className='string'
          name={name}
          required={required}
          id={id}
          onChange={onChange}
          value={value || ''}
          style={{flexGrow: 1, marginRight: '0.5em'}} />
        <button
          type='button'
          className='button orange'
          onClick={() => { onChange({ target: { value: '' } }) }}>Clear</button>
      </div>
    </InputWithLabel>
  )
}

export default DateInput
