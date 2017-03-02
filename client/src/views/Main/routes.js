import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import AuthService from '../../utils/AuthService'
import Container from './Container'
import Home from './Home/Home'
import Login from './Login/Login'

const auth = new AuthService('bD1Z5cpTb1g1umwFhSO2bcGUPd6FfzT4', 'twitteranalysis.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/home' })
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/home" />
      <Route path="home" component={Home} />
      <Route path="login" component={Login} />
    </Route>
  )
}

export default makeMainRoutes