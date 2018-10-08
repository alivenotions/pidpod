import React, { Component } from 'react'

import './Header.css'

class Header extends Component {
  state = {
    rssUrlValue: '',
  }

  onAddPodcastSubmit = event => {
    event.preventDefault()
    this.props.addPodcast(this.state.rssUrlValue)
    this.setState({ rssUrlValue: '' })
  }

  handleRSSValueChange = event => {
    this.setState({ rssUrlValue: event.target.value })
  }

  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <form className="add-podcast" onSubmit={this.onAddPodcastSubmit}>
          <input
            placeholder="Add RSS Feed"
            type="text"
            value={this.state.rssUrlValue}
            onChange={this.handleRSSValueChange}
          />
          <button>+</button>
        </form>
      </header>
    )
  }
}

export default Header
