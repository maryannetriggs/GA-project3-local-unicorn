import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/auth'


class Navbar extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <nav>
        <div className="logo-wrapper">
          <Link className="logo" to="/">🦄</Link>
        </div>
        {!Auth.isAuthenticated() && <Link to="/registertraveller">Register traveller</Link>}
        {!Auth.isAuthenticated() && <Link to="/logintraveller">Login traveller</Link>}
        {Auth.isAuthenticated() && <Link to="/travellers/:id">My traveller profile</Link>}
        {!Auth.isAuthenticated() && <Link to="/cities">See all the cities</Link>}
        {!Auth.isAuthenticated() && <Link to="/experiences">See all the experiences</Link>}
        {!Auth.isAuthenticated() && <Link to="/unicorns">See all the unicorns</Link>}
        <a>Logout</a>
      </nav>
    )
  }
}

export default withRouter(Navbar)