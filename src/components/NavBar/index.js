import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import AuthService from '../Authentication/AuthService'
import withAuth from '../Authentication/withAuth'

import './nav-bar.css'

class NavBar extends Component {
  handleLogout () {
    AuthService.logout()
    this.props.history.replace('/login')
  }

  render () {
    return (
      <nav className='nav-bar'>
        <a className='title' href='/'>ToDo Client</a>

        <ul className='menu'>
          <li className='item'>
            <a className='link' href='/'>Bem-vindo {this.props.user.name}</a>
          </li>
          <li className='item'>
            <a className='link' href='/login' onClick={this.handleLogout.bind(this)}>Logout</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(withAuth(NavBar))
