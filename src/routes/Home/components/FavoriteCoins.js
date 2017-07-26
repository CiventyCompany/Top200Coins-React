import React from 'react'

import { Link } from 'react-router'

function getBadgeCls (coinVal) {
  return `badge ${coinVal > 0 ? 'badge-success' : 'badge-danger'}`
}

export default ({ selectedCoins = [], onDelete = () => {} }) => (
  <article className={`coins-main-info-wrapper ${selectedCoins.length === 0 ? 'invisible' : ''}`}>
    <div className='coins-main-info'>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>USD</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {selectedCoins.map((coin) => (
            <tr key={coin.id}>
              <td>{ coin.rank }</td>
              <td>
                <Link to={`/coins/${coin.symbol}`}>{ coin.symbol }</Link>
              </td>
              <td>{ coin.price_usd }</td>
              <td>
                <span className={getBadgeCls(coin.percent_change_1h)}>
                  { coin.percent_change_1h }
                </span>
              </td>
              <td>
                <span className={getBadgeCls(coin.percent_change_24h)}>
                  { coin.percent_change_24h }
                </span>
              </td>
              <td>
                <span className={getBadgeCls(coin.percent_change_7d)}>
                  { coin.percent_change_7d }
                </span>
              </td>
              <td>
                <button onClick={() => onDelete(coin.id)} className='clear-button' type='button'>
                  <i className='fa fa-trash-o' aria-hidden='true' />
                </button>
              </td>
            </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  </article>
)
