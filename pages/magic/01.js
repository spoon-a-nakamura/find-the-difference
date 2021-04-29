import StageContents from '../../components/StageContents'
import Container from '../../components/Container'
import { questions } from '../../resources/magic'

const question = questions[0]
export default function Stage() {
  return (
    <Container>
      <StageContents question={question} />
    </Container>
  )
}
