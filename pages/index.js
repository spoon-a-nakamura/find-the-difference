import styled from '@emotion/styled'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>まちがい探し | スタジオスプーン</title>
        <link rel='icon' href='/images/common/favicon.ico' />
      </Head>

      <Main>
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
          <Link href=''>
            <Card>
              <CardTitle>
                どうぶつ<span>コース</span>
              </CardTitle>
            </Card>
          </Link>

          <Link href=''>
            <Card>
              <CardTitle>
                まほう<span>コース</span>
              </CardTitle>
            </Card>
          </Link>
        </CardWrapper>
      </Main>

      <Footer>
        <a
          href='https://studio-spoon.co.jp'
          target='_blank'
          rel='noopener noreferrer'
        >
          &copy; STUDIO SPOON.inc
        </a>
      </Footer>
    </Container>
  )
}
const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 95%;
`
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

const Footer = styled.footer`
  width: 100%;
  padding: 10px;
  font-size: 12px;
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Card = styled.div`
  background: rgba(#e2e2e2, 0.3);
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
  span {
    display: block;
    font-size: 14px;
  }
`
