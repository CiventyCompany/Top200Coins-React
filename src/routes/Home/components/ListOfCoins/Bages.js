import React from 'react'
import PropTypes from 'prop-types'

import { filterTypes } from '../../modules/coins/filter'

export const Bages = ({
  list,
  filter,
  onBageClick,
}) => (
  <div>
    { list.length ? <article className='coins-tags-wrapper' >
      <span className='coin-tag'>
        <input
          checked={filter === filterTypes.FIRST_10}
          className='coin-tag__input ng-untouched ng-pristine ng-valid'
          id='top-50-filter'
          name='coins-filter'
          type='radio'
          value='top-50-filter'
        />
        <label
          onClick={() => onBageClick(filterTypes.FIRST_10)}
          className='coin-tag__label'
          htmlFor='top-10-filter'
        >#top10</label>
      </span>

      <span className='coin-tag'>
        <input
          checked={filter === filterTypes.FIRST_50}
          className='coin-tag__input ng-untouched ng-pristine ng-valid'
          id='top-50-filter' name='coins-filter'
          type='radio'
          value='top-50-filter'
        />
        <label
          onClick={() => onBageClick(filterTypes.FIRST_50)}
          className='coin-tag__label'
          htmlFor='top-50-filter'>#top50</label>
      </span>
    </article> : ''
    }
  </div>
)

Bages.propTypes = {
  list: PropTypes.array,
  filter: PropTypes.string,
  onBageClick: PropTypes.func
}

export default Bages
