const api = {
  getCoinData (id) {
    return fetch(`http://www.coincap.io/page/${id}`)
      .then(res => res.json())
      .then(data => (new Promise((resolve, reject) => {
        if (data.error) {
          reject(data.error)
        } else {
          resolve(data)
        }
      })))
  },
  getCoinHistory (id) {
    return fetch(`http://www.coincap.io/history/1day/${id}`).then(res => res.json())
  }
}

export default api
