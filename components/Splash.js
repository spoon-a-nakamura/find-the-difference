import styled from '@emotion/styled';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { colors } from '../components/Colors';
import Character from '../components/Character';

export default function Splash() {
  const eyeAnimate = {
    x: [0, 5, -10, 10, 0],
    y: [0, 1, 1, -1, 0],
  };
  const startAnimate = {
    scale: [1, 0.95, 1.05, 0.98, 1.01, 0.99, 1],
  };
  const startTransition = {
    repeat: Infinity,
    repeatDelay: 1,
    type: 'tween',
    duration: 2,
  };
  return (
    <Link href="/menu" passHref>
      <Wrapper>
        <Content>
          <Title>
            <TitleSub>スタジオスプーンの</TitleSub>
            <TitleMain>まちがい探し</TitleMain>
          </Title>
          <CharacterWrapper>
            <Character eyeAnimate={eyeAnimate} />
          </CharacterWrapper>
          <Start animate={startAnimate} transition={startTransition}>
            TAP TO START
          </Start>
        </Content>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  background: ${colors.green};
  min-height: calc(var(--vh, 1vh) * 100);
`;

const Content = styled.div`
  margin: auto;
  padding: 2rem;
`;

const CharacterWrapper = styled.div`
  margin-top: 4rem;
`;

const Title = styled.div`
  color: ${colors.white};
  text-align: center;
  margin-bottom: -12vw;
`;
const TitleSub = styled.div`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`;
const TitleMain = styled.div`
  font-size: 4rem;
`;
const Start = styled(motion.div)`
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  color: ${colors.white};
  margin-top: -5vw;
  margin-bottom: 8vw;
  text-align: center;
`;
