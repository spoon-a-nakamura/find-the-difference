import styled from '@emotion/styled'
import Link from 'next/link'
// import Image from 'next/image'

export default function StartMagic() {
  return (
    <>
      <Title>ミッション</Title>
      <Link href='/'>
        <Descriptions>
          <StageName>まほうステージ 01</StageName>
          <Number>準備中</Number>
          <Span>under construction</Span>
          {/* <ImageWrapper>
            <Image src='/images/common/mission.svg' width={270} height={89} />
          </ImageWrapper> */}
        </Descriptions>
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
// const ImageWrapper = styled.div`
//   min-width: 270px;
//   margin: 25px 0;
// `
