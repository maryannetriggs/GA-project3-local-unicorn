import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import ExpForm from './ExpForm'

class ExpNew extends React.Component {
  constructor() {
    super()

    this.state = {
      expFormData: {
        name: '',
        image: '',
        description: '',
        intensity: '',
        price: '',
        availability: [''],
        time: [''],
        category: ['']
      },
      errors: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleMultiSelectCategory = this.handleMultiSelectCategory.bind(this)
    this.handleMultiSelectAvailability = this.handleMultiSelectAvailability.bind(this)
    this.handleMultiSelectTime = this.handleMultiSelectTime.bind(this)
  }

  componentDidMount() {
    const expId = this.props.match.params.id
    axios.get(`/api/experiences/${expId}`)
      .then(res => this.setState({ expFormData: res.data }))
      .catch(err => console.log(err))
      // .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('hello')
    axios.post('/api/experiences', this.state.expFormData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/unicorn'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleChange(e) {
    console.log(e.target.name, e.target.value)
    const expFormData = { ...this.state.expFormData, [e.target.name]: e.target.value }
    this.setState({ expFormData })
  }

  handleMultiSelectAvailability(selected) {
    if (!selected) {
      return this.setState({ expFormData: { ...this.state.expFormData, availability: [] } })
    }
    const availability = selected.map(item => item.value)
    const expFormData = { ...this.state.expFormData, availability }
    this.setState({ expFormData })
  }

  handleMultiSelectTime(selected) {
    if (!selected) {
      return this.setState({ expFormData: { ...this.state.expFormData, time: [] } })
    }
    const time = selected.map(item => item.value)
    const expFormData = { ...this.state.expFormData, time }
    this.setState({ expFormData })
  }

  handleMultiSelectCategory(selected) {
    if (!selected) {
      return this.setState({ expFormData: { ...this.state.expFormData, category: [] } })
    }
    const category = selected.map(item => item.value)
    const expFormData = { ...this.state.expFormData, category }
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
          handleMultiSelectAvailability={this.handleMultiSelectAvailability}
          handleMultiSelectTime={this.handleMultiSelectTime}
          handleMultiSelectCategory={this.handleMultiSelectCategory}
          errors={this.state.errors}
        />
      </div>
    )
  }
}

export default ExpNew