import React from "react"
import InputWithLabel from "components/InputWithLabel"

const TextInput = ({
  id,
  label,
  ...rest
}) => {
  return (
    <InputWithLabel label={label} id={id}>
      <input
        className="string"
        id={id}
        {...rest} />
    </InputWithLabel>
  )
}

export default TextInput
