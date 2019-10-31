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
                <img className="spaceLeftBig s-circle profilePic" src={unicorn.profilePicture} alt={name}/>
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
            <button className="btn" onClick={() => this.props.history.goBack()}>
              Back to {unicorn.city.name} unicorns
            </button>
          </div>
          <div className="column columnTall col-12">
            <br />
            <h3 className="reviewTitle topBorder paddingTop">My experiences</h3>
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

export default withRouter(UnicornShow)