import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export default function Character({ eyeAnimate, size }) {
  const eyeTransition = {
    repeat: Infinity,
    repeatDelay: 1,
    type: 'tween',
    duration: 10,
  }
  return (
    <Base style={size}>
      <LeftEye animate={eyeAnimate} transition={eyeTransition} />
      <RightEye animate={eyeAnimate} transition={eyeTransition} />
    </Base>
  )
}
const Base = styled(motion.div)`
  width: 293px;
  height: 432px;
  background: url(/images/character/base@2x.png) center / contain no-repeat;
  display: flex;
  justify-content: center;
  z-index: 0;
  position: relative;
  margin: 10vw auto 0;
`
const LeftEye = styled(motion.div)`
  width: 51px;
  height: 54px;
  background: url(/images/character/eye_left@2x.png) center / contain no-repeat;
  margin-right: 30px;
  margin-top: 160px;
  position: relative;
`
const RightEye = styled(motion.div)`
  width: 51px;
  height: 54px;
  background: url(/images/character/eye_right@2x.png) center / contain no-repeat;
  margin-top: 160px;
  position: relative;
`
