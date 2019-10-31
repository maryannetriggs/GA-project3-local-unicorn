import React from 'react'
import axios from 'axios'


class RegisterTraveller extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
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
    axios.post('/api/registertraveller', this.state.data)
      .then(() => this.props.history.push('/logintraveller'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    return (

      <section className="registerTraveller">
        <div className="form-group">
          <h2>Register</h2>
          <form onSubmit={this.handleSubmit}>

            <div className=" formBackgroundReg form-group">
              <label>Name</label>
              <input 
                className={`form-input col-5 ${this.state.errors.name ? 'is-error' : ''}`}
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${this.state.errors.name ? 'A name is required' : ''}`}</p>
              
              <label>Profile Picture</label>
              <input 
                className={`form-input col-5 ${this.state.errors.profilePicture ? 'is-error' : ''}`}
                type="text"
                id="profilePicture"
                name="profilePicture"
                placeholder="Profile Picture (URL)"
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${this.state.errors.profilePicture ? 'An image URL is required' : ''}`}</p>
              
              <label>Country</label>
              <input 
                className={`form-input col-5 ${this.state.errors.country ? 'is-error' : ''}`}
                type="text"
                id="country"
                name="country"
                placeholder="Country"
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${this.state.errors.country  ? 'A country is required' : ''}`}</p>
                          
              <label>Experiences</label>
              <input 
                className={`form-input col-5 ${this.state.errors.experiences ? 'is-error' : ''}`}
                type="text"
                id="experiences"
                name="experiences"
                placeholder="Number of Experiences"
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${this.state.errors.experiences ? 'A number is required' : ''}`}</p>

              <label>About</label>
              <textarea
                rows="4"
                className={`form-input col-5 ${this.state.errors.about ? 'is-error' : ''}`}
                type="text"
                id="about"
                name="about"
                placeholder="About"
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${this.state.errors.about ? 'This area is required is required' : ''}`}</p>

              <label>email</label>
              <input 
                className={`form-input col-5 ${this.state.errors.email ? 'is-error' : ''}`}
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${this.state.errors.email ? 'An email is required' : ''}`}</p>
              
              <label>Password</label>
              <input 
                className={`form-input col-5 ${this.state.errors.password ? 'is-error' : ''}`}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${this.state.errors.password ? 'A Password is required' : ''}`}</p>
                  
              <label>Password Confirmation</label>
              <input 
                className={`form-input col-5 ${this.state.errors.passwordConfirmation ? 'is-error' : ''}`}
                type="password"
                id="passwordConfirmation"
                name="passwordConfirmation"
                placeholder="Password Confirmation"
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${this.state.errors.passwordConfirmation ? 'Oops, the passwords do not match' : ''}`}</p>
              
              <br/>
              <button className="btn btn-primary" type="submit">Register</button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}


export default RegisterTraveller