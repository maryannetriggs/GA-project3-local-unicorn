import React from 'react'
import { Link } from 'react-router-dom'

const BookingRequestSent = () => (
  <div className="container">
    <div className="columns">
      <div className="column col-12 centre bookingRequest">
        <h2 className="bookTitle centre">Booking request has been sent to your unicorn</h2>
        <br />
        <h2 className="bye ourGrey"><span className="logo">🦄</span> Thank You <span className="logo">🦄</span></h2>
        <Link to={'/traveller'}>
          <br />
          <button className="btn centre">BACK TO PROFILE</button>
        </Link>
      </div>
      
    </div>
  </div>
)

export default BookingRequestSent