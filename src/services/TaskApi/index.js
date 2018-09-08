import axios from 'axios'
import AuthService from '../../components/Authentication/AuthService'

const api = axios.create({
  baseURL: 'api/'
})

const config = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

if (AuthService.loggedIn()) {
  config.headers['Authorization'] = 'Bearer ' + AuthService.getToken()
}

const login = async (user, headers) => {
  try {
    return await api.post('login', user, headers)
  } catch (error) {
    return error.response
  }
}

const findAll = () => {
  return api.get('task', config)
}

const createTask = (task) => {
  return api.post('task', task, config)
}

const apis = {
  login,
  createTask,
  findAll
}

export default apis
