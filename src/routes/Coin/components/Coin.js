import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import Preloader from 'components/Preloader'

import moment from 'moment'

import Table from './Table'
import Chart from './Chart'

const dateFormat = 'DD.MM.YYYY'

const Coin = ({
  data,
  history,
  loading,
  loadingError
}) => {
  return (
    <div className='container'>
      <div className='row justify-content-md-center'>
        {
          loading ? <Preloader /> : (
            <div className='col-12 col-md-9'>
              <h1>{loadingError || data.long}
                <Link to='/' className='btn btn-info pull-right'>Home</Link>
              </h1>
              { !loadingError
                ? <div>
                  {
                  data.price ? <h4>
                    { moment(data.price[0][0]).format(dateFormat) }
                      -
                    { moment(data.price[data.price.length - 1][0]).format(dateFormat) }
                  </h4> : ''}
                  <Chart data={data} history={history} />
                  <Table data={data} />
                </div> : ''
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

Coin.propTypes = {
  data: PropTypes.object,
  history: PropTypes.array,
  loading: PropTypes.bool,
  loadingError: PropTypes.bool
}

export default Coin
