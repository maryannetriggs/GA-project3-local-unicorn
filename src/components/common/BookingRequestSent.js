import React from 'react'
import { Link } from 'react-router-dom'

const BookingRequestSent = () => (
  <div className="container">
    <div className="columns">
      <div className="column col-12 centre bookingRequest">
        <h2>Booking request has been sent to your unicorn.</h2>
        <br />
        <h2><span className="logo">🦄</span> Thank You <span className="logo">🦄</span></h2>
        <Link to={'/traveller'}>
          <button className="buttonColors centre">BACK TO PROFILE</button>
        </Link>
      </div>
      
    </div>
  </div>
)

export default BookingRequestSent