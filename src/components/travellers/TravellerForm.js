import React from 'react'

const TravellerForm = ({ data, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
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

    <div>
      <label>Email</label>
      <div>
        <input 
          className="form-input"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={data.email}
        />
      </div>
    </div>

    <button type="submit" className="btn btn-success">SUBMIT</button>
  </form>
)

export default TravellerForm

