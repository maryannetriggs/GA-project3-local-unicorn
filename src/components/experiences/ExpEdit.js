import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import ExpForm from './ExpForm'

class ExpEdit extends React.Component {
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
      }
    }
    

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleMultiSelectAvailability = this.handleMultiSelectAvailability.bind(this)
    this.handleMultiSelectTime = this.handleMultiSelectTime.bind(this)
    this.handleMultiSelectCategory = this.handleMultiSelectCategory.bind(this)
  }

  componentDidMount() {
    const expId = this.props.match.params.id
    axios.get(`/api/experiences/${expId}`)
      .then(res => this.setState({ expFormData: res.data }))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('Edit exp form has been submitted')

    const expId = this.props.match.params.id
    console.log(expId)
    axios.put(`/api/experiences/${expId}`, this.state.expFormData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.props.history.push(`/experiences/${res.data._id}`)
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleChange({ target: { name, value, type, checked } }) {
    const newValue = type === 'checkbox' ? checked : value
    const expFormData = { ...this.state.expFormData, [name]: newValue }
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
          handleMultiSelectCategory={this.handleMultiSelectCategory}
          handleMultiSelectTime={this.handleMultiSelectTime}
        />
      </div>
    )
  }
}

export default ExpEdit