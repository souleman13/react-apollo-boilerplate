//imports should attempt to mimic the following pattern
//NEW USERS: keep an eye out for dev comments similar to this
//for explanations of practices

//package imports
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
//my components
import App from './App'
import { client } from './config/apollo'
import registerServiceWorker from './registerServiceWorker'
//css components

//css files
import './index.css'

const AppWraper = (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)

ReactDOM.render(AppWraper, document.getElementById('root'));
registerServiceWorker();
