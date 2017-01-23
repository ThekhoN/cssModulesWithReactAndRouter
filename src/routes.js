import React from 'react'
import {Route, Redirect} from 'react-router'
import Main from './templates/Main'
import Home from './templates/Home'
import About from './templates/About'

module.exports = <Route component={Main}>
  <Route path='/' component={Home}/>
  <Route path='/about' component={About}/>
</Route>
