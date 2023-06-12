import { BsThreeDots } from 'react-icons/bs'
import { styled } from 'styled-components'
import PieChar from './PieChar'

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
  position: relative;
`

const TextWrapper = styled.div`
  position: absolute;
  top: 35%;
  left: 35%;
  width: 157px;
`
const Price = styled.span`
  font-weight: 800;
  font-size: 45px;
  line-height: 54px;
`
const Span = styled.span`
  font-weight: 800;
  font-size: 19px;
  line-height: 23px;
  color: ${({ theme }) => theme.secondary};
`
const Desc = styled.span`
  font-weight: 900;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.17em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.secondary};
  opacity: 0.5;
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Spend = () => {
  return (
    <Container>
      <Top>
        <Title>Spending This Month</Title>
        <Icon>
          <BsThreeDots />
        </Icon>
      </Top>
      <Main>
        <PieChar />
        <TextWrapper>
          <TextBox>
            <Price>
              $ 138<Span>.00</Span>
            </Price>
            <Desc>SPEND THIS MONTH</Desc>
          </TextBox>
        </TextWrapper>
      </Main>
    </Container>
  )
}

export default Spend
