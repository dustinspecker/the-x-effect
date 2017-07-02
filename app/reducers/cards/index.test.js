import {addCard} from '../../actions/cards/'
import cardsReducer from './'

describe('Cards Reducer', () => {
  it('default is empty array', () => {
    const state = cardsReducer()
    expect(state).toEqual([])
  })

  it('add card action', () => {
    const state = [{title: 'yolo'}]
    const nextState = cardsReducer(state, addCard('hey'))
    const expectedState = [{title: 'yolo'}, { title: 'hey' }]
    expect(nextState).toEqual(expectedState)
  })
})
