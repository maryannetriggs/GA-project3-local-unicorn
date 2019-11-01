import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

class LoginUnicorn extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      error: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data, error: '' })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/loginunicorn', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/cities')
      })
      .catch(() => this.setState({ error: 'Credetials Not Recognised' }))
  }

  render() {
    console.log(this.state.errors)
    
    return (
      <section>
        <h2 className="register centre marginTopBig ourGrey">Welcome back<span className="logo">🦄</span></h2>
        <form className="centre" onSubmit={this.handleSubmit}>
          <div className="formBackground form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input 
              // className="form-input col-7" 
              className={`form-input col-7 ${this.state.error ? 'is-error' : ''}`}
              name="email" 
              type="text" 
              id="email" 
              placeholder="Email" 
              onChange={this.handleChange}/>
            {/* <p className="form-input-hint">{`${this.state.errors.email ? 'An email is required.' : ''}`}</p> */}

            <label className="form-label" htmlFor="password">Password</label>
            <input 
              // className="form-input col-7" 
              className={`form-input col-7 ${this.state.error ? 'is-error' : ''}`}
              name="password" 
              type="password"
              id="password" 
              placeholder="Password" 
              onChange={this.handleChange}/>
            {this.state.error && <p className="form-input-hint is-error">{this.state.error}</p>}

            <br />
            <button className="btn btn-primary" type="submit">Log in</button>
          </div>
        </form>
      </section>
    )
  }
}


export default LoginUnicorn