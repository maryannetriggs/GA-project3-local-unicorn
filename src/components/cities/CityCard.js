import React from 'react'
import { Link } from 'react-router-dom'

const CityCard = ({ name, image, description, country, region, _id }) => (
  <div>
    <Link to={`/cities/${_id}`}>
      <div>
        <img src={image} alt={name}/>
        <h3>{description}</h3>
        <h3>{country}</h3>
        <h3>{region}</h3>
      </div>
    </Link>
  </div>
)

export default CityCard