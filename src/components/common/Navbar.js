import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/auth'


class Navbar extends React.Component {
  constructor() {
    super()

    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    Auth.logout(
      this.props.history.push('/')
    )
  }

  render() {
    return (
      <nav>
        <div className="logo-wrapper">
          <Link className="logo" to="/">🦄</Link>
        </div>
        {!Auth.isAuthenticated() && <Link to="/registertraveller">Register traveller</Link>}
        {!Auth.isAuthenticated() && <Link to="/logintraveller">Login traveller</Link>}
        {Auth.isAuthenticated() && <Link to="/traveller/:id">My traveller profile</Link>}
        {!Auth.isAuthenticated() && <Link to="/cities">See all the cities</Link>}
        {Auth.isAuthenticated() && <Link to="/experiences">See all the experiences</Link>}
        {!Auth.isAuthenticated() && <Link to="/unicorns">See all the unicorns</Link>}
        {Auth.isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">LOGOUT</a>}
      </nav>
    )
  }
}

export default withRouter(Navbar)