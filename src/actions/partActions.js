// import axios from 'axios'
import { GET_PART, PART_LOADING } from './types'

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
    const mockedData = {
      data: {
        _id: '12345',
        name: 'Part A',
        features: [
          {
            _id: 123451,
            name: 'Hole 1',
            controls: [
              {
                type: 'x',
                dev: 0.01,
                devOutTotal: 0.02,
              }
            ]
          }
        ]
      }
    }
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