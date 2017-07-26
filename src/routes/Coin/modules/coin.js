import api from '../api'
export const SET_COIN_DATA = 'SET_COIN_DATA'
export const TOGGLE_SINGLE_COIN_LOADING = 'TOGGLE_SINGLE_COIN_LOADING'

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

export function loadCoin (id) {
  return (dispatch) => {
    dispatch(toggleLoading(true))
    api.getCoinData(id).then((data) => {
      dispatch(toggleLoading(false))
      dispatch(setCoinData(data))
    })
  }
}

export const actions = {
  loadCoin
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
  )
}

const defaultState = {
  data: {},
  loading: false
}
export default function coinReducer (state = defaultState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
