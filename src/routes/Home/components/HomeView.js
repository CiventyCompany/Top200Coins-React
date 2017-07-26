import React from 'react'
import '../assets/style.scss'
import ListOfCoins from './ListOfCoins/'
import FavoriteCoins from './FavoriteCoins'
import Preloader from 'components/Preloader'

export const HomeView = ({
  loading = true,
  coins,
  coinsFilter,
  setCoinsSearch,
  selectedCoins,
  search,
  toggleCoin,
  setCoinsFilter
}) => (
  <div className='container'>
    <div className='row justify-content-md-center'>
      {loading ? (<Preloader />) : (
        <div className='col-12 col-md-9'>
          <section>
            <h1>Top 200 coins</h1>
            <ListOfCoins
              coins={coins}
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

export default HomeView
