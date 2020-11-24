
import React from 'react'
import { RouteComponentProps, Redirect } from "react-router-dom"


class LoginComponent extends React.Component<RouteComponentProps> {
  constructor(props: RouteComponentProps) {
    super(props)

  }
  render() {
    return (
      <div>
        Login
      </div>
    )
  }
}


export default LoginComponent