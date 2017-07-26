const api = {
  fetchCoins () {
    return fetch('https://api.coinmarketcap.com/v1/ticker/?limit=200')
    .then(res => res.json())
  }
}

export default api
