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
              <div className="select">
                <select name="city" onChange={this.handleChange} value={data.city}>
                  <option value="" disabled>Select your city</option>
                  <option value="All">All</option>
                  <option value="La Paz">La Paz</option>
                  <option value="London">London</option>
                  <option value="Madrid">Madrid</option>
                  <option value="Mexico City">Mexico City</option>
                  <option value="Marrakesh">Marrakesh</option>
                  <option value="Moscow">Moscow</option>
                  <option value="New York">New York</option>
                  <option value="Paris">Paris</option>
                  <option value="Shanghai">Shanghai</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Stockholm">Stockholm</option>
                  <option value="Tehran">Tehran</option>
                  <option value="Tokyo">Tokyo</option>
                  <option value="Wellington">Wellington</option>
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