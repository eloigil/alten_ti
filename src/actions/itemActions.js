// import axios from 'axios'
import { GET_ITEMS, ITEMS_LOADING } from './types'

export const getItems = id => dispatch => {
  dispatch(setItemsLoading())
  // Removed HTTP request
  // axios
  //   .get('/api/items/${id}')
  //   .then(res =>
  //     dispatch({
  //       type: GET_ITEMS,
  //       payload: res.data
  //     })
  //   )

  // GET Mock
  new Promise((resolve, reject) => {
    const mockedData = {
      data: [
        {
          name: 'mock'
        }
      ]
    }
    resolve(mockedData)
  })
  .then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  )
}

export const setItemsLoading = item => {
  return {
    type: ITEMS_LOADING
  }
}