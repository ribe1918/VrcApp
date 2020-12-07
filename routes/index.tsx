import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Auth from '../src/auth/Index'
import NotFound from '../src/Error/NotFound'

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
