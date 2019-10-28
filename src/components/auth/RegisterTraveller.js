import React from 'react'
import axios from 'axios'

class RegisterTraveller extends React.Component {
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
    axios.post('/api/registertraveller', this.state.data)
      .then(() => this.props.history.puch('/login'))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <section>
        <form>
          <h2>Register</h2>
          <div className="form-group">
            <label>Name</label>
            <div>
              <input 
                className="input"
                name="name"
                placeholder="Name"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div>
            <label>Profile Picture</label>
            <div>
              <input 
                className="input"
                name="profilePicture"
                placeholder="Profile Picture (URL)"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div>
            <label>About</label>
            <div>
              <input 
                className="input"
                name="about"
                placeholder="About"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div>
            <label>Country</label>
            <div>
              <input 
                className="input"
                name="country"
                placeholder="Country"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div>
            <label>Experiences</label>
            <div>
              <input 
                className="input"
                name="expericences"
                placeholder="Number of Experiences"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div>
            <label>email</label>
            <div>
              <input 
                className="input"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div>
            <label>Parword</label>
            <div>
              <input 
                className="input"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div>
            <label>Password Confirmation</label>
            <div>
              <input 
                className="input"
                name="passwordConfirmation"
                placeholder="Password Confirmation"
                onChange={this.handleChange}
              />
            </div>
          </div>
        </form>
        <button type="submit">Register</button>
      </section>
    )
  }
}


export default RegisterTraveller