import React from 'react'

const InputWithLabel = ({ label, id, children }) => {
  return (
    <div
      className='input string'>
      <label
        htmlFor={id}>{label}</label>
      {children}
    </div>
  )
}

export default InputWithLabel
