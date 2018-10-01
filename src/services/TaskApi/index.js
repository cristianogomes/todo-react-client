import axios from 'axios'
import AuthService from '../../services/Authentication/AuthService'

const api = axios.create({
  baseURL: 'api/'
})

const login = async (user, headers) => {
  try {
    const resp = await api.post('login', user, AuthService.getAuthorizationHeaders())

    return resp
  } catch (error) {
    return error.response
  }
}

const findAll = () => {
  return api.get('task', AuthService.getAuthorizationHeaders())
}

const createTask = (task) => {
  return api.post('task', task, AuthService.getAuthorizationHeaders())
}

const apis = {
  login,
  createTask,
  findAll
}

export default apis
