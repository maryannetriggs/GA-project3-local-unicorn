import React from 'react'

const UnicornForm = ({ data, handleChange, handleSubmit }) => (
  <section>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <h2>Update my profile</h2>
        <div className="field">
          <label className="label">Full name</label>
          <div className="control">
            <input 
              className="input"
              name="name"
              placeholder="Full name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Profile picture (url)</label>
          <div className="control">
            <input 
              className="input"
              name="profilePicture"
              placeholder="My profile picture"
              value={data.profilePicture}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">About me</label>
          <div className="control">
            <textarea 
              className="textarea"
              name="about"
              placeholder="About me"
              value={data.about}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">City</label>
          <div className="select">
            <select name="city" onChange={handleChange} value={data.city}>
              <option value="" disabled>Select your city</option>
              <option value="All">All</option>
              <option value="La Paz">La Paz</option>
              <option value="London">London</option>
              <option value="Madrid">Madrid</option>
              <option value="Mexico City">Mexico City</option>
              <option value="Marrakesh">Marrakesh</option>
              <option value="Moscow">Moscow</option>
              <option value="New York">New York</option>
              <option value="Paris">Paris</option>
              <option value="Shanghai">Shanghai</option>
              <option value="Singapore">Singapore</option>
              <option value="Stockholm">Stockholm</option>
              <option value="Tehran">Tehran</option>
              <option value="Tokyo">Tokyo</option>
              <option value="Wellington">Wellington</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">Languages spoken</label>
          <div className="control">
            <input 
              className="input"
              name="language"
              placeholder="I speak the following languages..."
              value={data.language}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Age</label>
          <div className="control">
            <input
              className="input"
              name="age"
              number="number"
              placeholder="My age"
              value={data.age}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Gender</label>
          <div className="select">
            <select name="gender" onChange={handleChange} value={data.gender}>
              <option value="" disabled>Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
            </select>
          </div>
        </div>   
        <br/>
        <button className="btn btn-success">UPDATE MY PROFILE</button>
      </div>
    </form>
  </section>
)

export default UnicornForm

