import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from './displays/dashboard'
import Login from './displays/login'
import Error from './displays/errors/default'

export default () => (
    <Router>
        <Switch>

            <Route exact path="/" component={Dashboard}/>

            <Route exact path="/login" component={Login}/>

            <Route component={Error}/>

        </Switch>
    </Router>
)