import React, { Component } from 'react'

import Navigation from './components/navigation/nav'
import Router from './router'

//this file is where you should construct the base layout for your app
//importing things like your navigation bars, side menus and your router

class App extends Component {
  render() {
    return (
      <div>

        <Navigation />

        <Router />
        
      </div>
    )
  }
}

export default App;
