import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import AuthRouter from '../../routes/auth'

const style: React.CSSProperties = {
  textDecoration: 'none',
  color: '#000',
}

class AuthPage extends React.Component {

  render () {
    return (
      <div>
        <AuthRouter/>
      </div>
    )
  }
}

export default AuthPage