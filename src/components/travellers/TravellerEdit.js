import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import TravellerForm from './TravellerForm'

class TravellerEdit extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        profilePicture: '',
        about: '',
        country: '',
        experiences: 0,
        email: ''
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('/api/traveller', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ data: res.data }))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.put('/api/traveller', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => {
        this.props.history.push('/traveller')
      })
      .catch(err => this.setState({ error: err.response.data.error }))
  }

  render() {
    return (
      <section>
        <div>
          <TravellerForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            errors={this.state.errors}
          />
        </div>
      </section>
    )
  }
}

export default TravellerEdit

