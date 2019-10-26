import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import 'spectre'
import './style.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'

import LoginTraveller from './components/auth/LoginTraveller'
import RegisterTraveller from './components/auth/RegisterTraveller'

import CitiesIndex from './components/cities/CitiesIndex'
import CitiesShow from './components/cities/CitiesShow'

const App = () => (
  <>
  
    <BrowserRouter>
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={LoginTraveller}/>
          <Route path="/register" component={RegisterTraveller}/>
          <Route path="/cities/:id" component={CitiesShow}/>
          <Route exact path="/cities" component={CitiesIndex}/>
        </Switch>
      </>
  
    </BrowserRouter>
  </>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)