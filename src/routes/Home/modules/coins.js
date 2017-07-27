import keyBy from 'lodash/keyBy'
import applyFilter from './coins/filter'
import api from '../api'

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_COINS = 'LOAD_COINS'
export const SET_COINS_SEARCH = 'SET_COINS_SEARCH'
export const TOGGLE_COIN = 'TOGGLE_COIN'
export const SET_COINS_FILTER = 'SET_COINS_FILTER'
export const TOGGLE_COINS_LOADING = 'TOGGLE_COINS_LOADING'

export function toggleCoin (id) {
  return {
    type: TOGGLE_COIN,
    payload: id
  }
}

export function setCoins (payload) {
  return {
    type: LOAD_COINS,
    payload
  }
}

export function setCoinsSearch (query) {
  return {
    type: SET_COINS_SEARCH,
    payload: query
  }
}

export function setCoinsFilter (type) {
  return {
    type: SET_COINS_FILTER,
    payload: type
  }
}

export function toggleCoinsLoading (isLoading) {
  return {
    type: TOGGLE_COINS_LOADING,
    payload: isLoading
  }
}

export function loadCoins () {
  return (dispatch) => {
    dispatch(toggleCoinsLoading(true))
    return api.fetchCoins().then(data => {
      dispatch(setCoins(data))
      dispatch(toggleCoinsLoading(false))
    })
  }
}

export const actions = {
  loadCoins,
  toggleCoin,
  setCoinsFilter,
  setCoinsSearch,
  toggleCoinsLoading
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_COINS]: (state, { payload }) => (
    {
      ...state,
      coinsById: keyBy(payload, 'id'),
      coinsOrder: payload.map(coin => coin.id)
    }
  ),
  [SET_COINS_SEARCH]: (state, { payload }) => (
    {
      ...state,
      search: payload
    }
  ),
  [TOGGLE_COIN]: (state, { payload }) => (
    {
      ...state,
      coinsFilter: '',
      coinsChecked: state.coinsChecked.indexOf(payload) > -1
        ? state.coinsChecked.filter(id => id !== payload)
        : [...state.coinsChecked, payload]
    }
  ),
  [SET_COINS_FILTER]: (state, { payload }) => (
    {
      ...state,
      coinsChecked: applyFilter(state.coinsOrder, payload),
      coinsFilter: payload
    }
  ),
  [TOGGLE_COINS_LOADING]: (state, { payload = !state.loading }) => (
    {
      ...state,
      loading: payload
    }
  )
}

// ------------------------------------
// Reducer
// ------------------------------------
export const initialState = {
  coinsById: {},
  coinsOrder: [],
  coinsChecked: [],
  search: '',
  filter: '',
  loading: false
}

export default function coinsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
