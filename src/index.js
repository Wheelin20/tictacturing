import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes/index.js'
// import Relay from 'react-relay'
// import {RelayNetworkLayer, urlMiddleware} from 'react-relay-network-layer'
// import {relayApi} from './config/endpoints'
import auth from './utils/auth'

const createHeaders = () =>
{
    let idToken = auth.getToken()

    if(idToken)
    {
        return {Authorization: `Bearer ${idToken}`}
    }
    else { return {} }
}

ReactDOM.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.getElementById('root')
)
