import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      city: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.keyPress = this.keyPress.bind(this)
  }

  handleChange(e) {
    this.setState({ city: e.target.value })
    return this.handleClick()
  }

  keyPress(e){
    if (e.keyCode === 13) return this.handleClick()
  }

  handleClick() {
    if (!this.state.city) return null
  }

  render() {
    const city = this.state.city
    console.log(city)
    return (
      <>        
        <div className="cityPicker">
          {/* <h4>PICK A CITY</h4> */}
          <br/>
          <form className="centre">
            <select className="dropHome" onChange={this.handleChange}>
              <option value="" disabled selected>Pick a City</option>
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
            <br/>
            <br/>
            
            <Link className="btn btn-lg centre" disabled={!city} to={{ pathname: '/unicorns', state: { from: city } }}>
              FIND MY UNICORN!
            </Link>
          </form>
          
          <br/>
          <br/>
          <p className="centre italic">Dont know where to go?</p>
          <Link className="btn btn-lg btn-link centre" to={{ pathname: '/cities' }}>
            BROWSE ALL CITIES
          </Link>
        </div>
        <h1 className="homeTitle">FIND</h1> 
        <h1 className="homeTitle">YOUR</h1>
        <h1 className="homeTitle">LOCAL 🦄</h1>
      </>
    )
  }
}

export default Home