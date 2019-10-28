import React from 'react'
import { Link } from 'react-router-dom'

const ExpCard = ({ name, image, category, price, _id }) => (
  <div className="column col-3">
    <Link to={`/experiences/${_id}`}>
      <div>
        <img className="city-card" src={image} alt={name}/>
        <h3>{name}</h3>
        <h3>Category: {`${category} `}</h3>
        <h3>Price: {price}</h3>
      </div>
    </Link>
  </div>
)

export default ExpCard
