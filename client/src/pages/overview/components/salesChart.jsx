import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'

export default function SalesChart() {
  const xAxis = ['2017', '2018', '2019', '2020', '2021', '2022']
  const sales = [4, 16, 31, 81, 110, 140]
  const profit = [140, 240, 500, 1000, 1500, 2000]

  return (
    <LineChart
      height={500}
      series={[
        { data: sales, label: 'Sales', area: false },
        { data: profit, label: 'Profit' },
      ]}
      xAxis={[{ scaleType: 'point', data: xAxis }]}
      // sx={{
      //   '.MuiLineElement-root, .MuiMarkElement-root': {
      //     display: 'none',
      //   },
      // }}
    />
  )
}
