import React from 'react'

const TravellerForm = ({ data, handleChange, handleSubmit, errors }) => (
  <section className="registerTraveller">

    <div className="regForm form-group">
      <h2 className="register">Traveller - Edit</h2>

      <form className="centre form-horisontal" onSubmit={handleSubmit}>
        <div className="formBackgroundReg form-group"> 
          <label>Name</label>
          <input 
            className={`form-input col-12 ${errors.name ? 'is-error' : ''}`}
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={data.name}
          />
          <p className="form-input-hint">{`${errors.name ? 'This area is required is required' : ''}`}</p>
         
          <label>Profile Picture</label> 
          <input 
            className={`form-input col-12${errors.profilePicture ? 'is-error' : ''}`}
            placeholder="Profile Picture"
            name="profilePicture"
            onChange={handleChange}
            value={data.profilePicture}
          />
          <p className="form-input-hint">{`${errors.profilePicture ? 'An image URL is required' : ''}`}</p>

          <label>About</label>
          <textarea 
            className={`form-input col-12 ${errors.about ? 'is-error' : ''}`}
            placeholder="About"
            name="about"
            onChange={handleChange}
            value={data.about}
          />
          <p className="form-input-hint">{`${errors.about ? 'This section is required' : ''}`}</p>

          <label>Country</label>  
          <input
            className={`form-input col-12 ${errors.country ? 'is-error' : ''}`} 
            placeholder="Country"
            name="country"
            onChange={handleChange}
            value={data.country}
          />
          <p className="form-input-hint">{`${errors.country ? 'This section is required' : ''}`}</p>
        
          <label>Expreriences</label>
          <input 
            className={`form-input col-12 ${errors.experiences ? 'is-error' : ''}`}
            placeholder="Number of experiences booked"
            name="experiences"
            onChange={handleChange}
            value={data.experiences}
          />
          <p className="form-input-hint">{`${errors.experiences ? 'This section is required' : ''}`}</p>

          <button type="submit" className="btn btn-success">SUBMIT</button>
        </div>
      </form>
    </div>
  </section>
)

export default TravellerForm

