import styled from '@emotion/styled'
import Footer from './Footer'
import { motion } from 'framer-motion'
import { colors } from '../components/Colors'
import {
  GameLevelProvider,
  useGameLevelContext,
} from '../components/GameLevelContext'

export default function Container({ children }) {
  // コンテキストに保存されている初期値をgameLevelに代入
  const { gameLevel, setGameLevel } = useGameLevelContext()
  console.log(gameLevel)
  console.log(setGameLevel())
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
    <GameLevelProvider value={(gameLevel, setGameLevel)}>
      <ContainerWrapper
        animate={animate}
        initial={initial}
        exit={exit}
        transition={transition}
      >
        <Main>{children}</Main>
        <Footer />
      </ContainerWrapper>
    </GameLevelProvider>
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
