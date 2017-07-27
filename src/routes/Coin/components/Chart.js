import React from 'react'
import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'

const color = '217, 83, 79'

function makeData (history, label) {
  const labels = []
  const data = []

  history.forEach((price, pos) => {
    let d

    if (pos % 20 === 0) {
      d = new Date(price[0])
      labels.push(d)
      data.push(price[1])
    }
  })

  return {
    datasets: [{
      label,
      backgroundColor: `rgba(${color},0.3)`,
      borderColor: `rgba(${color},1)`,
      fill: 'origin',
      data,
    }],
    labels
  }
}

const options = data => ({
  responsive: true,
  legend: {
    display: true,
  },
  scales: {
    xAxes: [{
      display: false,
    }],
  }
})

const Chart = ({
  data,
  history = []
}) => (
  <section>
    <Line data={makeData(history, data.long)} options={options(data)} />
  </section>
)

Chart.propTypes = {
  data: PropTypes.object,
  history: PropTypes.array
}

export default Chart
