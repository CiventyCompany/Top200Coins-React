import React from 'react'

import Head from './Head'
import Bages from './Bages'

class ListOfCoins extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      q: ''
    }
    this.setSearch = this.setSearch.bind(this);
  }
  setSearch (q) {
    this.setState({
      q
    })
  }
  render () {
    return render({
      ...this.props,
      //query: this.state.q,
      //onInput: this.props.setSearch,
    })
  }
}

function render ({ coins = [], filter = '', query = '', onInput, onCoinClick, onBageClick }) {
  return (
    <div>
       <article className='coin-names'>
        <div className='coin-names__body'>
          <form className=''>
            { coins.length &&
              <Head query={query} onInput={onInput}></Head>
            }
            <div className='list-of-coins-wrapper'>
              {
                !coins.length && (<strong className='list-of-coins-loader'>Loading...</strong>)   
              }
              {
                coins.length &&
                <ul className='list-of-coins'>
                  { coins.filter(i => !query || i.name.toLowerCase().indexOf(query.toLowerCase()) > -1).map((coin, index) => (
                    <li key={coin.id} className='list-of-coins__item'>
                      <div className='coin-name'>
                        <input type='checkbox'
                          name={coin.id}
                          checked={coin.checked}
                          className='coin-name__ckeckbox'
                        />
                        <label onClick={() => onCoinClick(coin.id)} htmlFor={coin.id} className='coin-name__label'>{coin.name}</label>
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
      <Bages list={coins} filter={filter} onBageClick={onBageClick}></Bages>
    </div>
   
  )
}

export default ListOfCoins;