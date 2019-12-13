import React from 'react'
import { Link } from 'react-router-dom'

const CityCard = ({ name, image, _id }) => (
  <div className="card centre ">
    <div className="card-image centre">
      <Link to={`/cities/${_id}`}>
        <img className="city-card img-responsive" src={image} alt={name} />
      </Link>
    </div>
    <div className="card-header">
      <div className="card-title text-uppercase h4">{name}</div>
      <br />
    </div>
    <Link to={`/cities/${_id}`}>
      <button className="btn">Find out more about {name}!</button>
    </Link>
  </div>
)

export default CityCard