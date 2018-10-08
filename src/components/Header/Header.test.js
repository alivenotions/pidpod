import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'

describe('<Header />', () => {
  it('renders a header element', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('header')).toHaveLength(1)
  })

  it('renders the title correctly', () => {
    const wrapper = shallow(<Header title="Tadow" />)
    expect(wrapper.find('header h1').text()).toEqual('Tadow')
  })

  it('should ensure that the button is disabled when input is empty', () => {
    const wrapper = shallow(<Header />)
    wrapper.setState({ rssUrlValue: '' })
    expect(wrapper.find('button').prop('disabled')).toEqual(true)
  })

  it('should call the prop function on button click', () => {
    const onButtonClick = jest.fn()
    const wrapper = shallow(<Header addPodcast={onButtonClick} />)
    wrapper.find('button').simulate('click', { preventDefault() {} })
    expect(onButtonClick).toHaveBeenCalled()
  })

  it('should call the prop function with input state on button click', () => {
    const onButtonClick = jest.fn()
    const wrapper = shallow(<Header addPodcast={onButtonClick} />)
    wrapper.setState({ rssUrlValue: 'mockRss.com/value/rss' })
    wrapper.find('button').simulate('click', { preventDefault() {} })
    expect(onButtonClick).toHaveBeenCalledWith('mockRss.com/value/rss')
  })
})
