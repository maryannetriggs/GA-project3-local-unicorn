import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/auth'


class Navbar extends React.Component {
  constructor() {
    super()

    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    Auth.logout()
    this.props.history.push('/')
  }

  render() {
    return (
      <nav>
        <div className="logo-wrapper">
          <Link className="logo" to="/">Logo</Link>
        </div>
        {!Auth.isAuthenticated() && <Link to="/login">Register/Login</Link>}
        {Auth.isAuthenticated() && <a onClick={this.handleLogout}>Logout</a>}
      </nav>
    )
  }
}

export default withRouter(Navbar)