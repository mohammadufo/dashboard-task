// eslint-disable-next-line
// @ts-nocheck
import ReactApexChart from 'react-apexcharts'
import { styled } from 'styled-components'
const Container = styled.div`
  .apx-legend-position-bottom {
    display: none !important;
  }
`

const BarChart = () => {
  const state = {
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      },
      yaxis: {},
      fill: {
        opacity: 1,
        colors: ['#4C49ED', '#AFAEFE'],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands'
          },
        },
      },
    },
  }

  return (
    <Container>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={170}
        />
      </div>
    </Container>
  )
}

export default BarChart
