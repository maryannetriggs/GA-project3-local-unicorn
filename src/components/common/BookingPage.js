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
          <h3 className="centre"><span>You are booking <span className="bookingInfo bad">{experience.name}</span> with <span className="bookingInfo bad">{experience.unicorn.name}</span></span></h3>
        </div>

        <div className="columns">
          <div className="column col-4 centre">
            <ExpCard key={experience._id} {...experience} 

            />
          </div>
          <div className="column col-4 centre timeAndDateAvailability">
            <h4 className="hello">Days availabile:</h4> 
            <>
              {experience.availability.map((avail, i) => (
                <h5 key={i}>{avail} </h5>
              ))}
            </>
            <br/>
            <h4 className="hello">Times available:</h4> 
            <>
              {experience.time.map((time, i) => (
                <h5 key={i}>{time} </h5>
              ))}
            </>
          </div>

          <div className="column col-4 centre bookingCalendar">
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              inline
            />
            <div className="centre bookButton">
              <Link to="/bookingrequest">
                <button className="btn btn-lg btn-success">BOOK NOW!</button>
              </Link>
            </div>
          </div>

        </div>
        

      </>
    )
  }
}

export default BookingPage
