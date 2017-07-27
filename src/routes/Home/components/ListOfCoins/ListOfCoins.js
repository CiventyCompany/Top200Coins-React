import React from 'react'
import PropTypes from 'prop-types'
import Head from './Head'
import Bages from './Bages'

const ListOfCoins = ({
  coins = [],
  filter = '',
  query = '',
  onInput,
  onCoinClick,
  onBageClick
}) => (
  <div>
    <article className='coin-names'>
      <div className='coin-names__body'>
        <form className=''>
          { coins.length &&
            <Head query={query} onInput={onInput} />
          }
          <div className='list-of-coins-wrapper'>
            {
              !coins.length && (<strong className='list-of-coins-loader'>Loading...</strong>)
            }
            {
              coins.length &&
              <ul className='list-of-coins'>
                { coins.map((coin, index) => (
                  <li key={coin.id} className='list-of-coins__item'>
                    <div className='coin-name'>
                      <input type='checkbox'
                        name={coin.id}
                        checked={coin.checked}
                        className='coin-name__ckeckbox'
                      />
                      <label
                        onClick={() => onCoinClick(coin.id)}
                        htmlFor={coin.id}
                        className='coin-name__label'>{coin.name}
                      </label>
                    </div>
                  </li>
                  ))
                }
              </ul>
            }
          </div>
        </form>
      </div>
    </article>
    <Bages list={coins} filter={filter} onBageClick={onBageClick} />
  </div>
)

ListOfCoins.propTypes = {
  coins: PropTypes.array,
  filter: PropTypes.string,
  query: PropTypes.string,
  onInput: PropTypes.func,
  onCoinClick: PropTypes.func,
  onBageClick: PropTypes.func,
}

export default ListOfCoins
