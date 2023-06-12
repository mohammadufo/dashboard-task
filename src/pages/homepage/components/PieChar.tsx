// eslint-disable-next-line
// @ts-nocheck
import ReactApexChart from 'react-apexcharts'
import { styled } from 'styled-components'

const Container = styled.div``

const PieChar = () => {
  const chartData = {
    stroke: {
      width: 3,
      curve: 'smooth',
      lineCap: 'butt',
      dashArray: 0,
    },
    series: [44, 17, 15, 30],
    colors: ['#4C49ED', '#AFAEFE', '#141197', '#4FD18B'],
    labels: ['Personal ', 'Shopping', 'Phone', 'Other'],
    options: {
      pie: {
        pieWidth: '70%',
      },

      chart: {
        type: 'donut',
      },
      stroke: {
        curve: 'smooth',
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: 'bottom',
    },
  }
  return (
    <Container>
      <div id="chart">
        <ReactApexChart
          options={chartData}
          series={chartData.series}
          legend={chartData.legend}
          height={380}
          type="donut"
        />
      </div>
    </Container>
  )
}

export default PieChar
