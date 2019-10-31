import React from 'react'
import { Link } from 'react-router-dom'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import ExpCard from '../experiences/ExpCard'

class BookingPage extends React.Component {
  constructor() {
    super()

    this.state = {
      startDate: new Date(),
      experience: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({ startDate: date })
  }

  render() {
    const experience = this.props.location.state.experience
    console.log(this.state)
    return (
      <>
        <div>
          <h1>You&aposre booking &apos{experience.name}&apos with {experience.unicorn.name}</h1>
        </div>
        <ExpCard key={experience._id} {...experience}/>

        <h3>Unicorn availability: {experience.availability} {experience.time}</h3>
        
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          inline
        />
        <Link to="/bookingrequest">
          <button>BOOK NOW NOW NOW!</button>
        </Link>
      </>
    )
  }
}

export default BookingPage
