import React from 'react'
import { Line } from 'react-chartjs-2'

const colorOld = '70, 184, 218'
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

const options = data =>  ({
  responsive: true,
  legend: {
    display: true,
  },
  scales: {
    xAxes: [{
      display: false,
      // type: 'time',
      // ticks: {
      //   autoScip: true,
      //   minRotation: 45,
      // },
      // time: {
      //   min: 'week',
      //   max: 'year',
      //   // round: true
      // }
    }],
  }
})

export default function ({
  data,
  history = []
}) {
  const chartData = makeData(history, data.long)
  return (
    <section>
      <Line data={chartData} options={options(data)} />
    </section>
  )
}
