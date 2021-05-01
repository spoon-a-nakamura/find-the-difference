import styled from '@emotion/styled'
import Link from 'next/link'
import { colors } from '../components/Colors'

export default function BackToHome({ onClickBackToHome, onClickCancel }) {
  return (
    <>
      <Modal isOpen={onClickBackToHome}>
        <ModalContainer isOpen={onClickBackToHome}>
          <CancelIcon
            src='/images/stage/button_close.svg'
            alt='閉じる'
            onClick={onClickCancel}
          />
          <Title>ホームに戻りますか？</Title>
          <ButtonWrapper>
            <CancelButton onClick={onClickCancel}>いいえ</CancelButton>
            <Link href='/' prefetch={true}>
              <ApplyButton>はい</ApplyButton>
            </Link>
          </ButtonWrapper>
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
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: opacity;
  transition: opacity ease-in-out 0.5s;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  pointer-events: ${({ isOpen }) => (isOpen ? 'initial' : 'none')};
`
const ModalContainer = styled.div`
  background: url(/images/stage/bg_modal.svg) center / contain no-repeat;
  width: 80%;
  height: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 3;
  margin-bottom: 40px;
  will-change: opacity, transform;
  transition: opacity ease-in-out 0.5s 0.3s, transform ease-in-out 0.5s 0.3s;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transform: ${({ isOpen }) => (isOpen ? 'scale(1)' : 'scale(0)')};
`
const CancelIcon = styled.img`
  width: 44px;
  height: 44px;
  position: absolute;
  right: -10px;
  top: 10px;
`
const Title = styled.p`
  font-size: 20px;
`
const ButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
`
const CancelButton = styled.div`
  font-size: 14px;
  padding: 15px;
  width: 100px;
  border-radius: 100px;
  margin-right: 15px;
  color: ${colors.green};
  background: ${colors.paleGreen};
`
const ApplyButton = styled.a`
  font-size: 14px;
  padding: 15px;
  width: 100px;
  border-radius: 100px;
  color: ${colors.white};
  background: ${colors.green};
`
