import React from 'react'
import axios from 'axios'
// import Auth from '../../lib/auth'

class ExpShow extends React.Component {
  constructor() {
    super()

    this.state = {
      experience: null
    }

  }

  componentDidMount() {
    const experienceId = this.props.match.params.id
    axios.get(`/api/experiences/${experienceId}`)
      .then(res => this.setState({ experience: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.experience) return null
    const { experience } = this.state
    return (
      <section>
        <div className="experience-wrapper">
          <h3>{experience.name}</h3>
        </div>
      </section >
    )
  }
}

export default ExpShow