import React, { useEffect, useState } from 'react'
import DatePicker from 'react-date-picker'

function Calendar (props) {
  const [value, setValue] = useState(props.value);

  useEffect(() => props.onChange(value), [value])

  return (
    <>
      <DatePicker onChange={setValue} value={value} />
    </>
  )
}

export default Calendar
