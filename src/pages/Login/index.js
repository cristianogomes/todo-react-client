import React, { Component } from 'react'
import TaskApi from '../../services/TaskApi'
import AuthService from '../../components/Authentication/AuthService'

class Login extends Component {
  constructor () {
    super()

    /* bnd */
    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  async login (email, password) {
    const response = await TaskApi.login({email, password})
    if (response && response.status === 200) {
      AuthService.setToken(response.data.token)
    }

    return response
  }

  componentWillMount () {
    if (AuthService.loggedIn()) {
      this.props.history.replace('/')
    }
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async handleFormSubmit (e) {
    e.preventDefault()

    const retorno = await this.login(this.state.email, this.state.password)

    if (retorno && retorno.status === 200) {
      this.props.history.replace('/')
    }
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
