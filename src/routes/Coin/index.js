import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'coins/:id',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Coin = require('./containers/CoinContainer').default
      const reducer = require('./modules/coin').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'coin', reducer })

      /*  Return getComponent   */
      cb(null, Coin)

    /* Webpack named bundle   */
    }, 'coin')
  }
})
