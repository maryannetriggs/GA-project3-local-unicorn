import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedcomponents = makeAnimated()

const ExpForm = ({ expFormData, handleChange, handleSubmit, handleMultiSelectAvailability, handleMultiSelectTime, handleMultiSelectCategory,errors }) => (
  <section className="registerTraveller">

    <div className="regForm form-group">
      <h2 className="centre">{expFormData.name}<span className="logo">🦄</span></h2>

      <form onSubmit={handleSubmit}>
        <div className="formBackgroundReg form-group">
          <label>Experience Name</label>
          <input
            className={`form-input col-12 ${errors.name ? 'is-error' : ''}`}
            name="name"
            value={expFormData.name}
            onChange={handleChange}
          />
          <p className="form-input-hint">{`${errors.name ? 'A name is required' : ''}`}</p>

          <label>Experience Image</label>
          <input
            className={`form-input col-12 ${errors.image ? 'is-error' : ''}`}
            name="image"
            value={expFormData.image}
            onChange={handleChange}
          />
          <p className="form-input-hint">{`${errors.image ? 'An image URL is required' : ''}`}</p>

          <label>Experience Description</label>
          <textarea
            className={`form-input col-12 ${errors.description ? 'is-error' : ''}`}
            rows="4"
            name="description"
            value={expFormData.description}
            onChange={handleChange}
          />
          <p className="form-input-hint">{`${errors.description ? 'A description is required' : ''}`}</p>

          <label>Experience Intensity</label>
          <select 
            className="form-input col-12"
            onChange={handleChange} 
            value={expFormData.intensity}
            name="intensity"
          >
            <option value="">Select</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <p className="form-input-hint">{`${errors.intensity ? 'Select an option.' : ''}`}</p>

          <div className="field">
            <label>Experience Price</label>
            <div className="control">
              <input
                className={`form-input col-12 ${errors.price ? 'is-error' : ''}`}
                name="price"
                number="number"
                value={expFormData.price}
                onChange={handleChange}
              />
              <p className="form-input-hint">{`${errors.price ? 'Please, enter a number.' : ''}`}</p>
            </div>
          </div>
          <label>Experience Availability</label>
          <Select
            className={`${errors.price ? 'is-error' : ''}`}
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
          <p className="form-input-hint">{`${errors.availability ? 'Select an availibility.' : ''}`}</p>

          <label>Experience Time</label>
          <Select
            className={`${errors.price ? 'is-error' : ''}`}
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
          <p className="form-input-hint">{`${errors.time ? 'Select a time.' : ''}`}</p>

          <label>Experience Category</label>
          <Select
            className={`${errors.price ? 'is-error' : ''}`}
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
          <p className="form-input-hint">{`${errors.category ? 'Select a categoty' : ''}`}</p>

          <br/>
          <div className="centre">
            <button className="btn btn-success">Add!</button>
          </div>
        </div>
      </form>
    </div>
  </section>
)

export default ExpForm