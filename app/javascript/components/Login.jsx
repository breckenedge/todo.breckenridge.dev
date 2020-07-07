import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('/api/login.json', { email: this.state.email, password: this.state.password })
      .then((response) => {
        window.currentUser = response.data
        this.props.history.push('/projects')
      })
      .catch((error) => console.log(error))
  }

  updateEmail() {
    this.setState({email: event.target.value})
  }

  updatePassword() {
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={this.updateEmail} />
          </div>

          <div className="input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={this.updatePassword} />
          </div>

          <button type="submit" className="button button-wide accent5">Login</button>
        </form>
      </div>
    )
  }
}

export default Login
