import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'

describe('<Header />', () => {
  it('renders a header element', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('HeaderBody')).toHaveLength(1)
  })

  it('renders the title correctly', () => {
    const wrapper = shallow(<Header title="Tadow" />)
    expect(
      wrapper
        .find('HeaderTitle')
        .children()
        .text()
    ).toEqual('Tadow')
  })

  it('renders the rss input field', () => {
    expect(shallow(<Header />).find('Input')).toHaveLength(1)
  })

  it('should ensure that the button is disabled when input is empty', () => {
    const wrapper = shallow(<Header />)
    wrapper.setState({ rssUrlValue: '' })
    expect(wrapper.find('Button').prop('disabled')).toEqual(true)
  })

  it('should call the prop function on button click', () => {
    const onButtonClick = jest.fn()
    const wrapper = shallow(
      <Header title="PidPod" addPodcast={onButtonClick} />
    )
    wrapper.find('Button').simulate('click', { preventDefault() {} })
    expect(onButtonClick).toHaveBeenCalled()
  })

  it('should call the prop function with input state on button click', () => {
    const onButtonClick = jest.fn()
    const wrapper = shallow(
      <Header title="PidPod" addPodcast={onButtonClick} />
    )
    wrapper.setState({ rssUrlValue: 'mockRss.com/value/rss' })
    expect(wrapper).toMatchSnapshot()
    wrapper.find('Button').simulate('click', { preventDefault() {} })
    expect(onButtonClick).toHaveBeenCalledWith('mockRss.com/value/rss')
  })

  it('renders correctly', () => {
    const onButtonClick = jest.fn()
    const wrapper = shallow(
      <Header title="PidPod" addPodcast={onButtonClick} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
