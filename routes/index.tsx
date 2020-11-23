import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import App from '../src/App'

const RootRoute: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ App } />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
)

export default RootRoute