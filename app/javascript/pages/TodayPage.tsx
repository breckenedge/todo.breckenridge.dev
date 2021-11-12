import React, { useEffect, useState } from "react"
import TodoList from "components/TodoList"
import { fetchToday, fetchLate } from "repos/TodosRepo"

const TodayPage = () => {
  const [todaysTodos, setTodaysTodos] = useState([])
  const [lateTodos, setLateTodos] = useState([])
  
  useEffect(() => {
    Promise.all([
      fetchToday,
      fetchLate,
    ]).then((responses) => {
      responses[0]().then(setTodaysTodos)
      responses[1]().then(setLateTodos)
    })
  }, [])

  return (
    <>
      <h2>Due Today</h2>
      <TodoList todos={todaysTodos} />

      <hr/>

      <h2>Late</h2>
      <TodoList todos={lateTodos} />
    </>
  )
}

export default TodayPage
