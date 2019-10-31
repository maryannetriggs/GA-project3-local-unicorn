import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'spectre.css'
import './style.scss'

// COMMON:
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import SecureRoute from './components/common/SecureRoute'
import BookingPage from './components/common/BookingPage'
import BookingRequestSent from './components/common/BookingRequestSent'

// REGISTER:
import RegisterTraveller from './components/auth/RegisterTraveller'
import RegisterUnicorn from './components/auth/RegisterUnicorn'

// LOGIN:
import LoginTraveller from './components/auth/LoginTraveller'
import LoginUnicorn from './components/auth/LoginUnicorn'
import LoginAdmin from './components/auth/LoginAdmin'

// TRAVELLER PROFILE:
import TravellerEdit from './components/travellers/TravellerEdit'
import TravellerShow from './components/travellers/TravellerShow'

// UNICORN PROFILE:
import UnicornEdit from './components/unicorns/UnicornEdit'
import UnicornProfile from './components/unicorns/UnicornProfile'

// CITIES:
import CitiesShow from './components/cities/CitiesShow'
import CitiesIndex from './components/cities/CitiesIndex'


// UNICORN SHOW:
import UnicornShow from './components/unicorns/UnicornShow'
import UnicornIndex from './components/unicorns/UnicornIndex'

// EXPERIENCES:
import ExpShow from './components/experiences/ExpShow'
import ExpIndex from './components/experiences/ExpIndex'
import ExpEdit from './components/experiences/ExpEdit'
import ExpNew from './components/experiences/ExpNew'

// TRAVELLER INDEX (HIDDEN APART FROM ADMIN)
import TravellerIndex from './components/travellers/TravellerIndex'



const App = () => (
  <>
  
    <BrowserRouter>
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/book" component={BookingPage}/>
          <Route path="/bookingrequest" component={BookingRequestSent}/>

          <Route path="/registerunicorn" component={RegisterUnicorn}/>
          <Route path="/registertraveller" component={RegisterTraveller}/>

          <Route path="/loginunicorn" component={LoginUnicorn}/>
          <Route path="/logintraveller" component={LoginTraveller}/>
          <Route path="/loginadmin" component={LoginAdmin}/>

          <SecureRoute path="/traveller/edit" component={TravellerEdit} />
          <SecureRoute path="/traveller" component={TravellerShow}/>

          <SecureRoute path="/unicorn/edit" component={UnicornEdit} />
          <SecureRoute path="/unicorn" component={UnicornProfile}/> 

          <Route path="/cities/:id" component={CitiesShow}/>
          <Route path="/cities" component={CitiesIndex}/>
          
          <Route path="/unicorns/:id" component={UnicornShow}/>
          <Route path="/unicorns" component={UnicornIndex}/>

          <SecureRoute path="/experiences/:id/edit" component={ExpEdit}/>
          <SecureRoute path="/experiences/new" component={ExpNew}/>
          <Route path="/experiences/:id" component={ExpShow}/>
          <SecureRoute path="/experiences" component={ExpIndex}/>


          <SecureRoute path="/travellers" component={TravellerIndex}/>

        </Switch>
      </>
  
    </BrowserRouter>
  </>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)