import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Template from '../containers/Template'
import Home from '../containers/Home'
import Profile from '../containers/Profile'

class Routes extends React.Component
{
    render()
    {
        return (
            <Template>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/profile' component={Profile} />
                </Switch>
            </Template>
        )
    }
}

export default Routes
