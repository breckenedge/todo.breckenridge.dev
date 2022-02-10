import React, { useContext, useState } from "react"
import CurrentUserContext from "contexts/CurrentUserContext"
import { useHistory } from "react-router-dom"
import AuthenticityTokenContext from "contexts/AuthenticityTokenContext"
import TextInput from "components/TextInput"
import SelectInput from "components/SelectInput"
import { put } from "utilities/json-rest-helper"

const ProfileEditPage = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext)
  const [email, setEmail] = useState(currentUser.email)
  const [timeZone, setTimeZone] = useState(currentUser.time_zone)
  const [saving, setSaving] = useState(false)
  const authToken = useContext(AuthenticityTokenContext)
  const history = useHistory()
  const timeZoneOptions = [
    'Etc/UTC',
    'US/Eastern',
    'US/Central',
    'US/Mountain',
    'US/Western',
  ].map((z) => ({ value: z, label: z }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSaving(true)
    put('/profile', { user: { email: email, time_zone: timeZone } }, authToken, (data) => {
      setCurrentUser(data)
      setSaving(false)
    })
  }

  const clickLogout = () => {
    fetch("/log_out", {
      method: "delete",
      headers: {
        Accept: "application/json",
        "X-CSRF-Token": authToken,
      }
    }).then((response) => {
      if (!response.ok) { throw(response )}
      history.push("/log_in")
      setCurrentUser(null)
    }).catch((e) => {
      console.log(e)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextInput
          id="email"
          label="Email"
          value={email || ""}
          onChange={(e) => { setEmail(e.target.value) }}
        />

        <SelectInput
          id="time-zone"
          label="Time zone"
          options={timeZoneOptions}
          value={timeZone || ""}
          onChange={(e) => { setTimeZone(e.target.value) }}
        />

        <button
          className="button button-wide blue"
          disabled={saving}
          type="submit"
        >
          {saving ? 'Saving...' : 'Update Profile'}
        </button>
      </form>

      <hr/>

      <small>Logged in as {currentUser.email}.</small> 
      <button
        type="button"
        className="button red button-wide"
        onClick={clickLogout}>
          Log out
      </button>
    </>
  )
}

export default ProfileEditPage
