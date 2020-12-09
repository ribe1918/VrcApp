import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Auth from './auth'
import NotFound from '../view/Error/NotFound'
import PrivateRoute from './privateRouter'
import CurrentUser from '../view/user/CurrentUser'

const RootRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/*<PrivateRoute component={CurrentUser} path='/' exact />*/}
        <Route component={CurrentUser} path='/' exact />
        <Route path='/auth' component={Auth}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default RootRoute
