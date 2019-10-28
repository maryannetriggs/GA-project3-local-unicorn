import React from 'react'
import { Link } from 'react-router-dom'

const CityCard = ({ name, image, _id }) => (
  <div className="column col-3">
    <Link to={`/cities/${_id}`}>
      <div className="">
        <img className="city-card" src={image} alt={name}/>
        <h3>{name}</h3>
      </div>
    </Link>
  </div>
)

export default CityCard