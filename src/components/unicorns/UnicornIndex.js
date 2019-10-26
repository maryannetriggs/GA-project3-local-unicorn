import React from 'react'
import axios from 'axios'

import UnicornCard from './UnicornCard'

class UnicornIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      unicorns: null
    }
  }

  componentDidMount() {
    axios.get('/api/unicorns')
      .then(res => this.setState({ unicorns: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.unicorns) return null
    return (
      <div>
        {this.state.unicorns.map(unicorn => (
          <UnicornCard key={unicorn._id} {...unicorn}/>
        ))}
      </div>
    )
  }

}

export default UnicornIndex