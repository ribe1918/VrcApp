import React                                                        from 'react'
import { Switch, RouteComponentProps, Route, Redirect, withRouter } from 'react-router-dom'
import Login                                                        from '../../auth/Login'

const AuthRouter: React.FC<RouteComponentProps> = props => {
  const { match } = props

  return (
    <Switch>
      <Route path={`${match.url}/login`} exact component={Login} />
      <Route path={`${match.url}/`} exact component={() => <div>test</div>} />
    </Switch>
  )
}

export default withRouter(AuthRouter)