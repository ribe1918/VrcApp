import React from 'react'
import Axios, { AxiosRequestConfig } from 'axios'

const apiKey = 'JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26'

const LoginFunction = async (userid: string, password: string) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://api.vrchat.cloud/api/1/auth/user',
    params: {
      apiKey: apiKey
    },
    auth: {
      username: userid,
      password: password
    },
  }

  return (
    <div>
      {/*{await Axios(config)}*/}
      asd
    </div>
  )
}

export default LoginFunction