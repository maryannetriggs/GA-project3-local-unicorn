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
    return (
      <>
        <div className="bookingInfoWrapper centre">
          <h3 className="centre"><span>You are booking <span className="bookingInfo">{experience.name}</span> with <span className="bookingInfo">{experience.unicorn.name}</span></span></h3>
        </div>

        <div className="columns">
          <div className="column col-4 centre">
            <ExpCard key={experience._id} {...experience} 

            />
          </div>
          <div className="column col-4 centre">
            <h4>Days availabile:</h4> 
            <>
              {experience.availability.map((avail, i) => (
                <h5 key={i}>{avail} </h5>
              ))}
            </>
            <h4>Times available:</h4> 
            <>
              {experience.time.map((time, i) => (
                <h5 key={i}>{time} </h5>
              ))}
            </>
          </div>

          <div className="column col-4 centre">
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              inline
            />
            <div className="centre bookButton">
              <Link to="/bookingrequest">
                <button className="btn buttonColors">BOOK NOW!</button>
              </Link>
            </div>
          </div>

        </div>
        

      </>
    )
  }
}

export default BookingPage
