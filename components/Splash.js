import styled from '@emotion/styled'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { colors } from '../components/Colors'
import Character from '../components/Character'

export default function Splash({ isShow }) {
  const eyeAnimate = {
    x: [0, 5, -10, 10, 0],
    y: [0, 1, 1, -1, 0],
  }
  const startAnimate = {
    scale: [1, 0.95, 1.05, 0.98, 1.01, 0.99, 1],
  }
  const startTransition = {
    repeat: Infinity,
    repeatDelay: 1,
    type: 'tween',
    duration: 2,
  }
  return (
    <Link href='menu'>
      <Wrapper isShow={isShow} prefetch={true}>
        <Title>
          <TitleSub>スタジオスプーンの</TitleSub>
          <TitleMain>まちがい探し</TitleMain>
        </Title>
        <Character eyeAnimate={eyeAnimate} />
        <Start animate={startAnimate} transition={startTransition}>
          TAP TO START
        </Start>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${colors.green};
  /* transition: all 0.5s ease-in-out; */
  /* opacity: ${({ isShow }) => (isShow ? 1 : 0)}; */
  /* pointer-events: ${({ isShow }) => (isShow ? 'initial' : 'none')}; */
`
const Title = styled.div`
  color: #fff;
  text-align: center;
`
const TitleSub = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`
const TitleMain = styled.div`
  font-size: 40px;
`
const Start = styled(motion.div)`
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 50px;
  font-weight: bold;
`
