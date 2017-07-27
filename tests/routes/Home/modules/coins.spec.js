import {
  LOAD_COINS,
  SET_COINS_SEARCH,
  TOGGLE_COIN,
  SET_COINS_FILTER,
  TOGGLE_COINS_LOADING,

  loadCoins,
  toggleCoin,
  setCoins,
  setCoinsFilter,
  setCoinsSearch,
  toggleCoinsLoading,

  initialState,
  default as coinsReducer
} from 'routes/Home/modules/coins'

import api from 'routes/Home/api'

const mockApi = {
  fetchCoins () {
    return [
      {
        id: 1,
      },
      {
        id: 2,
      }
    ]
  }
}

describe('(Redux Module) Home', () => {
  it('Should export a constant LOAD_COINS.', () => {
    expect(LOAD_COINS).to.equal('LOAD_COINS')
  })

  it('Should export a constant SET_COINS_SEARCH.', () => {
    expect(SET_COINS_SEARCH).to.equal('SET_COINS_SEARCH')
  })

  it('Should export a constant TOGGLE_COIN.', () => {
    expect(TOGGLE_COIN).to.equal('TOGGLE_COIN')
  })

  it('Should export a constant SET_COINS_FILTER.', () => {
    expect(SET_COINS_FILTER).to.equal('SET_COINS_FILTER')
  })

  it('Should export a constant TOGGLE_COINS_LOADING.', () => {
    expect(TOGGLE_COINS_LOADING).to.equal('TOGGLE_COINS_LOADING')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(coinsReducer).to.be.a('function')
    })

    it(`Should initialize with a state of ${JSON.stringify(initialState)}`, () => {
      expect(coinsReducer(undefined, {})).to.equal(initialState)
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = coinsReducer(undefined, {})
      expect(state).to.equal(initialState)
      state = coinsReducer(state, { type: '@@@@@@@' })
      expect(state).to.equal(initialState)
      state = coinsReducer(state, setCoinsSearch('test'))
      expect(state).to.deep.equal({
        ...initialState,
        search: 'test'
      })
      state = coinsReducer(state, { type: '@@@@@@@' })
      expect(state).to.deep.equal({
        ...initialState,
        search: 'test'
      })
    })
  })

  describe('(Action Creator) setCoinsSearch', () => {
    it('Should be exported as a function.', () => {
      expect(setCoinsSearch).to.be.a('function')
    })

    it('Should return an action with type "SET_COINS_SEARCH".', () => {
      expect(setCoinsSearch()).to.have.property('type', SET_COINS_SEARCH)
    })

    it('Should assign the first argument to the "payload" property.', () => {
      expect(setCoinsSearch('test')).to.have.deep.property('payload', 'test')
    })
  })

  describe('(Action Creator) toggleCoinsLoading', () => {
    it('Should be exported as a function.', () => {
      expect(toggleCoinsLoading).to.be.a('function')
    })

    it('Should return an action with type "TOGGLE_COINS_LOADING".', () => {
      expect(toggleCoinsLoading()).to.have.property('type', TOGGLE_COINS_LOADING)
    })

    it('Should assign the first argument to the "payload" property.', () => {
      expect(toggleCoinsLoading(true)).to.have.property('payload', true)
    })
  })

  describe('(Action Creator) setCoinsFilter', () => {
    it('Should be exported as a function.', () => {
      expect(setCoinsFilter).to.be.a('function')
    })

    it('Should return an action with type "SET_COINS_FILTER".', () => {
      expect(setCoinsFilter()).to.have.property('type', SET_COINS_FILTER)
    })

    it('Should assign the first argument to the "payload" property.', () => {
      expect(setCoinsFilter('test')).to.have.property('payload', 'test')
    })
  })

  describe('(Action Creator) toggleCoin', () => {
    it('Should be exported as a function.', () => {
      expect(toggleCoin).to.be.a('function')
    })

    it('Should return an action with type "TOGGLE_COIN".', () => {
      expect(toggleCoin()).to.have.property('type', TOGGLE_COIN)
    })

    it('Should assign the first argument to the "payload" property.', () => {
      expect(toggleCoin('BTC')).to.have.property('payload', 'BTC')
    })
  })

  describe('(Action Creator) setCoins', () => {
    it('Should be exported as a function.', () => {
      expect(setCoins).to.be.a('function')
    })

    it('Should return an action with type "LOAD_COINS".', () => {
      expect(setCoins()).to.have.property('type', LOAD_COINS)
    })

    it('Should assign the first argument to the "payload" property.', () => {
      expect(setCoins('BTC')).to.have.property('payload', 'BTC')
    })
  })

  describe('(Action Creator) loadCoins', () => {
    let _globalState
    let _dispatchSpy
    let _getStateSpy
    let _apiFail = false

    // MockApi
    api.fetchCoins = () => {
      return new Promise((resolve, reject) => {
        if (_apiFail) {
          reject(new Error({ error: 'Test error' }))
        } else {
          resolve(mockApi.fetchCoins())
        }
      })
    }

    beforeEach(() => {
      _globalState = {
        coins : coinsReducer(initialState, {})
      }
      _dispatchSpy = sinon.spy((action) => {
        _globalState = {
          ..._globalState,
          coins : coinsReducer(_globalState.counter, action)
        }
      })
      _getStateSpy = sinon.spy(() => {
        return _globalState
      })
    })

    it('Should be exported as a function.', () => {
      expect(loadCoins).to.be.a('function')
    })

    it('Should return a function (is a thunk).', () => {
      expect(loadCoins()).to.be.a('function')
    })

    it('Should return a promise from that thunk that gets fulfilled.', () => {
      return loadCoins()(_dispatchSpy, _getStateSpy).should.eventually.be.fulfilled
    })

    it('Should not call getState', () => {
      return loadCoins()(_dispatchSpy, _getStateSpy)
        .then(() => {
          _getStateSpy.should.not.have.been.called()
        })
    })

    it('Should call dispatch 3 times ', () => {
      return loadCoins()(_dispatchSpy, _getStateSpy)
        .then(() => {
          _dispatchSpy.should.have.been.called(3)
        })
    })
  })

  // NOTE: if you have a more complex state, you will probably want to verify
  // that you did not mutate the state. In this case our state is just a number
  // (which cannot be mutated).
  describe('(Action Handler) LOAD_COINS', () => {
    it('Should set coins by id', () => {
      let state = coinsReducer(initialState, setCoins(mockApi.fetchCoins()))
      expect(state.coinsById).to.deep.equal({
        1: {
          id: 1
        },
        2: {
          id: 2
        }
      })
    })

    it('Should set coins order', () => {
      let state = coinsReducer(initialState, setCoins(mockApi.fetchCoins()))
      expect(state.coinsOrder).to.deep.equal([1, 2])
    })
  })

  describe('(Action Handler) SET_COINS_SEARCH', () => {
    it('Should set coins search', () => {
      let state = coinsReducer(initialState, setCoinsSearch('test'))
      expect(state.search).to.deep.equal('test')
    })
  })

  describe('(Action Handler) TOGGLE_COIN', () => {
    it('Should discard coins filters', () => {
      const testState = {
        ...initialState,
        coinsById: {
          1: {},
          2: {}
        },
        coinsOrder: [1, 2],
        coinsChecked: [1],
        coinsFilter: '123'
      }
      let state = coinsReducer(testState, {})
      expect(state.coinsFilter).to.equal('123')
      state = coinsReducer(state, toggleCoin(5))
      expect(state.coinsFilter).to.equal('')
    })

    it('Should uncheck coin if checked', () => {
      const testState = {
        ...initialState,
        coinsById: {
          1: {},
          2: {}
        },
        coinsOrder: [1, 2],
        coinsChecked: [1],
        coinsFilter: '123'
      }
      let state = coinsReducer(testState, {})

      state = coinsReducer(state, toggleCoin(1))
      expect(state.coinsChecked).to.deep.equal([])
    })

    it('Should check coin if unchecked', () => {
      const testState = {
        ...initialState,
        coinsById: {
          1: {},
          2: {}
        },
        coinsOrder: [1, 2],
        coinsChecked: [],
        coinsFilter: '123'
      }
      let state = coinsReducer(testState, {})

      state = coinsReducer(state, toggleCoin(1))
      expect(state.coinsChecked).to.deep.equal([1])
    })
  })

  describe('(Action Handler) SET_COINS_FILTER', () => {
    it('Should set coins filter', () => {
      let state = coinsReducer(initialState, setCoinsFilter('test'))
      expect(state.coinsFilter).to.deep.equal('test')
    })
  })

  describe('(Action Handler) TOGGLE_COINS_LOADING', () => {
    it('Should enable loading', () => {
      let state = coinsReducer({
        initialState,
        loading: false
      }, toggleCoinsLoading(true))
      expect(state.loading).to.be.true()
    })

    it('Should disable loading', () => {
      let state = coinsReducer({
        initialState,
        loading: false
      }, toggleCoinsLoading(false))
      expect(state.loading).to.be.false()
    })

    it('Should set opposite to current loading status', () => {
      let state = coinsReducer({
        initialState,
        loading: false
      }, toggleCoinsLoading())
      expect(state.loading).to.be.true()
      state = coinsReducer(state, toggleCoinsLoading())
      expect(state.loading).to.be.false()
    })
  })
})
