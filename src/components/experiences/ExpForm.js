import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedcomponents = makeAnimated()

const ExpForm = ({ expFormData, handleChange, handleSubmit, handleMultiSelectAvailability, handleMultiSelectTime, handleMultiSelectCategory }) => (
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
      <option value="">Select</option>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>

    <h3>Experience Price</h3>
    <input
      name="price"
      value={expFormData.price}
      onChange={handleChange}
    />

    <h3>Experience Availability</h3>
    <Select
      name="availability"
      options={[
        { value: 'Monday', label: 'Monday' },
        { value: 'Tuesday', label: 'Tuesday' },
        { value: 'Wednesday', label: 'Wednesday' },
        { value: 'Thursday', label: 'Thursday' },
        { value: 'Friday', label: 'Friday' },
        { value: 'Saturday', label: 'Saturday' },
        { value: 'Sunday', label: 'Sunday' }
      ]}
      isMulti
      onChange={handleMultiSelectAvailability}
      components={animatedcomponents}
    />

    <h3>Experience Time</h3>
    <Select
      name="time"
      options={[
        { value: 'Morning', label: 'Morning' },
        { value: 'Afternoon', label: 'Afternoon' },
        { value: 'Evening', label: 'Evening' },
        { value: 'All-Day', label: 'All-Day' }
      ]}
      isMulti
      onChange={handleMultiSelectTime}
      components={animatedcomponents}
    />

    <h3>Experience Category</h3>
    <Select
      name="time"
      options={[
        { value: 'Sport', label: 'Sport' },
        { value: 'Food', label: 'Food' },
        { value: 'Drink', label: 'Drink' },
        { value: 'Culture', label: 'Culture' },
        { value: 'Outdoors', label: 'Outdoors' },
        { value: 'Music', label: 'Music' },
        { value: 'Social', label: 'Social' }
      ]}
      isMulti
      onChange={handleMultiSelectCategory}
      components={animatedcomponents}
    />

    <br/>
    <br/>
    <button>Edit!</button>
  </form>
)

export default ExpForm