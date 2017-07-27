import React from 'react'
import FavoriteCoins from 'routes/Home/components/FavoriteCoins'
import { render } from 'enzyme'

describe('(View) Home/FaviriteCoin', () => {
  let _component

  let props = {
    selectedCoins: [
      {
        id: '1',
        rank: 12,
        symbol: 'BTC',
        percent_change_1h: 1,
        percent_change_24h: 1,
        percent_change_7d: 1
      },
      {
        id: '2',
        rank: 12,
        symbol: 'BTC2',
        percent_change_1h: 1,
        percent_change_24h: 1,
        percent_change_7d: 1
      }
    ],
    onDelete: () => {}
  }

  it('Renders table', () => {
    _component = render(<FavoriteCoins {...props} />)
    const table = _component.find('.table')
    expect(table).to.exist()
  })

  it('Sets component invisible if no data', () => {
    let newProps = {
      ...props,
      selectedCoins: []
    }
    _component = render(<FavoriteCoins {...newProps} />)
    const article = _component.find('article')
    expect(article).to.exist()
    expect(article.hasClass('invisible')).to.be.true()
  })

  it('Renders one tr per element in list', () => {
    let newProps = {
      ...props,
    }
    _component = render(<FavoriteCoins {...newProps} />)
    const node = _component.find('.coin-item')
    expect(node).to.exist()
    expect(node).to.have.length(2)
  })
})
