import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import { render } from 'enzyme'

describe('(View) Home', () => {
  let _component

  let props = {
    loading: true,
    availvableCoins: [],
    selectedCoins: [],
    coinsFilter: '',
    search: '',
    toggleCoin: () => {},
    setCoinsSearch: () => {},
    setCoinsFilter: () => {}
  }

  it('Renders preloader if loading', () => {
    let props = {
      loading: true,
    }
    _component = render(<HomeView {...props} />)
    const preloader = _component.find('.preloader')
    expect(preloader).to.exist()
  })

  it('Has headling \'Top 200 coins\' if loaded', () => {
    let testProps = {
      ...props,
      loading: false,
    }
    _component = render(<HomeView {...testProps} />)
    const node = _component.find('h1')
    expect(node).to.exist()
    expect(node.text()).to.equal('Top 200 coins')
  })
})
