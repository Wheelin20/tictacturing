import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router'
import {createHashHistory} from 'history'
import Routes from './routes/index.js'

const browserHistory = createHashHistory()

ReactDOM.render(
    <Router
        history={browserHistory}
        routes={Routes}
    />,document.getElementById('root')
)
