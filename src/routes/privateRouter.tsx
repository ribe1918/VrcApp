import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import cookies from 'react-cookies'

type PrivateRouteProps = {
  component: React.FC,
  path: string,
  exact: boolean,
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {


  const condition = cookies.load('auth') ?? false

  return condition ? (<Route path={props.path} exact={props.exact} component={props.component}/>) :
    (<Redirect to="/auth/login"/>)
}

export default PrivateRoute