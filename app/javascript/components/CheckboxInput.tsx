import React from 'react'

const CheckboxInput = ({
  id,
  name,
  label,
  onChange,
  checked,
  value,
  falseValue,
}) => {
  return (
    <div
      className='input boolean'>
      <input
        type='hidden'
        name={name}
        value={falseValue} />
      <label
        className='boolean input'>
        <input
          type='checkbox'
          className='boolean'
          name={name}
          id={id}
          onChange={onChange}
          checked={checked}
          value={value} />
        {label}
      </label>
    </div>
  )
}

CheckboxInput.defaultProps = {
  falseValue: '',
}

export default CheckboxInput
