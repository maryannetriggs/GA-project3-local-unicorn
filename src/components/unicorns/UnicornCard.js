import React from 'react'
import { Link } from 'react-router-dom'

const UnicornCard = ({ name, profilePicture, _id }) => (
  <div>
    <Link to={`/unicorns/${_id}`}>
      <div className="unicorn-wrapper">
        <img src={profilePicture} alt={name}/>
        <h3>{name}</h3>
      </div>
    </Link>
  </div>
)

export default UnicornCard