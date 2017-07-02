import {addCard, ADD_CARD} from './'

describe('Card Actions', () => {
  it('addCard', () => {
    const action = addCard('hello world')
    const expectedAction = {
      type: ADD_CARD,
      title: 'hello world'
    }
    expect(action).toEqual(expectedAction)
  })
})
