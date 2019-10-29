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

  // WE NEED TO ADD IN THE IS AUTHENTICATED ON THE CORRECT LINKS BELOW LATER!
  render() {
    return (
      <nav>
        <div className="logo-wrapper">
          <Link className="logo" to="/">🦄</Link>
        </div>

        <Link to="/registerunicorn">Register unicorn</Link>
        <Link to="/registertraveller">Register traveller</Link>

        <Link to="/loginunicorn">Login unicorn</Link>
        <Link to="/logintraveller">Login traveller</Link>
        <Link to="/loginadmin">Login admin</Link>

        <Link to="/traveller">UNICORN profile</Link>
        <Link to="/unicorn">TRAVELLER profile</Link>

        <Link to="/cities">CITIES</Link>
        <Link to="/unicorns">UNICORNS</Link>
        <Link to="/experiences">EXPERIENCES</Link>

        <Link to="/travellers">TRAVELLERS</Link>

        <a onClick={this.handleLogout} className="navbar-item">LOGOUT</a>
      </nav>
    )
  }
}

export default withRouter(Navbar)