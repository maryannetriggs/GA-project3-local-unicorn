import React from 'react'

const UnicornSearch = ({ handleGender, handleLanguage }) => {
  return (
    <form className="unicornSearchWrapper" >

      <div>
        <h3 className="dropdownTitle ourGrey">Gender</h3>
        <select className="dropFilter" onChange={handleGender}>
          <option value="All">All</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
      </div>
      <div className="marginAll">
        <h3 className="dropdownTitle ourGrey">Language</h3>
        <select className="dropFilter" onChange={handleLanguage}>
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