import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'spectre.css'
import './style.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'

import LoginTraveller from './components/auth/LoginTraveller'
import RegisterTraveller from './components/auth/RegisterTraveller'
import TravellerShow from './components/travellers/TravellerShow'
import TravellerEdit from './components/travellers/TravellerEdit'
import TravellerIndex from './components/travellers/TravellerIndex'

import CitiesIndex from './components/cities/CitiesIndex'
import CitiesShow from './components/cities/CitiesShow'

import ExpIndex from './components/experiences/ExpIndex'
import ExpShow from './components/experiences/ExpShow'

import UnicornIndex from './components/unicorns/UnicornIndex'
import UnicornShow from './components/unicorns/UnicornShow'

import SecureRoute from './components/common/SecureRoute'

const App = () => (
  <>
  
    <BrowserRouter>
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>

          
          <SecureRoute path="/travellerprofile/:id/edit" component={TravellerEdit} />
          <Route path="/travellerprofile" component={TravellerShow}/>
          <Route path="/travellers" component={TravellerIndex}/>
          <Route path="/registertraveller" component={RegisterTraveller}/>
          <Route path="/logintraveller" component={LoginTraveller}/>

          <Route path="/cities/:id" component={CitiesShow}/>
          <Route exact path="/cities" component={CitiesIndex}/>

          <Route path="/experiences/:id" component={ExpShow}/>
          <Route exact path="/experiences" component={ExpIndex}/>

          <Route path="/unicorns/:id" component={UnicornShow}/>
          <Route exact path="/unicorns" component={UnicornIndex}/>
        </Switch>
      </>
  
    </BrowserRouter>
  </>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)