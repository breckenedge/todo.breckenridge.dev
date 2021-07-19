import React, { useState } from "react"
import AuthenticityTokenContext from "contexts/AuthenticityTokenContext"
import CurrentUserContext from "contexts/CurrentUserContext"
import AppLayout from "components/AppLayout"
import { UserI } from "interfaces"

interface Props {
  authToken: string
  currentUser: UserI
}

const App = (props: Props) => {
  const [currentUser, setCurrentUser] = useState(props.currentUser)

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <AuthenticityTokenContext.Provider value={props.authToken}>
        <AppLayout />
      </AuthenticityTokenContext.Provider>
    </CurrentUserContext.Provider>
  )
}

export default App
