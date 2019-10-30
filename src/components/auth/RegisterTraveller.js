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
    console.log('HELLO')
    e.preventDefault()
    axios.post('/api/registertraveller', this.state.data)
      .then(() => this.props.history.push('/logintraveller'))
      .catch(err => console.log(err))
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
                className="form-input col-5"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                onChange={this.handleChange}
              />
              
              <label>Profile Picture</label>
              <input 
                className="form-input col-5"
                type="text"
                id="profilePicture"
                name="profilePicture"
                placeholder="Profile Picture (URL)"
                onChange={this.handleChange}
              />
              
              <label>Country</label>
              <input 
                className="form-input col-5"
                type="text"
                id="country"
                name="country"
                placeholder="Country"
                onChange={this.handleChange}
              />
                          
              <label>Experiences</label>
              <input 
                className="form-input col-5"
                type="text"
                id="experiences"
                name="experiences"
                placeholder="Number of Experiences"
                onChange={this.handleChange}
              />

              <label>About</label>
              <textarea
                rows="4"
                className="form-input col-5"
                type="text"
                id="about"
                name="about"
                placeholder="About"
                onChange={this.handleChange}
              />

              <label>email</label>
              <input 
                className="form-input col-5"
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              
<<<<<<< HEAD
              <label>Parword</label>
              <input 
                className="form-input col-5"
                type="text"
                id="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
=======
            <label>Pasword</label>
            <input 
              className="form-input"
              type="text"
              id="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
>>>>>>> development
                  
              <label>Password Confirmation</label>
              <input 
                className="form-input col-5"
                type="text"
                id="passwordConfirmation"
                name="passwordConfirmation"
                placeholder="Password Confirmation"
                onChange={this.handleChange}
              />
              
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