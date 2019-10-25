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
    axios.get('https://localhost:4000/cities')
      .then(res => this.setState({ cities: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.cities) return null
    return (
      <div className="city-wrapper">
        {this.state.cities.map(city => (
          <CityCard key={city._id} {...city}/>
        ))}
      </div>
    )
  }

}

export default CitiesIndex