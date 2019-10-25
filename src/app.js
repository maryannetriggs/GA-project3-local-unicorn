import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import 'spectre'
// import './styles/style.scss'

import Home from './components/common/Home'
// import Navbar from './components/common/Navbar'

import Login from './components/auth/Login'

import CitiesIndex from './components/cities/CitiesIndex'

const App = () => (
  <BrowserRouter>
    
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route exact path="/cities" component={CitiesIndex}/>
      </Switch>
    </>
  
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)