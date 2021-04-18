import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from '@emotion/styled'
import useCountdown from '@bradgarropy/use-countdown'
import Confetti from 'react-confetti'

export default function CountDownTimer() {
  const [complete, setComplete] = useState(false)

  const countdown = useCountdown({
    seconds: 60,
    onCompleted: () => setComplete(true),
  })

  return (
    <CountDownContainer>
      {complete && <Confetti />}
      <AnimatePresence>
        <motion.h1
          key={countdown.seconds}
          exit={{ y: 10, opacity: 0, position: 'absolute' }}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: 'easeOut',
            duration: 0.5,
          }}
        >
          {countdown.seconds}
        </motion.h1>
      </AnimatePresence>
    </CountDownContainer>
  )
}

const CountDownContainer = styled(motion.div)`
  width: 100%;
  color: #333;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px auto;
  padding: 5px;
  font-size: 12px;
`
