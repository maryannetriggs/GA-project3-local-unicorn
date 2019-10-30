import React from 'react'

const ExpForm = ({ expFormData, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>

    <h3>Experience Name</h3>
    <input
      name="name"
      value={expFormData.name}
      onChange={handleChange}
    />

    <h3>Experience Image</h3>
    <input
      name="image"
      value={expFormData.image}
      onChange={handleChange}
    />

    <h3>Experience Description</h3>
    <textarea
      name="description"
      value={expFormData.description}
      onChange={handleChange}
    />

    <h3>Experience Intensity</h3>
    <select name="intensity" onChange={handleChange} value={expFormData.intensity}>
      <option value=""disabled>Intensity</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>

    <h3>Expereience Price</h3>
    <input
      name="price"
      value={expFormData.price}
      onChange={handleChange}
    />

    <h3>Experience Category</h3>
    <select name="category" onChange={handleChange} value={expFormData.category}>
      <option value=""disabled>Category</option>
      <option value="Sport">Sport</option>
      <option value="food">Food</option>
      <option value="drink">Drink</option>
      <option value="culture">Culture</option>
      <option value="outdoors">Outdoors</option>
      <option value="music">Music</option>
      <option value="social">Social</option>
    </select>

    <h3>Experience Availability</h3>
    <select name="category" onChange={handleChange} value={expFormData.availability}>
      <option value=""disabled>Availability</option>
      <option value="monday">Monday</option>
      <option value="tuesday">Tuesday</option>
      <option value="wednesday">Wednesday</option>
      <option value="thursday">Thursday</option>
      <option value="friday">Friday</option>
      <option value="saturday">Saturday</option>
      <option value="sunday">Sunday</option>
    </select>

    <h3>Experience Time</h3>
    <select name="category" onChange={handleChange} value={expFormData.time}>
      <option value=""disabled>Time</option>
      <option value="morning">Morning</option>
      <option value="afternoon">Afternoon</option>
      <option value="evening">Evening</option>
      <option value="allday">All-Day</option>
    </select>

    <br/>
    <br/>
    <button>Edit!</button>
  </form>
)

export default ExpForm