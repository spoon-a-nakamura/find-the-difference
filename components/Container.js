import styled from '@emotion/styled'
import Footer from './Footer'
import ChangeScreen from './ChangeScreen'
import { colors } from '../components/Colors'

export default function Container({ children }) {
  return (
    <ContainerWrapper>
      <ChangeScreen>
        <Main>{children}</Main>
      </ChangeScreen>
      <Footer />
    </ContainerWrapper>
  )
}

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background: ${colors.paleGreen} url(/images/common/bg.svg) center / cover;
`

const Main = styled.div`
  width: 100%;
  height: 100%;
`
