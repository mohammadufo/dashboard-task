import { styled } from 'styled-components'

interface Props {
  outlined?: string
}

const Container = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
`

const Right = styled.div`
  width: 100%;
  height: 267.39px;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 36px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  gap: 15px;
`

const Left = styled.div`
  width: 300px;
  height: 267.39px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Circle = styled.div`
  position: absolute;
  width: 300px;
  height: 304px;
  right: -64.54px;
  top: calc(50% - 304px / 2 - 2.7px);
  background-color: ${({ theme }) => theme.primary};
  border-radius: 155px;
`

const TextWrapper = styled.div`
  z-index: 2;
  text-align: center;
  margin-right: 25px;
`
const Title = styled.h2`
  font-weight: 800;
  font-size: 45px;
  color: #ffffff;
  line-height: 54px;
`

const Span = styled.span`
  font-weight: 800;
  font-size: 19px;
  line-height: 23px;
  color: ${({ theme }) => theme.disabledText};
`

const Desc = styled.p`
  font-weight: 900;
  font-size: 12px;
  color: ${({ theme }) => theme.disabledText};
  text-transform: uppercase;
`

const RightTitle = styled.p`
  font-weight: 900;
  font-size: 25px;
`
const Price = styled.p`
  font-weight: 800;
  font-size: 23px;
  color: ${({ theme }) => theme.successText};
`
const RightDesc = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.secondaryText};
`
const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
const Button = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36.4px;
  height: 19.83px;
  padding: 14.1714px 24.8px;
  font-weight: 900;
  font-size: 13px;
  line-height: 16px;
  border: none;
  cursor: pointer;
  color: ${({ theme, outlined }) =>
    outlined === 'yes' ? theme.primary : '#fff'};
  background-color: ${({ theme, outlined }) =>
    outlined === 'yes' ? '#fff' : theme.primary};
  border: 1px solid
    ${({ theme, outlined }) => (outlined === 'yes' ? theme.primary : 'none')};
  border-radius: 46.0571px;
`

const Total = () => {
  return (
    <Container>
      <Right>
        <Wrapper>
          <RightTitle>Total Ballance</RightTitle>
          <Price>+ $28,55</Price>
          <RightDesc>Last Transaction</RightDesc>
          <BtnGroup>
            <Button>top up</Button>
            <Button outlined="yes">withDraw</Button>
          </BtnGroup>
        </Wrapper>
      </Right>
      <Left>
        <Circle></Circle>
        <TextWrapper>
          <Title>
            $ 200<Span>.58</Span>
          </Title>
          <Desc>Wallet amount</Desc>
        </TextWrapper>
      </Left>
    </Container>
  )
}

export default Total
