import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Heading = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  background-color: #cdced1;
  font-size: 1em;
  min-height: 2em;
  max-width: 10%;
  padding-top: 1em;
  padding-left: 1.5em;
  margin-left: 17%;
  overflow: auto;
`
Heading.displayName = 'Heading'
class Title extends React.Component {
  render() {
    return <Heading> {this.props.title} </Heading>
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title
