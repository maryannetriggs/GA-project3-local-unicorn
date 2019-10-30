import React from 'react'
import axios from 'axios'

import UnicornCard from './UnicornCard'
import UnicornSearch from './UnicornSearch'

class UnicornIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      unicorns: null,
      gender: 'All',
      language: 'All'
      
    }

    this.handleGender = this.handleGender.bind(this)
    this.handleLanguage = this.handleLanguage.bind(this)
  }

  componentDidMount() {
    axios.get('/api/unicorns')
      .then(res => this.setState({ unicorns: res.data }))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleGender(e) {
    this.setState({ gender: e.target.value })
  }

  handleLanguage(e) {
    this.setState({ language: e.target.value })
  }

  filteredUnicorns() {
    const city = this.props.location.state.from
    const { gender, language } = this.state
    if (!this.state.unicorns) return null
    return this.state.unicorns.filter(unicorn => {
      return (unicorn.city.name === city) && 
      (unicorn.gender === gender || gender === 'All') &&
      (unicorn.language.includes(language) || language === 'All')
    })
  }

  render() {
    if (!this.state.unicorns) return null
    return (
      <>
        <div>
          <UnicornSearch 
            handleGender={this.handleGender}
            handleLanguage={this.handleLanguage}
          />
        </div>
        <div>
          {this.filteredUnicorns().map(unicorn => (
            <UnicornCard key={unicorn._id} {...unicorn}/>
          ))}
        </div>
      </>
    )
  }

}

export default UnicornIndex