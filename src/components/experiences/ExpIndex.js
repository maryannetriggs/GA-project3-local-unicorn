import React from 'react'
import axios from 'axios'

import ExpCard from './ExpCard'

class ExpsIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      experiences: null
    }
  }

  componentDidMount() {
    axios.get('/api/experiences')
      .then(res => this.setState({ experiences: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.experiences) return null
    return (
      <div className="experience-wrapper">
        {this.state.experiences.map(exp => (
          <ExpCard key={exp._id} {...exp}/>
        ))}
      </div>
    )
  }

}

export default ExpsIndex