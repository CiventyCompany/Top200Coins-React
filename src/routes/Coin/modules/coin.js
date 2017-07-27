import api from '../api'

export const SET_COIN_DATA = 'SET_COIN_DATA'
export const TOGGLE_SINGLE_COIN_LOADING = 'TOGGLE_SINGLE_COIN_LOADING'
export const TOGGLE_SINGLE_COIN_LOADING_ERROR = 'TOGGLE_SINGLE_COIN_LOADING_ERROR'

export function setCoinData (data) {
  return {
    type: SET_COIN_DATA,
    payload: data
  }
}

export function toggleLoading (isLoading) {
  return {
    type: TOGGLE_SINGLE_COIN_LOADING,
    payload: isLoading
  }
}

export function toggleLoadingError (error) {
  return {
    type: TOGGLE_SINGLE_COIN_LOADING_ERROR,
    payload: error
  }
}

export function loadCoin (id) {
  return (dispatch) => {
    dispatch(toggleLoading(true))
    dispatch(toggleLoadingError(false))

    api.getCoinData(id).then((data) => {
      dispatch(toggleLoading(false))
      dispatch(setCoinData(data))
    }).catch((error) => {
      dispatch(toggleLoading(false))
      dispatch(toggleLoadingError(error))
    })
  }
}

export const actions = {
  loadCoin,
  toggleLoading
}

const ACTION_HANDLERS = {
  SET_COIN_DATA: (state, action) => (
    {
      ...state,
      data: action.payload,
    }
  ),
  TOGGLE_SINGLE_COIN_LOADING: (state, action) => (
    {
      ...state,
      loading: action.payload
    }
  ),
  TOGGLE_SINGLE_COIN_LOADING_ERROR: (state, action) => (
    {
      ...state,
      loadingError: action.payload
    }
  )
}

const defaultState = {
  data: {},
  loading: false,
  loadingError: false
}
export default function coinReducer (state = defaultState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
