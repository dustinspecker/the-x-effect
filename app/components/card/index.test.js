import Card from './'
import React from 'react'
import {render} from 'enzyme'

describe('Card', () => {
  it('renders', () => {
    const component = render(
      <Card title='title' />
    )
    expect(component).toMatchSnapshot()
  })
})
