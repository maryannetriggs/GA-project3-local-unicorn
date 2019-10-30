import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import ExpCard from '../experiences/ExpCard'

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
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    if (!this.state.unicorn) return null
    const { unicorn } = this.state
    console.log(this.props.history)
    return (
      <section className="container">
        <div className="columns">
          <div className="column col-12 back">
            <button onClick={() => this.props.history.goBack()}>
              BACK TO OTHER {unicorn.city.name} UNICORNS
            </button>
          </div>
          <div className="column col-6">
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
        </div>
      </section >
    )
  }
}

export default withRouter(UnicornShow)