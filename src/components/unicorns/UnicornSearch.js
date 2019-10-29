import React from 'react'

const UnicornSearch = ({ handleCity, handleGender, handleLanguage }) => {
  return (
    <form className="unicorn-search-wrapper" >
      <div>
        <h2>City</h2>
        <select onChange={handleCity}>
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