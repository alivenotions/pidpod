import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import App from './App'
import Header from './Header/Header'
import Library from './Library/Library'

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('renders a <Header /> component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Header)).toHaveLength(1)
  })

  it('renders a <Library /> component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Library)).toHaveLength(1)
  })
})
