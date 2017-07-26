import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../modules/coins'

import Home from '../components/HomeView'

class HomeContainer extends React.Component {
  componentDidMount () {
    this.fetchData()
  }
  fetchData () {
    return this.props.loadCoins()
  }
  render () {
    return Home(this.props)
  }
}

const mapDispatchToProps = actions;

const mapStateToProps = ({ coins }) => ({
  coins : coins.coinsOrder.map(id => (
    {
      ...coins.coinsById[id],
      checked: coins.coinsChecked.includes(id)
    })
  ),
  loading: coins.loading,
  coinsFilter: coins.coinsFilter,
  selectedCoins: coins.coinsChecked.map(id => coins.coinsById[id]),
  search : coins.search
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
