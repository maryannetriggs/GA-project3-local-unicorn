import React from 'react'
import { Link } from 'react-router-dom'

const BookingRequestSent = () => (
  <>
    <div>
      <h2>Your booking request has been sent to your unicorn.</h2>
      <br />
      <h2>Thank You! Enjoy your holiday! 🦄</h2>
    </div>
    <Link to={'/traveller'}>
      <button>TAKE ME TO MY PROFILE</button>
    </Link>
  </>
)

export default BookingRequestSent