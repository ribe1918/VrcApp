import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Auth from './auth'
import NotFound from '../Error/NotFound'
import LoginForm from '../auth/Login'

const RootRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={LoginForm} />
        <Route path='/auth' component={Auth}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default RootRoute
