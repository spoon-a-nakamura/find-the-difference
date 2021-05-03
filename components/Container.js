import styled from '@emotion/styled'
import Footer from './Footer'
import { motion } from 'framer-motion'
import { colors } from '../components/Colors'

export default function Container({ children }) {
  const animate = {
    scale: 1,
    opacity: 1,
  }
  const initial = {
    scale: 0.9,
    opacity: 0,
  }
  const exit = {
    scale: 0.9,
    opacity: 0,
  }
  const transition = {
    duration: 0.5,
  }
  return (
    <ContainerWrapper
      animate={animate}
      initial={initial}
      exit={exit}
      transition={transition}
    >
      <Main>{children}</Main>
      <Footer />
    </ContainerWrapper>
  )
}

const ContainerWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  text-align: center;
  background: ${colors.paleGreen} url(/images/common/bg.svg) center / cover;
`

const Main = styled(motion.div)`
  width: 100%;
  height: 100%;
`
