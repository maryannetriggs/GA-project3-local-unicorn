import React from 'react'


const UnicornForm = ({ cities, data, handleChange, handleSubmit, errors }) => (
  <section className="registerTraveller">

    <div className="regForm form-group">
      <h2 className="register centre">Update my profile<span className="logo">🦄</span></h2>

      <form onSubmit={handleSubmit}>
        <div className="formBackgroundReg form-group">
          <label>Full name</label>
          <input 
            className={`form-input col-12 ${errors.name ? 'is-error' : ''}`}
            name="name"
            placeholder="Full name"
            value={data.name}
            onChange={handleChange}
          />
          <p className="form-input-hint">{`${errors.name ? 'A name is required.' : ''}`}</p>

          <label>Profile picture (url)</label> 
          <input 
            className={`form-input col-12 ${errors.profilePicture ? 'is-error' : ''}`}
            name="profilePicture"
            placeholder="My profile picture"
            value={data.profilePicture}
            onChange={handleChange}
          />
          <p className="form-input-hint">{`${errors.profilePicture ? 'A name is required.' : ''}`}</p>
          
          <label>About me</label> 
          <textarea 
            className={`form-input col-12 ${errors.about ? 'is-error' : ''}`}
            rows="4"
            name="about"
            placeholder="About me"
            value={data.about}
            onChange={handleChange}
          />
          <p className="form-input-hint">{`${errors.about ? 'A name is required.' : ''}`}</p>
           
          <label>City</label>
          <div className="bottomSpace">
            <select 
              className="form-select col-12"
              name="city" 
              onChange={handleChange} 
              value={data.city}>
              <option value="" disabled>Select your city</option>
              {cities.map(city => <option key={city._id} value={city._id}>{city.name}</option>)}
            </select>
          </div>
          
          <label>Languages spoken (select from dropdown or add new)</label> 
          <div  className="bottomSpace">
            <select 
              className="form-input col-12"
              name="language"
              value={data.language}
              onChange={handleChange}
            />
          </div>
          <div className="bottomSpace">
            <label>Age</label>
            <input
              className={`form-input col-12 ${errors.age ? 'is-error' : ''}`}
              name="age"
              number="number"
              placeholder="My age"
              value={data.age}
              onChange={handleChange}
            />
            <p className="form-input-hint">{`${errors.age ? 'Enter a number.' : ''}`}</p>
          </div>
        
          <div className="field">
            <label>Gender</label>
            <div className="select">
              <select 
                className="form-input col-"
                name="gender" 
                onChange={handleChange} 
                value={data.gender}>
                <option value="" disabled>Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
              </select>
            </div>
          </div>   
          <br/>
          <button className="btn btn-primary">UPDATE MY PROFILE</button>
          
        </div>
      </form>
    </div>
  </section>
)

export default UnicornForm

