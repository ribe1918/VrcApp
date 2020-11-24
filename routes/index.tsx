import React                                      from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import App                                        from '../src/App'
import Auth                                      from '../src/auth/Index'

const RootRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'  component={ App } />
        <Route exact path='/auth'  component={ Auth } />
        <Redirect path='*' to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default RootRoute
