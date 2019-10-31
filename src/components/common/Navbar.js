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
        <div className="input-group input-inline ">
          {!Auth.isAuthenticated() && <Link className="btn btn-link" to="/registerunicorn">Register unicorn</Link>}
          {!Auth.isAuthenticated() && <Link className="btn btn-link" to="/registertraveller">Register traveller</Link>}

          {!Auth.isAuthenticated() && <Link className="btn btn-link" to="/loginunicorn">Login unicorn</Link>}
          {!Auth.isAuthenticated() && <Link className="btn btn-link" to="/logintraveller">Login traveller</Link>}
          {/* <Link className="btn btn-link" to="/loginadmin">Login admin</Link> */}

          {isUnicorn && <Link className="btn btn-link" to="/unicorn">UNICORN profile</Link>}
          {isTraveller && <Link className="btn btn-link" to="/traveller">TRAVELLER profile</Link>}

          <Link className="btn btn-link" to="/cities">CITIES</Link>
          {/* <Link className="btn btn-link" to="/unicorns">UNICORNS</Link> */}
          {/* <Link className="btn btn-link" to="/experiences">EXPERIENCES</Link> */}

          {Auth.isAuthenticated() && <a onClick={this.handleLogout} className="btn btn-link">LOGOUT</a>}
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)