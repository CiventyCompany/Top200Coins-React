import React from 'react'
import PropTypes from 'prop-types'

const Table = ({
  data
}) => (
  <section>
    <table className='table'>
      <thead />
      <tbody>
        <tr><td>Name</td> <td>{data.long}</td></tr>
        <tr><td>Position</td> <td>{data.position24}</td></tr>
        <tr><td>Price USD</td> <td>{data.usdPrice}</td></tr>
        {data.isBuy ? <tr><td>vwapDataBTC</td> <td>{data.vwapDataBTC}</td></tr> : ''}
        <tr><td>Change 24h</td> <td>{data.cap24hrChange}</td></tr>
        <tr><td>Percent change</td> <td>{data.perc}</td></tr>
        <tr><td>Explorer URL</td> <td>{data.explorerURL}</td></tr>
        <tr><td>Home URL</td> <td>{data.homeURL}</td></tr>
        {data.isBuy ? <tr><td>Is Buy</td> <td>{ data.isBuy.toString() }</td></tr> : ''}
        <tr><td>Is Mineable</td> <td>{data.mineable ? data.mineable.toString() : ''}</td></tr>
        {data.published ? <tr><td>Is Published</td> <td>{ data.published.toString() }</td></tr> : ''}
        <tr> <td>Total Volume USD</td> <td>{data.usdVolume}</td></tr>
      </tbody>
    </table>
  </section>
)

Table.propTypes = {
  data: PropTypes.object
}

export default Table
