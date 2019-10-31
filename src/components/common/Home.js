import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      city: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ city: e.target.value })
  }

  render() {
    const city = this.state.city
    return (
      <>        
        <div className="cityPicker">
          <h4>PICK A CITY</h4>
          <br/>
          <form>
            <select onChange={this.handleChange}>
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
          </form>
          <br/>
          <Link to={{ pathname: '/unicorns', state: { from: city } }}>
            <button className="btn buttonColors">FIND MY UNICORN</button>
          </Link>
          <br/>
          <br/>
          <h4>OR</h4>
          <Link to="/cities">
            <button className="btn buttonColors">BROWSE ALL CITIES</button>
          </Link>
        </div>
        <h1 className="homeTitle">FIND 
        YOUR 
        LOCAL 🦄</h1>
      </>
    )
  }
}

export default Home