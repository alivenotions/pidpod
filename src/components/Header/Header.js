import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderBody = styled.header`
  padding: 1em;
  margin: 0 1.5em;
  border-bottom: 1px solid #dde0dd;
`
const HeaderTitle = styled.h1`
  display: inline;
  padding-left: 15%;
  font-size: 3em;
`
const AddPodcast = styled.div`
  margin: auto 0;
  position: absolute;
  right: 1em;
  top: 3em;
`
const Button = styled.button`
  font-size: 1em;
  padding: 0.4em;
  margin: 0 0.5em;
  font-weight: bold;
  height: 2.5em;
  width: 2.5em;
  border-radius: 50%;
  background: linear-gradient(45deg, #dde0dd 25%, #c4c4c4);
  box-shadow: 3px 1.5px 1px #cecfce;
  border: 1px solid #adafad;
  cursor: pointer;
  ${attr => disabledStyles(attr.disabled)};
`
const disabledStyles = isDisabled => {
  return isDisabled
    ? `
            background: #bebebe;
            opacity: 0.7;
            cursor: default;
            color: #807f7f;
            box-shadow: 0 0 0;
          `
    : `
            background: linear-gradient(45deg, #c4c4c4 25%, #dde0dd);
          `
}
const Input = styled.input`
  font-size: 1em;
  padding: 0.4em;
  margin: 0 0.5em;
`
HeaderBody.displayName = 'HeaderBody'
HeaderTitle.displayName = 'HeaderTitle'
AddPodcast.displayName = 'AddPodcast'
Input.displayName = 'Input'
Button.displayName = 'Button'
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
      <HeaderBody>
        <HeaderTitle>{this.props.title}</HeaderTitle>
        <AddPodcast>
          <Input
            placeholder="Add RSS Feed"
            type="text"
            value={this.state.rssUrlValue}
            onChange={this.handleRSSValueChange}
          />
          <Button
            type="button"
            disabled={!this.state.rssUrlValue}
            onClick={this.onAddPodcastSubmit}
          >
            +
          </Button>
        </AddPodcast>
      </HeaderBody>
    )
  }
}

export default Header
