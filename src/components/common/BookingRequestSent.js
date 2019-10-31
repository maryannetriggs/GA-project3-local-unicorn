import React from 'react'
import { Link } from 'react-router-dom'

const BookingRequestSent = () => (
  <div className="container">
    <div className="columns centre">
      <h2>Your booking request has been sent to your unicorn.</h2>
      <br />
      <h2>Thank You!<span className="logo">🦄</span></h2>
    </div>
    <Link to={'/traveller'}>
      <button className="buttonColors centre">BACK TO PROFILE</button>
    </Link>
  </div>
)

export default BookingRequestSent