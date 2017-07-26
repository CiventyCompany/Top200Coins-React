import { connect } from 'react-redux'
import React, { Component } from 'react'

import { actions } from '../modules/coin'
import Coin from '../components/Coin'

class CoinContainer extends Component {
  fetchData () {
    return this.props.loadCoin(this.props.params.id)
  }
  componentDidMount () {
    this.fetchData()
  }
  render () {
    return (
      <Coin {...this.props}></Coin>
    )
  }
}

const mapStateToProps = ({ coin }) => (
  {
    data: coin.data,
    history: coin.data.price,
    loading: coin.loading
  }
)

const mapDispatchToProps = actions

export default connect(mapStateToProps, mapDispatchToProps)(CoinContainer)
