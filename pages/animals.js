import { useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Header from '../components/StageHeader'
import CountIcons from '../components/CountIcons'
import CountDownTimer from '../components/CountDownTimer'

const points = [
  {
    top: 20,
    left: 42,
  },
  {
    top: 50,
    left: 13,
  },
  {
    top: 60,
    left: 73,
  },
]

export default function Animals() {
  const [checkedState, setCheckedState] = useState(
    [...Array(points.length)].fill(false)
  )
  function showCorrect(index) {
    setCheckedState((currentState) => {
      return currentState.map((state, innerIndex) =>
        index === innerIndex ? !state : state
      )
    })
  }
  return (
    <>
      <Header title='どうぶつステージ  01' name='ねこ' />
      <CanvasWrapper>
        <CanvasA>
          <Image src='/images/animals/01a@3x.png' width='332' height='249' />
          {points.map(({ top, left }, index) => (
            <CorrectPoint
              key={index}
              top={top}
              left={left}
              clicked={checkedState[index]}
              onClick={() => showCorrect(index)}
            />
          ))}
        </CanvasA>
        <CanvasB>
          <Image src='/images/animals/01b@3x.png' width='332' height='249' />
          {points.map(({ top, left }, index) => (
            <CorrectPoint
              key={index}
              top={top}
              left={left}
              clicked={checkedState[index]}
              onClick={() => showCorrect(index)}
            />
          ))}
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

const CorrectPoint = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: ${({ top }) => `${top}%`};
  left: ${({ left }) => `${left}%`};
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 5px solid #ead113;
    transition: all ease-in-out 0.3s;
    will-change: animation;
    animation: bound forwards 0.6s ease-in-out;
  }
  ${({ clicked }) =>
    !clicked &&
    css`
      &::before {
        opacity: 0;
        transform: scale(0.2) translateY(20px);
        animation: none;
      }
    `}
  @keyframes bound {
    0% {
      opacity: 0;
      transform: scale(0.2) translateY(20px);
    }
    50% {
      opacity: 1;
      transform: scale(1.2) translateY(-10px);
    }
    80% {
      opacity: 1;
      transform: scale(0.9) translateY(5px);
    }
    90% {
      opacity: 1;
      transform: scale(1.1) translateY(-5px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0px);
    }
  }
`
