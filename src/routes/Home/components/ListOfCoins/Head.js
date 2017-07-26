import React from 'react'

export const Head = ({ query, onInput }) => (
  <div className='form-group search-coin-wrapper'>
    <input
      value={query}
      onChange={(e) => onInput(e.target.value)}
      name='search-coin'
      className='form-control default-input'
      id='coin-prefix-field'
      type='text'
      placeholder='search'
    />
    {query &&
    <button onClick={() => onInput('')} className='clear-button clear-query-btn' type='button'>
      <i className='fa fa-times-circle-o' aria-hidden='true'></i>
    </button>}
  </div>
)

export default Head
