// import axios from 'axios'
import { GET_PART, PART_LOADING } from './types'

import generateMock from '../helpers/generateMock'

export const getPart = id => dispatch => {
  dispatch(setPartLoading())
  // Removed HTTP request
  // axios
  //   .get('/api/parts/${id}')
  //   .then(res =>
  //     dispatch({
  //       type: GET_PART,
  //       payload: res.data
  //     })
  //   )

  // GET Mock
  new Promise((resolve, reject) => {
    const mockedData = generateMock()
    resolve(mockedData)
  })
  .then(res =>
    dispatch({
      type: GET_PART,
      payload: res.data
    })
  )
}

export const setPartLoading = part => {
  return {
    type: PART_LOADING
  }
}