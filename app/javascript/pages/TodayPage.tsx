import React, { useEffect, useState } from "react"
import TodoList from "components/TodoList"
import { fetchToday, fetchLate } from "repos/TodosRepo"

const TodayPage = () => {
  const [todaysTodos, setTodaysTodos] = useState([])
  const [lateTodos, setLateTodos] = useState([])
  
  useEffect(() => {
    // TODO: Convert into Promise.all
    fetchToday((data) => {
      setTodaysTodos(data)
    })
    fetchLate((data) => {
      setLateTodos(data)
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
