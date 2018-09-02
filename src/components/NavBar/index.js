import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import AuthService from '../Authentication/AuthService'
import withAuth from '../Authentication/withAuth'

class NavBar extends Component {
  handleLogout () {
    AuthService.logout()
    this.props.history.replace('/login')
  }

  render () {
    return (
      <div>
        <h1 className='App-title'>Welcome {this.props.user.name}</h1>
        <button type='button' onClick={this.handleLogout.bind(this)}>Logout</button>
      </div>
    )
  }
}

export default withRouter(withAuth(NavBar))
