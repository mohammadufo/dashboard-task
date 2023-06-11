import { styled } from 'styled-components'
import Sidebar from '../components/Sidebar'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Right = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
`
const Left = styled.div`
  background-color: orangered;
  height: 100%;
  flex: 4;
`

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Right>
        <Sidebar />
      </Right>
      <Left>{children}</Left>
    </Container>
  )
}

export default Layout
