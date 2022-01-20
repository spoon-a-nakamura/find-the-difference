import styled from '@emotion/styled';
import Link from 'next/link';
import { colors } from '../components/Colors';
import Container from '../components/Container';
import { device } from '../components/MediaQuery';

export default function Mission({ categoryName, categoryNumber, href }) {
  return (
    <Container>
      <MissionWrapper>
        <MissionContents>
          <Title
            src={`/images/mission/mission_heading_${categoryNumber}.svg`}
            alt="ミッション"
          />
          <MissionIcon
            src={`/images/mission/mission_symbol_${categoryNumber}.svg`}
            alt=""
          />
          <StageName categoryNumber={categoryNumber}>
            {categoryName}ステージ
          </StageName>
          <CorrectNumber categoryNumber={categoryNumber}>４個</CorrectNumber>
          <Span>の違うところを探してね。</Span>
          <MissionBottom>
            <CorrectIcon
              src={`/images/mission/mission_correct_${categoryNumber}.svg`}
              alt="◯"
            />
            <CorrectIconNumber>× ４個</CorrectIconNumber>
          </MissionBottom>
        </MissionContents>
        <Link href={href} prefetch={true}>
          <StartButton categoryNumber={categoryNumber}>START</StartButton>
        </Link>
      </MissionWrapper>
    </Container>
  );
}

const MissionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const MissionContents = styled.div`
  background: url(/images/mission/mission_bg.svg) center / contain no-repeat;
  width: 100%;
  height: 100vw;
  position: relative;
`;
const Title = styled.img`
  position: relative;
  top: -4vw;
  display: block;
  margin: auto;
`;
const MissionIcon = styled.img`
  width: 7rem;
  display: block;
  margin: auto;
  @media ${device.mobileS} {
    margin-top: -1rem;
    width: 5rem;
  }
`;
const StageName = styled.h2`
  font-size: 1.6rem;
  margin-top: 1rem;
  color: ${({ categoryNumber }) =>
    categoryNumber === '01' ? colors.green : colors.purple};
`;
const CorrectNumber = styled.p`
  font-size: 4rem;
  margin: 1rem 0;
  color: ${({ categoryNumber }) =>
    categoryNumber === '01' ? colors.orange : colors.green};
`;
const Span = styled.p`
  font-size: 1.4rem;
`;
const MissionBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 8vw;
`;
const CorrectIcon = styled.img`
  margin-right: 1rem;
  @media ${device.mobileS} {
    width: 5rem;
  }
`;
const CorrectIconNumber = styled.p`
  font-size: 2rem;
`;
const StartButton = styled.div`
  padding: 2rem;
  width: 60%;
  margin-top: 2rem;
  background: ${({ categoryNumber }) =>
    categoryNumber === '01' ? colors.orange : colors.purple};
  color: ${colors.white};
  font-weight: bold;
  font-size: 2rem;
  border-radius: 10rem;
`;
