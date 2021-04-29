import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'
import Splash from '../components/Splash'

const heavyFilePaths = []

async function waitHeavyFileLoading() {
  if (heavyFilePaths.length === 0) {
    return
  }

  const promises = heavyFilePaths.map((path) => {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = resolve
      img.onerror = resolve
      img.src = path
    })
  })
  await Promise.all(promises)
}

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

function useWaitResourcesLoading(callback) {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    let isSubscribed = true
    Promise.all([waitHeavyFileLoading(), sleep(1500)]).then(() => {
      if (isSubscribed) {
        setIsLoaded(true)
      }
    })
    return () => {
      isSubscribed = false
    }
  }, [])

  return isLoaded
}

export default function Home() {
  const isLoaded = useWaitResourcesLoading()

  return (
    <>
      <Splash isShow={!isLoaded} />

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
        <Link href='start-animals'>
          <Card>
            <CardTitle>
              どうぶつ<CardTitleMini>コース</CardTitleMini>
            </CardTitle>
          </Card>
        </Link>

        <Link href='start-magic'>
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

const Title = styled.h1`
  margin: 40px 0 70px;
`

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 50vh;
  width: 100%;
  margin-bottom: auto;
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
  margin-top: 10px;
`
