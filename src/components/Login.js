import React, { Component } from 'react'
import AuthService from './AuthService'

class Login extends Component {
  constructor () {
    super()

    this.Auth = new AuthService()
    /* bnd */
    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentWillMount () {
    if (this.Auth.loggedIn()) {
      this.props.history.replace('/')
    }
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFormSubmit (e) {
    e.preventDefault()

    this.Auth.login(this.state.email, this.state.password).then(res => {
      this.props.history.replace('/')
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input placeholder='E-mail' name='email' type='text' onChange={this.handleChange} /> <br />
          <input placeholder='Senha' name='password' type='password' onChange={this.handleChange} /> <br />
          <input value='Entrar' type='submit' /> <br />
        </form>
      </div>
    )
  }
}

export default Login
