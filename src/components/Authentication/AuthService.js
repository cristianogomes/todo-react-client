import decode from 'jwt-decode'

class AuthService {
  constructor () {
    this.getProfile = this.getProfile.bind(this)
  }

  loggedIn () {
    const token = this.getToken()
    return !!token && !this.isTokenExpired(token)
  }

  isTokenExpired (token) {
    try {
      const decoded = decode(token)
      if (decoded.exp < Date.now() / 1000) {
        return true
      }

      return false
    } catch (err) {
      console.log(err)
      return false
    }
  }

  setToken (token) {
    localStorage.setItem('id_token', token)
  }

  getToken () {
    return localStorage.getItem('id_token')
  }

  logout () {
    localStorage.removeItem('id_token')
  }

  getProfile () {
    return decode(this.getToken())
  }

  _checkStatus (response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      const error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }
}

const authService = new AuthService()
export default authService
