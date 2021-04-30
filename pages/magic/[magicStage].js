import StageContents from '../../components/StageContents'
import Container from '../../components/Container'
import { questions } from '../../resources/magic'

export default function Stage({ question }) {
  return (
    <Container>
      <StageContents question={question} />
    </Container>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: questions.map(({ stageId }) => ({
      params: {
        magicStage: `${stageId}`,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const stageIdString = params.magicStage
  const question = questions.find(
    ({ stageId }) => stageId === parseInt(stageIdString, 10)
  )
  return {
    props: {
      question,
    },
  }
}
