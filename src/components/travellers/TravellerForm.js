import React from 'react'

const TravellerForm = ({ data, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label>Name</label>
      <div>
        <input 
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
        <imput 
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
        <imput 
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
        <imput 
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
        <imput 
          placeholder="Number of Experiences"
          name="experiences"
          onChange={handleChange}
          value={data.experiences}
        />
      </div>
    </div>

    <div>
      <label>Email</label>
      <div>
        <imput 
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={data.email}
        />
      </div>
    </div>
    <button type="submit">Submit</button>
  </form>
)

export default TravellerForm

