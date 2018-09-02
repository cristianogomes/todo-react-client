import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import App from './App'
import Login from './pages/Login'
import TestePage from './pages/TestePage'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/teste' component={TestePage} />
      <Route exact path='/login' component={Login} />
    </div>
  </Router>,
  document.getElementById('root'))
registerServiceWorker()
