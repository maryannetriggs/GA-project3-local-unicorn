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
      
      <nav className="navbar">
        <div className="logo-wrapper">
          <Link className="logo" to="/">🦄</Link>
        </div>

        <Link className="btn btn-link" to="/registerunicorn">Register unicorn</Link>
        <Link className="btn btn-link" to="/registertraveller">Register traveller</Link>

        <Link className="btn btn-link" to="/loginunicorn">Login unicorn</Link>
        <Link className="btn btn-link" to="/logintraveller">Login traveller</Link>
        <Link className="btn btn-link" to="/loginadmin">Login admin</Link>

        <Link className="btn btn-link" to="/unicorn">UNICORN profile</Link>
        <Link className="btn btn-link" to="/traveller">TRAVELLER profile</Link>

        <Link className="btn btn-link" to="/cities">CITIES</Link>
        <Link className="btn btn-link" to="/unicorns">UNICORNS</Link>
        <Link className="btn btn-link" to="/experiences">EXPERIENCES</Link>

        <Link className="btn btn-link" to="/travellers">TRAVELLERS</Link>

        <a onClick={this.handleLogout} className="btn btn-link">LOGOUT</a>
      </nav>
    )
  }
}

export default withRouter(Navbar)