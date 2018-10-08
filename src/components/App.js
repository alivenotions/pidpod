import React, { Component } from 'react'

import Header from './Header/Header'
import Library from './Library/Library'
import './App.css'

class App extends Component {
  state = {
    lastRSSUrl: '',
  }

  setLastRSSUrl = url => {
    this.setState({ lastRSSUrl: url })
  }

  render() {
    return (
      <div className="App">
        <Header title="Pidpod" addPodcast={this.setLastRSSUrl} />
        <Library rssUrl={this.state.lastRSSUrl} />
      </div>
    )
  }
}

export default App
