import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { colors } from './Colors';

const messages = [
  'NICE!',
  'GOOD!',
  'COOL!',
  'GREAT!',
  'AWESOME!',
  'PERFECT!',
  'WONDERFUL!',
  'MIRACLE!',
  'CORRECT!',
  'MAGIC!',
  'EXCELLENT!',
  'AMAZING!',
  'LOVELY!',
  'BRILLIANT!',
  'FANTASTIC!',
  'INCREDIBLE!',
  'UNBELIEVABLE!',
];

export default function StageContents({ isNice }) {
  const [fixMessage, setFixMessage] = useState(null);
  useEffect(() => {
    setFixMessage(messages[Math.floor(Math.random() * messages.length)]);
  }, [isNice]);
  return <PraiseMessage isNice={isNice}>{fixMessage}</PraiseMessage>;
}
const PraiseMessage = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 49%;
  width: 100%;
  color: ${colors.white};
  z-index: 1;
  font-size: 60px;
  pointer-events: none;
  text-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
  will-change: opacity, transform;
  transition: all ease-in-out 0.5s;
  opacity: ${({ isNice }) => (isNice ? 1 : 0)};
  animation: ${({ isNice }) =>
    isNice ? 'messageAnimation forwards 1.5s ease-in-out' : 'none'};
  @keyframes messageAnimation {
    0% {
      opacity: 0;
      transform: scale(0) rotate(40deg) translateY(150%);
    }
    50% {
      opacity: 1;
      transform: scale(0.5) rotate(0) translateY(-50%);
    }
    100% {
      opacity: 0;
      transform: scale(1.5) rotate(-5deg) translateY(-50%);
    }
  }
`;
