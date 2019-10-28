import React  from 'react'
import axios from 'axios'
// import  { Link } from 'react-router-dom'
import Auth from '../../lib/auth'


class TravellerShow extends React.Component {
  constructor () {
    super()

    this.state = {
      traveller: null
    }

  }

  componentDidMount() {
    axios.get('api/travellers/:id', {
      headers: { Authorization: `Bearer ${Auth.getToken}` }
    })
      .then(res => this.setState({ traveller: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <h1>Traveller profile page</h1>
    )
  }
}

export default TravellerShow



