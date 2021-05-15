import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import LoadingIndicator from "components/LoadingIndicator"

const RootPage = () => {
  const history = useHistory()

  useEffect(() => {
    history.push("/projects")
  }, [])

  return (<LoadingIndicator/>)
}

export default RootPage
