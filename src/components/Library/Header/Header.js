import React from 'react'

class Header extends React.Component {
  addPodcast = event => {
    event.preventDefault()
    // FIXME: Create a modal instead of an input type
    const rssUrl = document.getElementById('rssUrl').value
    console.log(rssUrl)
    this.props.addPodcast(rssUrl)
  }

  render() {
    return (
      <header>
        <h1>{this.props.heading}</h1>
        {/* TODO: Abstract this into a button component */}
        <input type="text" id="rssUrl" />
        <button onClick={this.addPodcast}>Add Podcast</button>
      </header>
    )
  }
}

export default Header
