import React from 'react'
import axios from 'axios'

// import TravellerShow from './TravellerShow'

class TravellerIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      travellers: null
    }
  }

  componentDidMount() {
    axios.get('/api/travellers')
      .then(res => this.setState({ travellers: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    if (!this.state.travellers) return null
    return (
      <h1>Nothing here to see</h1>
    )
  }
}

export default TravellerIndex