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

const Title = styled.div``

const Symbol = styled.div`
  width: 100%;
`

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 44px);
  z-index: 99999;
  background: #fff;
  transition: all 0.5s ease-in-out;
  &[data-is-show='false'] {
    opacity: 0;
    pointer-events: none;
  }
`
