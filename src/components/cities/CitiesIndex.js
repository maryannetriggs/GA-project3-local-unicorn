import React from 'react'
import axios from 'axios'

import CityCard from './CityCard'

class CitiesIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      cities: null
    }
  }

  componentDidMount() {
    axios.get('/api/cities')
      .then(res => this.setState({ cities: res.data }))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    if (!this.state.cities) return null
    return (
      <div className="container">
        <div className="columns">
          {this.state.cities.map(city => (
            <CityCard key={city._id} {...city}/>
          ))}
        </div>
      </div>
    )
  }

}

export default CitiesIndex