import { styled } from 'styled-components'
import Total from './components/Total'
import CenterBox from './components/CenterBox'
import Latest from './components/Latest'
import Reports from './components/Reports'
import Spend from './components/Spend'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0px 36px;
  gap: 37px;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

const Center = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

const TopChild = styled.div`
  width: 547.46px;
  height: 267.39px;
  box-shadow: 8px 13px 44px -6px #dfdbf7;
  border-radius: 20px;
`

const CenterChild = styled.div`
  gap: 10px;
  width: 258.75px;
  height: 143.07px;
  border-radius: 11px;
  background-color: #fff;
`

const BottomChild = styled.div`
  width: 547.46px;
  height: 447px;
  background-color: #fff;
  border-radius: 16px;
`

const Home = () => {
  return (
    <Container>
      <Top>
        <TopChild>
          <Total />
        </TopChild>
        <TopChild>
          <Reports />
        </TopChild>
      </Top>
      <Center>
        <CenterChild>
          <CenterBox title="Total Income" isUp={true} />
        </CenterChild>
        <CenterChild>
          <CenterBox title="Total Saves" isUp={false} />
        </CenterChild>
        <CenterChild>
          <CenterBox title="Total Expense" isUp={true} />
        </CenterChild>
        <CenterChild>
          <CenterBox title="Upcoming" hasBtn={true} />
        </CenterChild>
      </Center>
      <Bottom>
        <BottomChild>
          <Latest />
        </BottomChild>
        <BottomChild>
          <Spend />
        </BottomChild>
      </Bottom>
    </Container>
  )
}

export default Home
