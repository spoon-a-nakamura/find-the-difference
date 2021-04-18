import { motion } from 'framer-motion'

export default function ScreenNext({ children }) {
  return (
    <motion.div
      animate={{
        x: 0,
        opacity: 1,
      }}
      initial={{
        x: 100,
        opacity: 0,
      }}
      exit={{
        x: -100,
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      {children}
    </motion.div>
  )
}
