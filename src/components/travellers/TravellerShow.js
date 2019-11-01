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
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleDelete() {
    axios.delete('/api/traveller/', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => {
        Auth.logout()
        this.props.history.push('/')
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  isOwner() {
    return Auth.getPayload().sub === this.state.traveller.id
  }
  

  render() {
    if (!this.state.traveller) return null
    const { traveller } = this.state
    return (
      <section className="container">
        <div className="columns">
          <div className="column columnTall col-12 back centre">
            <br />
            <br />
          </div>
          <div className="column col-6">
            <div className="columns">
              <div className="column columnTall col-12">
                <h3 className="showTitle">{traveller.name}</h3>
                <img className="spaceLeftBig s-circle profilePic" src={traveller.profilePicture} alt={traveller.name}/>
              </div>
              <br />
            </div>
          </div>
          <div className="column columnTall col-6">
            <h3 className="unicornAbout">About me</h3>
            <p className="aboutUnicorn">{traveller.about}</p>
            <h3 className="aboutUnicorn"><span className="text-success">My home country: </span>{traveller.country}</h3>

            <br />
            <div>
              {this.isOwner() && 
              <>
                <Link to={`/traveller/edit/${traveller._id}`} className="btn btn-primary">
                   EDIT MY PROFILE
                </Link>
                <span> </span>
                <button onClick={this.handleDelete} className="btn btn-error">DELETE MY PROFILE</button>
              </>
              }
            </div>
          </div>
        </div>
      </section >
    )
  }
}

export default TravellerShow
