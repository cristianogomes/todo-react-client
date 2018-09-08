import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import Home from './pages/Home'
import Login from './pages/Login'

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
    </React.Fragment>
  </Router>,
  document.getElementById('root'))
registerServiceWorker()
