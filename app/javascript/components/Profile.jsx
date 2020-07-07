import React from 'react'
import ReactDOM from 'react-dom'
import ProfileForm from './ProfileForm'
import { Redirect } from 'react-router-dom'

const Profile = () => {
  if (currentUser) {
    return <ProfileForm />
  } else {
    return <Redirect to="/login" />
  }
}

export default Profile
