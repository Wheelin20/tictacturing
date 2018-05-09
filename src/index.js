import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes/index.js'
import Relay from 'react-relay'
import {RelayNetworkLayer, urlMiddleware} from 'react-relay-network-layer'
import {relayApi} from './config/endpoints'
import auth from './utils/auth'
import RenderToLayer from 'material-ui/internal/RenderToLayer';

const createHeaders = () =>
{
    let idToken = auth.getToken()

    if(idToken)
    {
        return {Authorization: `Bearer ${idToken}`}
    }
    else { return {} }
}

Relay.injectNetworkLayer(
    new RelayNetworkLayer(
    [
        urlMiddleware({url: (req) => relayApi}),
        next => req =>
        {
            req.headers = 
            {
                ...req.headers,
                ...createHeaders()
            }
            return next(req)
        },
    ])
)

ReactDOM.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.getElementById('root')
)
