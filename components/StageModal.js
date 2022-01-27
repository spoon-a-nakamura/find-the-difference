import styled from '@emotion/styled';
import Link from 'next/link';
import { colors } from '../components/Colors';
import Character from '../components/Character';
import Confetti from 'react-confetti';

export default function StageModal({
  isCleared,
  isFailed,
  isFinished,
  stageId,
  stageSlug,
  stageCategory,
  onClickRetry,
  onClickNext,
  onClickBack,
}) {
  const eyeAnimateCleared = {
    x: [0, 5, -7, 8, 0],
    y: [10, 14, 13, 11, 10],
  };
  const eyeAnimateFailed = {
    x: [0, 5, -7, 8, 0],
    y: [-2, -6, -5, -3, -2],
  };
  const clearText = (
    <ColorfulText>
      <ColorfulText1>C</ColorfulText1>
      <ColorfulText2>L</ColorfulText2>
      <ColorfulText3>E</ColorfulText3>
      <ColorfulText4>A</ColorfulText4>
      <ColorfulText5>R</ColorfulText5>
      <ColorfulText6>!</ColorfulText6>
    </ColorfulText>
  );
  const finishText = (
    <ColorfulText>
      <ColorfulText1>F</ColorfulText1>
      <ColorfulText2>I</ColorfulText2>
      <ColorfulText3>N</ColorfulText3>
      <ColorfulText4>I</ColorfulText4>
      <ColorfulText5>S</ColorfulText5>
      <ColorfulText6>H</ColorfulText6>
      <ColorfulText7>!</ColorfulText7>
    </ColorfulText>
  );
  return (
    <>
      <Modal isOpen={isCleared || isFailed || isFinished}>
        {(isCleared || isFinished) && (
          <Confetti
            width={375}
            height={667}
            recycle={true}
            numberOfPieces={40}
            colors={[
              colors.paleGreen,
              colors.green,
              colors.orange,
              colors.yellow,
              colors.purple,
              colors.lightPurple,
            ]}
            style={{
              width: '100%',
              height: 'auto',
              position: 'fixed',
              top: 0,
              left: 0,
            }}
          />
        )}
        <Content>
          <CharacterWrapper isOpen={isCleared || isFailed || isFinished}>
            <Character
              eyeAnimate={isCleared ? eyeAnimateCleared : eyeAnimateFailed}
            />
          </CharacterWrapper>
          <ModalContainer
            isCleared={isCleared}
            isFinished={isFinished}
            isOpen={isCleared || isFailed || isFinished}
          >
            <StageName isCleared={isCleared} isFinished={isFinished}>
              {isFinished
                ? `${stageCategory}ステージ`
                : isCleared
                ? '全てのステージ'
                : `${stageCategory}ステージ ${stageId}`}
            </StageName>
            <Result isCleared={isCleared} isFinished={isFinished}>
              {isFinished ? finishText : isCleared ? clearText : 'GAME OVER'}
            </Result>
            <ButtonWrapper>
              <ButtonLeft
                onClick={isCleared || isFinished ? onClickRetry : onClickNext}
                stageSlug={stageSlug}
              >
                {isCleared || isFinished ? 'もう一度' : 'スキップ'}
              </ButtonLeft>
              <ButtonRight
                onClick={
                  isFinished
                    ? onClickBack
                    : isCleared
                    ? onClickNext
                    : onClickRetry
                }
                stageSlug={stageSlug}
              >
                {isFinished ? '終了する' : isCleared ? '次へ進む' : 'リトライ'}
              </ButtonRight>
            </ButtonWrapper>
            <Link href="/">
              <BackHome stageSlug={stageSlug}>HOMEに戻る</BackHome>
            </Link>
          </ModalContainer>
        </Content>
      </Modal>
    </>
  );
}

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  will-change: opacity;
  transition: opacity ease-in-out 0.5s;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  pointer-events: ${({ isOpen }) => (isOpen ? 'initial' : 'none')};
  overflow-y: auto;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 100%;
`;

const ModalContainer = styled.div`
  background: url(/images/stage/bg_cleared.svg) center / contain no-repeat;
  background-image: ${({ isCleared, isFinished }) =>
    isCleared || isFinished
      ? 'url(/images/stage/bg_cleared.svg)'
      : 'url(/images/stage/bg_failed.svg)'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 30.8rem;
  height: 30.8rem;
  min-height: 30.8rem;
  z-index: 3;
  will-change: opacity, transform;
  transition: all ease-in-out 0.5s 0.3s;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  margin-top: ${({ isCleared, isFinished }) =>
    isCleared || isFinished ? '-1.5rem' : '-5.5rem'};
  transform: ${({ isOpen }) => (isOpen ? 'scale(1)' : 'scale(0)')};
  top: ${({ isCleared, isFinished }) =>
    isCleared || isFinished ? '-2.5rem' : '-5.5rem'};
  transition: all ease 0.5s;
`;
const CharacterWrapper = styled.div`
  transform-origin: top;
  will-change: opacity, transform;
  transition: opacity ease-in-out 0s 1s, transform ease-in-out 1s 0.5s;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transform: ${({ isOpen }) =>
    isOpen ? 'scale(0.5) translateY(0)' : 'scale(0.5) translateY(30.0rem)'};
  margin-top: -2rem;
  margin-bottom: -22.5rem;
  transition: all ease 0.5s;
`;
const StageName = styled.p`
  margin-top: ${({ isCleared, isFinished }) =>
    isCleared || isFinished ? '7vw' : '-5vw'};
  display: block;
  font-size: 1.6rem;
`;
const Result = styled.p`
  display: block;
  font-size: ${({ isCleared, isFinished }) =>
    isCleared || isFinished ? '3.8rem' : '3.3rem'};
  margin-top: 0.5rem;
  color: ${({ isCleared }) => (isCleared ? colors.orange : colors.black)};
`;
const ColorfulText = styled.span``;
const ColorfulText1 = styled.span`
  color: ${colors.yellow};
`;
const ColorfulText2 = styled.span`
  color: ${colors.orange};
`;
const ColorfulText3 = styled.span`
  color: ${colors.green};
`;
const ColorfulText4 = styled.span`
  color: ${colors.yellow};
`;
const ColorfulText5 = styled.span`
  color: ${colors.orange};
`;
const ColorfulText6 = styled.span`
  color: ${colors.green};
`;
const ColorfulText7 = styled.span`
  color: ${colors.orange};
`;
const ButtonWrapper = styled.div`
  margin-top: 2rem;
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonLeft = styled.div`
  color: ${({ stageSlug }) =>
    stageSlug === 'animal' ? colors.green : colors.purple};
  padding: 1.5rem 3rem;
  background: ${({ stageSlug }) =>
    stageSlug === 'animal' ? colors.paleGreen : colors.lightPurple};
  border-radius: 10rem;
  margin-right: 1rem;
`;
const ButtonRight = styled.div`
  color: ${colors.white};
  padding: 1.5rem 3rem;
  background: ${({ stageSlug }) =>
    stageSlug === 'animal' ? colors.green : colors.purple};
  border-radius: 10rem;
`;
const BackHome = styled.a`
  margin-top: 1.5rem;
  font-size: 1.4rem;
  color: ${({ stageSlug }) =>
    stageSlug === 'animal' ? colors.green : colors.purple};
  text-decoration: underline;
`;
