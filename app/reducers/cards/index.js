import {ADD_CARD} from '../../actions/cards'

export default (state = [], action = {}) => {
  if (action.type === ADD_CARD) {
    const {title} = action

    return [
      ...state,
      { title }
    ]
  }

  return state
}
