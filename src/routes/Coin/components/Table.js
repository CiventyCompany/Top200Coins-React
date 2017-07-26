import React from 'react'

export default function ({
  data
}) {
  return (
    <section>
      <table className='table'>
        <tr> <td>Name</td> <td>{data.long}</td></tr>
        <tr> <td>Position</td> <td>{data.position24}</td></tr>
        <tr> <td>Price USD</td> <td>{data.usdPrice}</td></tr>
        <tr> <td>vwapDataBTC</td> <td>{data.vwapDataBTC}</td></tr>     
        <tr> <td>Change 24h</td> <td>{data.cap24hrChange}</td></tr>
        <tr> <td>Percent change</td> <td>{data.perc}</td></tr>
        <tr> <td>Explorer URL</td> <td>{data.explorerURL}</td></tr>
        <tr> <td>Home URL</td> <td>{data.homeURL}</td></tr>
        <tr> <td>Is Buy</td> <td>{data.isBuy}</td></tr>
        <tr> <td>Is Mineable</td> <td>{data.mineable}</td></tr>
        <tr> <td>Is Published</td> <td>{data.published}</td></tr>
        <tr> <td>Total Volume USD</td> <td>{data.usdVolume}</td></tr>
      </table>
    </section>
)
}
