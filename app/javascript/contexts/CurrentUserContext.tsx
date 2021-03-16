import { createContext } from "react"
import { UserI } from "interfaces"

const CurrentUserContext = createContext({
  currentUser: null,
  setCurrentUser: (user: UserI | null) => {},
})

export default CurrentUserContext
