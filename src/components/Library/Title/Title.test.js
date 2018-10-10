import React from 'react'
import Title from './Title'
import { shallow } from 'enzyme'
describe('<Title />', () => {
  it('should be defined', () => {
    expect(Title).toBeDefined()
  })

  it('renders a Heading element', () => {
    const wrapper = shallow(<Title title="Podcasts" />)
    wrapper
      .find('Heading')
      .children()
      .debug()
    expect(wrapper.find('Heading')).toBeDefined()
  })

  it('renders the styled Heading correctly', () => {
    const wrapper = shallow(<Title title="Podcasts" />)
    expect(wrapper.find('Heading')).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const wrapper = shallow(<Title title="My Podcasts" />)
    expect(wrapper).toMatchSnapshot()
  })
})
