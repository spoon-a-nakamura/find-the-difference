import styled from '@emotion/styled';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { colors } from '../components/Colors';

export default function Container({ children }) {
  const animate = {
    scale: 1,
    opacity: 1,
  };
  const initial = {
    scale: 0.9,
    opacity: 0,
  };
  const exit = {
    scale: 0.9,
    opacity: 0,
  };
  const transition = {
    duration: 0.5,
  };
  return (
    <ContainerWrapper
      animate={animate}
      initial={initial}
      exit={exit}
      transition={transition}
    >
      <Main>{children}</Main>
      <Footer />
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled(motion.div)`
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  text-align: center;
  background: ${colors.paleGreen} url(/images/common/bg.svg) 50% / 9.3rem
    13.4rem repeat;
  display: flex;
`;

const Main = styled(motion.div)`
  width: 100%;
  flex-grow: 1;
`;
