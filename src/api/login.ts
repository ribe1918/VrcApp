import Axios, { AxiosRequestConfig } from 'axios'

const apiKey = 'JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26'

const login = (userid: string, password: string) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/api/1/auth/user',
    params: {
      apiKey: apiKey
    },
    auth: {
      username: userid,
      password: password
    },
  }

  return Axios(config)
}

export default login