import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import UnicornForm from './UnicornForm'

class UnicornEdit extends React.Component {
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

  componentDidMount() {
    axios.get('/api/unicorn', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err))
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.put('/api/unicorn', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => {
        this.props.history.push('/unicorn')
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <section>
        <div>
          <UnicornForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}

export default UnicornEdit