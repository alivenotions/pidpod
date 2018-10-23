import React, { Component, Fragment } from 'react'
import { injectGlobal } from 'styled-components'
import Header from './Header/Header'
import Library from './Library/Library'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,700');

body {
  margin: 0;
  padding: 0;
  font-family: 'Fira Sans';
  background: #eff2ef;
}

h1{
  font-family: 'Pacifico', sans-serif;
}

`

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
      </Fragment>
    )
  }
}

export default App
