import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'

export default function Home() {
  return (
    <>
      <Title>
        <Image
          src='/images/common/logo.svg'
          width={212}
          height={46.18}
          alt='スタジオスプーンの間違い探し'
        />
      </Title>

      <Description>どちらかのコースを選んでね。</Description>

      <CardWrapper>
        <Link href='/start-animals'>
          <Card>
            <CardTitle>
              どうぶつ<CardTitleMini>コース</CardTitleMini>
            </CardTitle>
          </Card>
        </Link>

        <Link href='/start-magic'>
          <Card>
            <CardTitle>
              まほう<CardTitleMini>コース</CardTitleMini>
            </CardTitle>
          </Card>
        </Link>
      </CardWrapper>
    </>
  )
}

const Title = styled.h1``

const Description = styled.p`
  font-size: 16px;
`

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 50vh;
  width: 100%;
`

const Card = styled.div`
  background: rgba(226, 226, 226, 0.3);
  width: 48%;
  display: flex;
  text-align: center;
  justify-content: center;
`

const CardTitle = styled.h2`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CardTitleMini = styled.span`
  display: block;
  font-size: 14px;
`
