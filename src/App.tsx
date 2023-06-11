import { styled, ThemeProvider } from 'styled-components'
import Layout from './layout/Layout'
import Home from './pages/homepage/Home'
import { lightThem } from './utils/theme'

const Container = styled.div``

function App() {
  return (
    <>
      <ThemeProvider theme={lightThem}>
        <Container>
          <Layout>
            <Home />
          </Layout>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
