import React, { Fragment } from 'react'
import { notify, notifyError } from '../../utils/toastNotifs'
import { getRSSParser } from '../../utils/rssParser'

class Library extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      podcastFeeds: [],
    }
  }

  componentDidUpdate = prevProps => {
    if (this.props.rssUrl !== prevProps.rssUrl) {
      this.addPodcastRSSFeedFromUrl(this.props.rssUrl)
    }
  }

  addPodcastRSSFeedFromUrl = rssUrl => {
    getRSSParser()
      .parseURL(rssUrl)
      .then(feed => {
        this.setState({ podcastFeeds: [...this.state.podcastFeeds, feed] })
        notify('Successfully added the podcast to Library')
      })
      .catch(_ => notifyError('The URL seems to be wrong!'))
  }

  render() {
    return <Fragment>{this.props.heading}</Fragment>
  }
}

export default Library
