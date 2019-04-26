import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PageNotFound from './Common/Errors/PageNotFound/PageNotFound'
import HomePage from './HomePage/HomePage'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route component={PageNotFound} />
    </Switch>
  )
}

export default Routes
