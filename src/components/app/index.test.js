import App from './'
import React from 'react'
import {shallow} from 'enzyme'

describe('App', () => {
  test('renders', () => {
    const component = shallow(
      <App />
    )
    expect(component).toMatchSnapshot()
  })
})
