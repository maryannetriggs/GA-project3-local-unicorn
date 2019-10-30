import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

import ExpCard from '../experiences/ExpCard'
import ReviewCard from '../reviews/ReviewCard'

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
      .catch(err => console.log(err))
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
          <div className="column col-12">
            <div className="columns">
              <div className="column col-6">
                <h3>{unicorn.name}, {unicorn.age}</h3>
                <img className="unicornProfilePic" src={unicorn.profilePicture} alt={name}/>
                <h3>{unicorn.city}</h3>
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
                </div>
              </div>
              <div className="column col-12">
                <h3>Reviews</h3>
                {/* <div className="container">
                  <div className="columns">
                    {unicorn.experiences.reviews.map(review => (
                      <ReviewCard key={review._id} {...review} />
                    ))}
                  </div>
                </div> */}
              </div>
              {this.isOwner() && 
              <>
                <Link to={`/unicorn/edit/${unicorn._id}`} className="btn btn-primary">
              EDIT MY PROFILE
                </Link>
                <button onClick={this.handleDelete} className="btn btn-error">DELETE MY PROFILE</button>
              </>
              }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default UnicornProfile