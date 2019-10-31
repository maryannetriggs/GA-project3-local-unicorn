import React from 'react'

const TravellerForm = ({ data, handleChange, handleSubmit, errors }) => (
  <form className="form-horisontal" onSubmit={handleSubmit}>
    <div className="formBackground">
      <div>
        <label>Name</label>
        <div>
          <input 

            className={`form-input ${errors.name ? 'is-error' : ''}`}
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={data.name}
          />
          <p className="form-input-hint">{`${errors.name ? 'This area is required is required' : ''}`}</p>

        </div>
      </div>

      <div>
        <label>Profile Picture</label>
        <div>
          <input 
            className={`form-input ${errors.profilePicture ? 'is-error' : ''}`}
            placeholder="Profile Picture"
            name="profilePicture"
            onChange={handleChange}
            value={data.profilePicture}
          />
          <p className="form-input-hint">{`${errors.profilePicture ? 'An image URL is required' : ''}`}</p>

        </div>
      </div>

      <div>
        <label>About</label>
        <div>
          <textarea 
            
            className={`form-input ${errors.about ? 'is-error' : ''}`}
            placeholder="About"
            name="about"
            onChange={handleChange}
            value={data.about}
          />
          <p className="form-input-hint">{`${errors.about ? 'This section is required' : ''}`}</p>

        </div>
      </div>

      <div>
        <label>Country</label>
        <div>
          <input
            className={`form-input ${errors.country ? 'is-error' : ''}`} 
            placeholder="Country"
            name="country"
            onChange={handleChange}
            value={data.country}
          />
          <p className="form-input-hint">{`${errors.country ? 'This section is required' : ''}`}</p>

        </div>
      </div>

      <div>
        <label>Expreriences</label>
        <div>
          <input 
            className={`form-input ${errors.experiences ? 'is-error' : ''}`}
            placeholder="Number of experiences booked"
            name="experiences"
            onChange={handleChange}
            value={data.experiences}
          />
          <p className="form-input-hint">{`${errors.experiences ? 'This section is required' : ''}`}</p>

        </div>
      </div>

      <button type="submit" className="btn btn-success">SUBMIT</button>
    </div>
  </form>
)

export default TravellerForm

