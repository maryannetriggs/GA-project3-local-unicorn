import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    if (!this.state.city) return null
    const { city } = this.state
    return (
      <section className="container">
        <div className="columns">
          <img className="column col-12" src={city.image} alt={city.name}/>
          <div className="column col-6">
            <h3>{city.name}</h3>
            <h3>{city.description}</h3>
          </div>
          <div className="column col-6">
            <Link to={{ pathname: '/unicorns', state: { from: city.name } }}>
              <button>FIND MY UNICORN</button>
            </Link>
            <br />
            <br />
            <Link to="/cities">
              <button>BACK TO CITIES</button>
            </Link>
          </div>
        </div>
      </section >
    )
  }
}


export default CitiesShow