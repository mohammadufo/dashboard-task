import { styled } from 'styled-components'
import Total from './components/Total'

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
  background-color: teal;
  border-radius: 11px;
`

const BottomChild = styled.div`
  width: 547.46px;
  height: 447px;
  background-color: aqua;
  border-radius: 16px;
`

const Home = () => {
  return (
    <Container>
      <Top>
        <TopChild>
          <Total />
        </TopChild>
        <TopChild></TopChild>
      </Top>
      <Center>
        <CenterChild></CenterChild>
        <CenterChild></CenterChild>
        <CenterChild></CenterChild>
        <CenterChild></CenterChild>
      </Center>
      <Bottom>
        <BottomChild></BottomChild>
        <BottomChild></BottomChild>
      </Bottom>
    </Container>
  )
}

export default Home
