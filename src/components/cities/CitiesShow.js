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
      // <section className="container">
      <div className="columns">
        <img className="column columnCoverImage col-12" src={city.image} alt={city.name}/>
        <div className="column col-6">
          <h2 className="showTitle">{city.name}</h2>
          <br />
          <br />
          <p className="cityDes">{city.description}</p>
        </div>
        <div className="column col-6 centre">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Link to={{ pathname: '/unicorns', state: { from: city.name } }}>
            <button className="btn btn-success btn-lg">Check out our {city.name} unicorns!</button>
          </Link>
          <br />
          <br />
          <Link to="/cities">
            <button className="btn btn-lg">Back to all cities</button>
          </Link>
        </div>
      </div>
      // </section >
    )
  }
}


export default CitiesShow