import { styled } from 'styled-components'
import { BsThreeDots } from 'react-icons/bs'
import { latestList } from '../../../utils/data'

interface Prop {
  color: string
}

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
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`
const ListItem = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
`
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const Left = styled.div``
const Img = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
`
const Texts = styled.div``
const P = styled.p`
  font-weight: 800;
  font-size: 17px;
  line-height: 21px;
  letter-spacing: -0.02em;
`
const Name = styled.span`
  color: ${({ theme }) => theme.primary};
`

const Desc = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.secondaryText};
`
const Price = styled.span<Prop>`
  font-weight: 800;
  font-size: 18px;
  line-height: 23px;
  text-align: right;
  letter-spacing: -0.02em;
  color: ${({ theme, color }) =>
    color === 'red' ? theme.dangerText : theme.successText};
`

const Latest = () => {
  return (
    <Container>
      <Top>
        <Title>Latest Transactions</Title>
        <Icon>
          <BsThreeDots />
        </Icon>
      </Top>
      <Main>
        <List>
          {latestList.map((item) => (
            <ListItem key={item.id}>
              <Right>
                <Img alt="" src={item.img} />
                <Texts>
                  <P>
                    {item.title} <Name>{item.name}</Name>
                  </P>
                  <Desc>{item.desc}</Desc>
                </Texts>
              </Right>
              <Left>
                <Price color={item.dec ? 'red' : 'green'}>{item.price}</Price>
              </Left>
            </ListItem>
          ))}
        </List>
      </Main>
    </Container>
  )
}

export default Latest
