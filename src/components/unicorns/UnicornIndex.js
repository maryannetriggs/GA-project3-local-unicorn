import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
          <h2>{this.props.location.state.from}</h2>
        </div>
        <div>
          <UnicornSearch
            handleGender={this.handleGender}
            handleLanguage={this.handleLanguage}
          />
        </div>
        {this.filteredUnicorns().length === 0
          ?
          <div className="empty">
            <div className="empty-icon">
              <i className="icon icon-people"></i>
            </div>
            <p className="empty-title h5">There are no unicorns which match your search criteria</p>
            <p className="empty-subtitle">Change your search filters or go back to the cities page</p>
            <div className="empty-action">
              <Link to="/cities">
                <button className="btn btn-primary buttonColors">Pick a different city</button>
              </Link>
            </div>
          </div>
          :

          <>
            <div className="container">
              <div className="columns">
                {this.filteredUnicorns().map(unicorn => (
                  <UnicornCard key={unicorn._id} {...unicorn} />
                ))}
              </div>
            </div>
          </>
          
        }
      </>
    )
  }

}

export default UnicornIndex