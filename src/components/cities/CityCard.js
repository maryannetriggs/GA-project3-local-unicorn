import React from 'react'
import { Link } from 'react-router-dom'

const CityCard = ({ name, image, _id }) => (
  <div className="card centre">
    <div className="card-image centre">
      <img className="city-card img-responsive" src={image} alt={name}/>
    </div>
    <div className="card-header">
      <div className="card-title text-uppercase h4">{name}</div>
      <br />
    </div>
    <Link to={`/cities/${_id}`}>
      <button className="btn">Check out our {name} unicorns!</button>
    </Link>
  </div>
)

export default CityCard