import React from 'react'
import axios from 'axios'
import makeAnimated from 'react-select/animated'
import CreatableSelect from 'react-select/creatable'

const animatedComponents = makeAnimated()

class RegisterUnicorn extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        profilePicture: '',
        about: '',
        city: '',
        language: [''],
        age: '',
        gender: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }

    this.options = [
      { value: 'English', label: 'English' },
      { value: 'French', label: 'French' },
      { value: 'Japanese', label: 'Japanese' },
      { value: 'Greek', label: 'Greek' },
      { value: 'Italian', label: 'Italian' },
      { value: 'Portuguese', label: 'Portuguese' },
      { value: 'Spanish', label: 'Spanish' },
      { value: 'Maya', label: 'Maya' },
      { value: 'Swedish', label: 'Swedish' },
      { value: 'Tamil', label: 'Tamil' },
      { value: 'Mandarin', label: 'Mandarin' },
      { value: 'Arabic', label: 'Arabic' },
      { value: 'Russian', label: 'Russian' },
      { value: 'German', label: 'German' },
      { value: 'Dutch', label: 'Dutch' },
      { value: 'Urdu', label: 'Urdu' },
      { value: 'Farci', label: 'Farci' },
      { value: 'Aymara', label: 'Aymara' }
    ]

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCreatableSelect = this.handleCreatableSelect.bind(this)
  }

  handleChange({ target: { name, value, type, checked } }) {
    const newValue = type === 'checkbox' ? checked : value
    const data = { ...this.state.data, [name]: newValue }
    this.setState({ data })
  }

  handleCreatableSelect(selected) {
    const language = selected ? selected.map(item => item.value) : []
    const data = { ...this.state.data, language }
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
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <h2>Register</h2>
            <div className="field">
              <label className="label">Full name</label>
              <div className="control">
                <input 
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Full name"
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
                  placeholder="My profile picture"
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
                  placeholder="About me"
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
              <label className="label">My languages (select from dropdown or add new)</label>
              <div className="control">
                <CreatableSelect
                  options={this.options}
                  isMulti
                  onChange={this.handleCreatableSelect}
                  components={animatedComponents}
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
                  placeholder="My age"
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
                  placeholder="Email"
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
                  type="password"
                  name="password"
                  placeholder="Password"
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
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Password confirmation"
                  value={data.passwordConfirmation}
                  onChange={this.handleChange}
                />
              </div>
            </div>   
            <br/>

            <button className="btn btn-success">Register</button>
          </div>
        </form>
      </section>
    )
  }

}

export default RegisterUnicorn