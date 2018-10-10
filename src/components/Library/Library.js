/* global RSSParser */
import React, { Fragment } from 'react'
import 'rss-parser/dist/rss-parser.min.js'
import Title from './Title/Title.js'

class Library extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      podcastFeeds: [],
    }
    this.rssParser = new RSSParser()
  }

  componentDidUpdate = prevProps => {
    if (this.props.rssUrl !== prevProps.rssUrl) {
      this.addPodcastRSSFeedFromUrl(this.props.rssUrl)
    }
  }

  addPodcastRSSFeedFromUrl = rssUrl => {
    this.rssParser
      .parseURL(rssUrl)
      .then(feed => {
        this.setState({ podcastFeeds: [...this.state.podcastFeeds, feed] })
      })
      // FIXME: Handle error cases
      .catch()
  }

  render() {
    return (
      <Fragment>
        <Title title={this.props.heading} />
      </Fragment>
    )
  }
}

export default Library
