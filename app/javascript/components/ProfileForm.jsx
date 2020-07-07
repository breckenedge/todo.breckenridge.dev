import React from 'react'
import ReactDOM from 'react-dom'

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className="input">
            <label htmlFor="timeZone">Time Zone</label>
            <select name="timeZone">
            </select>
          </div>

          <button type="submit" className="button button-wide accent5">Save</button>
        </form>
        
        <hr />

        <p>
          Logged in as <CurrentUserContext.Consumer>{ value => value.email }</CurrentUserContext.Consumer>.
          <CurrentUserContext.Consumer>
            {({update}) => (
              <button className="accent0" onClick={update}>Log Out</button>
            )}
          </CurrentUserContext.Consumer>
        </p>
      </div>
    )
  }
}

export default ProfileForm
