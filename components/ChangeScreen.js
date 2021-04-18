import { motion } from 'framer-motion'

export default function ChangeScreen({ children }) {
  return (
    <motion.div
      animate={{
        scale: 1,
        opacity: 1,
      }}
      initial={{
        scale: 0.9,
        opacity: 0,
      }}
      exit={{
        scale: 0.9,
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
        flex: 1,
      }}
    >
      {children}
    </motion.div>
  )
}
