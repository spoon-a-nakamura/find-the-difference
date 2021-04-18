import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Header from '../components/StageHeader'
import CountIcons from '../components/CountIcons'
import CountDownTimer from '../components/CountDownTimer'

export default function Animals() {
  function showCorrect(element) {
    element.target.setAttribute('data-is-show', 'true')
  }
  return (
    <>
      <Header title='どうぶつステージ  01' name='いぬ' />
      <CanvasWrapper>
        <CanvasA>
          <Image src='/images/animals/01a@3x.png' width='332' height='249' />
          <CorrectPoint01 onClick={showCorrect} data-is-show='false' />
          <CorrectPoint02 onClick={showCorrect} data-is-show='false' />
          <CorrectPoint03 onClick={showCorrect} data-is-show='false' />
        </CanvasA>
        <CanvasB>
          <Image src='/images/animals/01b@3x.png' width='332' height='249' />
          <CorrectPoint01 onClick={showCorrect} data-is-show='false' />
          <CorrectPoint02 onClick={showCorrect} data-is-show='false' />
          <CorrectPoint03 onClick={showCorrect} data-is-show='false' />
        </CanvasB>
      </CanvasWrapper>
      <CountDownTimer />
      <CountIcons />
    </>
  )
}

const CanvasWrapper = styled.div`
  position: relative;
`
const CanvasA = styled.div`
  position: relative;
`
const CanvasB = styled.div`
  position: relative;
`
const pointStyle = css`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  border: 5px solid #ead113;
  transition: all ease 0.3s;
  opacity: 1;
  transform: scale(1) translateY(0);
  &[data-is-show='false'] {
    opacity: 0;
    transform: scale(0.2);
  }
`
const CorrectPoint01 = styled.div`
  ${pointStyle}
  top: 20%;
  left: 42%;
`
const CorrectPoint02 = styled.div`
  ${pointStyle}
  top: 50%;
  left: 13%;
`
const CorrectPoint03 = styled.div`
  ${pointStyle}
  top: 60%;
  left: 73%;
`
