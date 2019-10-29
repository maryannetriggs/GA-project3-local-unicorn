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
        <div className="form-group">
          <form onSubmit={this.handleSubmit}>
            <h2>Register</h2>
            
            <label>Name</label>
            <input 
              className="form-input"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
              
            <label>Profile Picture</label>
            <input 
              className="form-input"
              type="text"
              id="profilePictuce"
              name="profilePicture"
              placeholder="Profile Picture (URL)"
              onChange={this.handleChange}
            />
              
            <label>About</label>
            <input 
              className="form-input"
              type="text"
              id="about"
              name="about"
              placeholder="About"
              onChange={this.handleChange}
            />
              
            <label>Country</label>
            <input 
              className="form-input"
              type="text"
              id="county"
              name="country"
              placeholder="Country"
              onChange={this.handleChange}
            />
                          
            <label>Experiences</label>
            <input 
              className="form-input"
              type="text"
              id="experiences"
              name="expericences"
              placeholder="Number of Experiences"
              onChange={this.handleChange}
            />
                        
            <label>email</label>
            <input 
              className="form-input"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
              
            <label>Parword</label>
            <input 
              className="form-input"
              type="text"
              id="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
                  
            <label>Password Confirmation</label>
            <input 
              className="form-input"
              type="text"
              id="passwordConfirmation"
              name="passwordConfirmation"
              placeholder="Password Confirmation"
              onChange={this.handleChange}
            />
              
          </form>
          <br/>
          <button className="btn" type="submit">Register</button>
        </div>
      </section>
    )
  }
}


export default RegisterTraveller