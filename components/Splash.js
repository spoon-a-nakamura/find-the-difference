import styled from '@emotion/styled'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { colors } from '../components/Colors'

export default function Splash({ isShow }) {
  const eyeAnimate = {
    x: [0, 5, -10, 10, 0],
    y: [0, 1, 1, -1, 0],
  }
  const eyeTransition = {
    repeat: Infinity,
    repeatDelay: 1,
    type: 'tween',
    duration: 10,
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
      <Wrapper isShow={isShow}>
        <Title>
          <TitleSub>スタジオスプーンの</TitleSub>
          <TitleMain>まちがい探し</TitleMain>
        </Title>
        <Face>
          <LeftEye animate={eyeAnimate} transition={eyeTransition} />
          <RightEye animate={eyeAnimate} transition={eyeTransition} />
        </Face>
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
const Face = styled.div`
  width: 268px;
  height: 308px;
  background: url(/images/common/face@2x.png) center / contain no-repeat;
  display: flex;
  justify-content: center;
`
const LeftEye = styled(motion.div)`
  width: 40px;
  height: 40px;
  background: url(/images/common/left_eye@2x.png) center / contain no-repeat;
  margin-right: 30px;
  margin-top: 115px;
  position: relative;
`
const RightEye = styled(motion.div)`
  width: 40px;
  height: 40px;
  background: url(/images/common/left_eye@2x.png) center / contain no-repeat;
  margin-top: 115px;
  position: relative;
`
const Start = styled(motion.div)`
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 50px;
  font-weight: bold;
`
