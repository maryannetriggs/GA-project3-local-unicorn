import React from 'react'
import { Link } from 'react-router-dom'

const ExpCard = ({ name, image, description, category, intensity, price, availability, time, _id }) => (
  <div>
    <Link to={`/experiences/${_id}`}>
      <div>
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <h3>{description}</h3>
        <h3>{category}</h3>
        <h3>{intensity}</h3>
        <h3>{price}</h3>
        <h3>{availability}</h3>
        <h3>{time}</h3>
      </div>
    </Link>
  </div>
)

export default ExpCard