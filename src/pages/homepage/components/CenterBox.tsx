import { styled } from 'styled-components'
import { BsGraphUpArrow } from 'react-icons/bs'

interface Prop {
  title: string
  isUp?: boolean
  hasBtn?: boolean
}

interface StyledProp {
  ascending: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 14px 30px 13px 27px;
  gap: 10px;
`
const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.secondaryText};
`
const Price = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 29px;
  line-height: 35px;
`
const Action = styled.div<StyledProp>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 12px;
  gap: 4px;
  background-color: ${({ theme, ascending }) =>
    ascending === 'yes' ? theme.bgSuccess : theme.bgDanger};
  border-radius: 19px;
  color: ${({ theme, ascending }) =>
    ascending === 'yes' ? theme.successText : theme.dangerText};
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
`
const Span = styled.span``
const Small = styled.span`
  font-weight: 800;
  font-size: 19px;
  line-height: 23px;
  color: ${({ theme }) => theme.secondary};
`

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 12px;
  gap: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 46.0571px;
  text-transform: uppercase;
`

const CenterBox = (props: Prop) => {
  const { title, isUp, hasBtn } = props

  return (
    <Container>
      <Title>{title}</Title>
      <Price>
        $ 18532<Small>.52</Small>
      </Price>
      {!hasBtn ? (
        <Action ascending={isUp ? 'yes' : 'no'}>
          <BsGraphUpArrow />
          <Span>+ 11%</Span>
        </Action>
      ) : (
        <Button>View Details</Button>
      )}
    </Container>
  )
}

export default CenterBox
