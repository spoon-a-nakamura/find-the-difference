import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { colors } from '../components/Colors';
import { defaultTime } from '../components/DefaultTime';

export default function ProgressBar({ countTimer, stageSlug }) {
  // プログレスの進捗率
  const percentsOffset = 100 - (countTimer / defaultTime) * 100;

  // カウントダウンタイマーの状況
  const isFirstHalf = 60 > percentsOffset;
  const isClimax = 85 < percentsOffset;

  const progressBaseColor =
    stageSlug === 'animal' ? colors.orange : colors.purple;
  const progressClimaxColor =
    stageSlug === 'animal' ? colors.red : colors.darkPurple;

  return (
    <>
      <ProgressWrapper>
        <Progress
          initial={false}
          transition={{ easings: 'ease' }}
          animate={{
            width: `${percentsOffset}%`,
          }}
          style={{
            background: isClimax ? progressClimaxColor : progressBaseColor,
            opacity: isFirstHalf ? 0.4 : 1,
          }}
        />
      </ProgressWrapper>
    </>
  );
}

const ProgressWrapper = styled(motion.div)`
  width: 85%;
  height: 2rem;
  border-radius: 2rem;
  position: relative;
  overflow: hidden;
  margin-top: 1rem;
  background: ${colors.white};
  box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.1);
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    border: 0.4rem solid ${colors.white};
  }
`;
const Progress = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  position: absolute;
  left: 0;
  transition: all ease 0.3s;
`;
