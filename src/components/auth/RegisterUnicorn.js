import React from 'react'
import axios from 'axios'
// import Select from 'react-select'
// import makeAnimated from 'react-select/animated'

// const animatedComponents = makeAnimated()

class RegisterUnicorn extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        profilePicture: '',
        about: '',
        city: '',
        country: '',
        region: '',
        language: '',
        age: '',
        gender: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
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

    axios.post('/api/registerunicorn', this.state.data)
      .then(() => this.props.history.push('/cities'))
      .catch(err => console.log(err))
  }

  render() {
    const { data } = this.state
    return (

      <section>
        <div className="form-group">
          <h2>Register</h2>
          <form onSubmit={this.handleSubmit}>

            <div className="field">
              <label className="label">Full name</label>
              <div className="control">
                <input 
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={data.name}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Profile picture (url)</label>
              <div className="control">
                <input 
                  className="input"
                  name="profilePicture"
                  value={data.profilePicture}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">About me</label>
              <div className="control">
                <textarea 
                  className="textarea"
                  name="about"
                  value={data.about}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">City</label>
              <div className="control">
                <input 
                  className="input"
                  name="city"
                  value={data.city}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Country</label>
              <div className="control">
                <input 
                  className="input"
                  name="country"
                  value={data.country}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Region</label>
              <div className="select">
                <select name="region" onChange={this.handleChange} value={data.region}>
                  <option value="" disabled>Select your region</option>
                  <option value="Africa">Africa</option>
                  <option value="Asia">Asia</option>
                  <option value="Caribbean">Carribean</option>
                  <option value="Central America">Central America</option>
                  <option value="Europe">Europe</option>
                  <option value="North America">North America</option>
                  <option value="Oceania">Oceania</option>
                  <option value="South America">South America</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label className="label">Languages spoken</label>
              <div className="control">
                <input 
                  className="input"
                  name="language"
                  //value={data.language}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Age</label>
              <div className="control">
                <input
                  className="input"
                  name="age"
                  number="number"
                  value={data.age}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Gender</label>
              <div className="select">
                <select name="gender" onChange={this.handleChange} value={data.gender}>
                  <option value="" disabled>Select your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Non-binary">Non-binary</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  name="email"
                  value={data.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  name="password"
                  value={data.password}
                  onChange={this.handleChange}
                />
              </div>
            </div> 

            <div className="field">
              <label className="label">Password confirmation</label>
              <div className="control">
                <input
                  className="input"
                  name="passwordConfirmation"
                  value={data.passwordConfirmation}
                  onChange={this.handleChange}
                />
              </div>
            </div>   
            <br/>

            <button className="btn btn-success">Register</button>
          </form>
        </div>
      </section>
    )
  }

}

export default RegisterUnicorn