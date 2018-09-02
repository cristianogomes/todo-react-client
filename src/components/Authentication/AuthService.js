import decode from 'jwt-decode'

class AuthService {
  constructor (domain) {
    this.domain = domain || 'http://127.0.0.1:3000'

    this.login = this.login.bind(this)
    this.getProfile = this.getProfile.bind(this)
    this.fetch = this.fetch.bind(this)
  }

  login (email, password) {
    return this.fetch(`${this.domain}/login`, {
      method: 'POST',
      body: JSON.stringify({
        email, password
      })
    }).then(res => {
      this.setToken(res.token)
      return Promise.resolve(res)
    })
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

  fetch (url, options) {
    // performs api calls sending the required authentication headers
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    // Setting Authorization header
    // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken()
    }

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json())
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

const authService = new AuthService('http://127.0.0.1:3000')
export default authService
