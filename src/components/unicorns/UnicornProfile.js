import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

import ExpCard from '../experiences/ExpCard'

class UnicornProfile extends React.Component {
  constructor() {
    super()

    this.state = {
      uncorn: null
    }
    this.handledelete = this.handledelete.bind(this)
  }

  componentDidMount() {
    axios.get('/api/unicorn', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ unicorn: res.data }))
      .catch(err => console.log(err))
  }

  handledelete() {
    axios.delete('/api/unicorn', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => {
        Auth.logout()
        this.props.history.push('/')
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  isOwner() {
    return Auth.getPayload().sub === this.state.unicorn._id
  }

  render() {
    if (!this.state.unicorn ) return null
    const { unicorn } = this.state
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
                <h3 className="showTitle">{unicorn.name}, {unicorn.age}</h3>
                <img className="spaceLeftBig s-circle profilePic" src={unicorn.profilePicture} alt={unicorn.name}/>
              </div>
              <br />
            </div>
          </div>
          <div className="column columnTall col-6">
            <h3 className="unicornAbout">About {unicorn.name}</h3>
            <p className="aboutUnicorn">{unicorn.about}</p>
            <h3 className="aboutUnicorn"><span className="text-success">My hometown: </span>{unicorn.city.name}</h3>
            <br />
            <h3 className="unicornInfo text-primary">Language(s) Spoken:</h3> 
            {unicorn.language.map((lang, i) => (
              <h4 className="unicornInfo" key={i}>{lang}</h4>
            ))}
            <br />
            {this.isOwner() && 
              <>
                <Link to={`/unicorn/edit/${unicorn._id}`} className="btn btn-primary">
              EDIT MY PROFILE
                </Link>
                <span> </span>
                <button onClick={this.handleDelete} className="btn btn-error">DELETE MY PROFILE</button>
              </>
            }
          </div>
          <div className="column columnTall col-12">
            <br />
            <h3 className="reviewTitle topBorder paddingTop">My experiences</h3>
            <div className="spaceLeftBig">
              <Link to={'/experiences/new'}>
                <button className="btn btn-success">ADD NEW EXPERIENCE</button>
              </Link>
            </div>
            <div className="columns">
              {unicorn.experiences.map(exp => (
                <ExpCard key={exp._id} {...exp} />
              ))}
            </div>
          </div>
        </div>
      </section >
    )
  }
}

export default UnicornProfile


{/* <section className="container">
<div className="columns">
  <div className="column col-12">
    <div className="columns">
      <div className="column col-6">
        <h3>{unicorn.name}, {unicorn.age}</h3>
        <img className="unicornProfilePic" src={unicorn.profilePicture} alt={name}/>
        <h3>{unicorn.city.name}</h3>
        <h3>Languages Spoken:</h3> 
        {unicorn.language.map((lang, i) => (
          <h4 key={i}>{lang}</h4>
        ))}
      </div>
      <div className="column col-6">
        <h3>About {unicorn.name}</h3>
        <p>{unicorn.about}</p>
      </div>
      <div className="column col-12">
        <h3>Experiences</h3>
        <div className="container">
          <div className="columns">
            {unicorn.experiences.map(exp => (
              <ExpCard key={exp._id} {...exp} />
            ))}
          </div>
        </div> */}


