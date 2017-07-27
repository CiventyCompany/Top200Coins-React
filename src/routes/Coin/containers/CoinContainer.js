import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
      <Coin {...this.props} />
    )
  }
}

const mapStateToProps = ({ coin }) => (
  {
    data: coin.data,
    history: coin.data.price,
    loading: coin.loading,
    loadingError: coin.loadingError
  }
)

const mapDispatchToProps = actions

CoinContainer.propTypes = {
  params: PropTypes.object,
  loadCoin: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinContainer)
