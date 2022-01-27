import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export default function Character({ eyeAnimate, size }) {
  const eyeTransition = {
    repeat: Infinity,
    repeatDelay: 1,
    type: 'tween',
    duration: 10,
  };
  return (
    <Base style={size}>
      <LeftEye animate={eyeAnimate} transition={eyeTransition} />
      <RightEye animate={eyeAnimate} transition={eyeTransition} />
    </Base>
  );
}
const Base = styled(motion.div)`
  width: 29.3rem;
  height: 43.2rem;
  background: url(/images/character/base@2x.png) center / contain no-repeat;
  display: flex;
  justify-content: center;
  z-index: 0;
  position: relative;
  margin: auto;
`;
const LeftEye = styled(motion.div)`
  width: 5.1rem;
  height: 5.4rem;
  background: url(/images/character/eye_left@2x.png) center / contain no-repeat;
  margin-right: 3rem;
  margin-top: 16rem;
  position: relative;
`;
const RightEye = styled(motion.div)`
  width: 5.1rem;
  height: 5.4rem;
  background: url(/images/character/eye_right@2x.png) center / contain no-repeat;
  margin-top: 16rem;
  position: relative;
`;
