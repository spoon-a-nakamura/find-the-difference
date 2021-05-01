import { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import StageHeader from './StageHeader'
import StageModal from './StageModal'
import BackToHome from './BackToHome'
import CountIcons from './CountIcons'
import { colors } from './Colors'
import { useRouter } from 'next/router'
import ProgressBar from '../components/ProgressBar'

export default function StageContents({ question }) {
  const {
    points,
    stageId,
    stageName,
    stageCategory,
    stageSlug,
    stageImageA,
    stageImageB,
    nextId,
  } = question

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

  // リトライの為のState定義
  const [refresh, setRefresh] = useState(0)

  // カウントダウンタイマー
  const defaultTimer = 100
  const [countTimer, setCountTimer] = useState(defaultTimer)
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
  }, [refresh])

  // リトライする為の関数
  const resetAllStates = () => {
    setIsCleared(false)
    setIsFailed(false)
    setCheckedState([...Array(points.length)].fill(false))
    setCountTimer(defaultTimer)
    setRefresh((val) => val + 1)
  }

  // 次ページに進むRouter
  const router = useRouter()
  const nextPage = () => router.push(`${nextId}`)

  // 次ページに進む関数
  const moveNextStage = () => {
    setIsCleared(false)
    setTimeout(() => {
      setIsFailed(false)
      setCheckedState([...Array(points.length)].fill(false))
      setCountTimer(defaultTimer)
      setRefresh((val) => val + 1)
      nextPage()
    }, 100)
  }

  const [isShowModal, setIsShowModal] = useState(false)
  const showModal = () => {
    setIsShowModal(true)
  }
  const hideModal = () => {
    setIsShowModal(false)
  }
  return (
    <>
      <BackToHome onClickBackToHome={isShowModal} onClickCancel={hideModal} />
      <StageModal
        isCleared={isCleared}
        isFailed={isFailed}
        stageId={stageId}
        stageCategory={stageCategory}
        onClickRetry={resetAllStates}
        onClickNext={moveNextStage}
        onClickShowModal={showModal}
      />
      <StageContainer>
        <StageHeader
          stageId={stageId}
          stageCategory={stageCategory}
          stageName={stageName}
          countTimer={countTimer}
          onClickShowModal={showModal}
        />
        <StageWrapper>
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
              <Art src={stageImageA} />
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
              <Art src={stageImageB} />
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
          <ProgressBar countTimer={countTimer} />
          <CountIcons states={currentIconState} />
        </StageWrapper>
      </StageContainer>
    </>
  )
}

const StageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 10px);
`
const StageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
const CanvasWrapper = styled.div`
  position: relative;
  width: 85%;
  background: ${colors.white};
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.05);
`
const CanvasA = styled.div`
  position: relative;
`
const CanvasB = styled.div`
  position: relative;
`
const Art = styled.img`
  width: 100%;
  height: 100%;
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
    border: 5px solid ${colors.yellow};
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
