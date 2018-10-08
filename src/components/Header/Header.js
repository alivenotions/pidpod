import React, { Component } from 'react'

import './Header.css'

class Header extends Component {
  addPodcast = event => {
    event.preventDefault()
  }

  handleAddPodcastClick = event => {}

  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <div className="add-podcast">
          <input placeholder="Add RSS Feed" />
          <button>+</button>
        </div>
      </header>
    )
  }
}

export default Header
