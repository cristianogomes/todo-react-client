import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import AuthService from '../../services/Authentication/AuthService'
import withAuth from '../../services/Authentication/withAuth'

class NavBar extends Component {
  handleLogout () {
    AuthService.logout()
    this.props.history.replace('/login')
  }

  render () {
    return (
      <nav>
        <a href='/'>ToDo Client</a>

        <ul>
          <li>
            <a href='/'>Bem-vindo {this.props.user.name}</a>
          </li>
          <li>
            <a href='/login' onClick={this.handleLogout.bind(this)}>Logout</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(withAuth(NavBar))
