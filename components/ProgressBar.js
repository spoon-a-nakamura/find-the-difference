import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { colors } from '../components/Colors'

export default function ProgressBar({ countTimer }) {
  // カウントタイマーのステージ
  const timerLow = countTimer > 50
  const timerMiddle = 50 > countTimer && countTimer > 20
  const timerHigh = 20 > countTimer
  console.log(timerLow)
  console.log(timerMiddle)
  console.log(timerHigh)

  const percentsOffset = `-${countTimer}%`
  return (
    <ProgressWrapper>
      <Progress
        initial={false}
        transition={{ easings: 'ease' }}
        animate={{
          x: percentsOffset,
        }}
      />
    </ProgressWrapper>
  )
}

const ProgressWrapper = styled(motion.div)`
  margin-top: 10px;
  width: 85%;
  height: 20px;
  border-radius: 20px;
  background: ${colors.white};
  border: 4px solid ${colors.white};
  position: relative;
  overflow: hidden;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`

const Progress = styled(motion.div)`
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  border-radius: 20px;
  background: ${colors.orange};
  /* background: ${(countTimer) =>
    countTimer < 50 ? colors.orange : colors.red};
  opacity: ${(countTimer) => (countTimer < 50 ? '0.5' : '1')}; */
`
