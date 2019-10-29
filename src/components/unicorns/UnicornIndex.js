import React from 'react'
import axios from 'axios'

import UnicornCard from './UnicornCard'
import UnicornSearch from './UnicornSearch'

class UnicornIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      unicorns: null,
      city: 'All',
      gender: 'All',
      language: 'All'
    }

    this.handleCity = this.handleCity.bind(this)
    this.handleGender = this.handleGender.bind(this)
    this.handleLanguage = this.handleLanguage.bind(this)
  }

  componentDidMount() {
    axios.get('/api/unicorns')
      .then(res => this.setState({ unicorns: res.data }))
      .catch(err => console.log(err))
  }

  handleCity(e) {
    this.setState({ city: e.target.value })
  }

  handleGender(e) {
    this.setState({ gender: e.target.value })
  }

  handleLanguage(e) {
    this.setState({ language: e.target.value })
  }

  filteredUnicorns() {
    const { city, gender, language } = this.state
    if (!this.state.unicorns) return null
    return this.state.unicorns.filter(unicorn => {
      return (unicorn.city.name === city || city === 'All') && 
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
            handleCity={this.handleCity}
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