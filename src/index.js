//package imports
import React from 'react'
import ReactDOM from 'react-dom'
import {ApolloProvider} from 'react-apollo'
//my components
import App from './App'
import {client} from './config/apollo'
import registerServiceWorker from './registerServiceWorker'
//css
import './index.css'

const AppWraper = (
    <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(AppWraper, document.getElementById('root'));
registerServiceWorker();
