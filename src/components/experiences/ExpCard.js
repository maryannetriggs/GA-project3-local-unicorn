import React from 'react'
import { Link } from 'react-router-dom'

const ExpCard = ({ name, image, category, price, _id }) => (
  <div className="card">
    <div className="card-image centre">
      <img className="city-card img-responsive" src={image} alt={name}/>
    </div>
    <div className="card-header">
      <div className="card-title text-uppercase h4">{name}</div>
      <br />
      <div className="card-subtitle text-success">Category: {`${category}`}</div>
      <div className="card-subtitle">Price: £{`${price}`}</div>
    </div>
    <br />
    <br />
    <div className="centre">
      <Link to={`/experiences/${_id}`}>
        <button className="btn">Find out more</button>
      </Link>
    </div>
  </div>
)

export default ExpCard
