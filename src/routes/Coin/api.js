const api = {
  getCoinData (id) {
    return fetch(`http://www.coincap.io/page/${id}`).then(res => res.json())
  },
  getCoinHistory (id) {
    return fetch(`http://www.coincap.io/histor y/1day/${id}`).then(res => res.json())
  }
}

export default api
