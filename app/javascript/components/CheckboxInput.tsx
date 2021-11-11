import React from "react"

const CheckboxInput = ({
  label,
  ...rest
}) => {
  return (
    <div
      className="input boolean">
      <label
        className="boolean input">
        <input
          type="checkbox"
          className="boolean"
          {...rest} />
        {' '}
        {label}
      </label>
    </div>
  )
}

export default CheckboxInput
