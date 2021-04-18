import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'

export default function StartAnimals() {
  return (
    <>
      <Title>ミッション</Title>
      <Descriptions>
        <StageName>どうぶつステージ 01</StageName>
        <Number>４個</Number>
        <Span>の違うところを探してください。</Span>
        <ImageWrapper>
          <Image src='/images/common/mission.svg' width={270} height={89} />
        </ImageWrapper>
      </Descriptions>
      <Link href='animals'>
        <StartButton>START</StartButton>
      </Link>
    </>
  )
}

const Title = styled.h1`
  background: rgba(226, 226, 226, 0.3);
  padding: 20px 30px;
  font-size: 20px;
`
const Descriptions = styled.div`
  background: rgba(226, 226, 226, 0.3);
  width: 95%;
`
const StageName = styled.h2`
  font-size: 16px;
  margin-top: 30px;
`
const Number = styled.p`
  font-size: 30px;
  margin: 15px 0;
`
const Span = styled.p`
  font-size: 14px;
`
const ImageWrapper = styled.div`
  min-width: 270px;
  margin: 25px 0;
`
const StartButton = styled.div`
  padding: 20px;
  width: 95%;
  margin-top: 20px;
  background: #333;
  color: #fff;
  border-radius: 100px;
`
