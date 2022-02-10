import React, { useCallback, useEffect, useState } from "react"
import AuthenticityTokenContext from "contexts/AuthenticityTokenContext"
import CurrentUserContext from "contexts/CurrentUserContext"
import AppLayout from "components/AppLayout"
import { ProjectI, UserI } from "interfaces"
import AppCache from "components/AppCache"

interface Props {
  authToken: string
  projectOptions: Array<ProjectI>
  currentUser: UserI
}

const App = (props: Props) => {
  const [currentUser, setCurrentUser] = useState(props.currentUser)

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <AuthenticityTokenContext.Provider value={props.authToken}>
        <AppCache.Provider>
          <AppLayout />
        </AppCache.Provider>
      </AuthenticityTokenContext.Provider>
    </CurrentUserContext.Provider>
  )
}

export default App
