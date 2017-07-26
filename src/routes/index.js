import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import CoinRoute from './Coin'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home(store),
  childRoutes : [
    CoinRoute(store),
  ]
})

export default createRoutes
