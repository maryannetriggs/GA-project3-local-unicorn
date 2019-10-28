import React  from 'react'
import axios from 'axios'
import  { Link } from 'react-router-dom'
import Auth from '../../lib/auth'


class TravellerShow extends React.Component {
  constructor () {
    super()

    this.state = {
      traveller: null
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios.get('api/travellerprofile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ traveller: res.data }))
      .catch(err => console.log(err))
  }

  handleDelete() {
    axios.delete('/api/travellerprofile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => {
        Auth.logout()
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  isOwner() {
    return Auth.getPayload().sub === this.state.traveller._id
  }
  

  render() {
    if (!this.state.traveller) return null
    const { traveller } = this.state
    return (
      <div>
        <h1>Traveller profile page</h1>
        <h2>{traveller.name}</h2>
        <br />
        <img src={traveller.profilePicture} alt={traveller.name}/>
        <br />
        <h3>My home country: {traveller.country}</h3>
        <h3>Number of experiences booked: {traveller.experiences}</h3>
        <p>{traveller.about}</p>
        <hr />
        {this.isOwner() && 
        <>
          <Link to={`/travellerprofile/${traveller._id}/edit`} className="btn btn-primary">
              EDIT MY PROFILE
          </Link>
          <button onClick={this.handleDelete} className="btn btn-error">DELETE MY PROFILE</button>
        </>
        }
      </div>
    )
  }
}

export default TravellerShow



