import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import ExpCard from '../experiences/ExpCard'
// import ReviewCard from '../reviews/ReviewCard'

class UnicornShow extends React.Component {
  constructor() {
    super()

    this.state = {
      unicorn: null
    }
  }

  componentDidMount() {
    this.getUnicorn()
  }

  getUnicorn() {
    const unicornId = this.props.match.params.id
    axios.get(`/api/unicorns/${unicornId}`)
      .then(res => this.setState({ unicorn: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.unicorn) return null
    const { unicorn } = this.state
    console.log(unicorn)
    return (
      <section className="container">
        <div className="columns">
          <div className="column col-12 back">
            <Link to={{ pathname: '/unicorns', state: { from: unicorn.city } }}>
              <button>BACK TO OTHER {unicorn.city} UNICORNS</button>
            </Link>
          </div>
          <div className="column col-6">
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
                <div>% happy travellers</div>
                <br />
                <button>BOOK</button>
              </div>
            </div>
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
            <h3>Map</h3>
          </div>
          <div className="column col-12">
            <h3>Reviews</h3>
            <div className="container">
              {/* <div className="columns">
                {unicorn.experiences.reviews.map(review => (
                  <ReviewCard key={review._id} {...review} />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section >
    )
  }
}

export default UnicornShow