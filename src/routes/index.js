import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Relay from 'react-relay'
import Template from '../containers/Template'
import TicTacToe from '../containers/TicTacToe'
import Profile from '../containers/Profile'
import auth from '../utils/auth'

const ViewerQueries =
{
    viewer: () => Relay.QL`query { viewer }`
}

const createRoutes = () =>
{
    console.log("routes/index.js: ")
    console.log(auth)
    return (
        <Route path='/' component={Template} queries={ViewerQueries} auth={auth}>
            <IndexRoute component={TicTacToe} />
            <Route path={'/profile'} component={Profile} queries={ViewerQueries} />
        </Route>
    )
}

const Routes = createRoutes()

export default Routes
