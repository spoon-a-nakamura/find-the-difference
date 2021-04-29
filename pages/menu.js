import Link from 'next/link'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Container from '../components/Container'
import { colors } from '../components/Colors'

export default function Menu() {
  const eyeAnimate = {
    x: [0, 5, -10, 10, 0],
    y: [0, 1, 1, -1, 0],
  }
  const eyeTransition = {
    repeat: Infinity,
    repeatDelay: 1,
    type: 'tween',
    duration: 10,
  }
  const startAnimate = {
    scale: [1, 0.95, 1.05, 0.98, 1.01, 0.99, 1],
  }
  const startTransition = {
    repeat: Infinity,
    repeatDelay: 1,
    type: 'tween',
    duration: 2,
  }
  return (
    <Container>
      <Title>
        <TitleSub>スタジオスプーンの</TitleSub>
        <TitleMain>まちがい探し</TitleMain>
      </Title>
      <Face>
        <LeftEye animate={eyeAnimate} transition={eyeTransition} />
        <RightEye animate={eyeAnimate} transition={eyeTransition} />
      </Face>
      <Course>
        <CourseTitleWrapper>
          <CourseTitle>
            <CourseTitleOrange>どちらか</CourseTitleOrange>
            <CourseTitleBlack>の</CourseTitleBlack>
            <CourseTitleYellow>コース</CourseTitleYellow>
            <CourseTitleBlack>を</CourseTitleBlack>
            <CourseTitleGreen>選んでね</CourseTitleGreen>
          </CourseTitle>
        </CourseTitleWrapper>
        <Cards>
          <Link href='course-animals'>
            <AnimalCard>
              <AnimalCardTag />
              <AnimalCardCaption>ANIMAL</AnimalCardCaption>
            </AnimalCard>
          </Link>

          <Link href='course-magic'>
            <MagicCard>
              <MagicCardTag />
              <MagicCardCaption>MAGIC</MagicCardCaption>
            </MagicCard>
          </Link>
        </Cards>
      </Course>
    </Container>
  )
}

const Title = styled.div`
  color: #fff;
  text-align: center;
  background: url(/images/common/heading_bg.svg) center -70px / cover no-repeat;
  width: 100%;
  height: 180px;
  position: absolute;
  top: 0px;
`
const TitleSub = styled.div`
  font-size: 16px;
  margin-top: 17px;
  margin-bottom: 5px;
`
const TitleMain = styled.div`
  font-size: 28px;
`
const Face = styled.div`
  width: 268px;
  height: 308px;
  background: url(/images/common/face@2x.png) center / contain no-repeat;
  display: flex;
  justify-content: center;
  position: relative;
  top: 40px;
  z-index: 2;
`
const LeftEye = styled(motion.div)`
  width: 40px;
  height: 40px;
  background: url(/images/common/left_eye@2x.png) center / contain no-repeat;
  margin-right: 30px;
  margin-top: 115px;
  position: relative;
`
const RightEye = styled(motion.div)`
  width: 40px;
  height: 40px;
  background: url(/images/common/left_eye@2x.png) center / contain no-repeat;
  margin-top: 115px;
  position: relative;
`
const Course = styled.div`
  background: url(/images/common/course_bg.svg) center top / cover no-repeat;
  width: 100%;
  min-height: 300px;
  height: auto;
  top: -15px;
  position: relative;
  z-index: 1;
`
const CourseTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  &::before {
    content: '';
    width: 18px;
    height: 18px;
    border-radius: 18px;
    display: block;
    background: #eee;
    margin-right: 10px;
  }
  &::after {
    content: '';
    width: 18px;
    height: 18px;
    border-radius: 18px;
    display: block;
    background: #eee;
    margin-left: 10px;
  }
`
const CourseTitle = styled.p`
  font-size: 18px;
  color: ${colors.black};
`
const CourseTitleBlack = styled.span`
  color: ${colors.black};
`
const CourseTitleOrange = styled.span`
  color: ${colors.orange};
`
const CourseTitleYellow = styled.span`
  color: ${colors.yellow};
`
const CourseTitleGreen = styled.span`
  color: ${colors.green};
`
const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`
const AnimalCard = styled.div`
  background: url(/images/common/img_animal@2x.png) center / contain no-repeat;
  width: 163px;
  height: 275px;
  position: relative;
  display: flex;
  justify-content: center;
`
const AnimalCardTag = styled.div`
  background: url(/images/common/tag_animal.svg) center / contain no-repeat;
  width: 156px;
  height: 61px;
  position: absolute;
  left: -20px;
  top: -5px;
`
const AnimalCardCaption = styled.p`
  display: block;
  font-size: 14px;
  margin-top: 10px;
  position: absolute;
  bottom: -20px;
  color: ${colors.orange};
`
const MagicCard = styled.div`
  background: url(/images/common/img_magic@2x.png) center / contain no-repeat;
  width: 163px;
  height: 275px;
  position: relative;
  display: flex;
  justify-content: center;
`
const MagicCardTag = styled.div`
  background: url(/images/common/tag_magic.svg) center / contain no-repeat;
  width: 156px;
  height: 61px;
  position: absolute;
  left: -20px;
  top: -5px;
`
const MagicCardCaption = styled.p`
  display: block;
  font-size: 14px;
  margin-top: 10px;
  position: absolute;
  bottom: -20px;
  color: ${colors.orange};
`
