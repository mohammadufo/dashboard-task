import { BsThreeDots } from 'react-icons/bs'
import { styled } from 'styled-components'
import BarChart from './BarChart'

const Container = styled.div`
  margin: 24px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
const Title = styled.span`
  font-weight: 900;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.02em;
`

const Icon = styled.div`
  cursor: pointer;
`

const Main = styled.div`
  width: 100%;
`

const Reports = () => {
  return (
    <Container>
      <Top>
        <Title>Report</Title>
        <Icon>
          <BsThreeDots />
        </Icon>
      </Top>
      <Main>
        <BarChart />
      </Main>
    </Container>
  )
}

export default Reports
