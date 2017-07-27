import React from 'react'
import PropTypes from 'prop-types'
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

const mapDispatchToProps = actions

const mapStateToProps = ({ coins }) => {
  const coinsComputed = coins.coinsOrder.map(id => (
    {
      ...coins.coinsById[id],
      checked: coins.coinsChecked.includes(id)
    }
  ))
  const search = coins.search
  return {
    loading: coins.loading,
    avaivableCoins: coinsComputed.filter(i => !search || i.name.toLowerCase().indexOf(search.toLowerCase()) > -1),
    coinsFilter: coins.coinsFilter,
    selectedCoins: coins.coinsChecked.map(id => coins.coinsById[id]),
    search
  }
}

HomeContainer.propTypes = {
  loadCoins: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
