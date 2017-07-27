import React from 'react'
import PropTypes from 'prop-types'

import '../assets/style.scss'
import ListOfCoins from './ListOfCoins/'
import FavoriteCoins from './FavoriteCoins'
import Preloader from 'components/Preloader'

export const HomeView = ({
  loading = true,
  availvableCoins,
  selectedCoins,
  coinsFilter,
  search,
  toggleCoin,
  setCoinsSearch,
  setCoinsFilter
}) => (
  <div className='container'>
    <div className='row justify-content-md-center'>
      {loading ? (<Preloader />) : (
        <div className='col-12 col-md-9'>
          <section>
            <h1>Top 200 coins</h1>
            <ListOfCoins
              coins={availvableCoins}
              query={search}
              onCoinClick={toggleCoin}
              onInput={setCoinsSearch}
              filter={coinsFilter}
              onBageClick={setCoinsFilter}
            />
          </section>
          <section>
            <FavoriteCoins selectedCoins={selectedCoins} onDelete={toggleCoin} />
          </section>
        </div>
      )}
    </div>
  </div>
)

HomeView.propTypes = {
  loading: PropTypes.bool,
  availvableCoins: PropTypes.array,
  selectedCoins: PropTypes.array,

  coinsFilter: PropTypes.string,
  search: PropTypes.string,

  setCoinsSearch: PropTypes.func,
  toggleCoin: PropTypes.func,
  setCoinsFilter: PropTypes.func
}

export default HomeView
