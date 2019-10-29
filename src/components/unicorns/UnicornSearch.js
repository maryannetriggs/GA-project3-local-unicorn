import React from 'react'
import { Link } from 'react-router-dom'

const UnicornSearch = ({ handleGender, handleLanguage }) => {
  return (
    <form className="unicorn-search-wrapper" >

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

      <div>
        <Link to="/cities">
          <button>PICK A DIFFERENT CITY</button>
        </Link>
      </div>
      
    </form>
  ) 
}

export default UnicornSearch