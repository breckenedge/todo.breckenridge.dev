import React from "react"
import dayjs from "dayjs"
import { todayISO8601 } from "utilities/date"

const TodayDelta = ({ date }) => {
  const today = todayISO8601()
  const days = dayjs(today).diff(dayjs(date), "days")
  const adays = Math.abs(days)
  let label = (adays === 1) ? "day" : "days"

  if (days > 0) {
    label = label + " ago"
  }

  return (<>{adays} {label}</>)
}

export default TodayDelta
