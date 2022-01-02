import React, { useContext, useState } from "react"
import AuthenticityTokenContext from "contexts/AuthenticityTokenContext"
import CurrentUserContext from "contexts/CurrentUserContext"
import { useHistory } from "react-router-dom"
import TextInput from "components/TextInput"

const LogInPage = () => {
  const { setCurrentUser } = useContext(CurrentUserContext)
  const authToken = useContext(AuthenticityTokenContext)
  const [logIn, setLogIn] = useState({ email: "", password: "" })
  const [error, setError] = useState(null)
  const history = useHistory()

  const handleChange = (name: string, e) => {
    setLogIn({ ...logIn, [name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/log_in", {
      method: "post",
      body: JSON.stringify({ log_in: logIn }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF-Token": authToken,
      }
    }).then((response) => {
      if (!response.ok) {
        throw(response)
      }
      return response.json()
    }).then((data) => {
      setCurrentUser(data.currentUser)
      history.push("/")
    }).catch((_) => {
      setError("Invalid credentials")
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <div style={{color: "red"}}>{error}</div>}
        <TextInput id="email" label="Email" type="email" required={true} onChange={(e) => handleChange("email", e)} />
        <TextInput id="password" label="Password" type="password" required={true} onChange={(e) => handleChange("password", e)}/>
        <button className="button button-wide blue">Log In</button>
      </form>
    </div>
  )
}

export default LogInPage
