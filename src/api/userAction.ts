import Axios, { AxiosRequestConfig, Method } from 'axios'

const apiKey = 'JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26'

export function login (username: string, password: string) {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/api/1/auth/user',
    params: {
      apiKey: apiKey
    },
    auth: {
      username: username,
      password: password
    },
  }

  return Axios(config)
}

export function logout () {
  request('PUT', '/api/1/logout')
}

export function userInfo () {
  return request('GET', '/api/1/auth/user')
}

const request = (method: Method, url: string) => {
  const config: AxiosRequestConfig = {
    method: method,
    url: url,
    params: {
      apiKey: apiKey
    },
  }

  return Axios(config)
}