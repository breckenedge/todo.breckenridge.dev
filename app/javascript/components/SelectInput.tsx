import React from "react"
import InputWithLabel from "components/InputWithLabel"

const SelectInput = ({
  id,
  label,
  options,
  ...rest
}) => {
  const optionElements = []
  optionElements.push(<option key="_" value=""></option>)

  options.forEach((opt) => {
    optionElements.push(<option key={opt.value} value={opt.value}>{opt.label}</option>)
  })

  return (
    <InputWithLabel label={label} id={id}>
      <select className="select" {...rest}>
        {optionElements}
      </select>
    </InputWithLabel>
  )
}

export default SelectInput
