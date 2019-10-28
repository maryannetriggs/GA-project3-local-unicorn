import React from 'react'

const UnicornSearch = ({ handleRegion, handleGender, handleLanguage }) => {
  return (
    <form className="unicorn-search-wrapper" >
      <div>
        <h2>Region</h2>
        <select onChange={handleRegion}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Caribbean">Caribbean</option>
          <option value="Central America">Central America</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>
      </div>

      <div>
        <h2>Gender</h2>
        <select onChange={handleGender}>
          <option value="All">All</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
      </div>

      <div>
        <h2>Language</h2>
        <select onChange={handleLanguage}>
          <option value="All">All</option>
          <option value="Arabic">Arabic</option>
          <option value="Dutch">Dutch</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Greek">Greek</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Mandarin">Mandarin</option>
          <option value="Maya">Maya</option>
          <option value="Persian">Persian</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Russian">Russian</option>
          <option value="Spanish">Spanish</option>
          <option value="Swedish">Swedish</option>
          <option value="Tamil">Tamil</option>
          <option value="Urdu">Urdu</option>
        </select>
      </div>
      
    </form>
  ) 
}

export default UnicornSearch