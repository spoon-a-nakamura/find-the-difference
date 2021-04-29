import StageContents from '../../components/StageContents'
import Container from '../../components/Container'
import { questions } from '../../resources/questions'

const question = questions[1]
export default function Stage() {
  return (
    <Container>
      <StageContents question={question} />
    </Container>
  )
}
