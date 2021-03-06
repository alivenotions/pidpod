import React, { Component, Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

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
      <Fragment>
        <Header title="Pidpod" addPodcast={this.setLastRSSUrl} />
        <Library heading="My Podcasts" rssUrl={this.state.lastRSSUrl} />
        <ToastContainer />
      </Fragment>
    )
  }
}

export default App
