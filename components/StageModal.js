import styled from '@emotion/styled'
import Link from 'next/link'
import { colors } from '../components/Colors'
import Character from '../components/Character'

export default function StageModal({
  isCleared,
  isFailed,
  stageId,
  stageCategory,
  onClickRetry,
  onClickNext,
}) {
  const eyeAnimateCleared = {
    x: [0, 5, -7, 8, 0],
    y: [10, 14, 13, 11, 10],
  }
  const eyeAnimateFailed = {
    x: [0, 5, -7, 8, 0],
    y: [-2, -6, -5, -3, -2],
  }
  const clearText = (
    <ClearText>
      <ClearText1>C</ClearText1>
      <ClearText2>L</ClearText2>
      <ClearText3>E</ClearText3>
      <ClearText4>A</ClearText4>
      <ClearText5>R</ClearText5>
      <ClearText6>!</ClearText6>
    </ClearText>
  )
  return (
    <>
      <Modal isOpen={isCleared || isFailed}>
        <CharacterWrapper isOpen={isCleared || isFailed}>
          <Character
            eyeAnimate={isCleared ? eyeAnimateCleared : eyeAnimateFailed}
          />
        </CharacterWrapper>
        <ModalContainer isCleared={isCleared} isOpen={isCleared || isFailed}>
          <StageName isCleared={isCleared}>
            {stageCategory}ステージ {stageId}
          </StageName>
          <Result isCleared={isCleared}>
            {isCleared ? clearText : 'GAME OVER'}
          </Result>
          <Button onClick={isCleared ? onClickNext : onClickRetry}>
            {isCleared ? '次のステージへ' : 'リトライ'}
          </Button>
          <Link href='/' prefetch={true}>
            <BackHome>HOMEに戻る</BackHome>
          </Link>
        </ModalContainer>
      </Modal>
    </>
  )
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  will-change: opacity;
  transition: opacity ease-in-out 0.5s;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  pointer-events: ${({ isOpen }) => (isOpen ? 'initial' : 'none')};
`
const ModalContainer = styled.div`
  background: url(/images/stage/bg_cleared.svg) center / contain no-repeat;
  background-image: ${({ isCleared }) =>
    isCleared
      ? 'url(/images/stage/bg_cleared.svg)'
      : 'url(/images/stage/bg_failed.svg)'};
  width: 100%;
  height: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 3;
  will-change: opacity, transform;
  transition: opacity ease-in-out 0.5s 0.3s, transform ease-in-out 0.5s 0.3s;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  margin-top: ${({ isCleared }) => (isCleared ? '-35px' : '-55px')};
  transform: ${({ isOpen }) => (isOpen ? 'scale(1)' : 'scale(0)')};
`
const CharacterWrapper = styled.div`
  margin-top: -280px;
  transform-origin: bottom;
  will-change: opacity, transform;
  transition: opacity ease-in-out 0s 1s, transform ease-in-out 1s 0.5s;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transform: ${({ isOpen }) =>
    isOpen ? 'scale(0.5) translateY(0)' : 'scale(0.5) translateY(300px)'};
`
const StageName = styled.p`
  margin-top: ${({ isCleared }) => (isCleared ? '80px' : '55px')};
  display: block;
  font-size: 16px;
`
const Result = styled.p`
  display: block;
  font-size: 38px;
  margin-top: 5px;
  color: ${({ isCleared }) => (isCleared ? colors.orange : colors.black)};
`
const ClearText = styled.span``
const ClearText1 = styled.span`
  color: ${colors.yellow};
`
const ClearText2 = styled.span`
  color: ${colors.orange};
`
const ClearText3 = styled.span`
  color: ${colors.green};
`
const ClearText4 = styled.span`
  color: ${colors.yellow};
`
const ClearText5 = styled.span`
  color: ${colors.orange};
`
const ClearText6 = styled.span`
  color: ${colors.green};
`
const Button = styled.a`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  padding: 15px 30px;
  background: ${colors.green};
  border-radius: 100px;
  margin-top: 20px;
`
const BackHome = styled.a`
  margin-top: 15px;
  font-size: 14px;
  color: ${colors.green};
  text-decoration: underline;
`
