import styled from '@emotion/styled'
import Link from 'next/link'

export default function StartAnimals() {
  return (
    <>
      <Title>ミッション</Title>
      <Link href='animals'>
        <Descriptions>
          <StageName>どうぶつステージ 01</StageName>
          <Number>４個</Number>
          <Span>の違うところを探してください。</Span>
        </Descriptions>
      </Link>
    </>
  )
}

const Title = styled.h1``
const Descriptions = styled.div``
const StageName = styled.h2``
const Number = styled.p``
const Span = styled.p``
