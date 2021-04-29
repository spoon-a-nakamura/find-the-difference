import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export default function Character({ eyeAnimate }) {
  const eyeTransition = {
    repeat: Infinity,
    repeatDelay: 1,
    type: 'tween',
    duration: 10,
  }
  return (
    <Face>
      <LeftEye animate={eyeAnimate} transition={eyeTransition} />
      <RightEye animate={eyeAnimate} transition={eyeTransition} />
    </Face>
  )
}
const Face = styled.div`
  width: 268px;
  height: 308px;
  background: url(/images/common/face@2x.png) center / contain no-repeat;
  display: flex;
  justify-content: center;
  z-index: 2;
  position: relative;
  margin: 10vw auto 0;
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
