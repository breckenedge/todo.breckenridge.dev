import React from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  componentDidMount() {
    axios
      .get('/api/me.json')
      .then((response) => {
        this.setState({ currentUser: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const currentUser = this.state.currentUser

    return(
      <div>
        <footer>
          {currentUser &&
            <p>
              <small>
                Logged in as {currentUser.email}. <a href="/log_out">Log out</a>
              </small>
            </p>
          }
        </footer>
      </div>
    )
  }
}

export default App
