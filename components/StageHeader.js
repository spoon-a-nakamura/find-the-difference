import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'

export default function StageHeader({ title, name }) {
  return (
    <StageHeaderWrapper>
      <HomeButton>
        <Link href='/'>
          <Image
            src='/images/common/home.svg'
            alt='home'
            width={30}
            height={41.65}
          />
        </Link>
      </HomeButton>
      <StageHeaderTitle>
        <Title>{title}</Title>
        <Name>
          <StageName>{name}</StageName>
          のまちがい探し
        </Name>
      </StageHeaderTitle>
    </StageHeaderWrapper>
  )
}

const StageHeaderWrapper = styled.header`
  width: 100%;
  padding: 20px 10px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: auto;
`
const HomeButton = styled.div`
  margin-right: auto;
`
const StageHeaderTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
`
const Title = styled.span`
  font-size: 12px;
  display: block;
  margin-bottom: 5px;
`
const Name = styled.span`
  font-size: 14px;
`
const StageName = styled.span`
  font-size: 20px;
  margin-right: 6px;
`
