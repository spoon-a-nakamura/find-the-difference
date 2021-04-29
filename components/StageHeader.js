import styled from '@emotion/styled'
import Link from 'next/link'

export default function StageHeader({ title, name }) {
  return (
    <StageHeaderWrapper>
      <Link href='/'>
        <HomeButton src='/images/stage/button_home.svg' alt='homeに戻る' />
      </Link>
      <StageHeaderTitle>
        <StageTitle>{title}</StageTitle>
        <StageName>{name}</StageName>
      </StageHeaderTitle>
    </StageHeaderWrapper>
  )
}

const StageHeaderWrapper = styled.header`
  width: 100%;
  height: 77px;
  padding: 20px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: auto;
  background: url(/images/stage/stage_heading.svg) center / cover no-repeat;
  position: relative;
`
const HomeButton = styled.img`
  margin-right: auto;
  position: relative;
  top: -7px;
`
const StageHeaderTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #fff;
  width: 100%;
  position: relative;
  top: -10px;
`
const StageTitle = styled.span`
  font-size: 12px;
  display: block;
`
const StageName = styled.span`
  margin-top: 5px;
  font-size: 20px;
`
