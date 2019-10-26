import React from 'react'
import axios from 'axios'
// import Auth from '../../lib/auth'

class CitiesShow extends React.Component {
  constructor() {
    super()

    this.state = {
      city: null
    }

  }

  componentDidMount() {
    const cityId = this.props.match.params.id
    axios.get(`/api/cities/${cityId}`)
      .then(res => this.setState({ city: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.city) return null
    const { city } = this.state
    return (
      <section>
        <div className="city-wrapper">
          <h3>{city.name}</h3>
          <img src={city.image} alt={name}/>
        </div>
      </section >
    )
  }
}

export default CitiesShow