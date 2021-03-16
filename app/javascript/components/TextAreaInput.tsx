import React from "react"
import InputWithLabel from "components/InputWithLabel"

const TextAreaInput = ({
  id,
  label,
  ...rest
}) => {
  return (
    <InputWithLabel label={label} id={id}>
      <textarea
        className="text"
        id={id}
        {...rest} />
    </InputWithLabel>
  )
}

export default TextAreaInput
