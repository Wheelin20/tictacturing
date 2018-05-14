import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Relay from 'react-relay'
import Template from '../containers/Template'
import TicTacToe from '../containers/TicTacToe'
import Profile from '../containers/Profile'

const ViewQueries =
{
    view: () => Relay.QL`query { viewer }`
}

const createRoutes = () =>
{
  return (
    <Route path='/' component={Template} query={ViewerQueries}>
      <IndexRoute component={TicTacToe} />
      <Route path={'/profile'} component={Profile} query={ViewerQueries} />
    </Route>
  )
}

const Routes = createRoutes()

export default Routes
