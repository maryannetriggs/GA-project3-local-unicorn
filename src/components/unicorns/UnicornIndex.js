import React from 'react'
import axios from 'axios'

import UnicornCard from './UnicornCard'
import UnicornSearch from './UnicornSearch'

class UnicornIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      unicorns: null,
      region: 'All',
      gender: 'All',
      language: 'All'
    }

    this.handleRegion = this.handleRegion.bind(this)
    this.handleGender = this.handleGender.bind(this)
    this.handleLanguage = this.handleLanguage.bind(this)
  }

  componentDidMount() {
    axios.get('/api/unicorns')
      .then(res => this.setState({ unicorns: res.data }))
      .catch(err => console.log(err))
  }

  handleRegion(e) {
    this.setState({ region: e.target.value })
  }

  handleGender(e) {
    this.setState({ gender: e.target.value })
  }

  handleLanguage(e) {
    this.setState({ language: e.target.value })
  }

  filteredUnicorns() {
    const { region, gender, language } = this.state
    if (!this.state.unicorns) return null
    return this.state.unicorns.filter(unicorn => {
      return (unicorn.region === region || region === 'All') && 
      (unicorn.gender === gender || gender === 'All') &&
      (unicorn.language.includes(language) || language === 'All')
    })
  }

  render() {
    console.log(this.state, this.filteredUnicorns())
    if (!this.state.unicorns) return null
    return (
      <>
        <div>
          <UnicornSearch 
            handleRegion={this.handleRegion}
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