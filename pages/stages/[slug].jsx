import Stage from './Stage'
import { questions } from '../resources/question'

// jsonの読み込み方は、fsを学んで作る。
// https://github.com/studio-spoon/studio-spoon.co.jp/blob/main/src/lib/resources/works.ts

const StageSlug = ({ question }) => <Stage question={question} />

export default StageSlug

// ちなみにpathsの中身はこのようになっている
// [{ params: {slug: 'hello'} }, { params: {slug: 'world'} }]

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
