import styled from '@emotion/styled'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  return (
    <Container>
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 95%;
`
