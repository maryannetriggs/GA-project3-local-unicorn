import React from 'react'
import axios from 'axios'
// import Auth from '../../lib/auth'

class UnicornShow extends React.Component {
  constructor() {
    super()

    this.state = {
      unicorn: null
    }

  }

  componentDidMount() {
    const unicornId = this.props.match.params.id
    axios.get(`/api/unicorns/${unicornId}`)
      .then(res => this.setState({ unicorn: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.unicorn) return null
    const { unicorn } = this.state
    return (
      <section>
        <div className="unicorn-wrapper">
          <img src={unicorn.profilePicture} alt={name}/>
          <h3>{unicorn.name}</h3>
          <h3>{unicorn.about}</h3>
          <h3>{unicorn.city.name}</h3>
          <h3>Languages Spoken:</h3> 
          {unicorn.language.map((lang, i) => (
            <h4 key={i}>{lang}</h4>
          ))}
          <h3>Age: {unicorn.age}</h3>
          <h3>Gender: {unicorn.gender}</h3>
        </div>
      </section >
    )
  }
}

export default UnicornShow