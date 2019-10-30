import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

class LoginTraveller extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/logintraveller', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/cities')
      })
      .catch(err => console.log(err))
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div className=" formBackground form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input 
            className="form-input col-7" 
            name="email" 
            type="text" 
            id="email" 
            placeholder="Email" 
            onChange={this.handleChange}/>
          <label className="form-label" htmlFor="password">Password</label>
          <input 
            className="form-input col-7" 
            name="password" 
            type="password"
            id="password" 
            placeholder="Password" 
            onChange={this.handleChange}/>
          <br />
          <button className="btn btn-primary" type="submit">Log in</button>
        </div>
      </form>
    )
  }
}


export default LoginTraveller