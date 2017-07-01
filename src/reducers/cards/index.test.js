import cardsReducer from './'

describe('Cards Reducer', () => {
  it('default is empty array', () => {
    const state = cardsReducer()
    expect(state).toEqual([])
  })
})
