import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Calendar (props) {
  return <DatePicker {...props} />
}

export default Calendar
