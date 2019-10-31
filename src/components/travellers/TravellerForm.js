import React from 'react'

const TravellerForm = ({ data, handleChange, handleSubmit }) => (
  <form className="form-horisontal" onSubmit={handleSubmit}>
    <div className="formBackground">
      <div>
        <label>Name</label>
        <div>
          <input 
            className="form-input"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={data.name}
            
          />
        </div>
      </div>

      <div>
        <label>Profile Picture</label>
        <div>
          <input 
            className="form-input"
            placeholder="Profile Picture"
            name="profilePicture"
            onChange={handleChange}
            value={data.profilePicture}
          />
        </div>
      </div>

      <div>
        <label>About</label>
        <div>
          <textarea 
            className="form-input"
            placeholder="About"
            name="about"
            onChange={handleChange}
            value={data.about}
          />
        </div>
      </div>

      <div>
        <label>Country</label>
        <div>
          <input
            className="form-input" 
            placeholder="Country"
            name="country"
            onChange={handleChange}
            value={data.country}
          />
        </div>
      </div>

      <div>
        <label>Expreriences</label>
        <div>
          <input 
            className="form-input"
            placeholder="Number of experiences booked"
            name="experiences"
            onChange={handleChange}
            value={data.experiences}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-success">SUBMIT</button>
    </div>
  </form>
)

export default TravellerForm

