import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Auth from './auth'
import NotFound from '../Error/NotFound'

const RootRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/auth' component={Auth}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default RootRoute
