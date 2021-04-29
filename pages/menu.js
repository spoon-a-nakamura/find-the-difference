import Link from 'next/link'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Container from '../components/Container'
import { colors } from '../components/Colors'

export default function Menu() {
  const eyeAnimate = {
    x: [0, 5, -7, 8, 0],
    y: [10, 14, 13, 11, 10],
  }
  const eyeTransition = {
    repeat: Infinity,
    repeatDelay: 1,
    type: 'tween',
    duration: 10,
  }
  const tagAnimateAnimal = {
    rotate: [0, 5, -2, 10, -3, 0],
  }
  const tagAnimateMagic = {
    rotate: [0, 10, 3, 4, 0],
  }
  const tagTransition = {
    repeat: Infinity,
    repeatDelay: 1,
    type: 'tween',
    duration: 5,
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
          <Link href='animal'>
            <AnimalCard>
              <AnimalCardTag
                animate={tagAnimateAnimal}
                transition={tagTransition}
              />
              <AnimalCardCaption>ANIMAL</AnimalCardCaption>
            </AnimalCard>
          </Link>
          <Link href='magic'>
            <MagicCard>
              <MagicCardTag
                animate={tagAnimateMagic}
                transition={tagTransition}
              />
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
  background: url(/images/menu/heading_bg.svg) center top / contain no-repeat;
  width: 100%;
  height: 180px;
  position: absolute;
  top: 0px;
`
const TitleSub = styled.div`
  font-size: 16px;
  margin-top: 3vw;
`
const TitleMain = styled.div`
  font-size: 28px;
  margin-top: 5px;
`
const Face = styled.div`
  width: 268px;
  height: 308px;
  background: url(/images/common/face@2x.png) center / contain no-repeat;
  display: flex;
  justify-content: center;
  z-index: 2;
  position: relative;
  margin: 10vw auto 0;
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
  background: url(/images/menu/course_bg_head.svg) center top / contain
    no-repeat;
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;
  margin-top: -15vw;
  padding-top: 40px;
`
const CourseTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-top: -5px;
  padding: 20px 20px 50px;
  background: #fff;
`
const AnimalCard = styled.div`
  background: url(/images/menu/img_animal@2x.png) center / contain no-repeat;
  width: 163px;
  height: 275px;
  position: relative;
  display: flex;
  justify-content: center;
`
const AnimalCardTag = styled(motion.div)`
  background: url(/images/menu/tag_animal.svg) center / contain no-repeat;
  width: 156px;
  height: 61px;
  position: absolute;
  left: -20px;
  top: -5px;
`
const AnimalCardCaption = styled.p`
  display: block;
  font-size: 12px;
  margin-top: 10px;
  position: absolute;
  bottom: -20px;
  color: ${colors.orange};
`
const MagicCard = styled.div`
  background: url(/images/menu/img_magic@2x.png) center / contain no-repeat;
  width: 163px;
  height: 275px;
  position: relative;
  display: flex;
  justify-content: center;
`
const MagicCardTag = styled(motion.div)`
  background: url(/images/menu/tag_magic.svg) center / contain no-repeat;
  width: 156px;
  height: 61px;
  position: absolute;
  left: -20px;
  top: -5px;
`
const MagicCardCaption = styled.p`
  display: block;
  font-size: 12px;
  margin-top: 10px;
  position: absolute;
  bottom: -20px;
  color: ${colors.orange};
`
