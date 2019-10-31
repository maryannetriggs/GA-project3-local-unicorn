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
        <div>
          <h2 className="centre">You are booking {experience.name} with {experience.unicorn.name}</h2>
        </div>

        <section className="container">
          <div className="columns">
            <div className="column col-6 centre">
              <ExpCard key={experience._id} {...experience}/>
              <h3>Days availabile:</h3> 
              <>
                {experience.availability.map((avail, i) => (
                  <h4 key={i}>{avail} </h4>
                ))}
              </>
              <h3>Times availabile:</h3> 
              <>
                {experience.time.map((time, i) => (
                  <h4 key={i}>{time} </h4>
                ))}
              </>

            </div>

            <div className="column col-6 centre">
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                inline
              />
              <Link to="/bookingrequest">
                <button className="btn buttonColors">BOOK NOW!</button>
              </Link>
            </div>
            
          </div>
        </section>
      </>
    )
  }
}

export default BookingPage
