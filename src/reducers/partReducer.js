import { GET_PART, PART_LOADING } from '../actions/types'

const initialState = {
  part: {},
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PART:
      return {
        ...state,
        part: action.payload,
        loading: false
      }
    case PART_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}