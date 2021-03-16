import React from "react"
import InputWithLabel from "components/InputWithLabel"

const DateInput = ({
  id,
  label,
  ...rest
}) => {
  return (
    <InputWithLabel label={label} id={id}>
      <div style={{ display: "flex" }}>
        <input
          type="date"
          className="string"
          id={id}
          {...rest}
          style={{flexGrow: 1, marginRight: '0.5em'}} />
        <button
          type="button"
          className="button orange"
          onClick={() => { rest.onChange({ target: { value: "" } }) }}>Clear</button>
      </div>
    </InputWithLabel>
  )
}

export default DateInput
