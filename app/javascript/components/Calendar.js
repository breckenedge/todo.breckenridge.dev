import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

function Calendar (props) {
  const [value, setValue] = useState(props.value);

  useEffect(() => props.onChange(value), [value])

  return (
    <>
      <DatePicker onChange={setValue} selected={value} />
    </>
  )
}

export default Calendar
