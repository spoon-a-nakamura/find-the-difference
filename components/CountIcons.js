import styled from '@emotion/styled'
import Image from 'next/image'

export default function CountIcons({ states }) {
  const onFlag = (
    <Image
      src='/images/stage/icon-count-on.svg'
      alt='on'
      width={40}
      height={40}
    />
  )
  const offFlag = (
    <Image
      src='/images/stage/icon-count-off.svg'
      alt='off'
      width={40}
      height={40}
    />
  )
  const countFlags = states.map((state) => (state ? onFlag : offFlag))
  return (
    <IconsWrapper>
      <Icons>
        <Icon>{countFlags}</Icon>
      </Icons>
    </IconsWrapper>
  )
}
const IconsWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -20px;
  margin-top: auto;
`
const Icons = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
`
const Icon = styled.li``
