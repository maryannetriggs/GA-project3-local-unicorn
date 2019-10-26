import React from 'react'
import axios from 'axios'
// import Auth from '../../lib/auth'

class UnicornShow extends React.Component {
  constructor() {
    super()

    this.state = {
      unicorn: null
    }

  }

  componentDidMount() {
    const unicornId = this.props.match.params.id
    axios.get(`/api/unicorns/${unicornId}`)
      .then(res => this.setState({ unicorn: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.unicorn) return null
    const { unicorn } = this.state
    return (
      <section>
        <div className="unicorn-wrapper">
          <h3>{unicorn.name}</h3>
          <img src={unicorn.profilePicture} alt={name}/>
          <h3>{unicorn.about}</h3>
          <h3>{unicorn.city}</h3>
          <h3>{unicorn.country}</h3>
          <h3>{unicorn.region}</h3>
          <h3>{unicorn.language}</h3>
          <h3>{unicorn.age}</h3>
          <h3>{unicorn.gender}</h3>
        </div>
      </section >
    )
  }
}

export default UnicornShow