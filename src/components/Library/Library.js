import React from 'react'
import RSSParser from 'rss-parser'

import Header from './Header/Header'

class Library extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      podcastFeeds: [],
      libraryHeading: 'Your Podcasts',
    }
    this.rssParser = new RSSParser()
  }

  addPodcastRSSFeedFromUrl = rssUrl => {
    this.rssParser
      .parseURL(rssUrl)
      .then(feed => {
        this.setState({ podcastFeeds: [...this.state.podcastFeeds, feed] })
      })
      // FIXME: Handle error cases
      .catch(console.log)
  }

  render() {
    return (
      <Header
        addPodcast={this.addPodcastRSSFeedFromUrl}
        heading={this.state.libraryHeading}
      />
    )
  }
}

export default Library
