import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { colors } from '../components/Colors'

export default function ProgressBar({ countTimer }) {
  // カウントダウンタイマーの状況
  const isFirstHalf = countTimer > 50
  const isClimax = 20 < countTimer

  // プログレスの進捗率
  const percentsOffset = `-${countTimer}%`

  return (
    <>
      <ProgressWrapper>
        <Progress
          initial={false}
          transition={{ easings: 'ease' }}
          animate={{
            x: percentsOffset,
          }}
          style={{
            background: isClimax ? colors.orange : colors.red,
            opacity: isFirstHalf ? 0.4 : 1,
          }}
        />
      </ProgressWrapper>
    </>
  )
}

const ProgressWrapper = styled(motion.div)`
  width: 85%;
  height: 20px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  margin-top: 10px;
  background: ${colors.white};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: 4px solid ${colors.white};
  }
`
const Progress = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  position: absolute;
  left: 0;
  transition: all ease 0.3s;
`
