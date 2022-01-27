import styled from '@emotion/styled';
import Link from 'next/link';
import { colors } from '../components/Colors';

export default function BackToHome({
  onClickBackToHome,
  onClickCancel,
  stageSlug,
}) {
  const cancelIconSrc =
    stageSlug === 'animal'
      ? '/images/stage/button_close_01.svg'
      : '/images/stage/button_close_02.svg';
  return (
    <>
      <Modal isOpen={onClickBackToHome}>
        <ModalContainer isOpen={onClickBackToHome}>
          <CancelIcon
            src={cancelIconSrc}
            alt="閉じる"
            onClick={onClickCancel}
          />
          <Title>ホームに戻りますか？</Title>
          <ButtonWrapper>
            <CancelButton onClick={onClickCancel} stageSlug={stageSlug}>
              いいえ
            </CancelButton>
            <Link href="/">
              <ApplyButton stageSlug={stageSlug}>はい</ApplyButton>
            </Link>
          </ButtonWrapper>
        </ModalContainer>
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
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: opacity;
  transition: opacity ease-in-out 0.5s;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  pointer-events: ${({ isOpen }) => (isOpen ? 'initial' : 'none')};
`;
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
  margin-bottom: 4rem;
  will-change: opacity, transform;
  transition: all ease-in-out 0.5s 0.3s;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transform: ${({ isOpen }) => (isOpen ? 'scale(1)' : 'scale(0)')};
`;
const CancelIcon = styled.img`
  width: 4.4rem;
  height: 4.4rem;
  position: absolute;
  right: -1rem;
  top: 1rem;
`;
const Title = styled.p`
  font-size: 2rem;
`;
const ButtonWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
`;
const CancelButton = styled.div`
  font-size: 1.4rem;
  padding: 1.5rem;
  width: 10rem;
  border-radius: 10rem;
  margin-right: 1.5rem;
  color: ${({ stageSlug }) =>
    stageSlug === 'animal' ? colors.green : colors.purple};
  background: ${({ stageSlug }) =>
    stageSlug === 'animal' ? colors.paleGreen : colors.lightPurple};
`;
const ApplyButton = styled.a`
  font-size: 1.4rem;
  padding: 1.5rem;
  width: 10rem;
  border-radius: 10rem;
  color: ${colors.white};
  background: ${({ stageSlug }) =>
    stageSlug === 'animal' ? colors.green : colors.purple};
`;
