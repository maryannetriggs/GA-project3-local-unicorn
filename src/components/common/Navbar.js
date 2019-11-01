import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/auth'
import axios from 'axios'

class Navbar extends React.Component {
  constructor() {
    super()

    this.state = {
      isTraveller: false,
      isUnicorn: false
    }

    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    this.checkUnicorn()
    this.checkTraveller()
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.checkUnicorn()
      this.checkTraveller()
    } 
  }

  checkUnicorn() {
    axios.get('/api/unicorn', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })  
      .then(() => this.setState({ isUnicorn: true }))
      .catch(() => this.setState({ isUnicorn: false }))
  }

  checkTraveller() {
    axios.get('/api/traveller', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })  
      .then(() => this.setState({ isTraveller: true }))
      .catch(() => this.setState({ isTraveller: false }))
  }

  handleLogout() {
    Auth.logout(
      this.props.history.push('/')
    )
  }

  // Commented out navbar items below for development testing and usability purposes :)
  render() {
    const { isUnicorn, isTraveller } = this.state
    return (

      <nav className="navbar">
        <div className="logo-wrapper">
          <Link className="logo" to="/">🦄</Link>
        </div>
        <div className="input-group input-inline nav-links">
          {!Auth.isAuthenticated() && <Link className="btn btn-link nav-item" to="/registerunicorn">Register Unicorn</Link>}
          {!Auth.isAuthenticated() && <Link className="btn btn-link nav-item" to="/loginunicorn">Unicorn Login</Link>}

          {!Auth.isAuthenticated() && <Link className="btn btn-link" to="/registertraveller">Register traveller</Link>}
          {!Auth.isAuthenticated() && <Link className="btn btn-link nav-item" to="/logintraveller">Traveller Login</Link>}
          {/* <Link className="btn btn-link nav-item" to="/loginadmin">Admin Login</Link> */}

          {isUnicorn && <Link className="btn btn-link nav-item" to="/unicorn">My Profile</Link>}
          {isTraveller && <Link className="btn btn-link nav-item" to="/traveller">My Profile</Link>}

          <Link className="btn btn-link nav-item" to="/cities">See all our Cities</Link>
          {/* <Link className="btn btn-link nav-item" to="/unicorns">See all our Unicorns</Link> */}
          {/* <Link className="btn btn-link nav-item" to="/experiences">See all our Experiences</Link> */}

          {Auth.isAuthenticated() && <a onClick={this.handleLogout} className="btn btn-link nav-item">Log Out</a>}
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)