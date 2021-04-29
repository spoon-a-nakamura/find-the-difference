import { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import StageHeader from './StageHeader'
import StageModal from './StageModal'
import CountIcons from './CountIcons'
import { points } from '../resources/question'

export default function Stage() {
  // クリア / ゲームオーバー判定のState定義
  const [isCleared, setIsCleared] = useState(false)
  const [isFailed, setIsFailed] = useState(false)

  // 正解判定のState定義
  const [checkedState, setCheckedState] = useState(
    [...Array(points.length)].fill(false)
  )

  // 正解した数を数える
  const correctedArray = checkedState.filter((value) => value)

  // 正解した数分、正解アイコンを点灯させるState定義
  const currentIconState = [
    ...correctedArray,
    ...[...Array(checkedState.length - correctedArray.length)].fill(false),
  ]

  // 絵に対しての正解判定
  function showCorrect(index, checkedState) {
    // １度正解した場所はもう反応させない
    if (!checkedState) {
      // 正解した箇所を両方の絵に同期する
      setCheckedState((currentState) => {
        const newCheckedState = currentState.map((state, innerIndex) =>
          index === innerIndex ? !state : state
        )
        // すべて正解した場合の処理
        if (newCheckedState.every((value) => value)) {
          setTimeout(() => {
            setIsCleared(true)
          }, 100)
        }
        return newCheckedState
      })
      // 正解したらボーナスで10秒アップ（タップすると5秒ひかれる分を加算して15と記載）
      setCountTimer((count) => {
        return count + 15
      })
    }
  }

  // カウントダウンタイマー
  const [countTimer, setCountTimer] = useState(60)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountTimer((count) => {
        const downCount = count - 1
        if (downCount < 0) {
          setIsFailed(true)
          clearInterval(intervalId)
          return (count = 0)
        }
        return downCount
      })
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <>
      <StageModal isCleared={isCleared} isFailed={isFailed} />
      <StageHeader title='どうぶつステージ 01' name='ねこ' />
      残り時間：{countTimer}
      <CanvasWrapper
        onClick={() => {
          setCountTimer((count) => {
            if (count < 5) {
              setIsFailed(true)
              return (count = 0)
            } else {
              return count - 5
            }
          })
        }}
      >
        <CanvasA>
          <Image src='/images/animals/01a@3x.png' width='332' height='249' />
          {points.map(({ top, left }, index) => (
            <CorrectPoint
              key={index}
              top={top}
              left={left}
              clicked={checkedState[index]}
              onClick={() => showCorrect(index, checkedState[index])}
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
              onClick={() => showCorrect(index, checkedState[index])}
            />
          ))}
        </CanvasB>
      </CanvasWrapper>
      <CountIcons states={currentIconState} />
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
    pointer-events: none;
  }
  ${({ clicked }) =>
    !clicked &&
    css`
      &::before {
        opacity: 0;
        transform: scale(0.2) translateY(20px);
        animation: none;
        pointer-events: initial;
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
