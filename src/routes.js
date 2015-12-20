import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'

import Home from 'pages/Home'
import Browse from 'pages/Browse'
import Repo from 'pages/Repo'
import Fail from 'pages/Fail'

export default (
  <Route path='/' component={App}>
    <Route path='browse' component={Browse} />
    <Route path='fail' component={Fail} />
    <Route path='/:owner/:reponame' component={Repo} />
    <IndexRoute component={Home}/>
  </Route>
)
