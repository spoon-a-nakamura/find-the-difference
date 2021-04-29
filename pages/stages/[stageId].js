import Container from '../../components/Container'
import StageContents from '../../components/StageContents'
import { questions } from '../../resources/questions'

const question = questions[0]
const StagePage = () => (
  <Container>
    <StageContents question={question} />
  </Container>
)
export default StagePage

export const getStaticPaths = async () => {
  return {
    paths: questions.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      question: questions.find(({ slug }) => slug === params.slug),
    },
  }
}
