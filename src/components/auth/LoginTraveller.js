import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

class LoginTraveller extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        email: '',
        password: ''
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors }) 
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/logintraveller', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/cities')
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    return (
      <>
        <h3 className="centre">Welcome back, you globetrotter!</h3>
        <form className="centre" onSubmit={this.handleSubmit}>
          <div className=" formBackground form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input 
              // className="form-input col-7" 
              className={`form-input col-7 ${this.state.errors.email ? 'is-error' : ''}`}
              name="email" 
              type="text" 
              id="email" 
              placeholder="Email" 
              onChange={this.handleChange}/>
            {/* <p className="form-input-hint">{`${this.state.errors.password ? 'Incorrect password' : ''}`}</p> */}
              
            <label className="form-label" htmlFor="password">Password</label>
            <input 
              className="form-input col-7" 
              // className={`form-input col-7 ${this.state.errors.email ? 'is-error' : ''}`}
              name="password" 
              type="password"
              id="password" 
              placeholder="Password" 
              onChange={this.handleChange}/>
            {/* <p className="form-input-hint">{`${this.state.errors.password ? 'Incorrect password' : ''}`}</p> */}
            <br />
            <button className="btn btn-primary" type="submit">Log in</button>
          </div>
        </form>
      </>
    )
  }
}


export default LoginTraveller