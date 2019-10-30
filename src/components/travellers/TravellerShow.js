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
    console.log('HELLO 123')
    axios.get('api/traveller/', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ traveller: res.data }))
      .catch(err => console.log(err))
  }

  handleDelete() {
    axios.delete('/api/traveller/', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => {
        Auth.logout()
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  isOwner() {
    return Auth.getPayload().sub === this.state.traveller.id
  }
  

  render() {
    if (!this.state.traveller) return null
    const { traveller } = this.state
    return (
      <section className="container">
        {/* <h1>Traveller profile page</h1> */}
        <div className="columns">
          <div className="column col-4">
            <div>
              <h2>{traveller.name}</h2>
              <br />
              <img className="travellerProfilePic" src={traveller.profilePicture} alt={traveller.name}/>
            </div>
          </div>

          <div className="column col-8">
            <h3>My home country: {traveller.country}</h3>
            <h3>Number of experiences booked: {traveller.experiences}</h3>
            <p>{traveller.about}</p>
          </div>
          {/* <div className="column col-4"></div> */}
          <div>
            {this.isOwner() && 
            <>
              <Link to={`/traveller/edit/${traveller._id}`} className="btn btn-primary">
              EDIT MY PROFILE
              </Link>
              <button onClick={this.handleDelete} className="btn btn-error">DELETE MY PROFILE</button>
            </>
            }
          </div>
        </div>
        
      </section>
    )
  }
}

export default TravellerShow



