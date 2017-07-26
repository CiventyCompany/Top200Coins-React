import React from 'react'
import { Link } from 'react-router'
import Preloader from 'components/Preloader'

import moment from 'moment'

import Table from './Table'
import Chart from './Chart'

const dateFormat = 'YYYY.MM.DD'

export default function ({
  data,
  history,
  loading
}) {
  return (
    <div className='container'>
      <div className='row justify-content-md-center'>
        {
          loading ? <Preloader /> : (
            <div className='col-12 col-md-9'>
              <h1>{data.long}
                <Link to='/' className='btn btn-info pull-right'>Home</Link>
              </h1>
              {
                data.price ? <h4>
                  { moment(data.price[0][0]).format(dateFormat) } -
                  { moment(data.price[data.price.length - 1][0]).format(dateFormat) }
                </h4> : ''}
              <Chart data={data} history={history} />
              <Table data={data} />
            </div>
          )
        }
      </div>
    </div>
  )
}
