import React from 'react'
import axios from 'axios'
// import Auth from '../../lib/auth'

import ExpForm from './ExpForm'

class ExpNew extends React.Component {
  constructor() {
    super()

    this.state = {
      expFormData: {
        name: '',
        image: '',
        description: '',
        intensity: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const expId = this.props.match.params.id
    axios.get(`/api/experiences/${expId}`)
      .then(res => this.setState({ expFormData: res.data }))
      .catch(err => console.log(err))
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  handleChange(e) {
    const expFormData = { ...this.state.expFormData, [e.target.name]: e.target.value }
    this.setState({ expFormData })
  }

  render() {
    console.log(this.state.expFormData)
    return (
      <div>
        <ExpForm
          expFormData={this.state.expFormData}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default ExpNew