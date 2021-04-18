import styled from '@emotion/styled'
import Image from 'next/image'

export default function CountIcons() {
  const onFlag = (
    <Image
      src='/images/common/icon-count-on.svg'
      alt='on'
      width={40}
      height={40}
    />
  )
  const offFlag = (
    <Image
      src='/images/common/icon-count-off.svg'
      alt='on'
      width={40}
      height={40}
    />
  )
  const countFlags = [onFlag, offFlag, offFlag]
  return (
    <IconsWrapper>
      <Icons>
        {countFlags.map((countFlag) => (
          <Icon>{countFlag}</Icon>
        ))}
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
