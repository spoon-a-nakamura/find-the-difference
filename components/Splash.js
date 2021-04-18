import styled from '@emotion/styled'
import Image from 'next/image'

export default function Splash({ isShow }) {
  return (
    <Wrapper data-is-show={isShow}>
      <Title>
        <Image
          src='/images/common/logo.svg'
          alt='スタジオスプーンの間違い探し'
          width={270}
          height={66.74}
        />
      </Title>
      <Symbol>
        <Image src='/images/common/main-icon.svg' width={270} height={270} />
      </Symbol>
    </Wrapper>
  )
}

const Title = styled.h1``

const Symbol = styled.div`
  width: 100%;
`

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  background: #fff;
  transition: opacity 0.2s ease-in-out;
  &[data-is-show='false'] {
    opacity: 0;
    pointer-events: none;
  }
`
