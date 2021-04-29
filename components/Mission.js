import styled from '@emotion/styled'
import Link from 'next/link'
import { colors } from '../components/Colors'
import Container from '../components/Container'
import { device } from '../components/MediaQuery'

export default function Mission({ categoryName, stageNumber, correctNumber }) {
  return (
    <Container>
      <MissionWrapper>
        <MissionContents>
          <Title src='/images/mission/mission_heading.svg' alt='ミッション' />
          <MissionIcon src='/images/mission/mission_symbol.svg' alt='' />
          <StageName>
            {categoryName}ステージ {stageNumber}
          </StageName>
          <CorrectNumber>{correctNumber}個</CorrectNumber>
          <Span>の違うところを探してね。</Span>
          <MissionBottom>
            <CorrectIcon src='/images/mission/mission_correct.svg' alt='◯' />
            <CorrectIconNumber>× {correctNumber}個</CorrectIconNumber>
          </MissionBottom>
        </MissionContents>
        <Link href='stage'>
          <StartButton>START</StartButton>
        </Link>
      </MissionWrapper>
    </Container>
  )
}

const MissionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`
const MissionContents = styled.div`
  background: url(/images/mission/mission_bg.svg) center / contain no-repeat;
  width: 100%;
  height: 100vw;
  position: relative;
`
const Title = styled.img`
  position: relative;
  top: -4vw;
  display: block;
  margin: auto;
`
const MissionIcon = styled.img`
  width: 70px;
  display: block;
  margin: auto;
  @media ${device.mobileS} {
    margin-top: -10px;
    width: 50px;
  }
`
const StageName = styled.h2`
  font-size: 16px;
  margin-top: 10px;
  color: ${colors.green};
`
const CorrectNumber = styled.p`
  font-size: 40px;
  margin: 10px 0;
  color: ${colors.orange};
`
const Span = styled.p`
  font-size: 14px;
`
const MissionBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 8vw;
`
const CorrectIcon = styled.img`
  margin-right: 10px;
  @media ${device.mobileS} {
    width: 50px;
  }
`
const CorrectIconNumber = styled.p`
  font-size: 20px;
`
const StartButton = styled.div`
  padding: 20px;
  width: 60%;
  margin-top: 20px;
  background: ${colors.orange};
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  border-radius: 100px;
`
