import { injectReducer } from '../../store/reducers'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Home = require('./containers/HomeContainer').default
      const reducer = require('./modules/coins').default
      injectReducer(store, { key: 'coins', reducer })
      cb(null, Home)
    }, 'counter')
  }
})
