import styled from '@emotion/styled'
import Image from 'next/image'
import Header from '../components/StageHeader'
import CountIcons from '../components/CountIcons'
import CountDownTimer from '../components/CountDownTimer'

export default function Animals() {
  return (
    <>
      <Header title='どうぶつステージ  01' name='いぬ' />
      <CanvasWrapper>
        <CanvasA>
          <Image src='/images/animals/01a@3x.png' width='332' height='249' />
        </CanvasA>
        <CanvasB>
          <Image src='/images/animals/01b@3x.png' width='332' height='249' />
        </CanvasB>
      </CanvasWrapper>
      <CountDownTimer />
      <CountIcons />
    </>
  )
}

const StageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`
const CanvasWrapper = styled.div``
const CanvasA = styled.div``
const CanvasB = styled.div``
