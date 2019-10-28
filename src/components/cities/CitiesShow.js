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
      <section className="container">
        <div className="columns">
          <img className="column col-12" src={city.image} alt={name}/>
          <div className="column col-6">
            <h3>{city.name}</h3>
            <h3>{city.description}</h3>
          </div>
          <div className="column col-6">
            <button>Hello</button>
          </div>
          
        </div>
      </section >
    )
  }
}

export default CitiesShow