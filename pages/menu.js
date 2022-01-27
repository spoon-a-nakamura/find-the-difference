import Link from 'next/link';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import { colors } from '../components/Colors';
import Character from '../components/Character';

export default function Menu() {
  const eyeAnimate = {
    x: [0, 5, -7, 8, 0],
    y: [10, 14, 13, 11, 10],
  };
  const tagAnimateAnimal = {
    rotate: [0, 5, -2, 10, -3, 0],
  };
  const tagAnimateMagic = {
    rotate: [0, 10, 3, 4, 0],
  };
  const tagTransition = {
    repeat: Infinity,
    repeatDelay: 1,
    type: 'tween',
    duration: 5,
  };
  const size = {
    scale: 0.8,
    translateY: '-4.0rem',
  };
  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>
            <TitleSub>スタジオスプーンの</TitleSub>
            <TitleMain>まちがい探し</TitleMain>
          </Title>
          <CharacterWrapper>
            <Character eyeAnimate={eyeAnimate} size={size} />
          </CharacterWrapper>
        </Header>
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
            <Link href="/animal" passHref>
              <AnimalCard>
                <AnimalCardTag
                  animate={tagAnimateAnimal}
                  transition={tagTransition}
                />
                <AnimalCardCaption>ANIMAL</AnimalCardCaption>
              </AnimalCard>
            </Link>
            <Link href="/magic" passHref>
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
      </Wrapper>
    </Container>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.div`
  flex-grow: 0;
`;

const CharacterWrapper = styled.div`
  margin: -5.8rem auto -16rem;
`;

const Title = styled.div`
  color: ${colors.white};
  text-align: center;
  background: url(/images/menu/heading_bg.svg) center top / contain no-repeat;
  width: 100%;
  height: 10rem;
  transition: all ease 0.5s;
  padding-top: 1.5rem;
`;
const TitleSub = styled.div`
  font-size: 1.6rem;
`;
const TitleMain = styled.div`
  font-size: 2.8rem;
  margin-top: 0.5rem;
`;
const Course = styled.div`
  background: url(/images/menu/course_bg_head.svg) center top / contain
    no-repeat;
  width: 100%;
  position: relative;
  z-index: 1;
  padding-top: 4rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
const CourseTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 1.8rem;
    display: block;
    background: #eee;
    margin-right: 1rem;
  }
  &::after {
    content: '';
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 1.8rem;
    display: block;
    background: #eee;
    margin-left: 1rem;
  }
`;
const CourseTitle = styled.p`
  font-size: 1.8rem;
  color: ${colors.black};
`;
const CourseTitleBlack = styled.span`
  color: ${colors.black};
`;
const CourseTitleOrange = styled.span`
  color: ${colors.orange};
`;
const CourseTitleYellow = styled.span`
  color: ${colors.yellow};
`;
const CourseTitleGreen = styled.span`
  color: ${colors.green};
`;
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 2rem 2rem 6rem;
  background: ${colors.white};
  flex-grow: 1;
`;

const AnimalCard = styled.div`
  background: url(/images/menu/img_animal@2x.png) center / contain no-repeat;
  width: 16.3rem;
  height: 27.5rem;
  position: relative;
  display: flex;
  justify-content: center;
`;
const AnimalCardTag = styled(motion.div)`
  background: url(/images/menu/tag_animal.svg) center / contain no-repeat;
  width: 15.6rem;
  height: 6.1rem;
  position: absolute;
  left: -2rem;
  top: -0.5rem;
`;
const AnimalCardCaption = styled.p`
  display: block;
  font-size: 1.2rem;
  margin-top: 1rem;
  position: absolute;
  bottom: -2rem;
  color: ${colors.orange};
`;
const MagicCard = styled.div`
  background: url(/images/menu/img_magic@2x.png) center / contain no-repeat;
  width: 16.3rem;
  height: 27.5rem;
  position: relative;
  display: flex;
  justify-content: center;
`;
const MagicCardTag = styled(motion.div)`
  background: url(/images/menu/tag_magic.svg) center / contain no-repeat;
  width: 15.6rem;
  height: 6.1rem;
  position: absolute;
  left: -2rem;
  top: -0.5rem;
`;
const MagicCardCaption = styled.p`
  display: block;
  font-size: 1.2rem;
  margin-top: 1rem;
  position: absolute;
  bottom: -2rem;
  color: ${colors.orange};
`;
